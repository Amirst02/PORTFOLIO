import { useEffect, useState } from 'react';
import "./Navbar.css";

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id)),
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar-wrapper">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="navbar-logo">
          <span className="logo-icon">{"</>"}</span>
          <span className="logo-text">
            AMIR<span className="logo-suffix">.TS</span>
          </span>
        </div>

        <ul className="navbar-links">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} className={activeId === id ? 'is-active' : undefined} aria-current={activeId === id ? 'page' : undefined}>{label}</a>
            </li>
          ))}
        </ul>

        <a className="hire-btn" href="#contact">Hire me</a>
      </nav>
    </div>
  );
}
