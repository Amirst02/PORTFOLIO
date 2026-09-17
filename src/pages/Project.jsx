import { ExternalLink } from 'lucide-react';
import './project.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack Website',
    description:
      'A modern online store with product browsing, cart management, secure checkout flow, and a responsive dashboard for admins.',
    stack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    preview: 'store',
  },
  {
    title: 'Portfolio Website',
    category: 'Creative Portfolio',
    description:
      'A sleek personal brand website designed to showcase projects, achievements, and services with a strong visual identity.',
    stack: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
    preview: 'portfolio',
  },
  {
    title: 'Task Management App',
    category: 'Productivity Tool',
    description:
      'A productivity dashboard for planning, tracking, and completing daily tasks with status filters and collaborative workflow support.',
    stack: ['React', 'Firebase', 'Chart.js', 'CSS3'],
    preview: 'tasks',
  },
];

function Preview({ type }) {
  const previewName = type === 'store' ? 'NOVA' : type === 'portfolio' ? 'STUDIO' : 'TASKFLOW';

  return (
    <div className={`project-preview ${type}-preview`} aria-hidden="true">
      <div className="preview-top">
        <i />
        <span>{previewName}</span>
        <b>•••</b>
      </div>

      {type === 'store' && (
        <>
          <div className="store-copy">
            <small>NEW COLLECTION</small>
            <strong>Made for the everyday.</strong>
            <button>Shop now</button>
          </div>
          <div className="product product-one"><div className="shirt" /></div>
          <div className="product product-two"><div className="shoe" /></div>
        </>
      )}

      {type === 'portfolio' && (
        <>
          <div className="portfolio-copy">
            <small>DESIGNER &amp; DEVELOPER</small>
            <strong>Crafting digital<br />experiences.</strong>
            <span>Explore work ↗</span>
          </div>
          <div className="portfolio-orb" />
        </>
      )}

      {type === 'tasks' && (
        <div className="task-screen">
          <div className="task-title"><b>Good morning, Alex</b><span>12 June</span></div>
          <div className="task-progress"><span>Today's progress</span><b>72%</b><i><em /></i></div>
          <div className="task-list">
            <span><i /> Review dashboard design</span>
            <span><i /> Prepare product update</span>
            <span><i /> Team sync</span>
          </div>
        </div>
      )}

      <div className="preview-footer"><span>Featured</span><span>Essentials</span><span>Journal</span></div>
    </div>
  );
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.1 2.92.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.4c.85 0 1.7.12 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
}

export default function Project() {
  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-title">
      <div className="projects-container">
        <header className="projects-header">
          <p className="projects-eyebrow">Projects</p>
          <h2 id="projects-title">Selected work.</h2>
          <p>Products built end to end — architecture, interface, API and deployment.</p>
        </header>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article className={`project-card ${index % 2 === 1 ? 'project-card--reversed' : ''}`} key={project.title}>
              <div className="project-visual"><Preview type={project.preview} /></div>
              <div className="project-content">
                <p className="project-category">{String(index + 1).padStart(2, '0')} <span>—</span> {project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-stack" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-actions">
                  <a className="project-button github-button" href="https://github.com" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
                  <a className="project-button demo-button" href="#projects"><ExternalLink size={17} /> Live Demo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
