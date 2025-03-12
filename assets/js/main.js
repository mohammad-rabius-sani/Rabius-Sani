/*
* Mohammad Rabius Sani - Data Analyst Portfolio
* Main JavaScript File
*/

(function() {
    "use strict";

    // Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // Initialize AOS Animation Library
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Simple Smooth Scrolling for All Anchor Links
    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const header = document.querySelector('header');
                    const navbarHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    
                    window.scrollTo({
                        top: targetPosition - navbarHeight, // Adjust for navbar height
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const mobileMenu = document.getElementById('mobileMenu');
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
    });

    // Navbar Initialization
    document.addEventListener('DOMContentLoaded', function() {
        // Ensure navbar is visible and properly positioned
    const navbar = document.getElementById('mainNav');
    if (navbar) {
            // Apply scrolled class if not at the top
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
        }
        
            // Add scroll event listener
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    });

    // Active Navigation Link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.querySelector('span').classList.remove('w-full');
            link.querySelector('span').classList.add('w-0');
            
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
                link.querySelector('span').classList.remove('w-0');
                link.querySelector('span').classList.add('w-full');
            }
        });
        
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            link.classList.remove('border-[#FF007F]', 'border-[#00C8FF]', 'dark:border-[#FF00FF]', 'dark:border-[#00FFFF]');
            link.classList.add('border-transparent');
            
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
                link.classList.remove('border-transparent');
                
                // Apply different colors based on the section
                const section = link.getAttribute('href').substring(1);
                if (section === 'skills' || section === 'projects') {
                    link.classList.add('border-[#00C8FF]', 'dark:border-[#00FFFF]');
                } else {
                    link.classList.add('border-[#FF007F]', 'dark:border-[#FF00FF]');
                }
            }
        });
    });

    // Mobile Menu Toggle
    document.addEventListener('DOMContentLoaded', function() {
        // Check if the mobile menu toggle is already handled in index.html
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        // Only set up event listeners if they haven't been set up in index.html
        if (mobileMenuBtn && mobileMenu && !mobileMenuBtn.hasAttribute('data-event-attached')) {
            mobileMenuBtn.setAttribute('data-event-attached', 'true');
            
            mobileMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent event bubbling
                
                if (mobileMenu.classList.contains('hidden')) {
                    // Show menu
                    mobileMenu.classList.remove('hidden');
                    // Use setTimeout to ensure the transition works after display is set
                    setTimeout(() => {
                        mobileMenu.classList.add('active');
                    }, 10);
                } else {
                    // Hide menu
                    mobileMenu.classList.remove('active');
                    // Wait for transition to complete before hiding
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 300); // Match this with the CSS transition duration
                }
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideMenu = mobileMenu.contains(event.target);
                const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
                
                if (!isClickInsideMenu && !isClickOnMenuBtn && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.remove('active');
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 300);
                }
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = document.querySelectorAll('.nav-link-mobile');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 300);
                });
            });
        }
    });

    // Store original widths as data attributes
    document.addEventListener('DOMContentLoaded', () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            // Initially set to 0 for animation
            bar.style.width = '0';
        });
    });

    // Trigger progress bar animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
        
        // Add hover effect for skill items
        const skillItems = document.querySelectorAll('.skills-list li');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const progressBar = item.querySelector('.progress-bar');
                progressBar.classList.add('highlight');
            });
            
            item.addEventListener('mouseleave', () => {
                const progressBar = item.querySelector('.progress-bar');
                progressBar.classList.remove('highlight');
            });
        });
    }

    // Progress Bar Animation with enhanced effects
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        // First reset all progress bars
        progressBars.forEach(bar => {
            bar.style.width = '0';
            bar.style.transition = 'none';
            bar.style.left = '0'; // Ensure no left offset
            bar.style.marginLeft = '0'; // Remove any margin
            bar.style.paddingLeft = '0'; // Remove any padding
            // Remove any existing animation classes
            bar.classList.remove('animate-pulse-slow', 'progress-animated');
        });
        
        // Force reflow to ensure the reset takes effect
        document.body.offsetHeight;
        
        // Then animate each progress bar with staggered timing
        progressBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            
            // Set transition with dynamic duration based on width
            const duration = 0.8 + (parseFloat(width) / 150); // Slightly faster base animation
            bar.style.transition = `width ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1)`; // More bouncy easing
            
            // Add a slight delay for each subsequent bar with cascade effect
            setTimeout(() => {
                // Ensure the bar starts from the left edge
                bar.style.left = '0';
                bar.style.marginLeft = '0';
                bar.style.paddingLeft = '0';
                
                // Set the width for animation
                bar.style.width = width;
                
                // Add the progress-animated class for continuous subtle animation
                bar.classList.add('progress-animated');
                
                // Add the dot pulse effect with a slight delay
                const dotElement = bar.querySelector('span');
                if (dotElement) {
                    setTimeout(() => {
                        dotElement.classList.add('dot-pulse');
                    }, duration * 500);
                }
                
            }, index * 150); // Increased delay between bars for more pronounced cascade effect
        });
    };

    // Project Details Modal
    document.addEventListener('DOMContentLoaded', function() {
        // This section has been moved to project-modal.js
        // Keeping this empty event listener to avoid breaking any other code that might depend on it
    });

    // Contact Form Handling
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const subject = document.getElementById('subject').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Simple validation
                if (!name || !email || !subject || !message) {
                    showFormMessage('Please fill in all fields', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showFormMessage('Please enter a valid email address', 'error');
                    return;
                }
                
                // Normally you would send this data to a server
                // For now, we'll just simulate a successful submission
                
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = `
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span class="text-sm sm:text-base">Sending...</span>
                `;
                
                // Simulate server request
                setTimeout(function() {
                    // Reset form
                    contactForm.reset();
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                    
                    // Show success message
                    showFormMessage('Thank you! Your message has been sent successfully.', 'success');
                }, 1500);
            });
        }
        
        // Helper function to validate email
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
        
        // Helper function to show form messages
        function showFormMessage(message, type) {
            // Remove any existing message
            const existingMessage = document.getElementById('formMessage');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.id = 'formMessage';
            messageElement.className = type === 'success' 
                ? 'mt-4 p-3 sm:p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800 flex items-center text-sm sm:text-base' 
                : 'mt-4 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800 flex items-center text-sm sm:text-base';
            
            // Add icon based on message type
            const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            iconSvg.setAttribute('class', 'h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0');
            iconSvg.setAttribute('fill', 'none');
            iconSvg.setAttribute('viewBox', '0 0 24 24');
            iconSvg.setAttribute('stroke', 'currentColor');
            
            const iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            iconPath.setAttribute('stroke-linecap', 'round');
            iconPath.setAttribute('stroke-linejoin', 'round');
            iconPath.setAttribute('stroke-width', '2');
            
            if (type === 'success') {
                iconPath.setAttribute('d', 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z');
            } else {
                iconPath.setAttribute('d', 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z');
            }
            
            iconSvg.appendChild(iconPath);
            
            // Create text span
            const textSpan = document.createElement('span');
            textSpan.textContent = message;
            textSpan.className = 'flex-1'; // Make text span take available space
            
            // Add icon and text to message element
            messageElement.appendChild(iconSvg);
            messageElement.appendChild(textSpan);
            
            // Add to form
            contactForm.appendChild(messageElement);
            
            // Animate in
            setTimeout(() => {
                messageElement.style.opacity = '0';
                messageElement.style.transform = 'translateY(-10px)';
                messageElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                setTimeout(() => {
                    messageElement.style.opacity = '1';
                    messageElement.style.transform = 'translateY(0)';
                }, 10);
            }, 0);
            
            // Remove after 5 seconds
            setTimeout(function() {
                messageElement.style.opacity = '0';
                messageElement.style.transform = 'translateY(-10px)';
                
                setTimeout(function() {
                    if (messageElement.parentNode) {
                        messageElement.parentNode.removeChild(messageElement);
                    }
                }, 300);
            }, 5000);
        }
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
    }

    // Floating Animation Element
    const floatingElement = document.querySelector('.floating-element');
    if (floatingElement) {
        // Make the floating element follow cursor with delay
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Add some delay for smooth following
            setTimeout(() => {
                // Keep the element within viewport boundaries
                const maxX = window.innerWidth - 60;
                const maxY = window.innerHeight - 60;
                
                const targetX = Math.min(Math.max(mouseX, 30), maxX);
                const targetY = Math.min(Math.max(mouseY, 30), maxY);
                
                floatingElement.style.transition = 'transform 0.3s ease-out';
                floatingElement.style.transform = `translate(${targetX - floatingElement.offsetWidth/2}px, ${targetY - floatingElement.offsetHeight/2}px)`;
            }, 100);
        });
        
        // Reset position when mouse leaves the window
        document.addEventListener('mouseleave', () => {
            floatingElement.style.transition = 'all 0.5s ease-in-out';
            floatingElement.style.transform = 'translate(0, 0)';
            floatingElement.style.right = '30px';
            floatingElement.style.bottom = '100px';
        });
    }

    // Hero Section Buttons
    document.addEventListener('DOMContentLoaded', function() {
        // Download CV Button
        const downloadCvBtn = document.querySelector('.flex-wrap.gap-4 a[download]');
        if (downloadCvBtn) {
            downloadCvBtn.addEventListener('click', function(e) {
                // Add a ripple effect on click
                const ripple = document.createElement('span');
                ripple.classList.add('absolute', 'inset-0', 'bg-white/30', 'rounded-xl');
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                this.appendChild(ripple);
                
                // Remove the ripple after animation completes
                setTimeout(() => {
                    ripple.remove();
                }, 700);
                
                // If browser doesn't support download attribute, handle manually
                if (!('download' in document.createElement('a'))) {
                    e.preventDefault();
                    window.open(this.href, '_blank');
                }
                // Otherwise, let the browser handle it with the download attribute
            });
        }

        // View Projects Button
        const viewProjectsBtn = document.querySelector('.flex-wrap.gap-4 a[href="#projects"]');
        if (viewProjectsBtn) {
            viewProjectsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add a ripple effect on click
                const ripple = document.createElement('span');
                ripple.classList.add('absolute', 'inset-0', 'bg-primary-600/20', 'dark:bg-primary-400/20', 'rounded-xl');
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                this.appendChild(ripple);
                
                // Remove the ripple after animation completes
                setTimeout(() => {
                    ripple.remove();
                }, 700);
                
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                    window.scrollTo({
                        top: projectsSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // Add ripple animation to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Handle 3D Floating Elements
    const handleFloatingElements = () => {
        const floatingElements = document.querySelectorAll('.floating-3d-element');
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];
        let currentSection = '';
        let lastScrollTop = 0;
        let scrollDirection = 'down';
        let isTransitioning = false;
        
        // Set initial positions
        const setElementPositions = (section) => {
            // Don't change if already transitioning
            if (isTransitioning) return;
            
            isTransitioning = true;
            
            // First, fade out all elements
            floatingElements.forEach(el => {
                if (el.classList.contains('active')) {
                    el.style.opacity = '0';
                }
            });
            
            // Wait for fade out, then reposition
            setTimeout(() => {
                // Remove all position classes
                floatingElements.forEach(el => {
                    el.classList.remove('active');
                    el.classList.remove('section-home-element', 'section-about-element', 'section-skills-element', 'section-projects-element', 'section-contact-element');
                });
                
                // Show and position elements based on current section
                switch(section) {
                    case 'home':
                        document.getElementById('data-icon').classList.add('active', 'section-home-element');
                        document.getElementById('chart-icon').classList.add('active', 'section-about-element');
                        break;
                    case 'about':
                        document.getElementById('chart-icon').classList.add('active', 'section-home-element');
                        document.getElementById('database-icon').classList.add('active', 'section-about-element');
                        break;
                    case 'skills':
                        document.getElementById('database-icon').classList.add('active', 'section-home-element');
                        document.getElementById('analytics-icon').classList.add('active', 'section-skills-element');
                        break;
                    case 'projects':
                        document.getElementById('analytics-icon').classList.add('active', 'section-about-element');
                        document.getElementById('dashboard-icon').classList.add('active', 'section-projects-element');
                        break;
                    case 'contact':
                        document.getElementById('dashboard-icon').classList.add('active', 'section-skills-element');
                        document.getElementById('data-icon').classList.add('active', 'section-contact-element');
                        break;
                }
                
                // End transition state after elements are repositioned
                setTimeout(() => {
                    isTransitioning = false;
                }, 1200); // Match the CSS transition time
            }, 300);
        };
        
        // Determine current section based on scroll position with debounce
        let scrollTimeout;
        const determineCurrentSection = () => {
            // Clear the timeout if it has been set
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Set a timeout to run after scrolling ends
            scrollTimeout = setTimeout(() => {
                const scrollTop = window.scrollY;
                
                // Determine scroll direction
                scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
                lastScrollTop = scrollTop;
                
                // Check which section is in view
                let newSection = '';
                sections.forEach(section => {
                    const sectionElement = document.getElementById(section);
                    if (sectionElement) {
                        const sectionTop = sectionElement.offsetTop - 100;
                        const sectionHeight = sectionElement.offsetHeight;
                        
                        if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                            newSection = section;
                        }
                    }
                });
                
                // Only update if we've changed sections
                if (newSection && newSection !== currentSection) {
                    currentSection = newSection;
                    setElementPositions(currentSection);
                }
            }, 100); // Small delay to avoid excessive calculations
        };
        
        // Add subtle mouse parallax effect that doesn't override position
        const addMouseParallax = () => {
            document.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX / window.innerWidth - 0.5;
                const mouseY = e.clientY / window.innerHeight - 0.5;
                
                floatingElements.forEach(el => {
                    if (el.classList.contains('active')) {
                        const depth = 10; // Reduced movement for subtlety
                        const moveX = mouseX * depth;
                        const moveY = mouseY * depth;
                        
                        // Apply subtle movement based on mouse position
                        // Use transform: translate() to avoid overriding the animation
                        el.style.marginLeft = `${moveX}px`;
                        el.style.marginTop = `${moveY}px`;
                    }
                });
            });
        };
        
        // Initialize
        window.addEventListener('scroll', determineCurrentSection);
        window.addEventListener('load', () => {
            // Set initial section based on scroll position
            const scrollTop = window.scrollY;
            let initialSection = 'home';
            
            sections.forEach(section => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop - 100;
                    const sectionHeight = sectionElement.offsetHeight;
                    
                    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                        initialSection = section;
                    }
                }
            });
            
            currentSection = initialSection;
            setElementPositions(currentSection);
            addMouseParallax();
        });
    };
    
    // Call the floating elements handler
    handleFloatingElements();

    // View All Projects Button
    document.addEventListener('DOMContentLoaded', function() {
        const viewAllProjectsBtn = document.getElementById('viewAllProjectsBtn');
        const hiddenProjects = document.getElementById('hiddenProjects');
        
        if (viewAllProjectsBtn && hiddenProjects) {
            viewAllProjectsBtn.addEventListener('click', function() {
                hiddenProjects.classList.toggle('hidden');
                
                // Change button text based on state
                if (hiddenProjects.classList.contains('hidden')) {
                    viewAllProjectsBtn.innerHTML = `
                        View All Projects
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    `;
                } else {
                    viewAllProjectsBtn.innerHTML = `
                        Show Less
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                        </svg>
                    `;
                }
            });
        }
    });

    // Project Card Button Effects
    document.addEventListener('DOMContentLoaded', function() {
        // Add ripple effect to all project card buttons
        const projectButtons = document.querySelectorAll('.project-card a[data-project], .project-card a[target="_blank"]');
        
        projectButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple element
                const ripple = document.createElement('span');
                const isDataProject = this.hasAttribute('data-project');
                
                // Set appropriate classes based on button type
                if (isDataProject) {
                    ripple.classList.add('absolute', 'inset-0', 'bg-white/30', 'rounded-xl', 'ripple');
                } else {
                    ripple.classList.add('absolute', 'inset-0', 'bg-primary-600/20', 'dark:bg-primary-400/20', 'rounded-xl', 'ripple');
                }
                
                // Set initial styles
                ripple.style.transform = 'scale(0)';
                
                // Add to button
                this.appendChild(ripple);
                
                // Remove after animation completes
                setTimeout(() => {
                    ripple.remove();
                }, 700);
            });
        });
    });

    // Project Section Bottom Buttons Effects
    document.addEventListener('DOMContentLoaded', function() {
        // Add ripple effect to the View All Projects button
        const viewAllProjectsBtn = document.getElementById('viewAllProjectsBtn');
        if (viewAllProjectsBtn) {
            viewAllProjectsBtn.addEventListener('click', function(e) {
                // Create ripple element
                const ripple = document.createElement('span');
                ripple.classList.add('absolute', 'inset-0', 'bg-white/30', 'rounded-xl', 'ripple');
                
                // Set initial styles
                ripple.style.transform = 'scale(0)';
                
                // Add to button
                this.appendChild(ripple);
                
                // Remove after animation completes
                setTimeout(() => {
                    ripple.remove();
                }, 700);
            });
        }
        
        // Add ripple effect to the GitHub Profile link
        const githubProfileLink = document.querySelector('.text-center.mt-12.space-y-4 a[href*="github.com"]');
        if (githubProfileLink) {
            githubProfileLink.addEventListener('click', function(e) {
                // Create ripple element
                const ripple = document.createElement('span');
                ripple.classList.add('absolute', 'inset-0', 'bg-primary-600/20', 'dark:bg-primary-400/20', 'rounded-xl', 'ripple');
                
                // Set initial styles
                ripple.style.transform = 'scale(0)';
                
                // Add to button
                this.appendChild(ripple);
                
                // Remove after animation completes
                setTimeout(() => {
                    ripple.remove();
                }, 700);
            });
        }
    });

})(); 