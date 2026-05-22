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

function htmlToJsx(html) {
  let jsx = html;

  // Remove nav and footer (layout.jsx provides these)
  jsx = jsx.replace(/<nav[^>]*class="nav"[\s\S]*?<\/nav>/g, '');
  jsx = jsx.replace(/<footer[^>]*class="foot"[\s\S]*?<\/footer>/g, '');

  // Convert HTML attributes to JSX
  jsx = jsx.replace(/\bclass=/g, 'className=');
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');

  // Self-closing tags: ensure they are `/>` not `/>`
  // First, normalize all self-closing tags
  jsx = jsx.replace(/<br\s*\/?\s*>/gi, '<br />');
  jsx = jsx.replace(/<hr\s*\/?\s*>/gi, '<hr />');

  // img, input, meta, link tags - be careful with attributes
  jsx = jsx.replace(/<(img|input|meta|link)\s+([^>]*?)\/?\s*>/gi, (match, tag, attrs) => {
    // Remove trailing slash if present
    attrs = attrs.replace(/\s*\/$/, '');
    return `<${tag} ${attrs} />`;
  });

  // Wrap in main tag if not already there
  if (!jsx.includes('<main')) {
    jsx = `<main>\n${jsx}\n</main>`;
  }

  return jsx;
}

function getRouteFromPath(filePath) {
  let route = filePath
    .replace(/\\/g, '/')
    .replace(/^\.$/, '')
    .replace(/^\//, '')
    .replace(/\/index\.html$/, '');

  return route || '/';
}

function createPageFile(htmlPath, route) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  const title = extractTitle(html);
  const description = extractMetaDescription(html);
  const body = extractBody(html);
  const jsx = htmlToJsx(body);

  const pageContent = `export const metadata = {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
};

export default function Page() {
  return (
    ${jsx}
  );
}
`;

  return pageContent;
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

  const skip = ['app\\page.jsx', 'app\\contact\\page.jsx', 'app\\about\\page.jsx'];
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
