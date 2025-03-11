/**
 * Modal Effects - Adds dynamic visual effects to the modal
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get modal element
    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.relative');
    
    // Function to create neon particles
    function createNeonParticles() {
        // Only create particles if in dark mode
        if (!document.documentElement.classList.contains('dark')) return;
        
        // Clear any existing particles
        const existingParticles = modalContent.querySelectorAll('.neon-particle');
        existingParticles.forEach(particle => particle.remove());
        
        // Create new particles
        const particleCount = 15;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('neon-particle');
            
            // Random positioning
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random size (1-4px)
            const size = 1 + Math.random() * 3;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random animation delay
            particle.style.animationDelay = `${Math.random() * 15}s`;
            
            // Random animation duration (10-20s)
            particle.style.animationDuration = `${10 + Math.random() * 10}s`;
            
            // Add to modal
            modalContent.appendChild(particle);
        }
    }
    
    // Create particles when modal is opened
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'class') {
                const isHidden = modal.classList.contains('hidden');
                if (!isHidden) {
                    // Modal is visible, create particles
                    createNeonParticles();
                }
            }
        });
    });
    
    // Start observing the modal for class changes
    observer.observe(modal, { attributes: true });
    
    // Also recreate particles when toggling between light/dark mode
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            // If modal is visible, recreate particles
            if (!modal.classList.contains('hidden')) {
                setTimeout(createNeonParticles, 100); // Small delay to allow dark mode class to be applied
            }
        });
    }
    
    // Mobile dark mode toggle
    const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', function() {
            // If modal is visible, recreate particles
            if (!modal.classList.contains('hidden')) {
                setTimeout(createNeonParticles, 100);
            }
        });
    }
}); 