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
  // Find everything between <body> and </body>
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  return match ? match[1] : '';
}

function htmlToJsx(html) {
  let jsx = html;

  // Remove nav and footer (layout.jsx provides these)
  jsx = jsx.replace(/<nav[^>]*class="nav"[\s\S]*?<\/nav>/g, '');
  jsx = jsx.replace(/<footer[^>]*class="foot"[\s\S]*?<\/footer>/g, '');

  // Convert HTML to JSX
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');

  // Self-closing tags - convert to JSX format
  jsx = jsx.replace(/<br\s*\/?>/gi, '<br />');
  jsx = jsx.replace(/<hr\s*\/?>/gi, '<hr />');
  jsx = jsx.replace(/<img\s+([^>]*)\/?\s*>/gi, '<img $1 />');
  jsx = jsx.replace(/<input\s+([^>]*)\/?\s*>/gi, '<input $1 />');
  jsx = jsx.replace(/<meta\s+([^>]*)\/?\s*>/gi, '<meta $1 />');
  jsx = jsx.replace(/<link\s+([^>]*)\/?\s*>/gi, '<link $1 />');

  // Wrap in main tag if not already there
  if (!jsx.includes('<main')) {
    jsx = `<main>\n${jsx}\n</main>`;
  }

  return jsx;
}

function getRouteFromPath(filePath) {
  // Convert ./about/index.html to /about
  // Convert ./index.html to /
  // Convert ./services/system-audit-kansas-city/index.html to /services/system-audit-kansas-city

  let route = filePath
    .replace(/\\/g, '/') // Convert backslashes to forward slashes
    .replace(/^\.$/, '') // Remove leading .
    .replace(/^\//, '') // Remove leading /
    .replace(/\/index\.html$/, ''); // Remove /index.html

  return route || '/'; // Empty string becomes /
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

// Recursively find all index.html files
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
  // Get relative path from design project root
  let relPath = path.relative(designDir, htmlPath);
  let route = getRouteFromPath(relPath);

  // Create app directory structure
  let appPath;
  if (route === '/') {
    appPath = path.join(appDir, 'page.jsx');
  } else {
    appPath = path.join(appDir, route, 'page.jsx');
  }

  // Create directories if needed
  const dir = path.dirname(appPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Only overwrite if not a key page we want to keep
  const skip = ['app\\page.jsx', 'app\\contact\\page.jsx', 'app\\about\\page.jsx'];
  const appPathNorm = appPath.replace(/\//g, '\\');

  if (skip.some(s => appPathNorm.includes(s))) {
    console.log(`⊘ Skipping ${route} (custom version exists)`);
    return;
  }

  const pageContent = createPageFile(htmlPath, route);
  fs.writeFileSync(appPath, pageContent);
  console.log(`✓ ${route}`);
});

console.log(`\n✓ Conversion complete`);
