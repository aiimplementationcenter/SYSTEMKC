#!/usr/bin/env node
/**
 * proper-convert.js
 * Converts HTML design files to proper Next.js JSX page files.
 */

const fs = require('fs');
const path = require('path');

const designDir = 'C:\\Users\\jdill\\AppData\\Local\\Temp\\design-extracted\\system-kc\\project';
const appDir = path.join(__dirname, '..', 'app');

// ─── CSS PROPERTY CAMELCASE ────────────────────────────────────────────────

function camelCaseCssProp(prop) {
  prop = prop.trim().toLowerCase();
  // Known property map
  const map = {
    'background-color': 'backgroundColor', 'background-image': 'backgroundImage',
    'background-position': 'backgroundPosition', 'background-repeat': 'backgroundRepeat',
    'background-size': 'backgroundSize', 'border-bottom': 'borderBottom',
    'border-bottom-color': 'borderBottomColor', 'border-bottom-left-radius': 'borderBottomLeftRadius',
    'border-bottom-right-radius': 'borderBottomRightRadius', 'border-color': 'borderColor',
    'border-left': 'borderLeft', 'border-radius': 'borderRadius', 'border-right': 'borderRight',
    'border-top': 'borderTop', 'border-top-color': 'borderTopColor',
    'border-top-left-radius': 'borderTopLeftRadius', 'border-top-right-radius': 'borderTopRightRadius',
    'border-width': 'borderWidth', 'box-shadow': 'boxShadow', 'flex-direction': 'flexDirection',
    'flex-grow': 'flexGrow', 'flex-shrink': 'flexShrink', 'flex-wrap': 'flexWrap',
    'font-family': 'fontFamily', 'font-size': 'fontSize', 'font-style': 'fontStyle',
    'font-weight': 'fontWeight', 'grid-column': 'gridColumn', 'grid-gap': 'gridGap',
    'grid-row': 'gridRow', 'grid-template-columns': 'gridTemplateColumns',
    'grid-template-rows': 'gridTemplateRows', 'justify-content': 'justifyContent',
    'justify-items': 'justifyItems', 'justify-self': 'justifySelf', 'letter-spacing': 'letterSpacing',
    'line-height': 'lineHeight', 'list-style': 'listStyle', 'list-style-type': 'listStyleType',
    'margin-bottom': 'marginBottom', 'margin-left': 'marginLeft', 'margin-right': 'marginRight',
    'margin-top': 'marginTop', 'max-height': 'maxHeight', 'max-width': 'maxWidth',
    'min-height': 'minHeight', 'min-width': 'minWidth', 'object-fit': 'objectFit',
    'object-position': 'objectPosition', 'outline-offset': 'outlineOffset',
    'overflow-x': 'overflowX', 'overflow-y': 'overflowY', 'padding-bottom': 'paddingBottom',
    'padding-left': 'paddingLeft', 'padding-right': 'paddingRight', 'padding-top': 'paddingTop',
    'pointer-events': 'pointerEvents', 'text-align': 'textAlign', 'text-decoration': 'textDecoration',
    'text-decoration-color': 'textDecorationColor', 'text-overflow': 'textOverflow',
    'text-rendering': 'textRendering', 'text-transform': 'textTransform', 'user-select': 'userSelect',
    'vertical-align': 'verticalAlign', 'white-space': 'whiteSpace', 'word-break': 'wordBreak',
    'z-index': 'zIndex', 'align-items': 'alignItems', 'align-self': 'alignSelf',
    'aspect-ratio': 'aspectRatio', 'backdrop-filter': 'backdropFilter',
    '-webkit-backdrop-filter': 'WebkitBackdropFilter', 'column-gap': 'columnGap',
    'row-gap': 'rowGap', 'flex-basis': 'flexBasis', 'place-items': 'placeItems',
    'grid-area': 'gridArea', 'grid-auto-flow': 'gridAutoFlow',
    'text-shadow': 'textShadow', 'box-sizing': 'boxSizing',
    'list-style-position': 'listStylePosition', 'border-style': 'borderStyle',
    'border-collapse': 'borderCollapse', 'table-layout': 'tableLayout',
    'word-spacing': 'wordSpacing', 'font-variant': 'fontVariant',
  };
  if (map[prop]) return map[prop];
  // Generic camelCase
  return prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

// ─── INLINE STYLE CONVERSION ──────────────────────────────────────────────

function parseStyleDeclarations(styleStr) {
  // Split on semicolons, respecting parentheses
  const decls = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < styleStr.length; i++) {
    const ch = styleStr[i];
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) {
      if (current.trim()) decls.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  if (current.trim()) decls.push(current.trim());
  return decls;
}

function styleStringToJSX(styleStr) {
  if (!styleStr || !styleStr.trim()) return '{{}}';
  const decls = parseStyleDeclarations(styleStr);
  if (!decls.length) return '{{}}';

  const props = decls.map(decl => {
    const colonIdx = decl.indexOf(':');
    if (colonIdx === -1) return null;
    const prop = decl.substring(0, colonIdx).trim();
    const val = decl.substring(colonIdx + 1).trim();
    const jsxProp = camelCaseCssProp(prop);
    // Quote the value — single quotes unless value contains single quote
    let quotedVal;
    if (val.includes("'")) {
      quotedVal = `"${val.replace(/"/g, '\\"')}"`;
    } else {
      quotedVal = `'${val}'`;
    }
    return `${jsxProp}: ${quotedVal}`;
  }).filter(Boolean);

  if (!props.length) return '{{}}';
  return `{{${props.join(', ')}}}`;
}

// ─── HTML → JSX ───────────────────────────────────────────────────────────

const VOID_ELEMENTS = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);

