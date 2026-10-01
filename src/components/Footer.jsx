import React from 'react';
import logo from '../assets/luminary_syndicate.jpg';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo"><img src={logo} alt="" /><span>Luminary Syndicate</span></div>
            <p>Advancing dignity, opportunity, and shared prosperity through community-led action.</p>
          </div>
          <div className="footer-column"><h2>Explore</h2><a href="#about">Who we are</a><a href="#campaigns">Our work</a><a href="#events">News & events</a></div>
          <div className="footer-column"><h2>Our commitments</h2><a href="#about">Community leadership</a><a href="#campaigns">Humanitarian response</a><a href="#impact">Accountability</a></div>
          <div className="footer-newsletter"><span>Stay connected</span><h2>Notes from the field.</h2><p>Stories and updates from the communities shaping our work.</p><form onSubmit={(event) => event.preventDefault()}><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" /><button type="submit" aria-label="Subscribe">→</button></form></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Luminary Syndicate</span><span>International Welfare Organization</span><a href="#home">Back to top ↑</a></div>
      </div>
    </footer>
  );
}