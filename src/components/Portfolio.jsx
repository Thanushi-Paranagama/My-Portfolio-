import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';
import './Portfolio.css'; // Import the CSS file
import profileImage from '../assets/images/ThanushiPara.png';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Handle navigation and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xanovgnz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  // Image carousel for project cards
  const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = (e) => {
      e.stopPropagation();
      setCurrentIndex(prevIndex => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
    
    const goToNext = (e) => {
      e.stopPropagation();
      setCurrentIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
    
    return (
      <div className="image-carousel">
        <img src={images[currentIndex]} alt="Project" className="project-image" />
        {images.length > 1 && (
          <>
            <button className="carousel-btn prev-btn" onClick={goToPrevious}>
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-btn next-btn" onClick={goToNext}>
              <ChevronRight size={20} />
            </button>
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <span 
                  key={index} 
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  // Projects data with multiple images
  const projects = [
    {
      id: 1,
      title: "UrbanFood Marketplace Website",
      description: "An online marketplace connecting urban farmers and local producers with consumers seeking fresh food and handmade products including fruits, vegetables, dairy, baked goods, and crafts.",
      technologies: ["HTML", "C#", "CSS", "JavaScript", "Oracle RDBMS"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/UrbanFood-Market-"
    },
    {
      id: 2,
      title: "Health Care System",
      description: "A microservices-based Healthcare System built with Spring Boot and React. It allows patients to book appointments, make payments, and enables doctors and admins to manage everything efficiently. Looking forward to enhancing it with AI features and a mobile version!",
      technologies: ["Java", "API Integration", "React", "Spring Boot", "MySQL Workbench"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/Health-Care-System-API-"
    },
    {
      id: 3,
      title: "Smart Security Room System",
      description: "Intelligent system combining fingerprint access, LDR-based adaptive lighting, temperature-controlled fan speed, and light-sensitive automated curtains for enhanced comfort and home automation.",
      technologies: ["C++", "IoT", "Sensors", "Motors", "LEDs"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/Smart-Security-Room"
    },
    {
      id: 4,
      title: "Train Ticket Booking System",
      description: "Developed a Java-based Train Ticket Booking System using JDBC and MySQL. Features include user registration, secure login, real-time seat booking, schedule viewing, and admin management. Built with NetBeans, the project focuses on scalable design, CRUD operations, and a user-friendly GUI.",
      technologies: ["Java", "MySQL"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/-Train-Ticket-Booking-System"
    },
    {
      id: 5,
      title: "College Library Management System",
      description: "Developed a desktop-based College Library Management System using C#, .NET Framework, and SQL Server. Features include secure librarian login, book and user management, borrowing history, and real-time availability tracking. Designed for efficient, error-free library operations with a user-friendly Windows Forms GUI.",
      technologies: ["C#", "MySQL Workbench"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/-College-Library-Management-System"
    },
    {
      id: 6,
      title: "Crystal Palace Hotel Website",
      description: "Crystal Palace Hotel Website! Designed to enhance guest experience and improve customer engagement with a clean UI, hotel info, nearby attractions, guest reviews, and easy contact options. Built using HTML, CSS, JavaScript, PHP, and XAMPP with secure data validation.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/The-Crystal-Palace-Hotel-Website"
    },
    {
      id: 7,
      title: "Memory Game",
      description: "Developed a full-stack memory card game using Python (Flask) and JavaScript. Features include responsive design, dynamic difficulty (Easy/Medium/Hard), animated card flips, a JSON-based persistent leaderboard, and a RESTful API. Showcases skills in backend, frontend, game logic, and data handling.",
      technologies: ["Python", "JavaScript", "HTML", "CSS"],
      images: [
        "/api/placeholder/600/350",
        "/api/placeholder/600/350",
        "/api/placeholder/600/350"
      ],
      github: "https://github.com/Thanushi-Paranagama/Memory-Game-"
    }
  ];

  // Skills data
  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Java", "C++", "TypeScript"],
    frameworks: ["Bootstrap", "jQuery", "React", "Node.js"],
    tools: ["Git", "GitHub", "Visual Studio", "MySQL", "Oracle", "API Integration", "Visual Studio Code", "MongoDB", "Android Studio", "Arduino"]
  };

  // Education data
  const education = [
    {
      degree: "Higher National Diploma in Computing",
      institution: "NIBM",
      period: "Current",
      description: "Currently pursuing advanced studies in computing with focus on web development and software engineering."
    },
    {
      degree: "Diploma in Computing",
      institution: "NIBM",
      period: "Completed",
      gpa: "3.82 GPA",
      description: "Completed diploma with distinction, focusing on fundamental programming concepts and web technologies."
    }
  ];

  // Certificates data
  const certificates = [
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      issuer: "Duke University",
      date: "April 25th, 2025",
      description: "Strong foundation in web development with a focus on JavaScript, HTML, and CSS. Learned to build interactive web pages, manipulate the DOM, apply CSS styling effectively, and solve programming challenges. Included Optional Honors Content for deeper understanding."
    },
    {
      title: "Node.js Bootcamp",
      issuer: "LetsUpgrade",
      date: "April 23rd, 2025",
      description: "In-depth course on Node.js development, covering server-side JavaScript, Express framework, and building RESTful APIs."
    },
    {
      title: "React.js Bootcamp",
      issuer: "LetsUpgrade",
      date: "April 9th, 2025",
      description: "Comprehensive training in React.js, covering components, state management, hooks, and building modern user interfaces."
    } 
  ];

  return (
    <div className="portfolio-container">
      {/* Background elements */}
      <div className="animated-background">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>
        <div className="floating-shape shape5"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">
            Thanushi Paranagama
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {['home', 'about', 'projects', 'skills', 'education', 'certificates', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            {['home', 'about', 'projects', 'skills', 'education', 'certificates', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`mobile-nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="section hero-section">
          <div className="container hero-container">
            <div className="hero-text">
              <h2 className="hero-title">
                Hi, I'm <span className="highlight">Thanushi Paranagama</span>
              </h2>
              <h3 className="hero-subtitle">
                Software Engineering Student & Web Developer
              </h3>
              <p className="hero-description">
                Passionate about creating engaging web experiences and seeking internship opportunities to further enhance my skills.
              </p>
              <div className="button-group">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="primary-button"
                >
                  View Projects <ChevronRight size={18} className="button-icon" />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="secondary-button"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="hero-image">
              <div className="profile-circle">
                <img src={profileImage} alt="Thanushi Paranagama" className="profile-img" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">
              <span className="title-underline">About Me</span>
            </h2>
            <div className="about-content">
              <div className="about-text-container">
                <div className="about-text-box">
                  <p className="about-text">
                    I'm a dedicated computing student at NIBM pursuing a Higher National Diploma in Computing, with a strong passion for web development and programming.
                  </p>
                  <p className="about-text">
                    My educational journey has equipped me with a solid foundation in various programming languages and web technologies, which I apply to create intuitive and functional web applications.
                  </p>
                  <p className="about-text">
                    I'm currently seeking internship opportunities to apply my skills in a professional environment and continue growing as a developer. My focus areas include frontend development with HTML and React, backend development with C#, Java and Node.js, and delivering seamless user experiences.
                  </p>
                </div>
              </div>
              <div className="facts-container">
                <div className="facts-box">
                  <h3 className="facts-title">Quick Facts</h3>
                  <ul className="facts-list">
                    <li className="fact-item">
                      <div className="fact-bullet">
                        <div className="bullet-inner"></div>
                      </div>
                      <span>Software Engineering Student at NIBM</span>
                    </li>
                    <li className="fact-item">
                      <div className="fact-bullet">
                        <div className="bullet-inner"></div>
                      </div>
                      <span>Diploma completed with 3.82 GPA</span>
                    </li>
                    <li className="fact-item">
                      <div className="fact-bullet">
                        <div className="bullet-inner"></div>
                      </div>
                      <span>Frontend & backend development enthusiast</span>
                    </li>
                    <li className="fact-item">
                      <div className="fact-bullet">
                        <div className="bullet-inner"></div>
                      </div>
                      <span>Currently seeking internship opportunities</span>
                    </li>
                    <li className="fact-item">
                      <div className="fact-bullet">
                        <div className="bullet-inner"></div>
                      </div>
                      <span>Skilled in React.js, HTML, C#, Java & Node.js</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <h2 className="section-title">
              <span className="title-underline">Featured Projects</span>
            </h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <ImageCarousel images={project.images} />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      <Github size={16} className="link-icon" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <h2 className="section-title">
              <span className="title-underline">Skills & Expertise</span>
            </h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="category-title">Programming Languages</h3>
                <div className="skills-list">
                  {skills.languages.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-bar">
                        <div className="skill-progress"></div>
                      </div>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3 className="category-title">Frameworks & Libraries</h3>
                <div className="skills-list">
                  {skills.frameworks.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-bar">
                        <div className={`skill-progress ${skill === 'React' ? 'in-progress' : ''}`}></div>
                      </div>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3 className="category-title">Tools & Technologies</h3>
                <div className="skills-list">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-bar">
                        <div className="skill-progress"></div>
                      </div>
                      <span className="skill-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section education-section">
          <div className="container">
            <h2 className="section-title">
              <span className="title-underline">Education</span>
            </h2>
            <div className="education-timeline">
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="education-card">
                      <div className="education-header">
                        <h3 className="degree">{edu.degree}</h3>
                        <span className="period-badge">
                          {edu.period}
                        </span>
                      </div>
                      <p className="institution">{edu.institution}</p>
                      {edu.gpa && (
                        <p className="gpa">{edu.gpa}</p>
                      )}
                      <p className="education-description">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="section certificates-section">
          <div className="container">
            <h2 className="section-title">
              <span className="title-underline">Certificates</span>
            </h2>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <div className="certificate-content">
                    <div className="certificate-icon">
                      <div className="cert-badge"></div>
                    </div>
                    <div className="certificate-details">
                      <h3 className="certificate-title">{cert.title}</h3>
                      <div className="certificate-meta">
                        <span className="certificate-issuer">{cert.issuer}</span>
                        <span className="certificate-date">{cert.date}</span>
                      </div>
                      <p className="certificate-description">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <h2 className="section-title">
              <span className="title-underline">Contact Me</span>
            </h2>
            <div className="contact-content">
              <div className="contact-form-container">
                <h3 className="contact-subtitle">Get In Touch</h3>
                <div className="contact-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5" 
                      className="form-textarea"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button 
                    onClick={handleSubmit}
                    className="submit-button"
                  >
                    Send Message
                  </button>
                </div>
              </div>
              <div className="connect-container">
                <h3 className="contact-subtitle">Connect With Me</h3>
                <div className="connect-content">
                  <div className="social-links">
                    <h4 className="connect-heading">Social Links</h4>
                    <div className="social-list">
                      <a 
                        href="https://github.com/Thanushi-Paranagama" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <Github size={20} className="social-icon" />
                        <span>GitHub</span>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/thanushi-paranagama/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-link"
                      >
                        <Linkedin size={20} className="social-icon" />
                        <span>LinkedIn</span>
                      </a>
                      <a 
                        href="mailto:thanushiparanagama@gmail.com" 
                        className="social-link"
                      >
                        <Mail size={20} className="social-icon" />
                        <span>Email Me</span>
                      </a>
                    </div>
                  </div>
                  <div className="opportunity-box">
                    <h4 className="connect-heading">Looking For</h4>
                    <div className="opportunity-content">
                      <p>
                        Currently seeking internship opportunities in web development and software engineering. 
                        Seeking remote or on-site opportunities in full stack software development, leveraging both frontend and backend skills to create seamless user experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-content">
            <div className="footer-branding">
              <h2 className="footer-title">Thanushi Paranagama</h2>
              <p className="footer-subtitle">Software Engineering Student & Web Developer</p>
            </div>
            <div className="footer-social">
              <a 
                href="https://github.com/Thanushi-Paranagama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/thanushi-paranagama/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:thanushiparanagama@gmail.com" 
                className="footer-social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} Thanushi Paranagama. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}