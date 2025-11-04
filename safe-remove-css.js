import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read CSS file
const cssFilePath = path.join(__dirname, 'public', 'css', 'styles.css');
let cssContent = fs.readFileSync(cssFilePath, 'utf-8');

// List of safe-to-remove classes (component-specific, not utilities, not libraries, not animations)
const safeToRemove = [
  // Blog/Post related (unused)
  'category-post', 'post-date', 'post-meta', 'recent-news',
  // Comment related (unused)
  'comment', 'comment-content', 'comment-item', 'reply',
  // Author related (unused)
  'author', 'author-content', 'user-content', 'user-details', 'name', 'name-quote',
  // Image related (unused variants)
  'image-avata', 'image-avatar', 'image-section', 'img-1', 'img-2', 'img-details', 
  'img-elip', 'img-item', 'img-line', 'img-secion-item', 'img-section', 'list-image', 'list-img',
  // Contact/Form related (unused)
  'contact-item', 'content-contact-moblile', 'title-contact-mobile', 'form-newsletter2', 
  'form-search-siderbar', 'sidebar-form',
  // Box/Content related (unused variants)
  'box-content', 'box-info', 'box-logo', 'content-2', 'counter-box',
  // Item/Link related (unused variants)
  'item-link-2', 'item-text', 'midder-item', 'current-item', 'frame-item', 'info-item',
  // Date/Time related (unused)
  'date', 'date-user-post', 'day',
  // Section related (unused)
  'section-blog', 'section-form-content', 'section-pricing', 'section-testimonials-inner',
  // List related (unused)
  'list-process', 'list-support', 'contact-list-mega-menu',
  // Menu/Navigation related (unused)
  'sub-menu-home', 'sub-menu-item', 'sub-menu-mobile', 'menu-item', 'mobile-mega',
  'mega-menu', 'megamenu-subscribe',
  // Social related (unused)
  'social-item', 'socials-icon', 'socials-item', 'tag-social',
  // Style variants (unused - but keep style-fixed, style-open, no-bg as they're used in combinations)
  'style-1', 'style-2', 'style-bg-dark-2', 'style-bg-primary', 'style-bg-surface', 
  'style-bg-white', 'style-big', 'style-border', 'style-desc', 
  'style-popular', 'style-reverse',
  // Tabs related (unused)
  'tabs-item', 'tabs-list', 'tab-popular',
  // Swiper related custom (keep library classes, remove custom unused)
  'sw-border', 'sw-pagination', 'sw-project', 'sw-testimonial', 'sw-testimonials',
  // Text animation variants (unused)
  'text-back', 'text-face', 'text-flip', 'text-front',
  // Other unused components
  'agent-plus', 'alert', 'bottom-btn', 'clickable__icon', 'cursor-default', 
  'desc-flex', 'entry__error', 'entry__field', 'entry__label', 'entry__specification',
  'error', 'fl-item2', 'font-family-2', 'left-sectionnew', 'loader', 'loader-container',
  'logo-header', 'overlay-filter', 'p-about', 'plus-icon', 'pricing-item', 'process-item',
  'range-two-val', 'ready-to-animate', 'sidebar-banner', 'sidebar-contact',
  'sidebar-filter', 'step-number', 'services-item-force', 'write-review', 'year-animate',
  'wg-blog-details', 'wg-quote', 'wrap-loader'
];

// Function to remove CSS rule for a selector
function removeCSSRule(selector, css) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let modified = false;
  
  // Pattern 1: Remove standalone rules: .selector { ... } or #selector { ... }
  const prefix = selector.startsWith('#') ? '#' : '\\.';
  const selectorName = selector.startsWith('#') ? selector.substring(1) : selector;
  const escapedName = selectorName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // Match complete CSS rule (including nested rules with balanced braces)
  const rulePattern = new RegExp(`^${prefix}${escapedName}\\s*\\{([^{}]*(?:\\{[^{}]*\\}[^{}]*)*)\\}`, 'gm');
  
  // For multi-line rules, we need a different approach
  // Split by lines and track braces
  const lines = css.split('\n');
  const result = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Check if this line starts with our selector
    const startsWithSelector = new RegExp(`^\\s*${prefix}${escapedName}\\s*\\{`).test(line);
    
    if (startsWithSelector) {
      // Skip this rule by tracking braces
      let braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      modified = true;
      i++;
      
      while (i < lines.length && braceCount > 0) {
        const currentLine = lines[i];
        braceCount += (currentLine.match(/\{/g) || []).length - (currentLine.match(/\}/g) || []).length;
        i++;
      }
      // Skip the closing brace line
      continue;
    }
    
    // Check if selector is in a comma-separated list
    const commaListPattern = new RegExp(`([^,]+),\\s*${prefix}${escapedName}(?=\\s*[,{])`);
    const commaMatch = line.match(commaListPattern);
    if (commaMatch) {
      // Remove from comma list
      const beforeMatch = line.substring(0, line.indexOf(commaMatch[0]));
      const afterMatch = line.substring(line.indexOf(commaMatch[0]) + commaMatch[0].length);
      // Clean up commas
      let cleaned = beforeMatch + afterMatch.replace(/^,\s*/, '').replace(/,\s*$/, '');
      cleaned = cleaned.replace(/,\s*,/g, ','); // Remove double commas
      if (cleaned.trim()) {
        result.push(cleaned);
      }
      modified = true;
      i++;
      continue;
    }
    
    result.push(line);
    i++;
  }
  
  return { css: result.join('\n'), modified };
}

console.log('🗑️  Removing unused CSS safely...\n');
console.log(`Removing ${safeToRemove.length} safe-to-remove selectors...\n`);

let removedCount = 0;
for (const selector of safeToRemove) {
  const result = removeCSSRule(selector, cssContent);
  if (result.modified) {
    cssContent = result.css;
    removedCount++;
    console.log(`✓ Removed: ${selector}`);
  } else {
    console.log(`⚠ Not found: ${selector}`);
  }
}

// Clean up multiple empty lines (more than 2 consecutive)
cssContent = cssContent.replace(/\n{3,}/g, '\n\n');

// Clean up trailing whitespace
cssContent = cssContent.replace(/[ \t]+$/gm, '');

// Save the cleaned CSS
fs.writeFileSync(cssFilePath, cssContent, 'utf-8');

console.log(`\n✅ Removed ${removedCount} unused CSS selectors`);
console.log(`📄 Updated: ${cssFilePath}`);
console.log(`\n⚠️  Please test your site to ensure nothing broke!`);
