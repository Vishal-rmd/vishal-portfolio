import DocumentCard from '@/components/DocumentCard';
import { certificates } from '@/data/documents';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-24">
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">Certifications</p>
          <h2 className="section-title">Professional Certifications</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--text-secondary)]">
            Earned certifications and ongoing professional development in technology and
            computer science.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert.id} className="reveal">
              <DocumentCard item={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
