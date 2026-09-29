import React from 'react';
import logo from '../assets/luminary_syndicate.jpg';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-12">
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Luminary Syndicate"
                className="h-12 w-12 rounded-lg object-cover"
              />

              <span className="text-lg font-extrabold tracking-tight uppercase">
                Luminary{' '}
                <span className="text-amber-500">
                  Syndicate
                </span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              International Welfare Organization delivering direct relief,
              education, and clean water across crisis-impacted communities
              worldwide.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>

            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-amber-400"
                >
                  About Our History
                </a>
              </li>

              <li>
                <a
                  href="#campaigns"
                  className="transition hover:text-amber-400"
                >
                  Active Field Projects
                </a>
              </li>

              <li>
                <a
                  href="#events"
                  className="transition hover:text-amber-400"
                >
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-300">
              Governance
            </h4>

            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a
                  href="#"
                  className="transition hover:text-amber-400"
                >
                  Annual Audit 2025
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-amber-400"
                >
                  Ethics & Compliance
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-amber-400"
                >
                  Transparency Guarantee
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Field Dispatch Newsletter
            </h4>

            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-white outline-none placeholder:text-slate-500 focus:ring-1 focus:ring-amber-500"
              />

              <button
                type="button"
                className="rounded-r-lg bg-amber-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-600"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Luminary Syndicate. Registered
          Non-Profit International Welfare Organization. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}