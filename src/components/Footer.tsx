import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-[13px] text-muted-foreground hover:text-foreground transition-colors">
            Chris Wheeler
          </Link>
          <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">
            Principal UX Designer · Edinburgh
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:hello@chriswheeler.design" className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/chriswheelerux" target="_blank" rel="noreferrer" className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
