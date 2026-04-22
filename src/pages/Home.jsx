import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'Elden Ring Build Buzzfeed Quiz',
    desc: 'A Buzzfeed quiz to find out what type of person you are based on the build you create for an Elden Ring Character.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/kbbarragan22/Elden-Ring-Build-Buzzfeed-Quiz',
  },
  {
    title: 'A super, Super, SUPER Scary Maze Game',
    desc: 'Find out how good you are at navigating through a maze with your mouse. You might find out that you are not that great and you get a surprise at the end',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/kbbarragan22/Scary-Maze-Game',
  },
  {
    title: 'DraftBots',
    desc: 'Ever wanted to bet on a pure random chance on bots playing sports rather than betting on rigged real life sports?? Me niether. But here is a platform where you can! [Currently In Progress]',
    tags: ['HTML', 'CSS', 'Node.js'],
    link: 'https://tjrains.github.io/CIS-444-DraftBots-Website/',
  },
  {
    title: 'Portfolio',
    desc: 'What you are looking at right now is one of my projects for Web Programming in Computer Information Systems. This website displays all of the material I have learned throughout this course.',
    tags: ['React', 'Node.js'],
    link: '#',
  },
];

function ProjectCard({ title, desc, tags, link, index }) {
  return (
    <div className="project-card" style={{ '--delay': `${index * 0.1}s` }}>
      <div className="project-card-top">
        <span className="project-number">0{index + 1}</span>
        <div className="project-tags">
          {tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href={link} className="project-link">View Project →</a>
    </div>
  );
}

function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg-orb orb1" />
        <div className="hero-bg-orb orb2" />
        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-name">Kevin Barragan</h1>
          <p className="hero-subtitle">CIS Student</p>
          <p className="hero-desc">
            I build fun and engaging websites.
            Currently studying Computer Information Systems at California State University, San Marcos.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">See My Work</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="section-label">01 — About</div>
          <h2>A bit about me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a third-year CIS student at California State San Marcos with a passion for
                showing my personality in the technological projects I develop. My journey started by enlisitng
                in the military to become a Information Systems Technician Communications on Submarines learning
                how to effectively use complex computer systems leading to attending college to learn how to create, 
                develop, and understand the interworkings of computer systems.
              </p>
            </div>
            <div className="about-skills">
              <h3>Tech Stack</h3>
              <ul className="skills-list">
                {['JavaScript', 'React', 'Node.js / Express', 'Python', 'SQL', 'Git & GitHub', 'HTML & CSS', 'MongoDB'].map(s => (
                  <li key={s}><span className="skill-dot" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <div className="section-inner">
          <div className="section-label">02 — Work</div>
          <h2>Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-inner contact-inner">
          <div className="section-label">03 — Contact</div>
          <h2>Let's work together</h2>
          <p className="contact-desc">
            I'm always open to new opportunities, collaborations, or just a good conversation
            about tech. Drop me a line!
          </p>
          <div className="contact-links">
            <a href="mailto:kbbarragan22@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              kbbarragan22@gmail.com
            </a>
            <a href="https://github.com/kbbarragan22?tab=repositories" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-icon">⌥</span>
              github.com/kbbarragan22
            </a>
            <a href="https://www.linkedin.com/in/kevin-barragan-46b118254" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-icon">in</span>
              linkedin.com/in/kevin-barragan
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
