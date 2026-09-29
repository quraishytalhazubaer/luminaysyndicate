import React from 'react';

export default function DonateModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            Make a Donation
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-slate-400 hover:text-slate-700"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <p className="mb-6 text-slate-600">
          Your contribution can help us support our campaigns
          and community initiatives.
        </p>

        {/* Donation form goes here */}

        <button
          onClick={onClose}
          className="w-full rounded-lg bg-slate-900 px-4 py-3 text-white transition hover:bg-slate-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
}