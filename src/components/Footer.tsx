import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-card)]">
      <div className="section-container py-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <p className="text-lg font-bold text-[var(--deep-navy)]">
              VISHAL V
            </p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Aspiring Cyber Security Analyst.
            </p>
          </div>

          <span aria-hidden className="h-px w-16 bg-[var(--border)]" />

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--primary-blue)] hover:text-[var(--primary-blue)]"
            >
              <ArrowUp size={13} />
              Back to top
            </button>
            <p className="text-xs text-[var(--text-secondary)]">
              © 2026 Vishal V. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
