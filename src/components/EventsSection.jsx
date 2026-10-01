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
    <section id="events" className="events-section">
      <div className="site-container">
        <div className="section-heading events-heading">
          <div><p className="eyebrow"><span className="eyebrow-rule" />Connect with us</p><h2>Ideas become action together.</h2></div>
          <p className="section-lede">Join the conversations and community moments moving our work forward.</p>
        </div>

        <div className="events-list">
          {events.map((evt) => (
            <article key={evt.id} className="event-row">
              <div className="event-date"><span>{evt.date.split(' ')[0]}</span><strong>{evt.date.split(' ')[1].replace(',', '')}</strong></div>
              <div className="event-details"><span className="event-tag">{evt.tag}</span><h3>{evt.title}</h3><p>{evt.time} <span aria-hidden="true">·</span> {evt.location}</p></div>
              <button onClick={() => { setSelectedEvent(evt); setRsvpSubmitted(false); }} className="event-action">Register <span aria-hidden="true">↗</span></button>
            </article>
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