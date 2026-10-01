export default function HeroSection({ onOpenDonate = () => {}, onOpenVideo = () => {} }) {
  return (
    <section id="home" className="hero-section">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" />A world where everyone can thrive</p>
          <h1>Human dignity.<br /><em>Shared prosperity.</em></h1>
          <p className="hero-lede">We work alongside communities to advance opportunity, protect the vulnerable, and build a future where no one is left behind.</p>
          <div className="hero-actions">
            <button className="button button-red" onClick={onOpenDonate}>Stand with communities <span aria-hidden="true">↗</span></button>
            <button className="text-link" onClick={onOpenVideo}><span className="play-mark" aria-hidden="true">▶</span> Watch our story</button>
          </div>
          <div className="hero-note"><span aria-hidden="true">✳</span> Community-led action. Lasting change.</div>
        </div>
        <figure className="hero-visual">
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1500&q=85" alt="Children taking part in a community learning programme" />
          <figcaption><span>FIELD NOTES · 01</span><span>Hope grows when opportunity is shared</span></figcaption>
          <div className="hero-image-index" aria-hidden="true">01 / 04</div>
        </figure>
      </div>
      <div className="impact-strip" id="impact">
        <div className="site-container impact-inner">
          <div className="impact-intro"><span>Our impact</span><strong>Progress we build together</strong></div>
          <div className="impact-stat"><strong>4.89<span>M</span></strong><span>meals delivered</span></div>
          <div className="impact-stat"><strong>68<span>K+</span></strong><span>children supported in education</span></div>
          <div className="impact-stat"><strong>100<span>%</span></strong><span>direct field audit</span></div>
          <a href="#campaigns" className="impact-link">Explore our work <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}