import Footer from '../components/Footer';

const roles = [
  {
    title: 'Principal Experience Designer',
    org: 'Baillie Gifford',
    period: '2021 – Present',
    location: 'Edinburgh',
    type: 'Investment Management',
    highlights: [
      'Led design across seven digital products serving institutional investors, intermediaries and retail customers',
      'Built a shared design system adopted by four cross-functional teams, improving delivery velocity by 40%',
      'Established design direction, governance and contribution model for a distributed design organisation',
      'Accountable for UX quality across a £230bn AUM digital estate',
      'Line managed and mentored three designers; structured career development frameworks for the design team',
    ],
  },
  {
    title: 'Lead UX Designer',
    org: 'Aegon UK',
    period: '2018 – 2021',
    location: 'Edinburgh',
    type: 'Financial Services',
    highlights: [
      'Led UX from concept to launch for Aegon\'s first UK mobile pension management app (4.6★, 78% onboarding completion)',
      'Built an in-house UX research practice: tooling, cadence, participant panel and organisational habits',
      'Raised UX maturity from Level 1 to Level 3 on the Nielsen Norman Group scale within 18 months',
      'Managed a team of three designers and one UX researcher across multiple concurrent product programmes',
      'Defined design principles and review process adopted across the UK product organisation',
    ],
  },
  {
    title: 'UX Researcher & Designer',
    org: 'IGT (International Game Technology)',
    period: '2015 – 2018',
    location: 'Reno, NV / Remote',
    type: 'Gaming Technology',
    highlights: [
      'Designed player account experiences for lottery and gaming platforms used across 35+ jurisdictions',
      'Led responsible gambling UX framework — balancing regulatory requirements with customer autonomy',
      'Conducted qualitative and quantitative research across regulated markets in North America and Europe',
      'Established UX review process for compliance-critical UI decisions',
    ],
  },
  {
    title: 'Earlier experience',
    org: 'Financial services & customer-facing roles',
    period: '2005 – 2015',
    location: 'UK',
    type: 'Various',
    highlights: [
      'Customer-facing advisory roles in retail banking and financial services',
      'Developed deep domain knowledge in pensions, investments and financial behaviour',
      'Early involvement in digital channel strategy and customer journey improvement',
    ],
  },
];

const education = [
  {
    qualification: 'MSc Human-Computer Interaction',
    institution: 'University of Edinburgh',
    year: '2014',
  },
  {
    qualification: 'BA (Hons) Business & Marketing',
    institution: 'Heriot-Watt University',
    year: '2005',
  },
];

const capabilities = [
  'Product strategy & vision',
  'UX research (qual & quant)',
  'Design systems',
  'Information architecture',
  'Interaction design',
  'Content strategy',
  'UX maturity development',
  'Design team leadership',
  'Workshop facilitation',
  'Stakeholder management',
  'Accessibility (WCAG 2.1)',
  'Figma, Maze, Dovetail',
];

export default function CV() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-6">Curriculum Vitae</p>
            <h1 className="font-display text-[48px] md:text-[64px] leading-[1.0] font-light tracking-[-0.02em] mb-4">
              Chris Wheeler
            </h1>
            <p className="font-mono-label text-[12px] tracking-[0.06em] uppercase text-muted-foreground">
              Principal UX / Experience Designer · Edinburgh, UK
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 flex flex-col justify-end gap-4">
            <a
              href="#"
              className="font-mono-label text-[11px] tracking-[0.08em] uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors text-center"
            >
              Download PDF ↓
            </a>
            <a
              href="mailto:hello@chriswheeler.design"
              className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground hover:text-foreground transition-colors text-center"
            >
              hello@chriswheeler.design
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="bg-secondary/40 border-t border-b border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-12">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-2">
              <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">Profile</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p className="text-[17px] leading-[1.7]">
                Principal UX Designer with twenty years of experience in financial services, investment management and regulated technology. I work at the intersection of product strategy, design systems and team leadership — designing better experiences, and the organisational conditions that make them repeatable. Currently leading design across multiple digital products at Baillie Gifford.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-16">
        <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-12">Experience</p>
        <div className="space-y-0">
          {roles.map((r, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 py-12 border-t border-border">
              {/* Period + meta */}
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono-label text-[11px] tracking-[0.04em] font-medium mb-2">{r.period}</p>
                <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground mb-1">{r.location}</p>
                <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{r.type}</p>
              </div>

              {/* Role */}
              <div className="col-span-12 md:col-span-8">
                <div className="mb-5">
                  <h2 className="font-display text-[22px] leading-[1.2] font-light mb-1">{r.title}</h2>
                  <p className="font-mono-label text-[11px] tracking-[0.04em] text-accent">{r.org}</p>
                </div>
                <ul className="space-y-3">
                  {r.highlights.map((h, j) => (
                    <li key={j} className="flex gap-4 text-[14px] leading-[1.6] text-muted-foreground">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </section>

      {/* Education + Capabilities */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-16 border-t border-border">
        <div className="grid grid-cols-12 gap-16">
          {/* Education */}
          <div className="col-span-12 md:col-span-5">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-8">Education</p>
            {education.map((e, i) => (
              <div key={i} className="py-6 border-t border-border first:border-t-0">
                <p className="font-display text-[18px] leading-[1.3] font-light mb-1">{e.qualification}</p>
                <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground mb-1">{e.institution}</p>
                <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{e.year}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-8">Capabilities</p>
            <div className="flex flex-wrap gap-0">
              {capabilities.map((c, i) => (
                <div key={i} className="border border-border px-4 py-2 m-0 -mt-px -mr-px">
                  <span className="font-mono-label text-[10px] tracking-[0.06em] text-foreground">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-display text-[22px] leading-[1.3] font-light">
              Prefer a PDF? Download the full CV.
            </p>
            <a
              href="#"
              className="font-mono-label text-[11px] tracking-[0.08em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
            >
              Download CV ↓
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
