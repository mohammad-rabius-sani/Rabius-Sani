/**
 * Button Effects
 * This file handles the button hover effects for the new color scheme
 */

document.addEventListener('DOMContentLoaded', function() {
    // Function to apply button hover effects
    function applyButtonEffects() {
        const isDarkMode = document.documentElement.classList.contains('dark');
        const buttons = document.querySelectorAll('.btn-primary, .btn-outline-primary');
        
        buttons.forEach(button => {
            // Remove existing event listeners
            button.onmousemove = null;
            button.onmouseleave = null;
            
            if (isDarkMode) {
                // Apply dark mode hover effect (pulsing glow)
                button.classList.add('dark-mode-button');
                
                // Add mousemove event for interactive glow effect
                button.onmousemove = function(e) {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    this.style.setProperty('--x', `${x}px`);
                    this.style.setProperty('--y', `${y}px`);
                };
                
                button.onmouseleave = function() {
                    this.style.setProperty('--x', '50%');
                    this.style.setProperty('--y', '50%');
                };
            } else {
                // Apply light mode hover effect (cyan border glow)
                button.classList.remove('dark-mode-button');
            }
        });
    }
    
    // Apply effects on page load
    applyButtonEffects();
    
    // Apply effects when theme is toggled
    document.addEventListener('themeToggled', applyButtonEffects);
    
    // Add CSS for the interactive glow effect
    const style = document.createElement('style');
    style.textContent = `
        .dark-mode-button {
            position: relative;
            overflow: hidden;
            --x: 50%;
            --y: 50%;
        }
        
        .dark-mode-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
                circle at var(--x) var(--y),
                rgba(255, 0, 255, 0.8) 0%,
                rgba(0, 255, 255, 0.8) 50%,
                transparent 100%
            );
            opacity: 0;
            z-index: -1;
            transition: opacity 0.3s;
        }
        
        .dark-mode-button:hover::before {
            opacity: 0.3;
        }
    `;
    document.head.appendChild(style);
}); 