import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/work', label: 'Work' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/about', label: 'About' },
    { to: '/cv', label: 'CV' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-display text-[15px] font-medium tracking-tight hover:text-accent transition-colors">
          Chris Wheeler
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `nav-link font-mono-label text-[11px] tracking-[0.08em] uppercase ${isActive ? 'active text-foreground' : 'text-muted-foreground hover:text-foreground'} transition-colors`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono-label text-[11px] tracking-[0.08em] uppercase text-muted-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-8 py-4 font-mono-label text-[11px] tracking-[0.08em] uppercase text-muted-foreground border-b border-border hover:text-foreground transition-colors"
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
