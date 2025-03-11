/**
 * Dark Mode Functionality
 * This file handles the dark/light mode toggle functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    const htmlElement = document.documentElement;
    
    // Function to update UI based on current theme
    function updateThemeUI(isDark) {
        // Apply the theme class first
        if (isDark) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }
        
        // Force a repaint to ensure all styles are applied correctly
        void htmlElement.offsetHeight;
        
        // Handle specific dark mode elements with a slight delay to ensure CSS transitions complete
        setTimeout(() => {
            if (isDark) {
                // Handle specific dark mode elements
                document.querySelectorAll('.dark\\:hidden').forEach(el => el.classList.add('hidden'));
                document.querySelectorAll('.dark\\:block').forEach(el => el.classList.remove('hidden'));
                
                // Update mobile toggle text if it exists
                const mobileToggleTextLight = document.querySelector('#darkModeToggleMobile .hidden.dark\\:block');
                const mobileToggleTextDark = document.querySelector('#darkModeToggleMobile .dark\\:hidden');
                if (mobileToggleTextLight) mobileToggleTextLight.classList.remove('hidden');
                if (mobileToggleTextDark) mobileToggleTextDark.classList.add('hidden');
            } else {
                // Handle specific light mode elements
                document.querySelectorAll('.dark\\:hidden').forEach(el => el.classList.remove('hidden'));
                document.querySelectorAll('.dark\\:block').forEach(el => el.classList.add('hidden'));
                
                // Update mobile toggle text if it exists
                const mobileToggleTextLight = document.querySelector('#darkModeToggleMobile .hidden.dark\\:block');
                const mobileToggleTextDark = document.querySelector('#darkModeToggleMobile .dark\\:hidden');
                if (mobileToggleTextLight) mobileToggleTextLight.classList.add('hidden');
                if (mobileToggleTextDark) mobileToggleTextDark.classList.remove('hidden');
            }
            
            // Dispatch a custom event for theme change
            const themeChangeEvent = new CustomEvent('themeToggled', { 
                detail: { isDarkMode: isDark } 
            });
            document.dispatchEvent(themeChangeEvent);
        }, 50);
    }
    
    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = htmlElement.classList.contains('dark');
        const newMode = isDarkMode ? 'light' : 'dark';
        
        // Save preference to localStorage
        localStorage.setItem('theme', newMode);
        
        // Update UI
        updateThemeUI(!isDarkMode);
        
        // Force CSS recalculation for all elements with dark/light specific styles
        document.querySelectorAll('[class*="dark:"], [class*="light:"]').forEach(el => {
            // Trigger a reflow/repaint
            void el.offsetHeight;
        });
    }
    
    // Check for saved theme preference or use system preference
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldUseDarkMode = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        
        // Apply the appropriate theme
        updateThemeUI(shouldUseDarkMode);
        
        // Update checkbox state
        if (darkModeToggle) {
            darkModeToggle.checked = shouldUseDarkMode;
        }
    }
    
    // Initialize theme on page load
    initializeTheme();
    
    // Add event listeners to toggle buttons
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Only apply system preference if user hasn't set a preference
        if (!localStorage.getItem('theme')) {
            updateThemeUI(event.matches);
        }
    });
}); 