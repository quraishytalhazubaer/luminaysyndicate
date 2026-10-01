import React, { useState } from 'react';

export default function CampaignsSection({ onOpenDonate = () => {} }) {
  const [filter, setFilter] = useState('all');

  const campaigns = [
    {
      id: 1,
      category: 'education',
      title: 'Learning should never be out of reach',
      raised: 15000,
      target: 15000,
      pct: 100,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
      desc: 'Mobile classrooms and learning resources help displaced young people continue their education.'
    },
    {
      id: 2,
      category: 'water',
      title: 'A future shaped by clean water',
      raised: 28400,
      target: 35000,
      pct: 81,
      image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80',
      desc: 'Community-managed water points bring reliable, safe drinking water closer to home.'
    },
    {
      id: 3,
      category: 'relief',
      title: 'Essential support when it matters most',
      raised: 42000,
      target: 50000,
      pct: 84,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      desc: 'Flexible emergency assistance connects families with food, shelter, and essential care.'
    }
  ];

  const filtered = filter === 'all' ? campaigns : campaigns.filter(c => c.category === filter);

  return (
    <section id="campaigns" className="campaigns-section">
      <div className="site-container">
        <div className="section-heading campaigns-heading">
          <div><p className="eyebrow"><span className="eyebrow-rule" />Where we work</p><h2>Turning shared purpose into action.</h2></div>
          <p className="section-lede">From emergency response to long-term opportunity, our programmes are shaped by the priorities of the communities we serve.</p>
          <div className="campaign-filters" aria-label="Filter programmes">
            {['all', 'education', 'water', 'relief'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={filter === cat ? 'is-selected' : ''}
                aria-pressed={filter === cat}
              >
                {cat === 'all' ? 'All programmes' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="programme-grid">
          {filtered.map((item) => (
            <article key={item.id} className="programme-item">
              <div className="programme-image">
                <img src={item.image} alt="" />
                <span>{item.category}</span>
              </div>
              <div className="programme-content">
                <div className="programme-title">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="programme-progress">
                  <div className="progress-labels">
                    <span>${item.raised.toLocaleString()} raised</span>
                    <span>{item.pct}%</span>
                  </div>
                  <div className="progress-track" role="progressbar" aria-valuenow={item.pct} aria-valuemin="0" aria-valuemax="100" aria-label={`${item.title} funding progress`}><span style={{ width: `${item.pct}%` }} /></div>
                  <span className="progress-target">of ${item.target.toLocaleString()} goal</span>
                </div>
                <button onClick={onOpenDonate} className="programme-link">Support this programme <span aria-hidden="true">↗</span></button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}