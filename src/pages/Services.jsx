import CodeIcon from '@mui/icons-material/Code';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import DatasetIcon from '@mui/icons-material/Dataset';
import LayersIcon from '@mui/icons-material/Layers';
import PaletteIcon from '@mui/icons-material/Palette';
import SpeedIcon from '@mui/icons-material/Speed';
import './Services.css';

const services = [
  { title: 'Web Development', description: 'Custom, standards-based websites built to load fast and stay maintainable.', icon: CodeIcon },
  { title: 'Landing Pages', description: 'High-conversion pages with sharp typography, clear structure and clean motion.', icon: LayersIcon },
  { title: 'Full-Stack Applications', description: 'End-to-end products: auth, data modelling, dashboards and admin tooling.', icon: DashboardCustomizeIcon },
  { title: 'UI Implementation', description: 'Pixel-accurate translation of design files into responsive components.', icon: PaletteIcon },
  { title: 'API Development', description: 'Well-documented REST services with validation, pagination and sane errors.', icon: DatasetIcon },
  { title: 'Website Optimization', description: 'Core Web Vitals, bundle trimming, caching and accessibility passes.', icon: SpeedIcon },
];

export default function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-container">
        <header className="services-header">
          <p className="services-eyebrow">Services</p>
          <h2 id="services-title">How I can help.</h2>
          <p>From a single landing page to a complete application with its own backend.</p>
        </header>

        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="service-card" key={title}>
              <div className="service-icon"><Icon fontSize="small" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
