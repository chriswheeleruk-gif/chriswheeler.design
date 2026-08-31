import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const projects = [
  {
    number: '01',
    title: 'Scaling design across a digital estate',
    tags: ['Design Systems', 'Strategy', 'Leadership'],
    description:
      'Built a shared design language across seven products and four teams — reducing design debt, accelerating delivery and creating the organisational conditions for consistent, high-quality experience at scale.',
    slug: 'design-systems-scale',
    year: '2021–2023',
  },
  {
    number: '02',
    title: "Designing Aegon's first UK mobile app",
    tags: ['Product Design', 'Strategy', 'Transformation'],
    description:
      'Led end-to-end UX for a pension management app from concept to launch — defining product strategy, establishing design principles and translating complex financial decisions into a calm, accessible interface.',
    slug: 'aegon-mobile-app',
    year: '2019–2021',
  },
  {
    number: '03',
    title: 'Building an in-house research practice',
    tags: ['Research', 'UX Maturity', 'Organisational Change'],
    description:
      'Established continuous discovery capability inside a financial services organisation — embedding evidence-driven decision-making into product cycles and raising UX maturity across the business.',
    slug: 'research-practice',
    year: '2020–2021',
  },
];

const beyondInterface = [
  {
    label: 'Strategy',
    text: 'Translating business problems into design problems — and back again. Bringing design perspective into product strategy before a single wireframe is drawn.',
  },
  {
    label: 'Design Systems',
    text: 'Building shared languages for teams to move faster together. Treating the system as a product in its own right: documented, principled, maintained.',
  },
  {
    label: 'Teams & Mentoring',
    text: 'Growing designers by creating conditions for them to do the best work of their careers. Feedback, structure, psychological safety, and honest critique.',
  },
  {
    label: 'UX Maturity',
    text: 'Measuring, reporting and growing the organisation\'s capacity to do good experience design — from research cadences to design reviews to hiring criteria.',
  },
];

