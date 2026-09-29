import React, { useState } from 'react';

export default function CampaignsSection({ onOpenDonate = () => {} }) {
  const [filter, setFilter] = useState('all');

  const campaigns = [
    {
      id: 1,
      category: 'education',
      title: 'Youth In Action Against Illiteracy',
      raised: 15000,
      target: 15000,
      pct: 100,
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
      desc: 'Building emergency mobile classrooms with digital tablets and solar power for displaced students.'
    },
    {
      id: 2,
      category: 'water',
      title: 'Clean Water Wells for Rural Anatolia',
      raised: 28400,
      target: 35000,
      pct: 81,
      image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=600&q=80',
      desc: 'Drilling sustainable deep-water filtration units providing clean drinking water to over 12,000 residents.'
    },
    {
      id: 3,
      category: 'relief',
      title: 'Winter Survival Food & Medical Kits',
      raised: 42000,
      target: 50000,
      pct: 84,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
      desc: 'Supplying thermal blankets, heating fuel, and essential food parcels during freezing winter conditions.'
    }
  ];

  const filtered = filter === 'all' ? campaigns : campaigns.filter(c => c.category === filter);

  return (
    <section id="campaigns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">We Need Your Help</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Featured Field Campaigns</h2>
          <p className="text-slate-600 text-sm">Direct, transparent funding for urgent ongoing missions.</p>

          {/* Filter Bar */}
          <div className="flex justify-center gap-2 pt-4">
            {['all', 'education', 'water', 'relief'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-colors ${
                  filter === cat 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200/80 shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
              
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-500">Target: ${item.target.toLocaleString()}</span>
                    <span className="text-amber-600">{item.pct}% Funded</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    Raised: <span className="text-teal-600">${item.raised.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={onOpenDonate}
                  className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-colors"
                >
                  Support Campaign
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}