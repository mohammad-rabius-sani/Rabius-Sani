/**
 * Project Modal Functionality
 * This file handles the project details modal functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log("Project modal script loaded");
    
    // Project details data
    const projectDetails = {
        healthcare: {
            title: 'Healthcare Dataset Analysis',
            image: 'assets/images/projects/Profol-Healthcare-Dataset-m.jpg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">Comprehensive analysis of hospital patient records, including billing statistics, bed occupancy, and diagnosis trends.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Key Features</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li>Patient demographics analysis</li>
                            <li>Hospital resource utilization patterns</li>
                            <li>Treatment outcome analysis</li>
                            <li>Billing and insurance data visualization</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Technologies Used</h4>
                        <p class="text-slate-700 dark:text-slate-300">Power BI, SQL, Data Cleaning, Excel</p>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani/Profol-Healthcare-Dataset-Analysis'
        },
        mobile: {
            title: 'Mobile Sales Dashboard',
            image: 'assets/images/projects/Mobile Shop-m.jpg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">Interactive dashboard for mobile phone sales analysis, providing insights into top brands, customer ratings, and sales metrics.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Key Features</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li>Brand performance comparison</li>
                            <li>Sales trend analysis by region and time period</li>
                            <li>Customer satisfaction metrics</li>
                            <li>Price point optimization insights</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Technologies Used</h4>
                        <p class="text-slate-700 dark:text-slate-300">Power BI, DAX, Data Modeling</p>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani/-Mobile-Sales-Dashboard-Power-BI-'
        },
        music: {
            title: 'Music Streaming Analysis',
            image: 'assets/images/projects/music-m.jpg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">Analyzed user behavior and listening patterns on a music streaming platform to identify trends and preferences.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Key Features</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li>User engagement metrics analysis</li>
                            <li>Genre popularity trends</li>
                            <li>Artist performance analytics</li>
                            <li>Listening pattern visualization</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Technologies Used</h4>
                        <p class="text-slate-700 dark:text-slate-300">BigQuery, SQL, Looker Studio, Data Visualization</p>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani/Music-Store-Data-Analysis'
        },
        superstore: {
            title: 'Super Store Sales Analysis',
            image: 'assets/images/projects/superstore-m.jpg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">A comprehensive analysis of sales data from a superstore, identifying key trends, profitable segments, and areas for improvement.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Key Features</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li>Sales trend analysis across regions and categories</li>
                            <li>Profit margin optimization recommendations</li>
                            <li>Customer segmentation and targeting strategies</li>
                            <li>Interactive dashboards for data visualization</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Technologies Used</h4>
                        <p class="text-slate-700 dark:text-slate-300">Excel, SQL, Tableau, Power BI</p>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani/SuperStore-Sales-Data'
        },
        titanic: {
            title: 'Titanic Dataset Analysis',
            image: 'assets/images/projects/titanic-m.jpg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">Analysis of the famous Titanic dataset to uncover survival patterns and demographic insights using SQL queries and Power BI visualizations.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Tools Used</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li><strong>SQL:</strong> For data extraction and analysis</li>
                            <li><strong>Power BI:</strong> For creating interactive visualizations</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Key Findings</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li>Survival rates by passenger class, gender, and age</li>
                            <li>Family size correlation with survival probability</li>
                            <li>Embarkation point impact on survival chances</li>
                        </ul>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani/Titanic-Dataset-Analysis'
        },
        bike: {
            title: 'Bike Sales Analysis',
            image: 'assets/images/projects/bike-m.jpg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">Excel-based analysis of bike sales data using pivot tables and interactive dashboards to identify customer demographics and sales trends.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Key Features</h4>
                        <ul class="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-1">
                            <li>Customer demographic analysis</li>
                            <li>Sales trends by region and season</li>
                            <li>Interactive Excel dashboard with slicers</li>
                            <li>Price point optimization recommendations</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Technologies Used</h4>
                        <p class="text-slate-700 dark:text-slate-300">Excel, Pivot Tables, Data Visualization</p>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani/Bike-Sales-Analysis'
        },
        'future-project': {
            title: 'Future Project',
            image: 'assets/images/data-icon.svg',
            description: `
                <div class="space-y-6">
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Project Overview</h4>
                        <p class="text-slate-700 dark:text-slate-300">This is a placeholder for a future project. More details will be added soon.</p>
                    </div>
                    
                    <div>
                        <h4 class="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Coming Soon</h4>
                        <p class="text-slate-700 dark:text-slate-300">This project is currently in development. Check back later for updates!</p>
                    </div>
                </div>
            `,
            github: 'https://github.com/mohammad-rabius-sani'
        }
    };

    // Get modal elements - using the existing modal in the HTML
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalGithubLink = document.getElementById('modalGithubLink');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModalBtn2 = document.getElementById('closeModalBtn2');
    const modalBackdrop = document.getElementById('modalBackdrop');

    console.log("Modal elements:", { 
        modal: !!modal, 
        modalTitle: !!modalTitle, 
        modalContent: !!modalContent,
        modalGithubLink: !!modalGithubLink,
        closeModalBtn: !!closeModalBtn,
        closeModalBtn2: !!closeModalBtn2,
        modalBackdrop: !!modalBackdrop
    });

    // Add event listeners to project detail buttons
    const projectButtons = document.querySelectorAll('[data-project]');
    console.log("Found project buttons:", projectButtons.length);
    
    projectButtons.forEach(button => {
        console.log("Adding click listener to button with data-project:", button.getAttribute('data-project'));
        
        button.addEventListener('click', function(e) {
            console.log("Project button clicked:", this.getAttribute('data-project'));
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            if (project) {
                console.log("Opening modal for project:", project.title);
                
                // Update for new title structure with span
                const titleSpan = modalTitle.querySelector('span');
                if (titleSpan) {
                    titleSpan.textContent = project.title;
                } else {
                    modalTitle.textContent = project.title;
                }
                
                // Create content with image
                let contentHTML = '';
                
                // Add image if available
                if (project.image) {
                    // Display the modal image
                    contentHTML += `
                        <div class="mb-6 flex justify-center items-center bg-slate-100 dark:bg-slate-800 p-8 rounded-lg shadow-inner">
                            <img src="${project.image}" alt="${project.title}" class="w-full max-w-md object-contain">
                        </div>
                    `;
                }
                
                // Add description with styled sections
                contentHTML += `
                    <div class="space-y-4 text-[#333333] dark:text-[#F8F8F8]">
                        ${project.description.replace(/<h3>/g, '<h3 class="text-xl font-bold font-heading mb-2 relative">')
                            .replace(/<h4>/g, '<h4 class="text-lg font-bold font-heading mb-2 relative">')
                            .replace(/<p>/g, '<p class="text-[#666666] dark:text-[#CCCCCC] mb-3">')
                            .replace(/<ul>/g, '<ul class="list-disc pl-5 space-y-2 text-[#666666] dark:text-[#CCCCCC]">')}
                    </div>
                `;
                
                modalContent.innerHTML = contentHTML;
                
                // Set the GitHub link in the footer
                if (modalGithubLink) {
                    // Make sure the GitHub URL is valid
                    if (project.github && project.github.startsWith('https://github.com/')) {
                        // Set the href attribute
                        modalGithubLink.href = project.github;
                        
                        // Remove any classes that might be hiding the button
                        modalGithubLink.classList.remove('hidden');
                        
                        // Reset any styles that might be affecting clickability
                        modalGithubLink.style.position = 'relative';
                        modalGithubLink.style.zIndex = '20';
                        modalGithubLink.style.pointerEvents = 'auto';
                        
                        // Update the button text to include the project name
                        const buttonText = modalGithubLink.querySelector('span');
                        if (buttonText) {
                            buttonText.innerHTML = `
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                View ${project.title} on GitHub
                            `;
                        }
                        
                        console.log("GitHub link set to:", project.github);
                    } else {
                        // Hide the GitHub button if the URL is invalid
                        modalGithubLink.classList.add('hidden');
                    }
                }
                
                // Show modal
                modal.classList.remove('hidden');
                
                // Add animation effect
                const modalContainer = modal.querySelector('.relative');
                if (modalContainer) {
                    modalContainer.classList.remove('animate-fadeIn');
                    // Trigger reflow to restart animation
                    void modalContainer.offsetWidth;
                    modalContainer.classList.add('animate-fadeIn');
                }
                
                document.body.classList.add('overflow-hidden');
            } else {
                console.error("Project not found:", projectId);
            }
        });
    });

    // Close modal when clicking the close buttons
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            console.log("Close button clicked");
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }

    if (closeModalBtn2) {
        closeModalBtn2.addEventListener('click', function() {
            console.log("Close button 2 clicked");
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }

    // Close modal when clicking outside
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', function() {
            console.log("Modal backdrop clicked");
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            console.log("Escape key pressed");
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }
    });
}); 