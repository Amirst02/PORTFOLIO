import { useEffect, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import './Footer.css';

const contacts = [
  { label: 'GitHub', detail: 'https://github.com/Amirst02', href: 'https://github.com/Amirst02', icon: GitHubIcon },
  { label: 'LinkedIn', detail: 'linkedin.com/in/efooot', href: 'https://linkedin.com/in/efooot', icon: LinkedInIcon },
  { label: 'Email', detail: 'tsourliamir02@gmail.com', href: 'mailto:tsourliamir02@gmail.com', icon: MailOutlineIcon },
];

export default function Footer() {
  const contactRef = useRef(null);

  useEffect(() => {
    const section = contactRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) section.classList.add('footer-contact--visible');
    }, { threshold: 0.15 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-contact" ref={contactRef}>
        <p className="footer-eyebrow">Contact</p>
        <h2>Have an idea? <span>Let&apos;s build it.</span></h2>
        <p className="footer-description">Tell me what you&apos;re working on and I&apos;ll reply with how I&apos;d approach it.</p>

        <div className="footer-contact-links">
          {contacts.map(({ label, detail, href, icon: Icon }) => (
            <a className="footer-contact-link" href={href} key={label} target={label !== 'Email' ? '_blank' : undefined} rel={label !== 'Email' ? 'noreferrer' : undefined}>
              <Icon className="footer-contact-icon" />
              <strong>{label}</strong>
              <span>{detail}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bar">
        <p className="footer-brand">AMIR<span>.TS</span></p>
        <p>© 2026 — Designed &amp; built with care and a lot of coffee.</p>
      </div>
    </footer>
  );
}
