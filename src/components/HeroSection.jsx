import React, { useState } from 'react';

export default function HeroSection({ onOpenDonate = () => {}, onOpenVideo = () => {} }) {
  const [activeSpot, setActiveSpot] = useState('Ankara Relief Hub');

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center bg-white overflow-hidden">
      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Banner */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              Humanitarian Emergency Mission
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Justice begins where <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-teal-600 to-sky-600">inequality ends</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
              Luminary Syndicate empowers crisis-impacted families, displaced youth, and vulnerable communities across East Asia & Anatolia with vital relief, clean water, and education.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenDonate}
                className="px-7 py-3.5 rounded-full bg-slate-900 hover:bg-amber-500 text-white font-bold text-sm shadow-xl shadow-slate-900/10 hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                Donate Now
              </button>

              <button
                onClick={onOpenVideo}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 hover:border-slate-300 bg-white text-slate-800 text-sm font-bold shadow-sm hover:shadow transition-all group"
              >
                <div className="w-7 h-7 rounded-full bg-teal-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Watch Mission Video</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-100">
              <div>
                <span className="block text-2xl font-extrabold text-slate-900">4.89M</span>
                <span className="text-xs text-slate-500 font-medium">Meals Delivered</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-teal-600">68K+</span>
                <span className="text-xs text-slate-500 font-medium">Children Schooled</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-amber-500">100%</span>
                <span className="text-xs text-slate-500 font-medium">Direct Field Audit</span>
              </div>
            </div>
          </div>

          {/* Right SVG Map Silhouette Cutout Mask */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3]">
              
              <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                  <clipPath id="turkeyCountryMask" clipPathUnits="objectBoundingBox">
                    <path d="M 0.05,0.45 C 0.1,0.2 0.35,0.1 0.6,0.15 C 0.85,0.18 0.95,0.35 0.95,0.55 C 0.92,0.8 0.65,0.9 0.4,0.85 C 0.15,0.8 0.02,0.65 0.05,0.45 Z" />
                  </clipPath>
                </defs>
              </svg>

              {/* Masked Photo */}
              <div 
                className="w-full h-full bg-cover bg-center shadow-2xl relative transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80')`,
                  clipPath: 'url(#turkeyCountryMask)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/30 via-transparent to-amber-500/20" />
              </div>

              {/* Map Pins */}
              <div 
                onClick={() => setActiveSpot('Ankara Relief Hub')}
                className="absolute top-[35%] left-[45%] cursor-pointer group"
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-white shadow-md" />
                </span>
                <div className="absolute left-6 top-0 bg-slate-900/90 text-white text-[11px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Ankara Central Relief Hub
                </div>
              </div>

              <div 
                onClick={() => setActiveSpot('Hatay Medical Base')}
                className="absolute top-[60%] left-[65%] cursor-pointer group"
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500 border-2 border-white shadow-md" />
                </span>
                <div className="absolute left-6 top-0 bg-slate-900/90 text-white text-[11px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Hatay Field Hospital
                </div>
              </div>

              {/* Active Hotspot Badge */}
              <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800">Active Field Zone: {activeSpot}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}