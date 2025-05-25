// Update experience section with all jobs from CV
function updateExperienceSection() {
  const experienceData = [
    {
      title: "PRINCIPLE TECHNICAL CONSULTANT (AI/ML)",
      company: "Bayseian",
      location: "London, UK",
      period: "Nov 2023 – Present",
      responsibilities: [
        "Architected and deployed scalable AI/ML infrastructures on Google Cloud Platform (GCP) and Amazon Web Services (AWS), optimising model deployment and operational efficiency.",
        "Delivered multiple innovative generative AI solutions for various customers, driving measurable ROI by leveraging state-of-the-art machine learning and generative AI techniques.",
        "Designed and implemented MLOps frameworks, including CI/CD pipelines, to automate model lifecycle management, reduce deployment time by 50%, and ensure continuous model improvement.",
        "Implemented robust data governance frameworks and managed data lineage to ensure data quality, privacy, compliance, and transparency in machine learning initiatives.",
        "Directed a team of five data scientists and engineers, managing full lifecycle AI model development from prototyping to production."
      ]
    },
    {
      title: "HEAD OF DATA SCIENCE & INNOVATION",
      company: "The Open University",
      location: "Milton Keynes, UK",
      period: "Jan 2022 – Present",
      responsibilities: [
        "Developed and executed AI strategy aligned with business objectives, driving operational efficiency, fostering innovation, and increasing productivity by 30%.",
        "Led cross-departmental AI adoption, scaling the data science team from 3 to 15 and delivering solutions that generated £200K in revenue within six months.",
        "Operationalized large language models (LLMs) and MLOps pipelines, automating CI/CD, version control, and monitoring, boosting model performance by 40% and reducing costs by £150,000.",
        "Implemented AI solutions across academic and administrative functions, improving collaboration and reducing project delivery timelines by 20%.",
        "Established robust model monitoring processes, reducing model drift, and improving production model performance by 30%.",
        "Championed responsible AI by reducing bias in algorithms, resulting in a 15% improvement in fairness, while effectively engaging stakeholders across departments with actionable AI insights."
      ]
    },
    {
      title: "LEAD DATA SCIENTIST",
      company: "The Open University",
      location: "Milton Keynes, UK",
      period: "Sep 2020 – Dec 2021",
      responsibilities: [
        "Developed and deployed a family of machine learning models, increasing student enrollment by 6% and boosting financial revenue by 10%.",
        "Mentored junior team members, fostering a culture of continuous learning and innovation in AI technologies.",
        "Led Python, Databricks and cloud computing tutorials, contributing to a collaborative learning environment within the team."
      ]
    },
    {
      title: "LEAD DATA SCIENTIST",
      company: "Cambridge Cancer Genomics (acquired by Dante Labs)",
      location: "Cambridge, UK",
      period: "Feb 2019 – Aug 2020",
      responsibilities: [
        "Led the development of deep learning models for precision oncology, predicting immunotherapy responses and identifying cancer driver mutations, contributing to advancements in cancer diagnostics.",
        "Applied innovative AI-driven approaches to analyse longitudinal mutational data, predicting cancer evolution and enhancing the understanding of cancer progression."
      ]
    },
    {
      title: "POSTDOCTORAL RESEARCH FELLOW (AI)",
      company: "King's College London",
      location: "London, UK",
      period: "Sep 2018 – Feb 2019",
      responsibilities: [
        "Led AI research in the Department of Informatics, focusing on accountability systems for autonomous vehicles using machine learning.",
        "Applied advanced algorithms to complex data sets, driving the development of AI-aware accountability frameworks."
      ]
    },
    {
      title: "MACHINE LEARNING RESEARCHER",
      company: "5G/6G Innovation Centre, University of Surrey",
      location: "Guildford, UK",
      period: "Sep 2013 – Jan 2018",
      responsibilities: [
        "Conducted real-time IoT data analysis using machine learning, contributing to EU-funded projects that advanced state-of-the-art research in data processing and drove technological innovations in real-time IoT and data stream analysis."
      ]
    }
  ];

  const timelineContainer = document.querySelector('.timeline');
  if (!timelineContainer) return;
  
  // Clear existing content
  timelineContainer.innerHTML = '';
  
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
}

