/**
 * Main JavaScript file for Adnan Akbar's Profile Website
 * Author: Manus AI
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Sticky navigation on scroll
    const navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;
    
    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12)';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling (placeholder - would need backend integration)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            // For now, just show a success message
            alert('Thank you for your message! This is a demo form and does not actually send emails.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-card, .achievement-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .education-card, .achievement-item');
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Dynamically populate experience items from CV data
    // This would typically come from a database or API, but for this demo we'll add it directly
    const populateExperienceItems = function() {
        const experienceData = [
            {
                title: 'HEAD OF DATA SCIENCE & INNOVATION',
                company: 'The Open University',
                location: 'Milton Keynes, UK',
                period: 'Jan 2022 – Present',
                responsibilities: [
                    'Developed and executed AI strategy aligned with business objectives, driving operational efficiency, fostering innovation, and increasing productivity by 30%.',
                    'Led cross-departmental AI adoption, scaling the data science team from 3 to 15 and delivering solutions that generated £200K in revenue within six months.',
                    'Operationalized large language models (LLMs) and MLOps pipelines, automating CI/CD, version control, and monitoring, boosting model performance by 40% and reducing costs by £150,000.',
                    'Implemented AI solutions across academic and administrative functions, improving collaboration and reducing project delivery timelines by 20%.',
                    'Established robust model monitoring processes, reducing model drift, and improving production model performance by 30%.',
                    'Championed responsible AI by reducing bias in algorithms, resulting in a 15% improvement in fairness, while effectively engaging stakeholders across departments with actionable AI insights.'
                ]
            },
            {
                title: 'LEAD DATA SCIENTIST',
                company: 'The Open University',
                location: 'Milton Keynes, UK',
                period: 'Sep 2020 – Dec 2021',
                responsibilities: [
                    'Developed and deployed a family of machine learning models, increasing student enrollment by 6% and boosting financial revenue by 10%.',
                    'Mentored junior team members, fostering a culture of continuous learning and innovation in AI technologies.',
                    'Led Python, Databricks and cloud computing tutorials, contributing to a collaborative learning environment within the team.'
                ]
            },
            {
                title: 'LEAD DATA SCIENTIST',
                company: 'Cambridge Cancer Genomics (acquired by Dante Labs)',
                location: 'Cambridge, UK',
                period: 'Feb 2019 – Aug 2020',
                responsibilities: [
                    'Led the development of deep learning models for precision oncology, predicting immunotherapy responses and identifying cancer driver mutations, contributing to advancements in cancer diagnostics.',
                    'Applied innovative AI-driven approaches to analyse longitudinal mutational data, predicting cancer evolution and enhancing the understanding of cancer progression.'
                ]
            },
            {
                title: 'POSTDOCTORAL RESEARCH FELLOW (AI)',
                company: 'King\'s College London',
                location: 'London, UK',
                period: 'Sep 2018 – Feb 2019',
                responsibilities: [
                    'Led AI research in the Department of Informatics, focusing on accountability systems for autonomous vehicles using machine learning.',
                    'Applied advanced algorithms to complex data sets, driving the development of AI-aware accountability frameworks.'
                ]
            },
            {
                title: 'MACHINE LEARNING RESEARCHER',
                company: '5G/6G Innovation Centre, University of Surrey',
                location: 'Guildford, UK',
                period: 'Sep 2013 – Jan 2018',
                responsibilities: [
                    'Conducted real-time IoT data analysis using machine learning, contributing to EU-funded projects that advanced state-of-the-art research in data processing and drove technological innovations in real-time IoT and data stream analysis.'
                ]
            }
        ];
        
        const timelineContainer = document.querySelector('.timeline');
        if (!timelineContainer) return;
        
        // Clear existing content (except the first item which is already in HTML)
        const existingItems = timelineContainer.querySelectorAll('.timeline-item');
        if (existingItems.length > 1) {
            for (let i = 1; i < existingItems.length; i++) {
                existingItems[i].remove();
            }
        }
        
        // Add experience items
        experienceData.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            let responsibilitiesHTML = '';
            item.responsibilities.forEach(resp => {
                responsibilitiesHTML += `<li>${resp}</li>`;
            });
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <h3 class="job-title">${item.title}</h3>
                    <div class="company-info">
                        <span class="company-name">${item.company}</span>
                        <span class="job-location">${item.location}</span>
                        <span class="job-period">${item.period}</span>
                    </div>
                    <ul class="job-responsibilities">
                        ${responsibilitiesHTML}
                    </ul>
                </div>
            `;
            
            timelineContainer.appendChild(timelineItem);
        });
    };
    
    // Populate projects
    const populateProjects = function() {
        const projectsData = [
            {
                title: 'Student Outcome Prediction Models',
                description: 'Led the deployment of predictive models for student success, driving personalised interventions that improved retention rates. Utilised MLOps for scalable, reliable model deployment.',
                tags: ['Machine Learning', 'MLOps', 'Education']
            },
            {
                title: 'Generative AI-Based Quality Assurance',
                description: 'Constructed a generative AI QA system that improved data evaluation coverage from 0.6% to 100%, enhancing the quality and accuracy of student communications, which resulted in higher student satisfaction and reduced errors.',
                tags: ['Generative AI', 'QA', 'NLP']
            },
            {
                title: 'Mental Health Support Chat App',
                description: 'Designed a chat-based mental health support app using Retrieval-Augmented Generation (RAG) to provide personalised responses. The system helped prioritise critical cases, improving patient care and response times.',
                tags: ['RAG', 'Healthcare', 'NLP']
            },
            {
                title: 'Real-Time E-commerce Recommendation System',
                description: 'Built a real-time recommendation system for an e-commerce client using Google Search for Retail API, delivering personalised product suggestions that increased conversion rates and boosted sales.',
                tags: ['Recommendations', 'E-commerce', 'Google API']
            }
        ];
        
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;
        
        // Clear existing content (except the first item which is already in HTML)
        const existingItems = projectsGrid.querySelectorAll('.project-card');
        if (existingItems.length > 1) {
            for (let i = 1; i < existingItems.length; i++) {
                existingItems[i].remove();
            }
        }
        
        // Add project items
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            let tagsHTML = '';
            project.tags.forEach(tag => {
                tagsHTML += `<span class="tech-tag">${tag}</span>`;
            });
            
            projectCard.innerHTML = `
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${tagsHTML}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    };
    
    // Populate education
    const populateEducation = function() {
        const educationData = [
            {
                degree: 'PhD in Electronics Engineering',
                institution: 'University of Surrey',
                year: '2018',
                details: 'Thesis: "Extracting Knowledge from Raw IoT Data Streams"'
            },
            {
                degree: 'MSc in Electronics Engineering',
                institution: 'University of Surrey',
                year: '2010',
                details: 'Thesis: "Developing Device Driver for DSP Application Processor", Final grade: 80%'
            },
            {
                degree: 'BSc in Electronics Engineering',
                institution: 'University of Engineering & Technology',
                year: '2009',
                details: 'Pakistan'
            }
        ];
        
        const educationGrid = document.querySelector('.education-grid');
        if (!educationGrid) return;
        
        // Clear existing content (except the first item which is already in HTML)
        const existingItems = educationGrid.querySelectorAll('.education-card');
        if (existingItems.length > 1) {
            for (let i = 1; i < existingItems.length; i++) {
                existingItems[i].remove();
            }
        }
        
        // Add education items
        educationData.forEach(edu => {
            const educationCard = document.createElement('div');
            educationCard.className = 'education-card';
            
            educationCard.innerHTML = `
                <div class="education-content">
                    <h3 class="degree">${edu.degree}</h3>
                    <div class="institution-info">
                        <span class="institution-name">${edu.institution}</span>
                        <span class="education-year">${edu.year}</span>
                    </div>
                    <p class="education-details">${edu.details}</p>
                </div>
            `;
            
            educationGrid.appendChild(educationCard);
        });
    };
    
    // Call functions to populate content
    populateExperienceItems();
    populateProjects();
    populateEducation();
});
