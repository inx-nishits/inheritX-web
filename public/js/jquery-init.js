// jQuery initialization script
(function() {
  'use strict';
  
  // Ensure jQuery is available globally
  if (typeof window.jQuery === 'undefined' && typeof window.$ === 'undefined') {
    console.error('jQuery is not loaded');
    return;
  }
  
  // Make sure both $ and jQuery are available
  window.jQuery = window.jQuery || window.$;
  window.$ = window.$ || window.jQuery;
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeJQueryFeatures();
    });
  } else {
    initializeJQueryFeatures();
  }
  
  function initializeJQueryFeatures() {
    // Initialize any jQuery-dependent features here
    console.log('jQuery initialized successfully');
    
    // Initialize Bootstrap components if needed
    if (typeof bootstrap !== 'undefined') {
      // Bootstrap is available
      console.log('Bootstrap initialized successfully');
    }
  }
})();
