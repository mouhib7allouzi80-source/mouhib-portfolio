import "./App.css";

const GITHUB_URL = "https://github.com/mouhib7allouzi80-source";
const LINKEDIN_URL = "https://www.linkedin.com/in/mouhib-ifaoui-982290351/";
const EMAIL = "mouhib7allouzi80@gmail.com";
const CV_URL = "/cv-mouhib.pdf";
const PROFILE_IMAGE = "/profile.jpg";

const skills = [
  "Python", "C / C++", "HTML5", "CSS3", "Flask", "SQL",
  "TCP/IP", "IPv4 / IPv6", "DNS", "DHCP", "Linux", "SSH",
  "Docker", "Docker Compose", "Git", "GitHub", "Jenkins",
  "GitHub Actions", "Kubernetes", "Minikube", "Helm",
  "PostgreSQL", "Prometheus", "Grafana", "SonarQube"
];

const experiences = [
  {
    number: "01",
    company: "JobGate",
    role: "DevOps Intern",
    date: "September 2025",
    description: "Worked on microservices development and deployment, CI/CD automation, code quality analysis, and infrastructure monitoring.",
    tasks: [
      "Developed microservices using Spring Boot and Docker.",
      "Explored deployment on Kubernetes.",
      "Worked with GitLab CI for CI/CD pipelines.",
      "Used SonarQube, Prometheus, and Grafana."
    ],
    tags: ["Spring Boot", "Docker", "Kubernetes", "GitLab CI", "SonarQube"]
  },
  {
    number: "02",
    company: "Satoripop",
    role: "Web Development Intern",
    date: "June 2026",
    description: "Contributed to web application development and application module integration.",
    tasks: [
      "Implemented MVC architecture and routing.",
      "Developed authentication and CRUD functionality.",
      "Optimized Blade templates and integrated HTML/CSS templates.",
      "Worked with middleware, plugins, accounting, and invoicing modules."
    ],
    tags: ["MVC", "Blade", "PHP", "HTML", "CSS"]
  },
  {
    number: "03",
    company: "Enova Robotics",
    role: "PGuard — Autonomous Security Robot",
    date: "June 2026",
    description: "Explored the architecture and technologies of an autonomous mobile robot designed for surveillance and security.",
    tasks: [
      "Studied GPS and 3D LiDAR navigation and localization.",
      "Explored Wi-Fi Mesh and 4G communication systems.",
      "Studied AI-based vision and intrusion detection.",
      "Analyzed video and alert transmission to a supervision interface."
    ],
    tags: ["Robotics", "GPS", "3D LiDAR", "Wi-Fi Mesh", "4G", "AI"]
  },
  {
    number: "04",
    company: "Hotel & Hospitality",
    role: "Seasonal Hotel Entertainment Animator",
    date: "Summer seasons · 5 years",
    description: "Created memorable guest experiences through entertainment, group activities, and genuine connections with people from different backgrounds.",
    tasks: [
      "Organized and led recreational, sports, and entertainment activities for hotel guests.",
      "Encouraged participation and helped create a welcoming, energetic atmosphere.",
      "Built lasting relationships with returning guests, with friendships that continued beyond the summer seasons.",
      "Developed communication, teamwork, public-speaking, and adaptability skills in a fast-paced hospitality environment."
    ],
    tags: ["Guest Relations", "Entertainment", "Teamwork", "Communication", "Leadership"]
  }
];

const projects = [
  {
    number: "01",
    category: "DEVSECOPS",
    title: "DevSecOps Task Manager",
    description: "A containerized Flask task manager with PostgreSQL, Docker Compose, CI/CD automation, and integrated security scanning.",
    technologies: ["Flask", "PostgreSQL", "Docker", "Jenkins", "Bandit", "Trivy", "Gitleaks"]
  },
  {
    number: "02",
    category: "CLOUD & OBSERVABILITY",
    title: "Kubernetes Monitoring Lab",
    description: "A hands-on Kubernetes environment exploring infrastructure monitoring and observability.",
    technologies: ["Kubernetes", "Minikube", "Prometheus", "Grafana", "Node Exporter"]
  },
  {
    number: "03",
    category: "INTERNET OF THINGS",
    title: "Smart Greenhouse",
    description: "An IoT concept for monitoring temperature, soil moisture, and light, with automated environmental control.",
    technologies: ["Arduino", "Sensors", "C++", "IoT"]
  }
];

