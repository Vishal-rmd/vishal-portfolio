import { User } from 'lucide-react';

const PARAGRAPHS = [
  'I am Vishal V, a third-year Bachelor of Engineering student in Computer Science and Engineering. I have a strong interest in cybersecurity, artificial intelligence, and emerging technologies.',
  'I have worked on academic projects involving Machine Learning, Blockchain Technology, and Security Incident Reconstruction. These projects have helped me explore practical applications of technology, improve my problem-solving abilities, and develop my technical knowledge.',
  'My career aspiration is to become a Cyber Security Analyst, where I can contribute to identifying security threats, analysing vulnerabilities, investigating security incidents, and protecting digital systems.',
  'I am passionate about learning new technologies and continuously improving my technical and professional skills.',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="reveal mx-auto max-w-3xl">
          <div className="card p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'var(--bg-soft-blue)', color: 'var(--primary-blue)' }}
              >
                <User size={20} />
              </span>
              <h3 className="text-lg font-semibold text-[var(--deep-navy)]">
                A brief introduction
              </h3>
            </div>

            <div className="space-y-4">
              {PARAGRAPHS.map((text, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