const ATTR_RENAMES = {
  'class': 'className', 'for': 'htmlFor', 'tabindex': 'tabIndex',
  'colspan': 'colSpan', 'rowspan': 'rowSpan', 'maxlength': 'maxLength',
  'readonly': 'readOnly', 'autocomplete': 'autoComplete', 'autofocus': 'autoFocus',
  'crossorigin': 'crossOrigin', 'enctype': 'encType', 'novalidate': 'noValidate',
  'referrerpolicy': 'referrerPolicy', 'accesskey': 'accessKey',
  'contenteditable': 'contentEditable', 'spellcheck': 'spellCheck',
  'cellpadding': 'cellPadding', 'cellspacing': 'cellSpacing',
  'frameborder': 'frameBorder', 'allowfullscreen': 'allowFullScreen',
  'inputmode': 'inputMode',
};

const EVENT_RENAMES = {
  'onclick': 'onClick', 'onsubmit': 'onSubmit', 'onchange': 'onChange',
  'onfocus': 'onFocus', 'onblur': 'onBlur', 'onkeydown': 'onKeyDown',
  'onkeyup': 'onKeyUp', 'onkeypress': 'onKeyPress', 'onmouseover': 'onMouseOver',
  'onmouseout': 'onMouseOut', 'onmouseenter': 'onMouseEnter',
  'onmouseleave': 'onMouseLeave', 'onload': 'onLoad', 'onerror': 'onError',
  'oninput': 'onInput',
};

function htmlToJSX(html) {
  // 1. Remove HTML comments
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // 2. Process tag by tag
  html = html.replace(/<([a-zA-Z][a-zA-Z0-9-]*)(\s[\s\S]*?)?(\/?)>/g, (match, tag, rawAttrs, trailSlash) => {
    let attrs = rawAttrs || '';

    // 2a. Convert style="..." to style={{...}}
    attrs = attrs.replace(/\bstyle="([^"]*)"/g, (m, s) => `style=${styleStringToJSX(s)}`);

    // 2b. Remove event handlers that use `this.style` — they're not valid in React
    for (const [from, to] of Object.entries(EVENT_RENAMES)) {
      // Remove event attributes that reference `this.` (invalid in React JSX)
      attrs = attrs.replace(new RegExp(`\\b${from}="[^"]*this\\.[^"]*"`, 'gi'), '');
    }

    // 2c. Convert remaining event handlers to arrow functions
    for (const [from, to] of Object.entries(EVENT_RENAMES)) {
      attrs = attrs.replace(new RegExp(`\\b${from}="([^"]*)"`, 'gi'), (m, val) => {
        // Strip backslashes that shouldn't be there, then re-escape single quotes
        const cleaned = val.replace(/\\'/g, "'").replace(/'/g, "\\'");
        return `${to}={() => { ${cleaned} }}`;
      });
    }

    // 2d. Rename HTML attributes to JSX
    for (const [from, to] of Object.entries(ATTR_RENAMES)) {
      // Only match as whole attribute name (word boundary), with or without value
      const re = new RegExp(`(?<=[\\s])${from}(?==|\\s|>|/)`, 'gi');
      attrs = attrs.replace(re, to);
    }

    const tagLower = tag.toLowerCase();
    if (VOID_ELEMENTS.has(tagLower)) {
      // Self-close
      return `<${tag}${attrs} />`;
    }
    return `<${tag}${attrs}${trailSlash}>`;
  });

  // 3. Convert href and src
  html = convertLinks(html);

  return html;
}

