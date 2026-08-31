import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="page-enter min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        {/* Hero */}
        <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-24 flex-1">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-12 md:col-span-8">
              <h1 className="font-display text-[64px] md:text-[96px] lg:text-[120px] leading-[1.0] font-light tracking-[-0.025em] mb-12">
                Let's make<br />
                something<br />
                better.
              </h1>

              {/* Contact details */}
              <div className="space-y-0 max-w-[480px]">
                <div className="flex items-center justify-between py-6 border-t border-border">
                  <span className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-muted-foreground">Email</span>
                  <a
                    href="mailto:hello@chriswheeler.design"
                    className="font-mono-label text-[13px] tracking-[0.02em] text-foreground hover:text-accent transition-colors"
                  >
                    hello@chriswheeler.design
                  </a>
                </div>
                <div className="flex items-center justify-between py-6 border-t border-border">
                  <span className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-muted-foreground">LinkedIn</span>
                  <a
                    href="https://linkedin.com/in/chriswheelerux"
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-label text-[13px] tracking-[0.02em] text-foreground hover:text-accent transition-colors"
                  >
                    linkedin.com/in/chriswheelerux
                  </a>
                </div>
                <div className="flex items-center justify-between py-6 border-t border-b border-border">
                  <span className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-muted-foreground">Location</span>
                  <span className="font-mono-label text-[13px] tracking-[0.02em] text-foreground">
                    Edinburgh, Scotland
                  </span>
                </div>
              </div>

              <p className="font-mono-label text-[11px] tracking-[0.06em] uppercase text-muted-foreground mt-10">
                Available for senior roles, design leadership positions<br />
                and select advisory or mentoring engagements.
              </p>
            </div>

            {/* Side note */}
            <div className="col-span-12 md:col-span-3 md:col-start-10 flex items-end pb-4">
              <div>
                <p className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-muted-foreground mb-4">
                  Response time
                </p>
                <p className="text-[14px] leading-[1.6] text-muted-foreground">
                  I reply to all professional enquiries within two working days. For mentoring requests, please include a brief note about where you are in your career and what you're trying to figure out.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
