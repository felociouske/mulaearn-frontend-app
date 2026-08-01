import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Real user reviews of ${siteConfig.name}.`,
};

// DECISION FLAGGED FOR YOU: I deliberately did NOT fabricate sample
// testimonials/quotes here. Inventing fake "real user" reviews for a
// money-earning platform is the kind of thing that actively backfires —
// it's the "fake social proof" pattern that fuels "is this a scam?"
// suspicion in the first place, and it's misleading regardless of intent.
// This page is built to display real reviews once you have them (a
// `reviews` array of the same shape as tutorials/news data would slot in
// here directly) — for now it's an honest, well-designed empty state.
export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-brand-900">Reviews</h1>
      <p className="mt-4 text-foreground/70">
        We&apos;re just getting started — real reviews from {siteConfig.name} users will appear here as
        they come in.
      </p>
      <div className="mt-8 rounded-lg border border-dashed border-border-subtle bg-white p-8">
        <p className="text-sm text-foreground/60">
          Used {siteConfig.name}? We&apos;d love to hear about your experience once you&apos;ve had a
          chance to try it out.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
        >
          Share your feedback
        </Link>
      </div>
    </div>
  );
}