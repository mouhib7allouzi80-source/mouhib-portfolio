import { useEffect, useState } from "react";
import "./App.css";

const GITHUB = "https://github.com/mouhib7allouzi80-source";
const LINKEDIN = "https://www.linkedin.com/in/mouhib-ifaoui-982290351/";
const EMAIL = "mouhib7allouzi80@gmail.com";
const CV = "/cv-mouhib.pdf";

const skills = [
  { group: "Development", items: ["Python", "C / C++", "Flask", "HTML5", "CSS3", "SQL"] },
  { group: "Networks & Systems", items: ["TCP/IP", "IPv4 / IPv6", "DNS", "DHCP", "Linux", "SSH"] },
  { group: "DevOps & Observability", items: ["Docker", "Docker Compose", "Git", "GitHub Actions", "Jenkins", "Kubernetes", "Minikube", "Helm", "Prometheus", "Grafana", "SonarQube", "PostgreSQL"] },
];

const experience = [
  {
    index: "01",
    company: "JobGate",
    role: "DevOps Intern",
    period: "September 2025",
    summary: "Explored the delivery and operation of microservice-based applications, with a focus on automation, quality and observability.",
    points: [
      "Worked with Spring Boot microservices and Docker.",
      "Explored application deployment with Kubernetes.",
      "Worked with GitLab CI pipelines.",
      "Used SonarQube, Prometheus and Grafana.",
    ],
    stack: ["Spring Boot", "Docker", "Kubernetes", "GitLab CI", "SonarQube"],
  },
  {
    index: "02",
    company: "Satoripop",
    role: "Web Development Intern",
    period: "June 2026",
    summary: "Contributed to web application development and the integration of business-focused application modules.",
    points: [
      "Implemented MVC architecture and application routing.",
      "Developed authentication and CRUD functionality.",
      "Worked with Blade templates, HTML and CSS.",
      "Contributed to middleware, plugins, accounting and invoicing modules.",
    ],
    stack: ["MVC", "Blade", "PHP", "HTML", "CSS"],
  },
  {
    index: "03",
    company: "Enova Robotics",
    role: "PGuard — Autonomous Security Robot",
    period: "June 2026",
    summary: "Studied the architecture and technologies behind an autonomous mobile robot designed for surveillance and security.",
    points: [
      "Explored GPS and 3D LiDAR navigation and localization.",
      "Studied Wi-Fi Mesh and 4G communication systems.",
      "Explored AI-based vision and intrusion detection.",
      "Analyzed video and alert transmission to a supervision interface.",
    ],
    stack: ["Robotics", "GPS", "3D LiDAR", "Wi-Fi Mesh", "4G", "AI"],
  },
];

const projects = [
  {
    number: "01",
    type: "DEVSECOPS / APPLICATION SECURITY",
    title: "Task Manager",
    subtitle: "From application code to a security-aware delivery pipeline.",
    description: "A Flask task management application containerized with Docker and Docker Compose, backed by PostgreSQL and supported by CI/CD and security scanning tools.",
    stack: ["Flask", "PostgreSQL", "Docker", "Jenkins", "Bandit", "Trivy", "Gitleaks"],
    className: "project-art-one",
    mark: "01",
    link: "https://github.com/mouhib7allouzi80-source/devsecops-task-manager",
  },
  {
    number: "02",
    type: "CLOUD / OBSERVABILITY",
    title: "Kubernetes Monitoring Lab",
    subtitle: "Making infrastructure visible.",
    description: "A hands-on Kubernetes lab exploring cluster monitoring with Prometheus, Grafana and Node Exporter.",
    stack: ["Kubernetes", "Minikube", "Prometheus", "Grafana", "Node Exporter"],
    className: "project-art-two",
    mark: "02",
    link: "https://github.com/mouhib7allouzi80-source/kubernetes-monitoring-lab",
  },
  {
    number: "03",
    type: "INTERNET OF THINGS",
    title: "Smart Greenhouse",
    subtitle: "A connected environment that reacts to its conditions.",
    description: "An IoT concept for monitoring temperature, soil moisture and light, with automated environmental actions using sensors and actuators.",
    stack: ["Arduino", "Sensors", "C++", "IoT"],
    className: "project-art-three",
    mark: "03",
    link: "https://github.com/mouhib7allouzi80-source/smart-greenhouse-iot",
  },
];

