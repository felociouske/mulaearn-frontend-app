import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqCategories, faqItemsFlat } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: `Answers to the most common questions about ${siteConfig.name}: is it legit, how to earn, withdrawal minimums, referrals, and more.`,
};

// FAQPage structured data — per your blueprint's "Schema.org structured
// data" requirement, this is what lets individual Q&As show up directly
// as expandable rich results in Google search, not just a blue link.
function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItemsFlat.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD requires raw HTML injection via dangerouslySetInnerHTML — content below is static, not user input, so this is safe
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function FaqsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <FaqJsonLd />
      <h1 className="text-3xl font-bold text-brand-900">Frequently asked questions</h1>
      <p className="mt-3 text-foreground/70">
        Everything you need to know about {siteConfig.name} — grouped by topic.
      </p>

      <div className="mt-10 space-y-10">
        {faqCategories.map((group) => (
          <section key={group.category}>
            <h2 className="text-lg font-semibold text-editorial-accent">{group.category}</h2>
            <div className="mt-4">
              <FaqAccordion items={group.items} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}