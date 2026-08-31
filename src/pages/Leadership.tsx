import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const sections = [
  {
    number: '01',
    label: 'Setting Design Direction',
    title: 'Making sure the team is solving the right problem.',
    body: "Principal-level design leadership starts before the brief arrives. I work with product leadership and engineering to shape the problem space — not just respond to it. That means being in the room when strategy is set, bringing design perspective into decisions before they calcify, and ensuring the team has a clear, shared understanding of what success looks like before anyone opens a design tool.",
    diagram: 'direction',
  },
  {
    number: '02',
    label: 'Building Design Teams',
    title: 'Creating conditions for people to do the best work of their careers.',
    body: "Hiring is design work. The craft of building a team — defining roles, writing briefs, assessing portfolio depth, onboarding thoughtfully, structuring critique — shapes what the team can produce more than any design decision I make myself. I build diverse, psychologically safe teams with high creative standards and clear expectations. I give people problems, not solutions. I give feedback that's direct and specific. I try to know the ceiling of every person I work with and actively help them reach it.",
    diagram: 'team',
  },
  {
    number: '03',
    label: 'Growing UX Maturity',
    title: 'Helping organisations become better at making good decisions.',
    body: "UX maturity is the organisation's capacity to do user-centred design — and it's almost always a leadership challenge, not a design skills challenge. I measure where the organisation sits on the maturity curve, identify the structural and cultural blockers, and build the conditions — processes, rituals, tooling, reporting lines — that let UX insight flow into product decisions. This often means working far outside the design team: with HR on hiring criteria, with finance on research budgets, with legal on participant consent frameworks.",
    diagram: 'maturity',
  },
  {
    number: '04',
    label: 'Design Systems',
    title: 'Building shared languages that scale faster than the team can.',
    body: "A design system is an organisational capability, not a component library. My approach starts with governance and contribution models — because a system with beautiful components and no maintenance model is a liability, not an asset. I've built systems for distributed teams across multiple tech stacks, and the pattern is always the same: the technical work is the easy part. The hard work is creating the shared ownership that makes it self-sustaining.",
    diagram: 'system',
  },
  {
    number: '05',
    label: 'Designing Within Constraints',
    title: 'Using constraint as a design material.',
    body: "Financial services is full of constraints: regulation, compliance, legacy systems, conservative brand identity, risk-averse stakeholders. I've come to see these as design materials rather than obstacles. The best work I've done has been produced under the most constraint — because constraint forces specificity, and specificity produces clarity. My job is to understand the constraints completely, find the degrees of freedom inside them, and design with full confidence within that space.",
    diagram: 'constraint',
  },
];

function DirectionDiagram() {
  return (
    <svg viewBox="0 0 400 180" className="w-full">
      {/* Horizontal line */}
      <line x1="40" y1="90" x2="360" y2="90" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
      {[
        { x: 40, label: 'Business\nGoals', sub: 'Revenue · Risk · Scale' },
        { x: 160, label: 'User\nNeeds', sub: 'Research · Insight' },
        { x: 280, label: 'Design\nDirection', sub: 'Principles · Vision' },
        { x: 360, label: 'Delivery', sub: 'Features · Releases' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={90} r={i === 2 ? 7 : 5} fill={i === 2 ? 'var(--accent)' : 'currentColor'} opacity={i === 2 ? 0.8 : 0.2} />
          {n.label.split('\n').map((line, j) => (
            <text key={j} x={n.x} y={n.x === 360 ? 115 + j * 12 : 68 + j * 12} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.7" fontFamily="DM Mono, monospace">{line}</text>
          ))}
          <text x={n.x} y={n.x === 360 ? 141 : 108} textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.35" fontFamily="DM Mono, monospace">{n.sub}</text>
        </g>
      ))}
      <path d="M 160 90 C 200 70, 240 70, 280 90" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1" fill="none" />
      <path d="M 40 90 C 100 90, 120 90, 160 90" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" fill="none" />
    </svg>
  );
}

function TeamDiagram() {
  const roles = [
    { x: 200, y: 40, label: 'Principal', radius: 18 },
    { x: 100, y: 110, label: 'Senior', radius: 12 },
    { x: 200, y: 130, label: 'Mid', radius: 12 },
    { x: 300, y: 110, label: 'Junior', radius: 12 },
    { x: 80, y: 160, label: 'Research', radius: 10 },
    { x: 320, y: 155, label: 'Content', radius: 10 },
  ];
  return (
    <svg viewBox="0 0 400 200" className="w-full">
      {roles.slice(1).map((r, i) => (
        <line key={i} x1={roles[0].x} y1={roles[0].y} x2={r.x} y2={r.y} stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
      ))}
      {roles.map((r, i) => (
        <g key={i}>
          <circle cx={r.x} cy={r.y} r={r.radius} fill={i === 0 ? 'var(--accent)' : 'currentColor'} opacity={i === 0 ? 0.2 : 0.08} />
          <circle cx={r.x} cy={r.y} r={r.radius} stroke={i === 0 ? 'var(--accent)' : 'currentColor'} strokeOpacity={i === 0 ? 0.6 : 0.2} strokeWidth="1" fill="none" />
          <text x={r.x} y={r.y + 4} textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.6" fontFamily="DM Mono, monospace">{r.label}</text>
        </g>
      ))}
    </svg>
  );
}

