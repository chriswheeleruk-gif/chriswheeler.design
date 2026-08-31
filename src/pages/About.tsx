import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const principles = [
  {
    number: '01',
    title: 'Start with the problem',
    body: "Every design brief is an answer to a question. My first job is to check that we\'re answering the right question. I push back on solutions that arrive before problems are understood, and I spend more time in discovery than most people think is warranted. The evidence consistently suggests it's worth it.",
  },
  {
    number: '02',
    title: 'Make complexity visible',
    body: "Good design doesn\'t simplify by hiding complexity — it simplifies by revealing structure. When I map a customer journey, diagram a system or sketch a decision model, I\'m not decorating a presentation. I\'m externalising my thinking so that other people can challenge it, build on it and make better decisions because of it.",
  },
  {
    number: '03',
    title: 'Design with evidence',
    body: "Intuition is a starting point, not an ending point. Every significant design decision I make is tested — by users, by data or by expert critique — before it becomes a commitment. I\'ve seen too many confident, beautiful, wrong designs shipped because nobody wanted to slow down to check.",
  },
  {
    number: '04',
    title: 'Leave the system better than you found it',
    body: "The best legacy of a designer isn\'t the product they shipped — it\'s the team that\'s better, the system that\'s more coherent, the process that works more reliably, because of their involvement. I try to make every context I work in more capable of producing good design after I leave than it was before I arrived.",
  },
];

const career = [
  {
    period: 'Early career',
    text: "I started in financial services as a customer-facing adviser — working with people at the moments in their lives when money decisions felt most consequential. I became fascinated by the gap between what organisations thought they were communicating and what customers were actually experiencing. That gap turned into a vocation.",
  },
  {
    period: 'Into design',
    text: "I moved into UX research and design at IGT — then one of the world\'s largest gaming technology companies — designing player account experiences used by millions of people across multiple territories and regulatory environments. I learned that constraint makes you a better designer. Complex, regulated, high-stakes domains became my preference.",
  },
  {
    period: 'Design leadership',
    text: "At Aegon UK, I led UX design across a major product transformation — taking the organisation\'s first mobile app from concept to launch, building an in-house research practice from scratch, and managing a design team through significant organisational change. I became as interested in how organisations make design decisions as in the decisions themselves.",
  },
  {
    period: 'Principal level',
    text: "At Baillie Gifford, I operate as Principal Experience Designer across a digital estate serving institutional investors, intermediaries and retail customers. I work at the intersection of product strategy, design systems and team leadership — accountable for the quality of design across multiple products and the capability of the team producing it.",
  },
];

export default function About() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 pt-36 pb-20">
        <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-8">About</p>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-8">
            <h1 className="font-display text-[48px] md:text-[64px] leading-[1.05] font-light tracking-[-0.02em]">
              Customer advocate<br />turned designer.<br />
              <span className="italic">Design leader by conviction.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-3 md:col-start-10 flex items-end pb-2">
            <p className="text-[14px] leading-[1.65] text-muted-foreground">
              Twenty years at the intersection of customer experience, product design and organisational change — mostly in financial services.
            </p>
          </div>
        </div>
      </section>

      {/* Career Story */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-20">
          <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-12">The story</p>
          <div className="space-y-0">
            {career.map((c, i) => (
              <div key={i} className="grid grid-cols-12 gap-8 py-10 border-t border-border last:border-b">
                <div className="col-span-12 md:col-span-2">
                  <p className="font-mono-label text-[10px] tracking-[0.06em] uppercase text-muted-foreground">{c.period}</p>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <p className="text-[17px] leading-[1.7]">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-secondary/40 border-t border-b border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-20">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-4">How I work</p>
              <h2 className="font-display text-[34px] leading-[1.15] font-light">
                Four principles<br />that shape every<br />project I take on.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-[14px] leading-[1.65] text-muted-foreground">
                These aren't values I aspire to — they're working practices I've tested over two decades and refined through consequence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {principles.map((p, i) => (
              <div
                key={i}
                className={`p-10 border-border ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b' : ''} border`}
              >
                <div className="flex items-start gap-6 mb-5">
                  <span className="font-mono-label text-[10px] tracking-[0.06em] text-muted-foreground mt-1">{p.number}</span>
                  <h3 className="font-display text-[20px] leading-[1.2] font-light">{p.title}</h3>
                </div>
                <p className="text-[14px] leading-[1.65] text-muted-foreground pl-10">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentoring */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-20 border-b border-border">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-4">Mentoring</p>
            <h2 className="font-display text-[28px] leading-[1.2] font-light">
              Growing designers<br />is the work.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[15px] leading-[1.7] mb-6">
              I've managed and mentored designers at every career stage — from interns writing their first user stories to senior designers making their first moves into leadership. The thing I find most rewarding about design leadership is the moment someone makes a decision they wouldn't have made six months ago.
            </p>
            <p className="text-[15px] leading-[1.7] mb-6">
              My approach to mentoring is specific and evidence-based. I watch how someone works before I tell them how to improve. I give feedback on decisions, not taste. I try to understand what someone's ceiling is — and then help them find it.
            </p>
            <p className="text-[15px] leading-[1.7] text-muted-foreground">
              Outside my current role, I mentor through the Interaction Design Foundation and take occasional calls with designers navigating career transitions into leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-12 py-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono-label text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-4">Beyond work</p>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-[15px] leading-[1.7] text-muted-foreground">
              I live in Edinburgh with my family. When I'm not designing, I'm usually hiking somewhere in Scotland, reading about systems theory, or arguing about coffee. I care about cycling infrastructure, public services that work, and the ethics of financial product design. I believe good design is a form of care.
            </p>
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="border-t border-border">
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center gap-8">
          <Link to="/cv" className="font-mono-label text-[11px] tracking-[0.08em] uppercase border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors">
            View CV
          </Link>
          <Link to="/contact" className="font-mono-label text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors">
            Get in touch →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
