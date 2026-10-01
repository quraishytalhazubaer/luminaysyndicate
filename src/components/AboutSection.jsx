import React from 'react';

export default function AboutSection({ onOpenVideo = () => {} }) {
  return (
    <section id="about" className="about-section">
      <div className="site-container about-grid">
        <div className="about-image-wrap">
          <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1100&q=85" alt="Community members working together at a local gathering" />
          <div className="image-caption"><span>01</span><span>Change starts with listening.</span></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span className="eyebrow-rule" />Who we are</p>
          <h2>Progress is strongest when it belongs to everyone.</h2>
          <p className="section-lede">Luminary Syndicate is an international welfare organization working with local partners to respond to urgent needs and expand the systems that help communities flourish.</p>
          <div className="principles">
            <div><span className="principle-number">01</span><div><strong>Led by communities</strong><p>Local knowledge shapes every programme, from first conversation to lasting change.</p></div></div>
            <div><span className="principle-number">02</span><div><strong>Accountable by design</strong><p>We work transparently and share responsibility for the outcomes we create together.</p></div></div>
          </div>
          <button className="text-link about-video" onClick={onOpenVideo}>Discover our mission <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </section>
  );
}