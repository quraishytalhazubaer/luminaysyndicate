import React from 'react';

export default function AboutSection({ onOpenVideo = () => {} }) {
  return (
    <section id="about" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Overlapping Circles Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px]">
            {/* Primary Center Circle */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20">
              <img 
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80" 
                alt="Child receiving education"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top Right Circle */}
            <div className="absolute top-0 right-4 sm:right-12 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
              <img 
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=600&q=80" 
                alt="Smiling children"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Circle */}
            <div className="absolute bottom-0 left-4 sm:left-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg z-30">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80" 
                alt="Community care"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Decorative Dots */}
            <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-amber-400" />
            <div className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-teal-500" />
          </div>

          {/* Right Narrative Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              About Our Syndicate
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Changing Lives with Knowledge & Urgent Field Action
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Our promise is that every contribution directly transforms lives. We deliver emergency relief supplies, sustain clean water filtration grids, and establish mobile learning centers in refugee camps and underserved rural towns.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <span className="text-amber-500 font-bold text-lg block">100% Transparency</span>
                <span className="text-xs text-slate-500">Tracked financial reports and direct allocation.</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <span className="text-teal-600 font-bold text-lg block">Local Leadership</span>
                <span className="text-xs text-slate-500">Organized alongside local village council leaders.</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button className="px-6 py-3 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-md">
                Learn More
              </button>
              
              <button 
                onClick={onOpenVideo}
                className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider hover:text-teal-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Watch Documentary</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}