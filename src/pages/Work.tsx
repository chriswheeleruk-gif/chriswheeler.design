import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const flagship = [
  {
    number: '01',
    year: '2021–2023',
    title: 'Scaling design across a digital estate',
    tags: ['Design Systems', 'Strategy', 'Leadership'],
    slug: 'design-systems-scale',
    org: 'Baillie Gifford',
    description:
      'Seven products. Four teams. One shared design language — built from the ground up to reduce design debt, accelerate delivery and create organisational conditions for consistent experience at scale. This work was as much about people and process as it was about components.',
    outcome: 'Design delivery velocity increased by 40%. Cross-team contributions rose from 0 to 60+ per quarter.',
  },
  {
    number: '02',
    year: '2019–2021',
    title: "Designing Aegon's first UK mobile app",
    tags: ['Product Design', 'Strategy', 'Transformation'],
    slug: 'aegon-mobile-app',
    org: 'Aegon UK',
    description:
      'From a blank sheet to a pension management app used by hundreds of thousands of customers. I led UX from strategy through to launch — defining the product vision, establishing design principles, conducting research and translating complex financial decisions into a calm, trustworthy interface.',
    outcome: '4.6★ App Store rating at launch. 78% of users completing onboarding without support contact.',
  },
  {
    number: '03',
    year: '2020–2021',
    title: 'Building an in-house research practice',
    tags: ['Research', 'UX Maturity', 'Organisational Change'],
    slug: 'research-practice',
    org: 'Aegon UK',
    description:
      'Established continuous discovery capability where none existed. Defined a research programme, hired researchers, built the tooling and created the organisational habits that embedded evidence-based decision-making into every product cycle.',
    outcome: '12 research rounds in first year. Research now informs every major product decision.',
  },
];

const selected = [
  { title: 'Player account transformation', tags: ['Product Design', 'Research'], org: 'IGT', year: '2017' },
  { title: 'Responsible gambling UX framework', tags: ['Service Design', 'Compliance'], org: 'IGT', year: '2018' },
  { title: 'Self-service claims portal', tags: ['Product Design', 'Strategy'], org: 'Aegon UK', year: '2019' },
  { title: 'Design system governance model', tags: ['Systems', 'Leadership'], org: 'Baillie Gifford', year: '2022' },
  { title: 'Investor portal accessibility overhaul', tags: ['Accessibility', 'Product Design'], org: 'Baillie Gifford', year: '2023' },
];

export default function Work() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-8">Work</p>
            <h1 className="font-display text-[52px] md:text-[68px] leading-[1.0] font-light tracking-[-0.02em]">
              Projects that shaped<br />products and organisations.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 flex items-end">
            <p className="text-[14px] leading-[1.65] text-muted-foreground">
              Three flagship case studies — plus a selection of broader work across financial services, gaming and investment management.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border max-w-[1440px] mx-auto px-8 md:px-12" />

      {/* Flagship Projects */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12">
        {flagship.map((p, i) => (
          <Link key={i} to={`/work/${p.slug}`} className="group block">
            <div className="grid grid-cols-12 gap-4 py-20 border-b border-border">
              {/* Number + meta */}
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono-label text-[11px] tracking-[0.06em] text-muted-foreground">{p.number}</span>
              </div>

              {/* Title block */}
              <div className="col-span-12 md:col-span-5">
                <div className="mb-4 flex flex-wrap gap-3">
                  {p.tags.map((t, j) => (
                    <span key={j} className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-accent">{t}</span>
                  ))}
                </div>
                <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] font-light tracking-[-0.01em] mb-6 group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h2>
                <div className="flex gap-6">
                  <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{p.org}</span>
                  <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{p.year}</span>
                </div>
              </div>

              {/* Description + outcome */}
              <div className="col-span-12 md:col-span-5 md:col-start-8">
                <p className="text-[15px] leading-[1.65] text-muted-foreground mb-8">{p.description}</p>
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-accent mb-1">Outcome</p>
                  <p className="text-[13px] leading-[1.5] text-foreground">{p.outcome}</p>
                </div>
                <div className="mt-8">
                  <span className="font-mono-label text-[11px] tracking-[0.06em] uppercase text-accent group-hover:translate-x-1 transition-transform inline-block">
                    Read case study →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Selected Stories */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-24 pb-8">
        <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-12">Selected stories</p>
        <div className="space-y-0">
          {selected.map((s, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 py-6 border-t border-border hover:bg-secondary/30 transition-colors -mx-8 md:-mx-12 px-8 md:px-12 cursor-default">
              <div className="col-span-1 hidden md:block">
                <span className="font-mono-label text-[10px] tracking-[0.06em] text-muted-foreground">0{i + 4}</span>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className="text-[17px] font-medium tracking-[-0.01em]">{s.title}</p>
              </div>
              <div className="col-span-6 md:col-span-3 flex flex-wrap gap-3 items-center">
                {s.tags.map((t, j) => (
                  <span key={j} className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="col-span-4 md:col-span-2 flex items-center gap-4 justify-end md:justify-start">
                <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{s.org}</span>
              </div>
              <div className="hidden md:flex col-span-1 items-center justify-end">
                <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{s.year}</span>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
        <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground mt-8">
          Additional work available on request — some under NDA.
        </p>
      </section>

      <Footer />
    </div>
  );
}
