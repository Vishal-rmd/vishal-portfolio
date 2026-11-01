import { Mail, ShieldCheck, Lock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="reveal mx-auto max-w-2xl">
          <div className="card card-hover p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: 'var(--bg-soft-blue)', color: 'var(--primary-blue)' }}
            >
              <Mail size={26} />
            </div>

            <h3 className="text-2xl font-bold text-[var(--deep-navy)]">Vishal V</h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)]">
                <ShieldCheck size={16} className="text-[var(--primary-blue)]" />
                <span>
                  Career Interest:{' '}
                  <span className="font-medium text-[var(--deep-navy)]">
                    Cybersecurity and Information Security
                  </span>
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)]">
                <Lock size={16} className="text-[var(--cyan-accent)]" />
                <span className="font-medium text-[var(--deep-navy)]">Email</span>
              </div>

              <a
                href="mailto:vkvishal2910@gmail.com"
                className="btn-primary mt-2 text-base"
              >
                <Mail size={17} />
                vkvishal2910@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
