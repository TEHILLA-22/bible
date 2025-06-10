// Source Code Protection Script for Tehillz Bible Website
// Add this script to your HTML file before the closing </body> tag

(function() {
    'use strict';

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Disable F12 (Developer Tools)
        if (e.key === 'F12') {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }

        // Disable Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }

        // Disable Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }

        // Disable Ctrl+Shift+C (Element Inspector)
        if (e.ctrlKey && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }

        // Disable Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }

        // Disable Ctrl+S (Save Page)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            e.stopPropagation();
            showWarning();
            return false;
        }

        // Disable Ctrl+A (Select All)
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Disable Ctrl+P (Print)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        showWarning();
        return false;
    });

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Show warning message
    function showWarning() {
        // Create warning overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 999999;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
        `;

        const warningBox = document.createElement('div');
        warningBox.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        `;

        warningBox.innerHTML = `
            <h3 style="color: #d32f2f; margin-bottom: 15px;">⚠️ Access Restricted</h3>
            <p style="margin-bottom: 20px; color: #333;">
                This content is protected. Developer tools and source viewing are disabled.
            </p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: #1976d2; color: white; border: none; padding: 10px 20px; 
                           border-radius: 5px; cursor: pointer; font-size: 14px;">
                Close
            </button>
        `;

        overlay.appendChild(warningBox);
        document.body.appendChild(overlay);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
        }, 3000);
    }

    // Detect DevTools opening (various methods)
    let devtools = {
        open: false,
        orientation: null
    };

    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            if (!devtools.open) {
                devtools.open = true;
                showDevToolsWarning();
            }
        } else {
            devtools.open = false;
        }
    }, 500);

    // Alternative DevTools detection
    function detectDevTools() {
        let threshold = 160;
        setInterval(function() {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                showDevToolsWarning();
            }
        }, 1000);
    }

    function showDevToolsWarning() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 0, 0, 0.9);
            z-index: 999999;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
            color: white;
        `;

        overlay.innerHTML = `
            <div style="text-align: center; font-size: 24px;">
                <h2>🚫 Developer Tools Detected</h2>
                <p>Please close developer tools to continue browsing.</p>
                <p style="font-size: 16px; margin-top: 20px;">
                    This website's content is protected.
                </p>
            </div>
        `;

        document.body.appendChild(overlay);

        // Check if DevTools are still open
        const checkInterval = setInterval(() => {
            if (window.outerHeight - window.innerHeight <= 200 && 
                window.outerWidth - window.innerWidth <= 200) {
                overlay.remove();
                clearInterval(checkInterval);
            }
        }, 1000);
    }

    // Additional protection: Clear console periodically
    setInterval(function() {
        console.clear();
        console.log('%c⚠️ WARNING ⚠️', 'color: red; font-size: 30px; font-weight: bold;');
        console.log('%cThis is a protected website. Unauthorized access attempts are logged.', 'color: red; font-size: 16px;');
    }, 2000);

    // Disable console functions
    window.console.log = function() {};
    window.console.warn = function() {};
    window.console.error = function() {};
    window.console.info = function() {};
    window.console.debug = function() {};

    // CSS to disable text selection and right-click
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
        }
        
        body {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `;
    document.head.appendChild(style);

    // Initialize detection
    detectDevTools();

    console.log('%c🔒 Tehillz Bible - Source Protection Active', 'color: blue; font-size: 14px;');

})();