function SectionTitle({ eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}<br /><span>{accent}</span></h2>
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">M.</span>
          <span>MOHIB IFAOUI</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#beyond">Beyond</a>
          <a href="#projects">Projects</a>
          <a className="nav-contact" href="#contact">Contact ↗</a>
        </nav>
      </header>

      <section className="hero section-container" id="home">
        <div className="hero-content">
          <div className="availability"><span className="status-dot" />OPEN TO PROFESSIONAL OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, I'M</p>
          <h1>Mouhib<br /><span>Ifaoui.</span></h1>
          <h2>Networks, DevOps &amp;<br />Cybersecurity Enthusiast.</h2>
          <p className="hero-description">
            Third-year Computer Systems Engineering student specializing in IoT.
            Interested in building, deploying, and securing modern software and infrastructure.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">Explore my work ↗</a>
            <a href={CV_URL} download="Mouhib_Ifaoui_CV.pdf" className="secondary-button">Download CV ↓</a>
          </div>
          <div className="social-links">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={`mailto:${EMAIL}`}>Email ↗</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="hero-portrait">
            <img src={PROFILE_IMAGE} alt="Portrait of Mouhib Ifaoui" className="profile-photo" />
            <div className="portrait-caption">
              <strong>Mouhib Ifaoui</strong>
              <span>NETWORKS · DEVOPS · SECURITY</span>
            </div>
          </div>
          <div className="floating-tag tag-top">01 / CONNECT</div>
          <div className="floating-tag tag-bottom">BUILDING THE FUTURE</div>
        </div>

        <div className="hero-footer">
          <span>BASED IN TUNISIA</span>
          <span>NETWORKS / DEVOPS / CYBERSECURITY</span>
          <a href="#about">SCROLL TO DISCOVER ↓</a>
        </div>
      </section>

      <section className="about-section section-container" id="about">
        <SectionTitle eyebrow="01 — GET TO KNOW ME" title="Beyond the" accent="technology." />
        <div className="about-grid">
          <div className="about-intro">
            <p className="about-lead">Curious by nature. Driven by technology.<span> Focused on building what comes next.</span></p>
            <p>I'm a third-year Licence student in Computer Systems Engineering, specializing in Internet of Things at ISITCOM, Hammam Sousse, Tunisia.</p>
            <p>My interests include computer networks, cybersecurity, DevOps, cloud computing, and embedded systems.</p>
            <p>Through internships and personal projects, I've explored software development, containerization, CI/CD, Kubernetes, monitoring, and connected systems.</p>
            <p>Outside technology, five years of seasonal hotel entertainment work and my coaching background have taught me how to connect with people, lead activities, and create positive experiences. I value the lasting friendships built with guests from different cultures as much as the professional skills gained along the way.</p>
          </div>
          <div className="about-side">
            <article className="info-card">
              <span className="card-index">01 / EDUCATION</span>
              <h3>Computer Systems Engineering</h3>
              <p>ISITCOM — Hammam Sousse, Tunisia</p>
              <span className="card-detail">IoT specialization · 2023–Present</span>
            </article>
            <article className="info-card">
              <span className="card-index">02 / INTERESTS</span>
              <h3>Networks &amp; DevSecOps</h3>
              <p>Infrastructure, automation, cloud, and security.</p>
              <span className="card-detail">Practical learning and experimentation</span>
            </article>
            <article className="info-card">
              <span className="card-index">03 / OBJECTIVE</span>
              <h3>Professional Growth</h3>
              <p>Looking to contribute to challenging technical projects.</p>
              <span className="card-detail">Tunisia · Open to opportunities</span>
            </article>
          </div>
        </div>
      </section>

      <section className="experience-section section-container" id="experience">
        <SectionTitle eyebrow="02 — PROFESSIONAL JOURNEY" title="Experience that" accent="shapes me." />
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.number}>
              <div className="experience-number">{experience.number}</div>
              <div className="experience-content">
                <span className="project-category">{experience.date}</span>
                <h3>{experience.company}</h3>
                <h4>{experience.role}</h4>
                <p>{experience.description}</p>
                <ul>{experience.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
                <div className="project-tags">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section section-container" id="skills">
        <SectionTitle eyebrow="03 — MY TOOLKIT" title="Technologies I" accent="work with." />
        <p className="section-description">Technologies and tools explored through internships, coursework, and practical projects.</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
              <span>{skill}</span>
              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="beyond-section section-container" id="beyond">
        <SectionTitle eyebrow="04 — BEYOND TECHNOLOGY" title="Discipline, people" accent="and growth." />
        <p className="section-description">
          My interests in fitness, nutrition, and coaching complement my engineering journey.
          They reflect a commitment to discipline, learning, and helping others progress.
        </p>
        <div className="credentials-grid">
          <article className="credential-card">
            <a className="certificate-image-link" href="/certificates/nasm-nutrition-coach.png" target="_blank" rel="noreferrer">
              <img className="certificate-image" src="/certificates/nasm-nutrition-coach.png" alt="NASM Certified Nutrition Coach certificate" loading="lazy" />
              <span className="certificate-view">View certificate ↗</span>
            </a>
            <span className="card-index">01 / NASM</span>
            <h3>Certified Nutrition Coach</h3>
            <p>National Academy of Sports Medicine (NASM)</p>
            <span className="card-detail">Nutrition · Coaching · Personal development</span>
          </article>
          <article className="credential-card">
            <a className="certificate-image-link" href="/certificates/ifbb-personal-trainer.png" target="_blank" rel="noreferrer">
              <img className="certificate-image" src="/certificates/ifbb-personal-trainer.png" alt="IFBB Certified Personal Fitness Trainer certificate" loading="lazy" />
              <span className="certificate-view">View certificate ↗</span>
            </a>
            <span className="card-index">02 / IFBB</span>
            <h3>Certified Personal Fitness Trainer</h3>
            <p>International Fitness &amp; Bodybuilding Federation (IFBB)</p>
            <span className="card-detail">Personal training · Fitness</span>
          </article>
          <article className="credential-card">
            <a className="certificate-image-link" href="/certificates/ifbb-master-fitness.png" target="_blank" rel="noreferrer">
              <img className="certificate-image" src="/certificates/ifbb-master-fitness.png" alt="IFBB Master in Bodybuilding and Fitness Methods diploma" loading="lazy" />
              <span className="certificate-view">View certificate ↗</span>
            </a>
            <span className="card-index">03 / IFBB · 2022</span>
            <h3>Master in Bodybuilding and Fitness Methods</h3>
            <p>International Fitness &amp; Bodybuilding Federation (IFBB)</p>
            <span className="card-detail">Bodybuilding · Fitness methods</span>
          </article>
        </div>
        <div className="people-note">
          <span className="people-note-mark">“</span>
          <div>
            <h3>Beyond code, I connect with people.</h3>
            <p>For me, hospitality is about more than organizing activities. It is about creating memories, building trust, and forming friendships that can last for years.</p>
          </div>
        </div>
      </section>

      <section className="projects-section section-container" id="projects">
        <SectionTitle eyebrow="05 — SELECTED WORK" title="Learning by" accent="building." />
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                <a className="project-link" href={GITHUB_URL} target="_blank" rel="noreferrer">View GitHub profile ↗</a>
              </div>
              <div className="project-icon">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-container" id="contact">
        <p className="eyebrow">05 — LET'S CONNECT</p>
        <h2>Let's build<br /><span>something meaningful.</span></h2>
        <p className="contact-description">Interested in working together or discussing an opportunity? Feel free to reach out. I'd be happy to connect.</p>
        <div className="hero-actions">
          <a className="primary-button" href={`mailto:${EMAIL}`}>Send me an email ↗</a>
          <a className="secondary-button" href={CV_URL} download="Mouhib_Ifaoui_CV.pdf">Download my CV ↓</a>
        </div>
        <div className="contact-socials">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </section>

      <footer className="footer section-container">
        <a className="brand" href="#home"><span className="brand-mark">M.</span><span>MOHIB IFAOUI</span></a>
        <p>Designed with curiosity. Built with purpose.</p>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
        <span>© 2026</span>
      </footer>
    </main>
  );
}

export default App;
