import type { ReactNode } from "react";

type PreviewSectionCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

export function PreviewSectionCard({ icon, title, children, className = "" }: PreviewSectionCardProps) {
  const titleParts = title.trim().split(/\s+/);
  const firstWord = titleParts[0] || "";
  const accentLetters = firstWord.slice(0, 3);
  const firstWordRemainder = firstWord.slice(3);
  const remainder = titleParts.slice(1).join(" ");

  return (
    <section className={`vendor-detail-preview-card ${className}`.trim()}>
      <div className="vendor-detail-preview-card__layout">
        <span className="vendor-detail-preview-card__icon" aria-hidden="true">
          {icon}
        </span>
        <div className="vendor-detail-preview-card__content">
          <h3 className="vendor-detail-preview-card__title">
            <span className="vendor-detail-preview-card__title-accent">{accentLetters}</span>
            {firstWordRemainder}
            {remainder ? ` ${remainder}` : null}
          </h3>
          <div className="vendor-detail-preview-card__body">{children}</div>
        </div>
      </div>
    </section>
  );
}
