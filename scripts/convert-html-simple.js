#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const designDir = 'C:\\Users\\jdill\\AppData\\Local\\Temp\\design-extracted\\system-kc\\project';
const appDir = path.join(__dirname, '..', 'app');

function extractTitle(html) {
  const match = html.match(/<title>([^<]+)<\/title>/);
  return match ? match[1].replace(' — ', ' | ') : 'Page';
}

function extractMetaDescription(html) {
  const match = html.match(/<meta name="description" content="([^"]+)"/);
  return match ? match[1] : '';
}

function extractBody(html) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  return match ? match[1] : '';
}

function extractHeadStyles(html) {
  // Pull out any <style> blocks in the <head>
  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/);
  if (!headMatch) return '';
  const styles = [];
  const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = styleRe.exec(headMatch[1])) !== null) {
    styles.push(`<style>${m[1]}</style>`);
  }
  return styles.join('\n');
}

function escapeJsString(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$')
    .replace(/'/g, "\\'");
}

function cleanHtml(html) {
  // Remove nav and footer (layout.jsx provides these)
  html = html.replace(/<nav[^>]*class="nav"[\s\S]*?<\/nav>/g, '');
  html = html.replace(/<footer[^>]*class="foot"[\s\S]*?<\/footer>/g, '');
  // Remove design-tool artifacts (tweaks panel, babel scripts)
  html = html.replace(/<script[^>]*tweaks-panel[^>]*><\/script>/g, '');
  html = html.replace(/<script[^>]*text\/babel[^>]*>[\s\S]*?<\/script>/g, '');
  return html;
}

function createPageFile(htmlPath, route) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const title = extractTitle(html);
  const description = extractMetaDescription(html);
  const headStyles = extractHeadStyles(html);
  let body = extractBody(html);
  body = cleanHtml(body);
  if (headStyles) body = headStyles + '\n' + body;

  const escapedHtml = escapeJsString(body);

  const pageContent = `export const metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
};

export default function Page() {
  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{__html: \`${escapedHtml}\`}} />
  );
}
`;

  return pageContent;
}

function getRouteFromPath(filePath) {
  // Convert: services/index.html -> services
  // Convert: index.html -> (empty, becomes /)
  let route = filePath
    .replace(/\\/g, '/') // Convert backslashes
    .replace(/^\.\//, '') // Remove ./
    .replace(/(\/)?index\.html$/, ''); // Remove index.html with optional leading /

  return route || '/';
}

function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (file === 'index.html') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

const htmlFiles = findHtmlFiles(designDir);

htmlFiles.forEach(htmlPath => {
  let relPath = path.relative(designDir, htmlPath);
  let route = getRouteFromPath(relPath);

  let appPath;
  if (route === '/') {
    appPath = path.join(appDir, 'page.jsx');
  } else {
    appPath = path.join(appDir, route, 'page.jsx');
  }

  const dir = path.dirname(appPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const skip = [];
  const appPathNorm = appPath.replace(/\//g, '\\');

  if (skip.some(s => appPathNorm.includes(s))) {
    console.log(`⊘ ${route}`);
    return;
  }

  const pageContent = createPageFile(htmlPath, route);
  fs.writeFileSync(appPath, pageContent);
  console.log(`✓ ${route}`);
});

console.log(`\n✓ Done`);