export default function Home() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-24">
        <div className="max-w-[900px]">
          <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-accent mb-8">
            Principal UX / Experience Designer · Edinburgh
          </p>
          <h1 className="font-display text-[56px] md:text-[80px] lg:text-[96px] leading-[1.0] font-light tracking-[-0.02em] text-foreground mb-10">
            I design better<br />
            experiences. And the<br />
            systems that make<br />
            them possible.
          </h1>
          <div className="flex flex-wrap gap-6 mt-8">
            {['Strategy', 'Systems', 'Leadership', 'Product'].map((tag, i) => (
              <span key={i} className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule max-w-[1440px] mx-auto px-8 md:px-12" style={{ margin: '0 auto' }} />
      <div style={{ borderTop: '1px solid var(--border)', maxWidth: '1440px', margin: '0 auto' }} className="mx-8 md:mx-12" />

      {/* Featured Projects */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-20">
        <div className="flex items-center justify-between mb-16">
          <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground">
            Selected Work
          </p>
          <Link to="/work" className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>

        <div className="space-y-0">
          {projects.map((p, i) => (
            <Link key={i} to={`/work/${p.slug}`} className="group block">
              <div className="grid grid-cols-12 gap-4 py-14 border-t border-border hover:bg-secondary/40 transition-colors duration-300 -mx-8 md:-mx-12 px-8 md:px-12">
                <div className="col-span-12 md:col-span-1">
                  <span className="font-mono-label text-[11px] tracking-[0.06em] text-muted-foreground">{p.number}</span>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h2 className="font-display text-[32px] md:text-[42px] leading-[1.1] font-light tracking-[-0.01em] group-hover:text-accent transition-colors duration-300 mb-4">
                    {p.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {p.tags.map((t, j) => (
                      <span key={j} className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-between">
                  <p className="text-[15px] leading-[1.6] text-muted-foreground mb-6">
                    {p.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{p.year}</span>
                    <span className="font-mono-label text-[11px] text-accent group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </div>
                </div>
              </div>
              {i === projects.length - 1 && <div className="border-t border-border -mx-8 md:-mx-12" />}
            </Link>
          ))}
        </div>
      </section>

      {/* Beyond the Interface */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-4">Beyond the interface</p>
            <h2 className="font-display text-[38px] leading-[1.1] font-light tracking-[-0.01em]">
              Designing at every<br />level of the problem.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 grid grid-cols-2 gap-0">
            {beyondInterface.map((item, i) => (
              <div
                key={i}
                className={`p-8 border-border ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border`}
              >
                <p className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-accent mb-4">{item.label}</p>
                <p className="text-[14px] leading-[1.65] text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagram: Maturity Model */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-16">
        <div className="border border-border p-10 md:p-16 bg-secondary/30">
          <p className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-10">
            How design creates value at different organisational levels
          </p>
          <div className="relative overflow-x-auto">
            <svg viewBox="0 0 960 200" className="w-full" style={{ minWidth: '480px' }}>
              {/* Horizontal axis */}
              <line x1="40" y1="160" x2="920" y2="160" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />

              {/* Levels */}
              {[
                { x: 80, label: 'Interface', sub: 'Craft · Interaction · Visual' },
                { x: 280, label: 'Product', sub: 'Strategy · Decisions · Impact' },
                { x: 480, label: 'System', sub: 'Patterns · Consistency · Scale' },
                { x: 680, label: 'Organisation', sub: 'Maturity · Culture · Capability' },
                { x: 880, label: 'Industry', sub: 'Standards · Community · Voice' },
              ].map((level, i) => (
                <g key={i}>
                  <line x1={level.x} y1={160} x2={level.x} y2={160 - (i + 1) * 26} stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
                  <circle cx={level.x} cy={160 - (i + 1) * 26} r="4" fill="var(--accent)" opacity={0.6 + i * 0.08} />
                  <text x={level.x} y="178" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6" fontFamily="DM Mono, monospace">{level.label}</text>
                  <text x={level.x} y="192" textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.35" fontFamily="DM Mono, monospace">{level.sub}</text>
                </g>
              ))}

              {/* Connecting curve */}
              <path
                d="M 80,134 C 180,120 180,108 280,108 C 380,108 380,82 480,82 C 580,82 580,56 680,56 C 780,56 780,30 880,30"
                stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1.5" fill="none" strokeDasharray="4,3"
              />

              {/* Arrow */}
              <text x="900" y="158" fontSize="10" fill="currentColor" opacity="0.35" fontFamily="DM Mono, monospace">Level →</text>
            </svg>
          </div>
          <p className="font-mono-label text-[10px] tracking-[0.06em] text-muted-foreground mt-6">
            Principal-level designers operate across all five levels simultaneously.
          </p>
        </div>
      </section>

      {/* About Teaser */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-6">About</p>
            <p className="font-display text-[28px] leading-[1.25] font-light tracking-[-0.01em] mb-6">
              Twenty years turning customer problems into better experiences — and better organisations.
            </p>
            <Link to="/about" className="font-mono-label text-[11px] tracking-[0.08em] uppercase text-accent hover:text-foreground transition-colors">
              Read the story →
            </Link>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="text-[15px] leading-[1.7] text-muted-foreground">
              I started as a customer advocate in financial services, moved into research and design, and spent the last decade working at the intersection of product strategy, design systems and team leadership. I'm drawn to complex, regulated, high-stakes domains — where the constraints are hardest and the impact of good design is most felt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="font-display text-[52px] md:text-[72px] leading-[1.0] font-light tracking-[-0.02em] max-w-[700px]">
            Let's make<br />something better.
          </h2>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:hello@chriswheeler.design"
              className="font-mono-label text-[13px] tracking-[0.04em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              Get in touch
            </a>
            <a
              href="https://linkedin.com/in/chriswheelerux"
              target="_blank"
              rel="noreferrer"
              className="font-mono-label text-[11px] tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors text-center"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