function convertLinks(html) {
  html = html.replace(/\bhref="([^"]*)"/g, (m, href) => `href="${convertHref(href)}"`);
  html = html.replace(/\bsrc="([^"]*)"/g, (m, src) => `src="${convertSrc(src)}"`);
  return html;
}

function convertHref(href) {
  if (!href) return href;
  if (/^(#|tel:|mailto:|https?:|\/\/)/.test(href)) return href;
  // Remove ../ prefix chains
  let p = href.replace(/^(\.\.\/)+/, '/');
  if (!p.startsWith('/')) p = '/' + p;
  // Remove /index.html suffix
  p = p.replace(/\/index\.html$/, '/');
  // Remove .html suffix
  p = p.replace(/\.html$/, '/');
  // Collapse double slashes
  p = p.replace(/\/\//g, '/');
  // Ensure leading slash
  if (!p.startsWith('/')) p = '/' + p;
  // Ensure trailing slash for paths that aren't root
  if (p !== '/' && !p.endsWith('/')) p += '/';
  return p;
}

function convertSrc(src) {
  if (!src || /^(https?:|\/\/|\/)/.test(src)) return src;
  let p = src.replace(/^(\.\.\/)+/, '/');
  if (!p.startsWith('/')) p = '/' + p;
  return p;
}

// ─── EXTRACT HELPERS ─────────────────────────────────────────────────────

function extractTitle(html) {
  const m = html.match(/<title>([^<]+)<\/title>/);
  return m ? m[1].replace(' — ', ' | ') : 'S.Y.S.T.E.M. KC';
}

function extractMetaDescription(html) {
  const m = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  return m ? m[1] : '';
}

function extractBody(html) {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  return m ? m[1] : html;
}

function cleanBody(html) {
  // Remove nav (with class "nav")
  html = html.replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/g, '');
  // Remove footer (with class "foot")
  html = html.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/g, '');
  // Remove all script tags
  html = html.replace(/<script\b[\s\S]*?<\/script>/g, '');
  // Remove tweaks panel
  html = html.replace(/<div\b[^>]*id="tweaks[^"]*"[\s\S]*?<\/div>/g, '');
  // Fix duplicate consecutive identical closing paragraph tags </p></p> -> </p>
  // This is a known typo in the source HTML (about page line 50)
  html = html.replace(/<\/p>([ \t]*)<\/p>/g, '</p>$1');
  return html.trim();
}

// ─── FAQ WRAPPER ─────────────────────────────────────────────────────────
// Uses a bracket-counting approach to find the correct closing </div>
// for the faq-list div.

function wrapFaqAccordion(jsx) {
  // Find the faq-list div opening tag
  const faqListPattern = /<div\s[^>]*className="faq-list"[^>]*>/;
  const match = faqListPattern.exec(jsx);
  if (!match) return jsx;

  const openTagStart = match.index;
  const openTagEnd = openTagStart + match[0].length;

  // Count brackets to find the matching closing </div>
  let depth = 1;
  let pos = openTagEnd;
  while (pos < jsx.length && depth > 0) {
    const nextOpen = jsx.indexOf('<div', pos);
    const nextClose = jsx.indexOf('</div>', pos);

    if (nextClose === -1) break; // malformed

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        // Found the matching closing tag
        const closeTagEnd = nextClose + 6; // '</div>'.length
        const inner = jsx.substring(openTagEnd, nextClose);
        const before = jsx.substring(0, openTagStart);
        const after = jsx.substring(closeTagEnd);
        return before + '<FaqAccordion>' + inner + '</FaqAccordion>' + after;
      }
      pos = nextClose + 6;
    }
  }

  return jsx; // fallback: no change
}