function MaturityDiagram() {
  const levels = ['Ad hoc', 'Limited', 'Emergent', 'Structured', 'Integrated', 'User-driven'];
  const current = 2;
  const target = 4;
  return (
    <svg viewBox="0 0 400 160" className="w-full">
      {levels.map((l, i) => (
        <g key={i}>
          <rect x={20 + i * 63} y={60} width={55} height={55} fill={i >= current && i <= target ? 'var(--accent)' : 'currentColor'} opacity={i >= current && i <= target ? (i === current || i === target ? 0.18 : 0.1) : 0.04} />
          <rect x={20 + i * 63} y={60} width={55} height={55} stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" fill="none" />
          <text x={20 + i * 63 + 27} y={90} textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="DM Mono, monospace">{i + 1}</text>
          <text x={20 + i * 63 + 27} y={130} textAnchor="middle" fontSize="7" fill="currentColor" opacity={i >= current && i <= target ? 0.7 : 0.3} fontFamily="DM Mono, monospace">{l}</text>
          {i === current && <text x={20 + i * 63 + 27} y={52} textAnchor="middle" fontSize="8" fill="var(--accent)" opacity="0.8" fontFamily="DM Mono, monospace">Start</text>}
          {i === target && <text x={20 + i * 63 + 27} y={52} textAnchor="middle" fontSize="8" fill="var(--accent)" opacity="0.8" fontFamily="DM Mono, monospace">Target</text>}
        </g>
      ))}
      <path d="M 101 87 L 271 87" stroke="var(--accent)" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="var(--accent)" opacity="0.5" />
        </marker>
      </defs>
    </svg>
  );
}

function SystemDiagram() {
  return (
    <svg viewBox="0 0 400 180" className="w-full">
      {/* Layers */}
      {[
        { y: 20, label: 'Product A', width: 80 },
        { y: 20, label: 'Product B', width: 80, offset: 100 },
        { y: 20, label: 'Product C', width: 80, offset: 200 },
        { y: 20, label: 'Product D', width: 80, offset: 300 },
      ].map((p, i) => (
        <g key={i}>
          <rect x={p.offset ?? 0} y={p.y} width={p.width} height={35} fill="currentColor" opacity="0.05" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
          <text x={(p.offset ?? 0) + p.width / 2} y={42} textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="DM Mono, monospace">{p.label}</text>
        </g>
      ))}
      {/* Connector lines */}
      {[0, 100, 200, 300].map((x, i) => (
        <line key={i} x1={x + 40} y1={55} x2={x + 40} y2={80} stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
      ))}
      {/* System layer */}
      <rect x={0} y={80} width={380} height={45} fill="var(--accent)" opacity="0.08" stroke="var(--accent)" strokeOpacity="0.3" strokeWidth="1" />
      <text x={190} y={97} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.6" fontFamily="DM Mono, monospace">Design System</text>
      <text x={190} y={113} textAnchor="middle" fontSize="7" fill="currentColor" opacity="0.35" fontFamily="DM Mono, monospace">Tokens · Components · Patterns · Documentation</text>
      {/* Foundation */}
      <line x1={0} y1={125} x2={380} y2={125} stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
      <text x={190} y={150} textAnchor="middle" fontSize="8" fill="currentColor" opacity="0.4" fontFamily="DM Mono, monospace">Brand Foundation · Design Principles · Governance</text>
    </svg>
  );
}

function ConstraintDiagram() {
  return (
    <svg viewBox="0 0 400 180" className="w-full">
      {/* Outer constraint ring */}
      <circle cx={200} cy={95} r={75} stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" fill="none" strokeDasharray="4,3" />
      {/* Inner design space */}
      <circle cx={200} cy={95} r={45} fill="var(--accent)" opacity="0.06" stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1" />
      {/* Labels around edge */}
      {[
        { angle: -60, label: 'Regulation' },
        { angle: 0, label: 'Legacy tech' },
        { angle: 60, label: 'Brand' },
        { angle: 120, label: 'Risk' },
        { angle: 180, label: 'Compliance' },
        { angle: 240, label: 'Politics' },
      ].map((c, i) => {
        const rad = (c.angle * Math.PI) / 180;
        const x = 200 + 90 * Math.cos(rad);
        const y = 95 + 90 * Math.sin(rad);
        return (
          <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="8" fill="currentColor" opacity="0.4" fontFamily="DM Mono, monospace">{c.label}</text>
        );
      })}
      <text x={200} y={91} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7" fontFamily="DM Mono, monospace">Design</text>
      <text x={200} y={103} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7" fontFamily="DM Mono, monospace">space</text>
    </svg>
  );
}

