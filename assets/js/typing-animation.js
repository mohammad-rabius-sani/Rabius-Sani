/**
 * Typing Animation
 * This file handles the typing animation in the hero section
 */

document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.getElementById('typed-text');
    const cursorElement = document.querySelector('.cursor');
    
    if (typedTextElement) {
        // Phrases to display in the typing animation
        const texts = [
            "Transforming raw data into meaningful insights.",
            "Specializing in SQL, Power BI, and Excel.",
            "Creating data-driven solutions for business problems.",
            "Passionate about data visualization and analytics."
        ];
        
        // Animation state variables
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isWaiting = false;
        
        // Timing variables (in milliseconds)
        const typingSpeed = 80;  // Speed for typing characters
        const deletingSpeed = 40; // Speed for deleting characters
        const pauseBeforeDelete = 2000; // Pause before starting to delete
        const pauseBeforeNewText = 700; // Pause before typing new text
        
        // Function to handle the typing animation
        function typeAnimation() {
            const currentText = texts[textIndex];
            let timeout = typingSpeed;
            
            // Handle different animation states
            if (isWaiting) {
                // Just wait, don't change text
                if (isDeleting) {
                    // After waiting, start deleting
                    isWaiting = false;
                    timeout = deletingSpeed;
                } else {
                    // After waiting, move to next text and start typing
                    isWaiting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    timeout = pauseBeforeNewText;
                }
            } else if (isDeleting) {
                // Delete one character
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                
                // If all characters are deleted
                if (charIndex === 0) {
                    isDeleting = false;
                    isWaiting = true;
                    timeout = pauseBeforeNewText;
                }
            } else {
                // Type one character
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                // If all characters are typed
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    isWaiting = true;
                    timeout = pauseBeforeDelete;
                }
            }
            
            // Randomize typing speed slightly for a more natural effect
            const randomFactor = Math.random() * 0.5 + 0.5; // Between 0.5 and 1
            timeout = Math.round(timeout * randomFactor);
            
            // Schedule the next animation frame
            setTimeout(typeAnimation, timeout);
        }
        
        // Add blinking cursor animation if cursor element exists
        if (cursorElement) {
            // Make sure cursor is visible and animated
            cursorElement.style.display = 'inline-block';
            
            // Add a class to ensure the cursor animation is applied
            if (!cursorElement.classList.contains('animate-cursor')) {
                cursorElement.classList.add('animate-cursor');
            }
        }
        
        // Start the typing animation with a slight delay
        setTimeout(typeAnimation, 1000);
    }
}); 