// ─── PAGE GENERATOR ──────────────────────────────────────────────────────

function getImportPrefix(htmlPath) {
  // Calculate relative path from the target app page dir to app/components
  const relToDesign = path.relative(designDir, path.dirname(htmlPath));
  const parts = relToDesign === '' ? [] : relToDesign.split(path.sep).filter(Boolean);
  // depth = number of path segments (e.g. "industries/hvac..." = 2 levels)
  const depth = parts.length;
  if (depth === 0) return './components';
  return '../'.repeat(depth) + 'components';
}

function createPageFile(htmlPath) {
  const raw = fs.readFileSync(htmlPath, 'utf-8');
  const title = extractTitle(raw);
  const description = extractMetaDescription(raw);
  let body = extractBody(raw);
  body = cleanBody(body);

  const hasFaq = /class="faq-list"/.test(body) || /className="faq-list"/.test(body);
  const hasFormspree = /action="https:\/\/formspree\.io/.test(body);

  const relPath = path.relative(designDir, htmlPath).replace(/\\/g, '/');
  const isContact = relPath.startsWith('contact/');
  const isFreeAudit = relPath.startsWith('free-audit/');
  const isFreeGuide = relPath.startsWith('free-guide/');
  const useContactForm = hasFormspree && (isContact || isFreeAudit || isFreeGuide);

  // Convert HTML → JSX
  let jsx = htmlToJSX(body);

  // Wrap FAQ
  if (hasFaq) {
    jsx = wrapFaqAccordion(jsx);
  }

  // Replace contact form with component
  if (useContactForm) {
    jsx = jsx.replace(/<form\b[\s\S]*?<\/form>/, '<ContactForm />');
  }

  // Build imports
  const prefix = getImportPrefix(htmlPath);
  const imports = [];
  if (hasFaq) imports.push(`import FaqAccordion from '${prefix}/FaqAccordion';`);
  if (useContactForm) imports.push(`import ContactForm from '${prefix}/ContactForm';`);

  const safeTitle = title.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const safeDesc = description.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  const lines = [
    ...(imports.length ? imports : []),
    ...(imports.length ? [''] : []),
    'export const metadata = {',
    `  title: '${safeTitle}',`,
    `  description: '${safeDesc}',`,
    '};',
    '',
    'export default function Page() {',
    '  return (',
    '    <main>',
    jsx,
    '    </main>',
    '  );',
    '}',
  ];

  return lines.join('\n');
}

// ─── FILE DISCOVERY ───────────────────────────────────────────────────────

function findHtmlFiles(dir, list = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      findHtmlFiles(full, list);
    } else if (entry === 'index.html') {
      list.push(full);
    }
  }
  return list;
}

// ─── MAIN ────────────────────────────────────────────────────────────────

const htmlFiles = findHtmlFiles(designDir);
let ok = 0, errors = 0;

for (const htmlPath of htmlFiles) {
  const relPath = path.relative(designDir, htmlPath);
  let route = relPath.replace(/\\/g, '/').replace(/\/index\.html$/, '').replace(/^index\.html$/, '');

  let appPath;
  if (route === '') {
    appPath = path.join(appDir, 'page.jsx');
  } else {
    appPath = path.join(appDir, route, 'page.jsx');
  }

  try {
    const content = createPageFile(htmlPath);
    fs.mkdirSync(path.dirname(appPath), { recursive: true });
    fs.writeFileSync(appPath, content, 'utf-8');
    console.log(`✓  /${route || ''}`);
    ok++;
  } catch (err) {
    console.error(`✗  /${route}  —  ${err.message}`);
    errors++;
  }
}

console.log(`\nDone: ${ok} pages written, ${errors} errors.`);
