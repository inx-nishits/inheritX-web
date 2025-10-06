// Main.js wrapper to ensure jQuery is available
(function() {
  'use strict';
  
  // Wait for jQuery to be available
  function waitForJQuery(callback) {
    if (typeof window.jQuery !== 'undefined') {
      callback(window.jQuery);
    } else {
      setTimeout(function() {
        waitForJQuery(callback);
      }, 100);
    }
  }
  
  waitForJQuery(function($) {
    // Load and execute the main.js content
    fetch('/js/main.js')
      .then(response => response.text())
      .then(code => {
        // Execute the main.js code with jQuery
        (function($) {
          eval(code);
        })(jQuery);
      })
      .catch(err => {
        console.error('Error loading main.js:', err);
        // Fallback: try to execute main.js directly
        try {
          (function($) {
            eval(code);
          })(jQuery);
        } catch (e) {
          console.error('Failed to execute main.js:', e);
        }
      });
  });
})();
