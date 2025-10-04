import React from 'react';

const Header = ({ setActiveTab, theme = 'dark', onToggleTheme, onOpenLogin, onOpenSignup }) => {
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'early-detection', label: 'Early Detection' },
    { key: 'tracker', label: 'Period Tracker' },
    { key: 'resources', label: 'Resources' },
    { key: 'community', label: 'Community' },
  ];

  return (
    <header className="bg-dark sticky top-0 z-10 neon-border-blue">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="w-9 h-9 rounded-full bg-neon-blue/20 flex items-center justify-center neon-border-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-neon-blue">
              <path d="M12 2l2.39 6.9H21l-5.2 3.78L17.8 19 12 15.45 6.2 19l2-6.32L3 8.9h6.61L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neon-blue neon-text-blue">PCOS Guardian</h1>
            <p className="text-xs text-soft-white/80">Empower your health journey with AI-driven care</p>
          </div>
        </div>

        <div className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className="text-soft-white font-medium hover:text-neon-purple transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
        {/* subtle divider and spacing between nav and actions */}
        <div className="hidden md:block w-px h-6 bg-soft-white/20 mx-2" />
        <div className="flex items-center gap-3 md:pl-3 md:border-l md:border-white/10">
          {/* Theme Toggle */}
          <button
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            onClick={onToggleTheme}
            className="neon-button neon-button-blue w-9 h-9 rounded-full p-0 flex items-center justify-center"
          >
            {theme === 'light' ? (
              <span aria-hidden="true">🌞</span>
            ) : (
              <span aria-hidden="true">🌙</span>
            )}
          </button>

          {/* Auth */}
          <button onClick={onOpenLogin} className="neon-button">Log in</button>
          <button onClick={onOpenSignup} className="neon-button neon-button-pink">Sign up</button>

          <button 
            onClick={() => setActiveTab('onboarding')}
            className="neon-button neon-button-blue hidden sm:inline"
          >
            My Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;