// Update projects section with all projects from CV
function updateProjectsSection() {
  const projectsData = [
    {
      title: "Automated Email Reply System",
      description: "Developed a generative AI system to automate email replies, reducing staff response times by 20% and saving £50K in the first year, with projected savings of £2M upon full-scale implementation.",
      tags: ["Generative AI", "Automation", "NLP"]
    },
    {
      title: "Student Outcome Prediction Models",
      description: "Led the deployment of predictive models for student success, driving personalised interventions that improved retention rates. Utilised MLOps for scalable, reliable model deployment.",
      tags: ["Machine Learning", "MLOps", "Education"]
    },
    {
      title: "Generative AI-Based Quality Assurance",
      description: "Constructed a generative AI QA system that improved data evaluation coverage from 0.6% to 100%, enhancing the quality and accuracy of student communications, which resulted in higher student satisfaction and reduced errors.",
      tags: ["Generative AI", "QA", "NLP"]
    },
    {
      title: "Mental Health Support Chat App using Generative AI and RAG",
      description: "Designed a chat-based mental health support app using Retrieval-Augmented Generation (RAG) to provide personalised responses. The system helped prioritise critical cases, improving patient care and response times.",
      tags: ["RAG", "Healthcare", "NLP"]
    },
    {
      title: "Real-Time E-commerce Recommendation System",
      description: "Built a real-time recommendation system for an e-commerce client using Google Search for Retail API, delivering personalised product suggestions that increased conversion rates and boosted sales.",
      tags: ["Recommendations", "E-commerce", "Google API"]
    }
  ];
  
  const projectsGrid = document.querySelector('.projects-grid');
  if (!projectsGrid) return;
  
  // Clear existing content
  projectsGrid.innerHTML = '';
  
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
}

// Update education section with all education from CV
function updateEducationSection() {
  const educationData = [
    {
      degree: "MPhil in AI Ethics & Society",
      institution: "University of Cambridge",
      year: "2024",
      details: "Thesis: \"From Prediction to Parity: A Quantitative Analysis of Algorithmic Fairness in Higher Education\""
    },
    {
      degree: "PhD in Electronics Engineering",
      institution: "University of Surrey",
      year: "2018",
      details: "Thesis: \"Extracting Knowledge from Raw IoT Data Streams\""
    },
    {
      degree: "MSc in Electronics Engineering",
      institution: "University of Surrey",
      year: "2010",
      details: "Thesis: \"Developing Device Driver for DSP Application Processor\", Final grade: 80%"
    },
    {
      degree: "BSc in Electronics Engineering",
      institution: "University of Engineering & Technology, Pakistan",
      year: "2009",
      details: ""
    }
  ];
  
  const educationGrid = document.querySelector('.education-grid');
  if (!educationGrid) return;
  
  // Clear existing content
  educationGrid.innerHTML = '';
  
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
}

// Update achievements section with all achievements from CV
function updateAchievementsSection() {
  const achievementsData = [
    "Winner of the HESPA Innovation Award 2025 for groundbreaking work on leveraging GenAI to enhance operational efficiencies at The Open University",
    "Recognised as DataIQ Future Leader for 2025 for contributions to AI and machine learning in the public and private sectors",
    "Endorsed as an Upcoming Future Leader in Data Science by the Royal Academy of Engineering, UK (2021), for implementing cutting-edge, impactful data science solutions across various organizations.",
    "Awarded full PhD scholarship by University of Surrey, selected from over 100 candidates for an exceptional proposal in machine learning research."
  ];
  
  const achievementsList = document.querySelector('.achievements-list');
  if (!achievementsList) return;
  
  // Clear existing content
  achievementsList.innerHTML = '';
  
  // Add achievement items
  achievementsData.forEach((achievement, index) => {
    const achievementItem = document.createElement('div');
    achievementItem.className = 'achievement-item';
    
    // Use different icons for different achievements
    let iconClass = 'fas fa-trophy';
    if (index === 1) iconClass = 'fas fa-award';
    if (index === 2) iconClass = 'fas fa-medal';
    if (index === 3) iconClass = 'fas fa-graduation-cap';
    
    achievementItem.innerHTML = `
      <i class="${iconClass}"></i>
      <p>${achievement}</p>
    `;
    
    achievementsList.appendChild(achievementItem);
  });
}

// Update contact information
function updateContactInfo() {
  const contactInfo = {
    email: "adnan.akbar@outlook.com",
    phone: "+44 792 721 0401",
    location: "London, UK"
  };
  
  const emailElement = document.querySelector('.contact-item:nth-child(1) p');
  const phoneElement = document.querySelector('.contact-item:nth-child(2) p');
  const locationElement = document.querySelector('.contact-item:nth-child(3) p');
  
  if (emailElement) emailElement.textContent = contactInfo.email;
  if (phoneElement) phoneElement.textContent = contactInfo.phone;
  if (locationElement) locationElement.textContent = contactInfo.location;
}

// Call all update functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateExperienceSection();
  updateProjectsSection();
  updateEducationSection();
  updateAchievementsSection();
  updateContactInfo();
});
