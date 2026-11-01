import {
  Code2,
  Globe,
  Database,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'Java (Basic)', 'C++ (Basic)'],
  },
  {
    id: 'web',
    title: 'Web Technologies',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: Database,
    skills: ['SQL'],
  },
  {
    id: 'ml-ds',
    title: 'Machine Learning & Data Science',
    icon: BrainCircuit,
    skills: [
      'Scikit-learn',
      'Data Visualization',
      'Machine Learning Fundamentals',
      'Data Analysis',
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity & Emerging Technologies',
    icon: ShieldCheck,
    skills: [
      'Blockchain Technology',
      'Ethereum',
      'Cybersecurity Fundamentals',
      'Security Incident Analysis',
      'Log Analysis',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div key={cat.id} className="reveal card card-hover p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: 'var(--bg-soft-blue)',
                      color: 'var(--primary-blue)',
                    }}
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="text-base font-semibold text-[var(--deep-navy)]">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
