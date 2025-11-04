import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read CSS file
const cssFilePath = path.join(__dirname, 'public', 'css', 'styles.css');
const cssContent = fs.readFileSync(cssFilePath, 'utf-8');

// Extract all CSS class selectors (e.g., .class-name) and ID selectors (e.g., #id-name)
function extractCSSSelectors(css) {
  const selectors = new Set();
  
  // Match class selectors at the start of a rule: .class-name {
  // This is more accurate than matching anywhere in the CSS
  const classRuleRegex = /^\.([a-zA-Z0-9_-]+)\s*\{/gm;
  let match;
  
  while ((match = classRuleRegex.exec(css)) !== null) {
    const className = match[1];
    // Skip common utility classes that might be dynamically generated
    // But we'll still check them, just flag them differently
    selectors.add(className);
  }
  
  // Also match class selectors in comma-separated lists: .class1, .class2 {
  const classListRegex = /\.([a-zA-Z0-9_-]+)(?=\s*[,{])/g;
  while ((match = classListRegex.exec(css)) !== null) {
    const className = match[1];
    if (className && !className.includes(':')) {
      selectors.add(className);
    }
  }
  
  // Match ID selectors: #id-name {
  const idRuleRegex = /^#([a-zA-Z0-9_-]+)\s*\{/gm;
  while ((match = idRuleRegex.exec(css)) !== null) {
    selectors.add('#' + match[1]);
  }
  
  // Match ID selectors in comma-separated lists
  const idListRegex = /#([a-zA-Z0-9_-]+)(?=\s*[,{])/g;
  while ((match = idListRegex.exec(css)) !== null) {
    const idName = match[1];
    if (idName && !idName.includes(':')) {
      selectors.add('#' + idName);
    }
  }
  
  return Array.from(selectors);
}

// Get all JSX/JS files recursively
function getAllJSXFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        getAllJSXFiles(filePath, fileList);
      }
    } else if (/\.(jsx|js|tsx|ts)$/.test(file)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Check if a selector is used in the codebase
function isSelectorUsed(selector, codebaseFiles) {
  const searchTerm = selector.startsWith('#') 
    ? selector.substring(1) // Remove # for ID
    : selector; // Keep class name as is
  
  // Escape special regex characters in search term
  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  for (const filePath of codebaseFiles) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Check for direct usage: className="selector" or className='selector'
      if (content.includes(`className="${searchTerm}"`) || 
          content.includes(`className='${searchTerm}'`) ||
          content.includes(`className="${searchTerm} `) ||
          content.includes(`className='${searchTerm} `) ||
          content.includes(` className="${searchTerm}"`) ||
          content.includes(` className='${searchTerm}'`) ||
          content.includes(` className="${searchTerm} `) ||
          content.includes(` className='${searchTerm} `)) {
        return true;
      }
      
      // Check for usage in template literals: className={`${searchTerm}`}
      const templateLiteralRegex = new RegExp(`className\\s*=\\s*\\{[^}]*[\\"\`']${escapedTerm}[\\"\`']`, 'g');
      if (templateLiteralRegex.test(content)) {
        return true;
      }
      
      // Check for usage in template literals with spaces: className={`prefix ${searchTerm} suffix`}
      const templateLiteralWithSpacesRegex = new RegExp(`className\\s*=\\s*\\{[^}]*[\\"\`'].*[\\s]${escapedTerm}(?:[\\s\`'"]|$|[\\s\`'"]*})`, 'g');
      if (templateLiteralWithSpacesRegex.test(content)) {
        return true;
      }
      
      // Check for class attribute (HTML): class="selector"
      if (content.includes(`class="${searchTerm}"`) || 
          content.includes(`class='${searchTerm}'`) ||
          content.includes(`class="${searchTerm} `) ||
          content.includes(`class='${searchTerm} `)) {
        return true;
      }
      
      // Check for ID selectors
      if (selector.startsWith('#')) {
        if (content.includes(`id="${searchTerm}"`) ||
            content.includes(`id='${searchTerm}'`) ||
            content.includes(`document.getElementById('${searchTerm}')`) ||
            content.includes(`document.getElementById("${searchTerm}")`) ||
            content.includes(`getElementById('${searchTerm}')`) ||
            content.includes(`getElementById("${searchTerm}")`) ||
            content.includes(`querySelector('#${searchTerm}')`) ||
            content.includes(`querySelector("#${searchTerm}")`) ||
            content.includes(`querySelectorAll('#${searchTerm}')`) ||
            content.includes(`querySelectorAll("#${searchTerm}")`)) {
          return true;
        }
      }
      
      // Check for usage in comments that might indicate it's used elsewhere
      // (Some classes might be used by third-party libraries)
      if (content.includes(`/* ${searchTerm} */`) || 
          content.includes(`// ${searchTerm}`)) {
        // Could be used, but we'll mark as potentially unused
      }
      
    } catch (error) {
      // Skip files that can't be read
      continue;
    }
  }
  
  return false;
}

