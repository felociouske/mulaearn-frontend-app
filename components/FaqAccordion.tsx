"use client";
// Interactive open/close state -> must be a Client Component. The FAQ
// TEXT itself is still passed in as a prop from a Server Component parent,
// so the content is still present in the server-rendered HTML for Google
// to index — only the show/hide behavior runs client-side.

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border-subtle rounded-lg border border-border-subtle bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-medium text-foreground">{item.question}</span>
              <span className="shrink-0 text-brand-600">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm leading-relaxed text-foreground/80">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}