const diagrams: Record<string, React.ReactNode> = {
  direction: <DirectionDiagram />,
  team: <TeamDiagram />,
  maturity: <MaturityDiagram />,
  system: <SystemDiagram />,
  constraint: <ConstraintDiagram />,
};

const stories = [
  {
    stage: 'Before',
    content: 'Seven products, four teams, no shared design language. Every project reinvented patterns. Quality was inconsistent. Design was a bottleneck.',
    color: 'text-muted-foreground',
  },
  {
    stage: 'Intervention',
    content: 'Token-first design system. Contribution workflow embedded in sprint ceremonies. Monthly cross-team design review. System treated as a product with a roadmap and changelog.',
    color: 'text-foreground',
  },
  {
    stage: 'Outcome',
    content: 'All seven products on the system. 60+ cross-team contributions per quarter. 40% improvement in design delivery velocity. Design is now a multiplier.',
    color: 'text-accent',
  },
];

export default function Leadership() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-20">
        <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-8">Leadership</p>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <h1 className="font-display text-[52px] md:text-[72px] leading-[1.0] font-light tracking-[-0.02em]">
              How I scale design.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
            <p className="text-[15px] leading-[1.7] text-muted-foreground">
              Principal-level design is not about doing more design. It's about creating the conditions for teams to repeatedly produce better experiences — and building the organisational structures that make good design sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Before → Intervention → Outcome */}
      <section className="bg-secondary/40 border-t border-b border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-16">
          <p className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-muted-foreground mb-10">
            A pattern that repeats across all leadership work
          </p>
          <div className="grid grid-cols-3 gap-0">
            {stories.map((s, i) => (
              <div key={i} className={`py-8 px-8 ${i < 2 ? 'border-r border-border' : ''}`}>
                <p className={`font-mono-label text-[10px] tracking-[0.1em] uppercase mb-4 ${s.color}`}>{s.stage}</p>
                <p className="text-[14px] leading-[1.65] text-foreground">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Sections */}
      {sections.map((s, i) => (
        <section key={i} className={i % 2 === 1 ? '' : ''}>
          <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-20 border-b border-border">
            <div className="grid grid-cols-12 gap-8">
              {/* Meta */}
              <div className="col-span-12 md:col-span-1">
                <span className="font-mono-label text-[10px] tracking-[0.06em] text-muted-foreground">{s.number}</span>
              </div>

              {/* Diagram */}
              <div className="col-span-12 md:col-span-3 md:col-start-2">
                <div className="bg-secondary/40 border border-border p-6">
                  <p className="font-mono-label text-[9px] tracking-[0.06em] uppercase text-muted-foreground mb-4">{s.label}</p>
                  {diagrams[s.diagram]}
                </div>
              </div>

              {/* Text */}
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-accent mb-4">{s.label}</p>
                <h2 className="font-display text-[28px] md:text-[34px] leading-[1.2] font-light mb-6">{s.title}</h2>
                <p className="text-[15px] leading-[1.7] text-muted-foreground">{s.body}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What this looks like in practice */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-4">In practice</p>
            <h2 className="font-display text-[32px] leading-[1.1] font-light tracking-[-0.01em]">
              What I look like<br />as a design leader.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6">
            {[
              'I write design principles before I write design briefs. A team that shares a sense of what good looks like can make better decisions faster — with less oversight from me.',
              'I facilitate more than I present. The best design decision in a room is rarely mine — it\'s the one that emerges from a well-structured conversation between people who know the problem.',
              'I measure the things I care about. UX maturity, research cadence, cross-team contributions, time to first prototype. If I can\'t measure it, I can\'t grow it.',
              'I create space for junior designers to get things wrong. A team where everyone is afraid to make mistakes is a team that never makes anything interesting.',
              'I translate upward as well as downward. Stakeholders need to understand design decisions in business terms; designers need to understand business constraints in human terms.',
            ].map((p, i) => (
              <div key={i} className="flex gap-6 pb-6 border-b border-border last:border-0">
                <span className="font-mono-label text-[10px] text-muted-foreground mt-1 flex-shrink-0">0{i + 1}</span>
                <p className="text-[15px] leading-[1.65]">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to case studies */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-display text-[22px] leading-[1.3] font-light max-w-[400px]">
            See how this plays out across three detailed case studies.
          </p>
          <Link to="/work" className="font-mono-label text-[11px] tracking-[0.08em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors">
            Read the work →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
