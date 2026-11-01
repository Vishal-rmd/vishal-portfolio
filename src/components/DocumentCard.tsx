import type { DocumentItem } from '@/data/documents';
import { FileText, Award, ExternalLink, Clock } from 'lucide-react';

interface DocumentCardProps {
  item: DocumentItem;
}

export default function DocumentCard({ item }: DocumentCardProps) {
  const available = item.url.trim().length > 0;
  const Icon = item.category === 'certificate' ? Award : FileText;

  return (
    <div className="card card-hover flex flex-col p-5">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{
            backgroundColor: 'var(--bg-soft-blue)',
            color: 'var(--primary-blue)',
          }}
        >
          <Icon size={20} />
        </span>
        <h3 className="text-base font-semibold leading-snug text-[var(--deep-navy)]">
          {item.title}
        </h3>
      </div>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-center gap-1.5 text-xs">
          {available ? (
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Available
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)]">
              <Clock size={13} />
              Document will be available soon.
            </span>
          )}
        </div>

        {available ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
          >
            <ExternalLink size={15} />
            {item.buttonLabel}
          </a>
        ) : (
          <button type="button" disabled className="btn-primary w-full">
            <ExternalLink size={15} />
            {item.buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
}
