import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';

const cases: Record<string, {
  number: string;
  title: string;
  tags: string[];
  org: string;
  year: string;
  role: string;
  outcome: string;
  context: string;
  challenge: string;
  myRole: string;
  constraints: string[];
  understanding: string;
  decisions: { title: string; body: string; why: string }[];
  evolution: string;
  influence: string;
  impact: { metric: string; value: string }[];
  learned: string;
  pullQuote: string;
}> = {
  'design-systems-scale': {
    number: '01',
    title: 'Scaling design across a digital estate',
    tags: ['Design Systems', 'Strategy', 'Leadership'],
    org: 'Baillie Gifford',
    year: '2021–2023',
    role: 'Principal Experience Designer',
    outcome: 'A shared design language adopted across seven products and four teams, reducing design debt and increasing delivery velocity by 40%.',
    context:
      'Baillie Gifford manages over £230bn in assets and was growing its digital estate rapidly. Seven products served different investor audiences — retail, institutional, intermediary — built by separate teams in different tech stacks, with no shared design language.',
    challenge:
      'Design was being reinvented on every project. Inconsistent components, duplicated research, misaligned patterns and no shared vocabulary meant that each product felt different, cost more to build and was harder to evolve. The organisation wanted to scale — but scaling without a system just scales the chaos.',
    myRole:
      'I led the design systems workstream end-to-end: auditing the existing estate, building the case for investment, defining the system architecture, hiring contributors, and establishing the governance that would keep it alive after launch. I also held design accountability across four of the seven products in scope.',
    constraints: [
      'Multiple existing products could not be rebuilt — the system had to migrate in, not replace.',
      'Four engineering teams with different tech stacks and release cadences.',
      'No dedicated system team budget initially — contributions had to come from product teams.',
      'Investment management brand identity is conservative — this was not an opportunity for visual reinvention.',
    ],
    understanding:
      'I started with an audit of every component in use across the estate — 340+ unique UI elements across seven products, many semantically equivalent but visually inconsistent. This revealed three problem categories: visual fragmentation (same pattern, different appearance), interaction inconsistency (same intent, different behaviour), and documentation debt (decisions made but never recorded). The audit became the business case.',
    decisions: [
      {
        title: 'Build a foundation layer, not a component library',
        body: 'Rather than starting with a component inventory — the typical approach — I started by defining tokens: colour, spacing, typography, motion. This meant teams could adopt the system incrementally without needing to rewrite components. Every product could immediately speak the same visual language without a full migration.',
        why: 'A component-first system would have required teams to rewrite existing UIs to adopt it. A token-first system let us introduce consistency at the stylesheet level, which every team could ship in a single sprint.',
      },
      {
        title: 'Treat governance as a product, not a process',
        body: 'Instead of a contribution guide (a document no one reads), I built a contribution workflow into the teams\' existing sprint ceremonies. Design system changes were proposed, reviewed and released on a two-week cadence with clearly defined roles: contributors, reviewers, and stewards. The system had an owner, a roadmap, a backlog and a changelog.',
        why: 'Systems die from neglect, not from bad components. Making the governance feel like a product — with a team, a backlog and releases — meant it survived team changes, organisational restructures and competing priorities.',
      },
      {
        title: 'Make the system visible inside the organisation',
        body: 'I established a monthly design system review — open to designers, engineers and product managers — where we demoed new components, discussed proposals and shared usage patterns. This created a community of practice around the system and raised awareness of its value beyond the design team.',
        why: 'A design system is only as valuable as its adoption. Making the work visible — and making contributors feel recognised — turned the system from a design team project into an organisational capability.',
      },
    ],
    evolution:
      'The system launched with 64 components covering 80% of existing use cases. Within eight months, all seven products had adopted the foundation tokens. Cross-team contributions grew from zero to 60+ per quarter. The system became the default starting point for all new product work.',
    influence:
      'The work involved constant collaboration with engineering leads, product managers and the brand team. Engineering led the technical architecture of the component library — I made sure design and engineering decisions were made together, not sequentially. The brand team were brought into every major visual decision to ensure alignment.',
    impact: [
      { metric: 'Design delivery velocity', value: '+40%' },
      { metric: 'Cross-team contributions/quarter', value: '60+' },
      { metric: 'Unique components reduced', value: '340 → 64' },
      { metric: 'Products on the system', value: '7 of 7' },
    ],
    learned:
      `Systems work is people work. The hardest part was never the components — it was getting four teams with different priorities to invest in a shared resource. The answer wasn't authority; it was making the system so obviously valuable that opting out felt like self-harm.

I also learned that governance is the most underrated part of design systems. Most teams invest heavily in building and almost nothing in maintaining. Treating governance like a product — with a team, a roadmap and a release cadence — was the single decision that made this system outlast me.`,
    pullQuote: '"The system isn\'t the component library. The system is the shared understanding of how we make decisions together."',
  },
  'aegon-mobile-app': {
    number: '02',
    title: "Designing Aegon's first UK mobile app",
    tags: ['Product Design', 'Strategy', 'Transformation'],
    org: 'Aegon UK',
    year: '2019–2021',
    role: 'Lead UX Designer',
    outcome: '4.6★ App Store rating at launch. 78% of users completing onboarding without support contact. First mobile touchpoint for Aegon UK\'s pension customers.',
    context:
      'Aegon UK is one of the UK\'s largest pension providers, serving over a million customers. In 2019, it had no mobile presence — customers managed pensions exclusively through a desktop web portal built over a decade. Mobile was a strategic gap in a market where competitors were moving quickly.',
    challenge:
      'Pension management is a uniquely complex UX challenge: infrequent, high-stakes interactions; customers with varying financial literacy; regulatory constraints on what can be shown and said; and legacy data systems that couldn\'t easily surface what users actually needed to see. The risk of a poorly executed first mobile experience was high — pensions carry deep customer anxiety.',
    myRole:
      'I led UX from initial discovery through launch — defining the product strategy, establishing design principles, conducting and commissioning research, and designing the end-to-end experience across iOS and Android. I also worked closely with the product owner to define MVP scope and managed a junior designer.',
    constraints: [
      'Regulatory compliance: FCA rules constrained how financial information could be presented.',
      'Legacy data: core pension data lived in systems that couldn\'t be easily restructured for mobile.',
      'Feature parity pressure: stakeholders wanted everything the web portal offered on day one.',
      'Unfamiliar audience: first time Aegon had done mobile-native research with their own customers.',
    ],
    understanding:
      'I ran six weeks of foundational research before a single wireframe was drawn. We interviewed 24 pension customers across age, pension literacy and life stage. What emerged was a clear pattern: customers didn\'t want to manage their pension — they wanted to feel in control of it. The distinction changed everything. "Management" implies action; "control" implies confidence. Our design challenge became: how do we help someone feel confident about something they rarely interact with and don\'t fully understand?',
    decisions: [
      {
        title: 'Design for confidence, not comprehensiveness',
        body: 'Despite pressure to replicate the web portal, we scoped the MVP around four moments that mattered most to customers: checking their pot, understanding their projection, updating their contribution and getting reassurance in volatile markets. Everything else was deferred.',
        why: 'Research showed that the most common mobile interaction was a 90-second reassurance check — "is my pension okay?" — not a complex management task. Building for confidence meant fewer features, but features that actually served the dominant use case.',
      },
      {
        title: 'Treat language as a design material',
        body: 'We ran content design as a parallel workstream to visual design — every label, heading, error state and empty state was tested for comprehension. Industry-standard pension terminology ("projected annuity value") was replaced with plain language ("your estimated retirement income") wherever regulation permitted.',
        why: 'Customers were failing comprehension tasks not because the design was poor, but because the language was opaque. Fixing the words fixed the experience.',
      },
      {
        title: 'Design the anxiety states',
        body: 'Most product design focuses on the happy path. We spent disproportionate design effort on the anxious states: market downturns, underperforming funds, missed contributions. Each state had a designed response — clear, calm, and action-oriented without being alarmist.',
        why: 'Customers were most likely to contact the support centre during anxious moments — which was expensive for Aegon and stressful for customers. Designing the anxiety states was directly tied to a measurable business outcome.',
      },
    ],
    evolution:
      'The app launched on iOS and Android simultaneously. We held back 40% of the designed feature set for the first two post-launch iterations, using live usage data to prioritise what to build next. The design system established for the app became the foundation for Aegon\'s broader digital design language.',
    influence:
      'Product management drove scope decisions; I provided the research evidence to back them. Engineering partners in Edinburgh and Chennai were involved in design critique from week three — architecture constraints shaped several key design decisions. The compliance team were embedded in weekly reviews from the beginning.',
    impact: [
      { metric: 'App Store rating at launch', value: '4.6★' },
      { metric: 'Onboarding completion (no support)', value: '78%' },
      { metric: 'Support contact rate', value: '−32%' },
      { metric: 'Research participants', value: '24' },
    ],
    learned:
      `The biggest learning was the value of scoping ruthlessly. The pressure to build everything for launch was intense — and wrong. The 78% onboarding completion rate was a direct result of building only the things that mattered most, and building them extremely well.

I also learned that anxiety is an underrated design constraint. When you design for the moment when someone is most worried about something they don\'t understand, you build something genuinely useful. The features we were proudest of weren\'t the complex ones — they were the ones that made people feel less scared.`,
    pullQuote: '"People don\'t want to manage their pension. They want to feel in control of it. The distinction changed everything we designed."',
  },
  'research-practice': {
    number: '03',
    title: 'Building an in-house research practice',
    tags: ['Research', 'UX Maturity', 'Organisational Change'],
    org: 'Aegon UK',
    year: '2020–2021',
    role: 'Lead UX Designer (Research Lead)',
    outcome: '12 research rounds in first year. Research now informs every major product decision. UX maturity moved from Level 1 to Level 3 on the Nielsen Norman scale.',
    context:
      'Aegon UK was operating as a design-led organisation in aspiration but not in practice. Design decisions were being made on assumption and stakeholder instinct. There was no in-house research function, no research tooling and no organisational habit of testing with customers before shipping.',
    challenge:
      'Building a research practice inside a large financial services organisation meant confronting structural resistance: procurement processes that slowed access to participants; legal concerns about recording customer interactions; a culture where speed to delivery was prioritised over evidence; and a general unfamiliarity with what UX research actually produces.',
    myRole:
      'Alongside my product design work on the mobile app, I proposed and led the research practice initiative. This involved making the business case, establishing tooling and processes, hiring the first UX researcher, and embedding research into the product development lifecycle.',
    constraints: [
      'No research budget at the start — the business case had to be made on cost-avoidance grounds.',
      'Legal and compliance constraints around customer data and recording consent.',
      'Procurement processes designed for IT contracts, not user research recruitment.',
      'Teams accustomed to shipping without research — cultural inertia to overcome.',
    ],
    understanding:
      'I started by documenting what decisions were being made without evidence — and estimating the cost of getting those decisions wrong. Three examples of research-preventable mistakes (a failed feature, a costly support surge, a major redesign shortly after launch) created a compelling financial case. The cost of the research practice was less than one of the three mistakes.',
    decisions: [
      {
        title: 'Start with a research log, not a research team',
        body: 'Before hiring anyone, I created a public research log — a shared Confluence space where every piece of research, informal observation and customer feedback was documented. This created visible demand for research, made existing evidence findable, and demonstrated the value of synthesis before we had a researcher to do it properly.',
        why: 'Hiring a researcher into an organisation that doesn\'t value research is setting them up to fail. Creating visible demand first meant the first researcher joined an organisation that was already asking for what they could provide.',
      },
      {
        title: 'Define a research cadence, not just research projects',
        body: 'Rather than commissioning research on a project-by-project basis, I established a fortnightly customer session programme — eight participants per month across all active product areas. This created a continuous flow of insight rather than periodic bursts, and embedded research into the rhythm of product development.',
        why: 'Ad hoc research is easy to cut when budgets are squeezed. A cadence — with a schedule, a participant pool and a reporting structure — becomes a dependency rather than a nice-to-have.',
      },
      {
        title: 'Make findings unavoidable, not just available',
        body: 'Research findings were shared at product team standups, design reviews and quarterly business reviews. Key insights were printed and displayed in the studio. Every product review deck began with a customer insight. The goal was to make ignoring research evidence feel conspicuous.',
        why: 'Research that sits in a Confluence page changes nothing. Research that appears at every decision point changes culture.',
      },
    ],
    evolution:
      'The practice started as one designer running ad hoc sessions. By the end of the first year, we had a dedicated UX researcher, a panel of 200+ opted-in customers, an established research calendar and research embedded into the product development process for all major product lines.',
    influence:
      'The product management team were essential partners — their buy-in turned research from a design activity into a product team activity. The first research hire was a collaborative decision between me and the Head of Product. Legal and compliance were involved in developing the participant consent framework.',
    impact: [
      { metric: 'Research rounds in year one', value: '12' },
      { metric: 'Opted-in customer panel', value: '200+' },
      { metric: 'NN/g UX Maturity Level', value: '1 → 3' },
      { metric: 'Products using continuous research', value: '4' },
    ],
    learned:
      `The most important thing I learned was that research practice is an organisational design challenge, not a design process challenge. The techniques weren\'t complicated — the politics were.

Making the business case in financial terms, not design terms, was what opened the door. And making findings unavoidable — not just available — was what changed behaviour. A research report that nobody reads has zero impact. Research that appears on a slide in the quarterly business review, in the mouth of a product manager, changes decisions.`,
    pullQuote: '"Research that sits in a Confluence page changes nothing. Research that appears at every decision point changes culture."',
  },
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? cases[slug] : null;

  if (!cs) {
    return (
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36">
        <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-4">Not found</p>
        <Link to="/work" className="font-mono-label text-[11px] tracking-[0.08em] uppercase text-accent">← Back to work</Link>
      </div>
    );
  }

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-16">
        <Link to="/work" className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors inline-block mb-10">
          ← Work
        </Link>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-wrap gap-4 mb-6">
              {cs.tags.map((t, i) => (
                <span key={i} className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-accent">{t}</span>
              ))}
            </div>
            <h1 className="font-display text-[44px] md:text-[64px] leading-[1.0] font-light tracking-[-0.02em] mb-8">
              {cs.title}
            </h1>
            <div className="flex gap-8">
              <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{cs.org}</span>
              <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{cs.year}</span>
              <span className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{cs.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Banner */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-1">
              <p className="font-mono-label text-[10px] tracking-[0.08em] uppercase opacity-40">Outcome</p>
            </div>
            <div className="col-span-12 md:col-span-10">
              <p className="font-display text-[22px] md:text-[28px] leading-[1.3] font-light">
                {cs.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact metrics */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-16 border-b border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {cs.impact.map((m, i) => (
            <div key={i} className={`py-8 px-6 ${i < cs.impact.length - 1 ? 'border-r border-border' : ''}`}>
              <p className="font-display text-[40px] md:text-[52px] leading-[1] font-light text-accent mb-2">{m.value}</p>
              <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground leading-[1.4]">{m.metric}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Context */}
      <Section label="Context" number="01">
        <TwoCol
          left={<p className="font-display text-[24px] leading-[1.35] font-light text-muted-foreground italic">{cs.pullQuote}</p>}
          right={<p className="text-[15px] leading-[1.7]">{cs.context}</p>}
        />
      </Section>

      {/* Challenge */}
      <Section label="The Challenge" number="02" dark>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <p className="font-display text-[28px] md:text-[36px] leading-[1.25] font-light">{cs.challenge}</p>
          </div>
        </div>
      </Section>

      {/* My Role */}
      <Section label="My Role" number="03">
        <TwoCol
          left={null}
          right={<p className="text-[15px] leading-[1.7]">{cs.myRole}</p>}
        />
      </Section>

      {/* Constraints */}
      <Section label="Constraints" number="04">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            {cs.constraints.map((c, i) => (
              <div key={i} className="flex gap-6 py-5 border-t border-border">
                <span className="font-mono-label text-[10px] tracking-[0.06em] text-muted-foreground mt-1 flex-shrink-0">0{i + 1}</span>
                <p className="text-[15px] leading-[1.6]">{c}</p>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </Section>

      {/* Understanding the Problem */}
      <Section label="Understanding the Problem" number="05" dark>
        <TwoCol
          left={
            <div>
              <p className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-accent mb-3">Research approach</p>
              {/* Simple diagram */}
              <svg viewBox="0 0 300 200" className="w-full max-w-[300px]">
                {[
                  { y: 40, label: 'Discover', desc: 'Audit · Interviews' },
                  { y: 90, label: 'Define', desc: 'Synthesis · Framing' },
                  { y: 140, label: 'Diverge', desc: 'Concepts · Options' },
                  { y: 190, label: 'Decide', desc: 'Test · Validate' },
                ].map((r, i) => (
                  <g key={i}>
                    <line x1="20" y1={r.y} x2="20" y2={r.y + 40} stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
                    <circle cx="20" cy={r.y} r="3" fill="var(--accent)" opacity="0.7" />
                    <text x="34" y={r.y + 4} fontSize="11" fill="currentColor" opacity="0.8" fontFamily="DM Mono, monospace">{r.label}</text>
                    <text x="34" y={r.y + 17} fontSize="9" fill="currentColor" opacity="0.4" fontFamily="DM Mono, monospace">{r.desc}</text>
                  </g>
                ))}
              </svg>
            </div>
          }
          right={<p className="text-[15px] leading-[1.7]">{cs.understanding}</p>}
        />
      </Section>

      {/* Three Decisions */}
      <Section label="Three decisions that shaped the project" number="06">
        <div className="space-y-0">
          {cs.decisions.map((d, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 py-12 border-t border-border">
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono-label text-[11px] tracking-[0.06em] text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h3 className="font-display text-[22px] leading-[1.2] font-light mb-4">{d.title}</h3>
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-mono-label text-[10px] tracking-[0.08em] uppercase text-accent mb-1">Why this decision</p>
                  <p className="text-[13px] leading-[1.55] text-muted-foreground">{d.why}</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <p className="text-[15px] leading-[1.7]">{d.body}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </Section>

      {/* Evolution */}
      <Section label="Evolution" number="07" dark>
        <TwoCol left={null} right={<p className="text-[15px] leading-[1.7]">{cs.evolution}</p>} />
      </Section>

      {/* Influence & Collaboration */}
      <Section label="Influence & Collaboration" number="08">
        <TwoCol left={null} right={<p className="text-[15px] leading-[1.7]">{cs.influence}</p>} />
      </Section>

      {/* What I Learned */}
      <Section label="What I Learned" number="09">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            {cs.learned.split('\n\n').map((para, i) => (
              <p key={i} className="text-[16px] leading-[1.75] mb-6 last:mb-0">{para}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Next project */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-20 border-t border-border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link to="/work" className="font-mono-label text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            ← All work
          </Link>
          <Link to="/leadership" className="font-mono-label text-[11px] tracking-[0.08em] uppercase text-accent hover:text-foreground transition-colors">
            How I scale design →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Section({ label, number, dark, children }: {
  label: string;
  number: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={dark ? 'bg-secondary/40' : ''}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-20">
        <div className="flex items-center gap-6 mb-12">
          <span className="font-mono-label text-[10px] tracking-[0.06em] text-muted-foreground">{number}</span>
          <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground">{label}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function TwoCol({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      {left && (
        <div className="col-span-12 md:col-span-4">{left}</div>
      )}
      <div className={`col-span-12 ${left ? 'md:col-span-7 md:col-start-6' : 'md:col-span-8 md:col-start-3'}`}>
        {right}
      </div>
    </div>
  );
}
