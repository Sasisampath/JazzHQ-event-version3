import Link from "next/link";
import type { ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="legal-section">
      <h2 className="legal-section__title">{title}</h2>
      {children}
    </section>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return <p className="legal-p">{children}</p>;
}

export function LegalOl({ children }: { children: ReactNode }) {
  return <ol className="legal-ol">{children}</ol>;
}

export function LegalUl({ children }: { children: ReactNode }) {
  return <ul className="legal-ul">{children}</ul>;
}

export function LegalLi({ children }: { children: ReactNode }) {
  return <li className="legal-li">{children}</li>;
}

export function LegalTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LegalDefinitionList({
  items,
}: {
  items: { term: string; definition: string }[];
}) {
  return (
    <dl className="legal-dl">
      {items.map(({ term, definition }) => (
        <div key={term} className="legal-dl__item">
          <dt className="legal-dl__term">{term}</dt>
          <dd className="legal-dl__def">{definition}</dd>
        </div>
      ))}
    </dl>
  );
}

export function LegalContactBlock({
  company,
  representative,
  address,
  email,
}: {
  company: string;
  representative?: string;
  address: string;
  email: string;
}) {
  return (
    <div className="legal-contact">
      <p className="legal-contact__company">{company}</p>
      {representative && (
        <p className="legal-contact__line">Represented by: {representative}</p>
      )}
      <p className="legal-contact__line">Address: {address}</p>
      <p className="legal-contact__line">
        Email:{" "}
        <a href={`mailto:${email}`} className="legal-link">
          {email}
        </a>
      </p>
    </div>
  );
}

export function TermsLink() {
  return (
    <Link href="/terms-and-conditions" className="legal-link">
      https://www.jazzhq.ai/terms-and-conditions
    </Link>
  );
}

export function PrivacyLink() {
  return (
    <Link href="/privacy-policy" className="legal-link">
      https://www.jazzhq.ai/privacy-policy
    </Link>
  );
}
