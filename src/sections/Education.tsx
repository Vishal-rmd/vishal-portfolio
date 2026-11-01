import { GraduationCap, School, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface EducationItem {
  id: string;
  title: string;
  detail: string;
  institution: string;
  icon: LucideIcon;
  isCollege?: boolean;
}

/**
 * NOTE: The college name appears here and ONLY here across the whole site.
 * Other sections intentionally avoid restating it to honour the
 * "college name must appear only once" requirement.
 */
const EDUCATION: EducationItem[] = [
  {
    id: 'be-cse',
    title: 'Bachelor of Engineering',
    detail: 'Computer Science and Engineering — Third Year',
    institution: 'R.M.D. Engineering College, Thiruvallur',
    icon: GraduationCap,
    isCollege: true,
  },
  {
    id: 'class-xii',
    title: 'Class XII',
    detail: 'Senior Secondary Education',
    institution: 'Athena Global School, Chidambaram',
    icon: School,
  },
  {
    id: 'class-x',
    title: 'Class X',
    detail: 'Secondary Education',
    institution: 'Athena Global School, Chidambaram',
    icon: BookOpen,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-y border-[var(--border)] bg-[var(--bg-soft-blue)] py-20 sm:py-24"
    >
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">Education</p>
          <h2 className="section-title">Academic Journey</h2>
        </div>

        <ol className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <span
            aria-hidden
            className="absolute left-[22px] top-2 bottom-2 w-px bg-[var(--border)] sm:left-1/2 sm:-translate-x-1/2"
          />

          {EDUCATION.map((item, i) => {
            const Icon = item.icon;
            const onRight = i % 2 === 1;
            return (
              <li
                key={item.id}
                className="reveal relative mb-8 last:mb-0 sm:grid sm:grid-cols-2 sm:gap-8"
              >
                {/* node */}
                <span
                  className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow-sm)] sm:left-1/2 sm:-translate-x-1/2"
                  style={{ color: 'var(--primary-blue)' }}
                >
                  <Icon size={18} />
                </span>

                {/* card — alternate sides on desktop */}
                <div
                  className={`ml-16 sm:ml-0 ${
                    onRight ? 'sm:col-start-2' : 'sm:col-start-1 sm:text-right'
                  }`}
                >
                  <div className="card card-hover inline-block w-full p-5 text-left">
                    <h3 className="text-base font-bold text-[var(--deep-navy)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--primary-blue)]">
                      {item.detail}
                    </p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      {item.institution}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
