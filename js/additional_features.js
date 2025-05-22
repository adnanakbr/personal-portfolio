/* 
* Additional features for Adnan Akbar's Profile Website
* Author: Manus AI
* Version: 1.0
*/

// SEO Optimization
document.addEventListener('DOMContentLoaded', function() {
    // Add meta tags for SEO
    addMetaTags();
    
    // Add schema.org structured data
    addStructuredData();
    
    // Add print styles
    addPrintStyles();
    
    // Update social media links with actual URLs if provided
    updateSocialLinks();
    
    // Add scroll to top button
    addScrollToTopButton();
    
    // Add dark mode toggle
    addDarkModeToggle();
});

// Add meta tags for SEO
function addMetaTags() {
    const head = document.head;
    
    // Create and add meta description
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Adnan Akbar, PhD - Senior Data Scientist and AI Leader with 12+ years experience in machine learning, AI, and data science. Expertise in cloud platforms, MLOps, and generative AI.';
    head.appendChild(metaDescription);
    
    // Create and add meta keywords
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'Data Science, AI, Machine Learning, MLOps, Cloud Computing, Generative AI, LLMs, Data Scientist, AI Scientist, Innovation Strategist';
    head.appendChild(metaKeywords);
    
    // Create and add meta author
    const metaAuthor = document.createElement('meta');
    metaAuthor.name = 'author';
    metaAuthor.content = 'Adnan Akbar, PhD';
    head.appendChild(metaAuthor);
    
    // Create and add Open Graph meta tags for social sharing
    const ogTitle = document.createElement('meta');
    ogTitle.property = 'og:title';
    ogTitle.content = 'Adnan Akbar, PhD - Data Science Leader & AI Scientist';
    head.appendChild(ogTitle);
    
    const ogDescription = document.createElement('meta');
    ogDescription.property = 'og:description';
    ogDescription.content = 'Senior Data Scientist and AI Leader with 12+ years experience in machine learning, AI, and data science.';
    head.appendChild(ogDescription);
    
    const ogType = document.createElement('meta');
    ogType.property = 'og:type';
    ogType.content = 'profile';
    head.appendChild(ogType);
    
    // Add Twitter Card meta tags
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    head.appendChild(twitterCard);
    
    const twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = 'Adnan Akbar, PhD - Data Science Leader & AI Scientist';
    head.appendChild(twitterTitle);
    
    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = 'Senior Data Scientist and AI Leader with 12+ years experience in machine learning, AI, and data science.';
    head.appendChild(twitterDescription);
}

// Add schema.org structured data for better SEO
function addStructuredData() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Adnan Akbar",
        "honorificSuffix": "PhD",
        "jobTitle": "Data Science Leader, AI Scientist, Innovation Strategist",
        "worksFor": {
            "@type": "Organization",
            "name": "Bayseian"
        },
        "alumniOf": [
            {
                "@type": "CollegeOrUniversity",
                "name": "University of Cambridge"
            },
            {
                "@type": "CollegeOrUniversity",
                "name": "University of Surrey"
            }
        ],
        "knowsAbout": ["Data Science", "Artificial Intelligence", "Machine Learning", "MLOps", "Cloud Computing", "Generative AI"],
        "email": "adnan.akbar@outlook.com",
        "telephone": "+44 792 721 0401",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "London",
            "addressCountry": "UK"
        }
    };
    
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Add print styles for better printing
function addPrintStyles() {
    const style = document.createElement('style');
    style.media = 'print';
    style.textContent = `
        @media print {
            body {
                font-size: 12pt;
                color: #000;
                background-color: #fff;
            }
            
            .navbar, .hero-cta, .contact-form, .footer, #scrollToTop, #darkModeToggle {
                display: none !important;
            }
            
            .container {
                width: 100%;
                max-width: 100%;
                padding: 0;
                margin: 0;
            }
            
            section {
                page-break-inside: avoid;
                margin: 20pt 0;
                padding: 10pt 0;
                border: none;
                background: none !important;
            }
            
            h1, h2, h3 {
                page-break-after: avoid;
            }
            
            ul, ol, li {
                page-break-inside: avoid;
            }
            
            .timeline::before {
                display: none;
            }
            
            .timeline-content::before {
                display: none;
            }
            
            .timeline-item, .project-card, .education-card, .skill-category, .achievement-item {
                page-break-inside: avoid;
                break-inside: avoid;
                box-shadow: none;
                border: 1px solid #ddd;
            }
            
            a {
                text-decoration: none;
                color: #000;
            }
            
            a::after {
                content: " (" attr(href) ")";
                font-size: 10pt;
                font-style: italic;
            }
            
            .hero-section {
                background: none;
                color: #000;
                padding: 0;
            }
            
            .hero-section h1, .hero-section h2 {
                color: #000;
            }
            
            .section-title::after {
                background-color: #000;
            }
            
            @page {
                margin: 2cm;
            }
        }
    `;
    document.head.appendChild(style);
}

