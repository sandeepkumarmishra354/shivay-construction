import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'OHE System Upgradation (2×25 kV)',
    category: 'electrification',
    location: 'Khurda Road Division, East Coast Railway',
    description: 'Design, supply, erection, testing, and commissioning of overhead electrification and power supply installations for higher capacity traction.',
    status: 'Completed',
    year: '2025'
  },
  {
    id: 2,
    title: 'Railway Formation & Earthwork for Doubling',
    category: 'civil',
    location: 'Barwasagar–Mauranipur, North Central Railway',
    description: 'Execution of earthwork, blanketing, and construction of minor bridges for track doubling project.',
    status: 'Completed',
    year: '2024'
  },
  {
    id: 3,
    title: 'Major Concrete Bridge Construction over Betwa River',
    category: 'civil',
    location: 'Jhansi Section, North Central Railway',
    description: 'Construction of substructure and superstructure of a major bridge, including pile foundation and pre-stressed concrete girders.',
    status: 'Ongoing',
    year: '2026'
  },
  {
    id: 4,
    title: 'Broad Gauge Track Linking & Ballast Supply',
    category: 'tracks',
    location: 'Rourkela-Panposh Section, South Eastern Railway',
    description: 'Laying and linking of broad gauge track with modern sleeper assembly, supplying track ballast, and flash butt welding of rails.',
    status: 'Completed',
    year: '2024'
  },
  {
    id: 5,
    title: 'Electronic Interlocking (EI) Signalling System',
    category: 'signalling',
    location: 'Kharagpur Division, South Eastern Railway',
    description: 'Upgradation of railway station yard signaling with state-of-the-art Electronic Interlocking systems, point machines, and signals.',
    status: 'Ongoing',
    year: '2026'
  },
  {
    id: 6,
    title: 'A-Class Railway Station Building & Platform Shelters',
    category: 'civil',
    location: 'Bina Junction, West Central Railway',
    description: 'Design and civil execution of modern passenger station buildings, ticket counters, waiting lounges, and platform steel structures.',
    status: 'Completed',
    year: '2023'
  }
];

const categories = [
  { name: 'All Projects', value: 'all' },
  { name: 'OHE Electrification', value: 'electrification' },
  { name: 'Civil Works & Bridges', value: 'civil' },
  { name: 'Track Works', value: 'tracks' },
  { name: 'Signalling & Telecom', value: 'signalling' }
];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="showcase-wrapper">
      {/* Category Filter Controls */}
      <div className="filter-controls">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="project-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card card animate-card">
            <div className="card-content">
              <span className={`project-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
              <div className="project-meta">
                <span className="project-year">{project.year}</span>
                <span className="project-loc">
                  <svg className="loc-icon" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                  </svg>
                  {project.location}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-card-footer">
                <span className="category-tag">{project.category.toUpperCase()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .showcase-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .filter-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .filter-btn {
          background: rgba(30, 41, 59, 0.4);
          border: 1px solid var(--border-dark);
          color: var(--text-light-muted);
          padding: 0.6rem 1.25rem;
          border-radius: 50px;
          cursor: pointer;
          font-family: var(--font-title);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--accent);
          color: var(--text-light);
          border-color: var(--accent);
          box-shadow: 0 4px 10px rgba(249, 115, 22, 0.2);
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          min-height: 400px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid var(--border-dark);
          transition: all var(--transition-normal);
        }

        .animate-card {
          animation: cardAppear 0.4s ease forwards;
        }

        @keyframes cardAppear {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .project-status {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        .project-status.completed {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .project-status.ongoing {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .project-year {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.1rem 0.5rem;
          border-radius: 4px;
          color: var(--amber);
          font-weight: 600;
        }

        .project-loc {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .loc-icon {
          width: 14px;
          height: 14px;
        }

        .project-title {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: var(--text-light);
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-light-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .category-tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 1px;
        }

        @media (max-width: 480px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
