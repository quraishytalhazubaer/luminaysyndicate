import React, { useState, useEffect } from 'react';
import logo from '../assets/luminary_syndicate.jpg';

export default function Navbar({ 
  activeTab = 'home', 
  setActiveTab = () => {}, 
  currentLang = 'en', 
  setCurrentLang = () => {}, 
  isLoggedIn = false, 
  user = null, 
  onOpenAuth = () => {}, 
  onOpenDonate = () => {} 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'sw', label: 'Kiswahili', flag: '🇰🇪' }
  ];

  const activeLangObj = languages.find(l => l.code === currentLang) || languages[0];

  const navLinks = [
    { id: 'about', label: 'Who We Are' },
    { id: 'campaigns', label: 'Our Work' },
    { id: 'events', label: 'News & Events' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>Working together for a more just and peaceful world</span>
          <div className="utility-actions">
            <button onClick={isLoggedIn ? () => handleNavClick('campaigns') : onOpenAuth}>
              {isLoggedIn ? (user?.name || 'Member portal') : 'Member portal'}
            </button>
            <div className="language-control">
              <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} aria-expanded={langDropdownOpen}>
                {activeLangObj.code.toUpperCase()} <span aria-hidden="true">⌄</span>
              </button>
              {langDropdownOpen && (
                <div className="language-menu">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => { setCurrentLang(lang.code); setLangDropdownOpen(false); }}>
                      <span>{lang.flag}</span> {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="site-container header-inner">
          <button className="brand" onClick={() => handleNavClick('home')} aria-label="Luminary Syndicate home">
            <img src={logo} alt="" />
            <span className="brand-copy">
              <strong>Luminary Syndicate</strong>
              <small>International Welfare Organization</small>
            </span>
          </button>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)} className={activeTab === link.id ? 'is-active' : ''}>
                {link.label}
              </button>
            ))}
          </nav>
          <div className="header-cta">
            <button className="button button-red button-small" onClick={onOpenDonate}>Give support <span aria-hidden="true">↗</span></button>
          </div>
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen}>
            <span /><span />
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => handleNavClick(link.id)}>{link.label}<span aria-hidden="true">↗</span></button>
            ))}
            <button onClick={onOpenDonate}>Make a donation<span aria-hidden="true">↗</span></button>
          </nav>
        )}
      </header>
    </>
  );
}