// Update social media links with actual URLs if provided
function updateSocialLinks() {
    // LinkedIn URL - replace with actual URL if available
    const linkedInLinks = document.querySelectorAll('a[href="#"][target="_blank"] .fa-linkedin');
    linkedInLinks.forEach(icon => {
        const link = icon.closest('a');
        if (link) {
            link.href = "https://www.linkedin.com/in/adnan-akbar/"; // Replace with actual LinkedIn URL
        }
    });
    
    // Google Scholar URL - replace with actual URL if available
    const scholarLinks = document.querySelectorAll('a[href="#"][target="_blank"] .fa-graduation-cap');
    scholarLinks.forEach(icon => {
        const link = icon.closest('a');
        if (link) {
            link.href = "https://scholar.google.com/citations?user=adnan-akbar"; // Replace with actual Google Scholar URL
        }
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    // Create the button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTop';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.title = 'Scroll to top';
    document.body.appendChild(scrollToTopBtn);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #scrollToTop {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background-color: var(--primary-color);
            color: var(--white);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 999;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-fast);
        }
        
        #scrollToTop:hover {
            background-color: var(--secondary-color);
            transform: translateY(-3px);
        }
    `;
    document.head.appendChild(style);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add dark mode toggle
function addDarkModeToggle() {
    // Create the toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'darkModeToggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeToggle.title = 'Toggle dark mode';
    document.body.appendChild(darkModeToggle);
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #darkModeToggle {
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
            background-color: var(--primary-color);
            color: var(--white);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            box-shadow: var(--shadow-md);
            transition: all var(--transition-fast);
        }
        
        #darkModeToggle:hover {
            background-color: var(--secondary-color);
            transform: translateY(-3px);
        }
        
        body.dark-mode {
            --primary-color: #1e3a8a;
            --secondary-color: #0e7490;
            --accent-color: #fbbf24;
            --background-color: #1e293b;
            --text-color: #e2e8f0;
            --white: #0f172a;
            --light-gray: #334155;
            --medium-gray: #64748b;
            --dark-gray: #94a3b8;
        }
        
        body.dark-mode .navbar,
        body.dark-mode .project-card,
        body.dark-mode .education-card,
        body.dark-mode .contact-form,
        body.dark-mode .timeline-content {
            background-color: #1e293b;
            color: #e2e8f0;
        }
        
        body.dark-mode .skill-category,
        body.dark-mode .achievement-item {
            background-color: #0f172a;
        }
        
        body.dark-mode h1, 
        body.dark-mode h2, 
        body.dark-mode h3, 
        body.dark-mode .job-title, 
        body.dark-mode .degree {
            color: #e2e8f0;
        }
        
        body.dark-mode .nav-link {
            color: #e2e8f0;
        }
        
        body.dark-mode .nav-link:hover {
            color: var(--accent-color);
        }
        
        body.dark-mode .about-section,
        body.dark-mode .skills-section,
        body.dark-mode .achievements-section,
        body.dark-mode .contact-section {
            background-color: #0f172a;
        }
        
        body.dark-mode .experience-section,
        body.dark-mode .projects-section,
        body.dark-mode .education-section {
            background-color: #1e293b;
        }
        
        body.dark-mode .footer {
            background-color: #0f172a;
        }
        
        body.dark-mode .tech-tag {
            background-color: #334155;
            color: #e2e8f0;
        }
        
        body.dark-mode .form-group input,
        body.dark-mode .form-group textarea {
            background-color: #1e293b;
            color: #e2e8f0;
            border-color: #334155;
        }
    `;
    document.head.appendChild(style);
    
    // Check for saved preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle dark mode when clicked
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const isDarkModeNow = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkModeNow);
        
        if (isDarkModeNow) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}
