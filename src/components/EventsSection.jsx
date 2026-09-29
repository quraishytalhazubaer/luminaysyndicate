import React, { useState } from 'react';

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const events = [
    {
      id: 1,
      title: 'Global Youth Welfare & Leadership Summit',
      date: 'OCT 15, 2026',
      time: '10:00 AM - 03:00 PM EST',
      location: 'Online Workshop & Istanbul Field Center',
      tag: 'Workshop'
    },
    {
      id: 2,
      title: 'Anatolia Clean Water Action Marathon',
      date: 'NOV 02, 2026',
      time: '08:00 AM Local Time',
      location: 'Ankara Central Sports Complex',
      tag: 'Sports Fixture'
    }
  ];

  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Get Connected</span>
          <h2 className="text-3xl font-extrabold text-slate-900">Upcoming Events & Gatherings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((evt) => (
            <div key={evt.id} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-sky-50 text-sky-700 text-[10px] font-bold uppercase tracking-wider">
                    {evt.tag}
                  </span>
                  <span className="text-xs font-extrabold text-amber-600">{evt.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{evt.title}</h3>
                <p className="text-xs text-slate-500">{evt.time} • {evt.location}</p>
              </div>

              <button
                onClick={() => {
                  setSelectedEvent(evt);
                  setRsvpSubmitted(false);
                }}
                className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                RSVP Registration
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RSVP Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 shadow-2xl relative space-y-4">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>

            {rsvpSubmitted ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
                <h3 className="text-lg font-bold text-slate-900">RSVP Confirmed!</h3>
                <p className="text-xs text-slate-600">Confirmation details sent to your registered email.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-slate-900">Register for {selectedEvent.title}</h3>
                <form onSubmit={(e) => { e.preventDefault(); setRsvpSubmitted(true); }} className="space-y-3">
                  <input type="text" placeholder="Full Name" required className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 outline-none" />
                  <input type="email" placeholder="Email Address" required className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs focus:ring-2 focus:ring-amber-500 outline-none" />
                  <button type="submit" className="w-full py-2.5 rounded-xl bg-amber-500 text-white font-bold text-xs uppercase shadow-md">
                    Confirm Seat
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}