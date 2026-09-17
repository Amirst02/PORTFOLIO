import './Journey.css';

const milestones = [
  { year: '2022', title: 'First lines of code', description: 'Started with HTML, CSS and JavaScript, rebuilding interfaces I admired until they behaved exactly like the originals.', tone: 'gold' },
  { year: '2023', title: 'Computer Science degree', description: 'Began formal CS studies: algorithms, discrete mathematics, data structures, databases and operating systems.', tone: 'blue' },
  { year: '2024', title: 'Into the full stack', description: 'Moved to React and TypeScript on the front, Node.js, Express and PostgreSQL on the back, shipping real projects end to end.', tone: 'gold' },
  { year: '2025', title: 'Security & architecture', description: 'Deepened into cybersecurity fundamentals, Linux tooling and designing APIs that stay clean as they grow.', tone: 'blue' },
  { year: 'Now', title: 'Building products', description: 'Working on full-stack applications and collaborating with others to build software that actually ships.', tone: 'gold' },
];

export default function Journey() {
  return (
    <section className="journey-section" id="journey" aria-labelledby="journey-title">
      <div className="journey-container">
        <header className="journey-header">
          <p className="journey-eyebrow">Journey</p>
          <h2 id="journey-title">From first tag to full stack.</h2>
          <p>A short timeline of how the skills stacked up.</p>
        </header>

        <ol className="journey-timeline">
          {milestones.map((milestone) => (
            <li className="journey-item" key={milestone.year}>
              <span className={`journey-marker journey-marker--${milestone.tone}`} aria-hidden="true" />
              <div className="journey-item-content">
                <p className="journey-year">{milestone.year}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
