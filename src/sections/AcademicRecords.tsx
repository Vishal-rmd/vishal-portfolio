import DocumentCard from '@/components/DocumentCard';
import { academicDocuments } from '@/data/documents';

export default function AcademicRecords() {
  return (
    <section
      id="academic-records"
      className="border-y border-[var(--border)] bg-[var(--bg-soft-blue)] py-20 sm:py-24"
    >
      <div className="section-container">
        <div className="reveal mb-12 text-center">
          <p className="section-eyebrow">Academic Records</p>
          <h2 className="section-title">Academic Documents</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--text-secondary)]">
            Marksheets and academic records will be linked here. Documents become available as
            their links are added.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {academicDocuments.map((doc) => (
            <div key={doc.id} className="reveal">
              <DocumentCard item={doc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