const capabilities = [
  ["01", "Build", "Developing web applications and practical software solutions."],
  ["02", "Connect", "Understanding networks, Linux systems and connected devices."],
  ["03", "Automate", "Containerization, CI/CD workflows and repeatable delivery."],
  ["04", "Observe", "Monitoring applications and infrastructure with clear signals."],
];

function IconArrow() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="github-icon">
      <path
        fill="currentColor"
        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
  );
}

function SectionEyebrow({ children }) {
  return <div className="section-eyebrow"><span />{children}</div>;
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Mouhib home">
        M<span>.</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span />
      </button>
      <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
        {["About", "Experience", "Skills", "Projects"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
        ))}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <IconArrow /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <div className="availability"><span className="availability-dot" /> OPEN TO PFE / INTERNSHIP OPPORTUNITIES</div>
        <p className="hero-kicker">COMPUTER SYSTEMS ENGINEERING · IoT</p>
        <h1>
          Building the<br />
          <span>systems</span> behind<br />
          what&apos;s next<span className="hero-period">.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m <strong>Mouhib Ifaoui</strong> — an aspiring DevOps and systems engineer
          interested in cloud infrastructure, cybersecurity, networks and connected technology.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <IconArrow /></a>
          <a className="button button-quiet" href={CV} target="_blank" rel="noreferrer">Download CV <span>↓</span></a>
        </div>
        <div className="hero-meta">
          <span><i /> BASED IN TUNISIA</span>
          <span>SCROLL TO DISCOVER <b>↓</b></span>
        </div>
      </div>

      <div className="hero-art" aria-label="Abstract portrait composition">
        <div className="art-orbit orbit-a" />
        <div className="art-orbit orbit-b" />
        <div className="art-glow" />
        <div className="art-index">PORTFOLIO <span>2026</span></div>
        <div className="portrait-frame">
          <div className="portrait-image">
            <img
              src="/profile.jpg"
              alt="Mouhib Ifaoui"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
            <div className="portrait-placeholder">
              <span>MI</span>
              <small>ADD YOUR PORTRAIT<br />AS public/profile.jpg</small>
            </div>
          </div>
          <div className="portrait-overlay" />
          <div className="portrait-label">
            <span>MOuHIB IFAOUI</span>
            <small>DEVOPS · NETWORKS · IoT</small>
          </div>
        </div>
        <div className="floating-chip chip-top"><span className="chip-pulse" /> SYSTEMS ONLINE</div>
        <div className="floating-chip chip-bottom">DOCKER <b>×</b> CLOUD <b>×</b> SECURITY</div>
        <div className="vertical-note">ENGINEERING WITH INTENTION</div>
      </div>

      <div className="hero-bottom-line">
        <span>01 / INTRODUCTION</span>
        <span>SCROLL TO EXPLORE THE PORTFOLIO</span>
        <span>34°00&apos; N — 10°00&apos; E</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-topline"><SectionEyebrow>01 — ABOUT</SectionEyebrow><span className="section-count">A LITTLE ABOUT ME</span></div>
      <div className="about-layout">
        <h2 className="display-heading">Curiosity is<br />my <span>infrastructure.</span></h2>
        <div className="about-text">
          <p className="large-copy">
            I&apos;m a third-year Licence student in Computer Systems Engineering,
            specializing in Internet of Things at ISITCOM, Hammam Sousse.
          </p>
          <p>
            I enjoy understanding how technology works as a whole — from the code
            that powers an application to the infrastructure that runs it and the
            networks that connect it. My interests sit at the intersection of
            development, DevOps, cybersecurity and embedded systems.
          </p>
          <a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <IconArrow /></a>
        </div>
      </div>
      <div className="capability-grid">
        {capabilities.map(([number, title, description]) => (
          <article className="capability-card" key={number}>
            <span className="capability-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-topline"><SectionEyebrow>02 — EXPERIENCE</SectionEyebrow><span className="section-count">LEARNING BY BUILDING</span></div>
      <div className="section-heading-row">
        <h2 className="display-heading">Where I&apos;ve<br /><span>made impact.</span></h2>
        <p className="section-side-note">Internships and practical exposure across software development, DevOps and autonomous systems.</p>
      </div>
      <div className="experience-timeline">
        {experience.map((item) => (
          <article className="experience-item" key={item.index}>
            <div className="experience-index">{item.index}</div>
            <div className="experience-main">
              <div className="experience-heading">
                <div><h3>{item.company}</h3><p>{item.role}</p></div>
                <time>{item.period}</time>
              </div>
              <p className="experience-summary">{item.summary}</p>
              <ul className="experience-points">
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <div className="tag-row">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-topline"><SectionEyebrow>03 — TOOLKIT</SectionEyebrow><span className="section-count">TOOLS OF THE TRADE</span></div>
      <div className="section-heading-row">
        <h2 className="display-heading">A growing<br /><span>technical stack.</span></h2>
        <p className="section-side-note">A practical toolkit built through coursework, internships, labs and personal projects.</p>
      </div>
      <div className="skill-groups">
        {skills.map((group, index) => (
          <article className="skill-group" key={group.group}>
            <div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.group}</h3></div>
            <div className="skill-pills">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-topline"><SectionEyebrow>04 — SELECTED WORK</SectionEyebrow><span className="section-count">IDEAS INTO IMPLEMENTATION</span></div>
      <div className="section-heading-row">
        <h2 className="display-heading">Things I&apos;ve<br /><span>worked on.</span></h2>
        <p className="section-side-note">A selection of practical projects exploring application delivery, infrastructure monitoring and IoT.</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card ${project.className}`} key={project.number}>
            <div className="project-art">
              <span className="project-art-number">{project.mark}</span>
              <div className="project-visual-core">
                {project.number === "01" && <div className="terminal-visual"><div className="terminal-bar"><i /><i /><i /></div><span>$ docker compose up</span><span className="terminal-muted">✓ services started</span><span>$ trivy image task-manager</span><span className="terminal-blue">scanning image...</span></div>}
                {project.number === "02" && <div className="monitor-visual"><div className="monitor-top">CLUSTER / HEALTH</div><div className="monitor-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="monitor-bottom"><span>CPU 34%</span><span>MEM 62%</span></div></div>}
                {project.number === "03" && <div className="greenhouse-visual"><div className="greenhouse-roof" /><div className="greenhouse-base"><i /><i /><i /><i /></div><span className="sensor sensor-one">TEMP 26°</span><span className="sensor sensor-two">SOIL 48%</span></div>}
              </div>
              <span className="project-art-caption">{project.type}</span>
            </div>
            <div className="project-info">
              <div className="project-title-line">
                <span>{project.number}</span>
                <a
                  className="project-github-icon"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} repository on GitHub`}
                >
                  <GitHubIcon />
                </a>
              </div>
              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>
              <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a
                className="project-source-button"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
                <span>VIEW SOURCE CODE</span>
                <IconArrow />
              </a>
            </div>
          </article>
        ))}
      </div>
      <a className="all-work-link" href={GITHUB} target="_blank" rel="noreferrer">Explore GitHub <IconArrow /></a>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-background-orb" />
      <div className="contact-inner">
        <SectionEyebrow>05 — GET IN TOUCH</SectionEyebrow>
        <p className="contact-pretitle">HAVE A PROJECT OR OPPORTUNITY?</p>
        <h2>Let&apos;s build<br /><span>what&apos;s next.</span></h2>
        <a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL} <IconArrow /></a>
        <div className="contact-bottom">
          <p>Open to PFE internships, collaborations and opportunities to learn and contribute.</p>
          <div className="social-links">
            <a href={GITHUB} target="_blank" rel="noreferrer">GITHUB <IconArrow /></a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LINKEDIN <IconArrow /></a>
            <a href={CV} target="_blank" rel="noreferrer">CV <span>↓</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-mark" href="#top">M<span>.</span></a>
      <span>DESIGNED & BUILT BY MOuHIB IFAOUI</span>
      <a href="#top">BACK TO TOP ↑</a>
      <span>© 2026</span>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".section, .contact-inner");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