// Main analysis
console.log('🔍 Analyzing unused CSS...\n');
console.log('Reading CSS file...');
const selectors = extractCSSSelectors(cssContent);
console.log(`Found ${selectors.length} CSS selectors\n`);

console.log('Scanning codebase files...');
const appDir = path.join(__dirname, 'app');
const publicJsDir = path.join(__dirname, 'public', 'js');
const codebaseFiles = [
  ...getAllJSXFiles(appDir),
  ...getAllJSXFiles(publicJsDir)
];
console.log(`Scanned ${codebaseFiles.length} files\n`);

console.log('Checking usage...');
const unusedSelectors = [];
const usedSelectors = [];

for (const selector of selectors) {
  if (isSelectorUsed(selector, codebaseFiles)) {
    usedSelectors.push(selector);
  } else {
    unusedSelectors.push(selector);
  }
}

// Sort results
unusedSelectors.sort();
usedSelectors.sort();

// Generate report
const reportPath = path.join(__dirname, 'unused-css-report.txt');
const report = [
  '='.repeat(80),
  'UNUSED CSS ANALYSIS REPORT',
  '='.repeat(80),
  '',
  `Generated: ${new Date().toISOString()}`,
  '',
  `Total CSS Selectors: ${selectors.length}`,
  `Used Selectors: ${usedSelectors.length}`,
  `Unused Selectors: ${unusedSelectors.length}`,
  `Unused Percentage: ${((unusedSelectors.length / selectors.length) * 100).toFixed(2)}%`,
  '',
  '='.repeat(80),
  'UNUSED CSS SELECTORS (Safe to Remove)',
  '='.repeat(80),
  '',
  ...unusedSelectors.map((sel, idx) => `${idx + 1}. ${sel}`),
  '',
  '='.repeat(80),
  'USED CSS SELECTORS (Keep These)',
  '='.repeat(80),
  '',
  ...usedSelectors.map((sel, idx) => `${idx + 1}. ${sel}`),
  ''
].join('\n');

fs.writeFileSync(reportPath, report, 'utf-8');

console.log('\n✅ Analysis complete!');
console.log(`\n📊 Results:`);
console.log(`   Total selectors: ${selectors.length}`);
console.log(`   Used: ${usedSelectors.length}`);
console.log(`   Unused: ${unusedSelectors.length}`);
console.log(`   Unused percentage: ${((unusedSelectors.length / selectors.length) * 100).toFixed(2)}%`);
console.log(`\n📄 Full report saved to: unused-css-report.txt`);
console.log(`\n⚠️  NOTE: Please review the unused selectors carefully before removing.`);
console.log(`   Some CSS might be used by:`);
console.log(`   - Third-party libraries`);
console.log(`   - Dynamic class generation`);
console.log(`   - JavaScript frameworks`);
console.log(`   - Server-side rendered content`);

