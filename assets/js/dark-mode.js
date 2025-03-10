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
        // Update icons and UI elements
        if (isDark) {
            // Apply dark mode styles
            htmlElement.classList.add('dark');
            // Handle specific dark mode elements
            document.querySelectorAll('.dark\\:hidden').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.dark\\:block').forEach(el => el.classList.remove('hidden'));
            // Update mobile toggle text if it exists
            const mobileToggleTextLight = document.querySelector('#darkModeToggleMobile .hidden.dark\\:block');
            const mobileToggleTextDark = document.querySelector('#darkModeToggleMobile .dark\\:hidden');
            if (mobileToggleTextLight) mobileToggleTextLight.classList.remove('hidden');
            if (mobileToggleTextDark) mobileToggleTextDark.classList.add('hidden');
        } else {
            // Apply light mode styles
            htmlElement.classList.remove('dark');
            // Handle specific light mode elements
            document.querySelectorAll('.dark\\:hidden').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('.dark\\:block').forEach(el => el.classList.add('hidden'));
            // Update mobile toggle text if it exists
            const mobileToggleTextLight = document.querySelector('#darkModeToggleMobile .hidden.dark\\:block');
            const mobileToggleTextDark = document.querySelector('#darkModeToggleMobile .dark\\:hidden');
            if (mobileToggleTextLight) mobileToggleTextLight.classList.add('hidden');
            if (mobileToggleTextDark) mobileToggleTextDark.classList.remove('hidden');
        }
    }
    
    // Function to toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = htmlElement.classList.contains('dark');
        const newMode = isDarkMode ? 'light' : 'dark';
        
        // Save preference to localStorage
        localStorage.setItem('theme', newMode);
        
        // Update UI
        updateThemeUI(!isDarkMode);
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