import { ArrowDown, Mail, ShieldCheck } from 'lucide-react';

const FOCUS_AREAS = ['Python', 'Cybersecurity', 'Machine Learning', 'Blockchain'];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-20"
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(50% 40% at 0% 100%, rgba(37,99,235,0.07), transparent 55%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(226,232,240,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(226,232,240,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 35%, black 40%, transparent 80%)',
        }}
      />

      <div className="section-container w-full py-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-semibold text-[var(--primary-blue)] shadow-[var(--shadow-sm)]">
            <ShieldCheck size={14} />
            Aspiring Cyber Security Analyst
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-[var(--deep-navy)] sm:text-6xl">
            Vishal V
          </h1>

          <p className="mt-4 text-base font-medium text-[var(--text-secondary)] sm:text-lg">
            BE Computer Science and Engineering — Third Year
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FOCUS_AREAS.map((area) => (
              <span key={area} className="skill-tag">
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button onClick={scrollToProjects} className="btn-primary">
              <ArrowDown size={16} />
              View Projects
            </button>
            <a
              href="mailto:vkvishal2910@gmail.com"
              className="btn-outline"
            >
              <Mail size={16} />
              vkvishal2910@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
