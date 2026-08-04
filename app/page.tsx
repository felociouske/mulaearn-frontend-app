import Link from "next/link";
import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { faqItemsFlat } from "@/lib/faq-data";
import { siteConfig, appUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Earn Money Online in Kenya`,
  description: siteConfig.description,
};

const popularSearches = [
  "Is MulaEarn legit?",
  "How do I withdraw from MulaEarn?",
  "MulaEarn minimum withdrawal",
  "How much can I earn on MulaEarn?",
  "MulaEarn referral commission",
  "Which countries does MulaEarn operate in?",
  "Where are MulaEarn's physical offices?",
  "When did MulaEarn start?",
  "Who manages MulaEarn?",
  "Do I need to pay a fee to join MulaEarn?",
  "What are MulaEarn's plan prices?",
];

const latestArticles = [
  { slug: "registration-guide", title: "How to Register on MulaEarn: Step-by-Step", category: "Tutorials" },
  { slug: "first-withdrawal-guide", title: "Your First Withdrawal: What to Expect", category: "Tutorials" },
  { slug: "referral-strategies", title: "5 Referral Strategies That Actually Work", category: "Tutorials" },
  { slug: "profitable-user-guide", title: "How to Be a Profitable MulaEarn User", category: "Tutorials" },
  { slug: "marketing-mulaearn-commissions", title: "How to Market MulaEarn and Earn Commissions", category: "Tutorials" },
  { slug: "join-mulaearn-community", title: "How to Join the MulaEarn Community", category: "Tutorials" },
  { slug: "grow-your-team", title: "How to Grow Your Own Team on MulaEarn", category: "Tutorials" },
  { slug: "5-easy-ways-to-get-referrals", title: "5 Easy Ways You Can Easily Get Referrals", category: "Tutorials" },
  { slug: "access-foreign-profiles", title: "2 Easy Steps to Access Foreign Profiles", category: "Tutorials" },
  { slug: "how-to-bid-foreign-profiles", title: "How to Bid on Foreign Profiles", category: "Tutorials" },
];


export default function HomePage() {
  return (
    <div>
      <section className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-900">
            Explore the power of MulaEarn and unlock your earning potential
          </h1>
          <p className="mt-5 text-lg text-foreground/70 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/254750518501?text=Hello%20MulaEarn%2C%20I'd%20like%20to%20join."
              className="rounded-md bg-brand-600 px-6 py-3 text-base font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Sign up free
            </a>
            <Link
              href="/how-it-works"
              className="rounded-md border border-brand-600 px-6 py-3 text-base font-semibold text-brand-700 hover:bg-brand-100 transition-colors"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-semibold text-foreground">Popular questions</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {popularSearches.map((q) => (
            <li key={q}>
              <Link
                href="/faqs"
                className="inline-block rounded-full border border-border-subtle bg-white px-4 py-2 text-sm text-foreground/80 hover:border-brand-400 hover:text-brand-700 transition-colors"
              >
                {q}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-editorial-bg py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Latest guides</h2>
            <Link href="/tutorials" className="text-sm font-medium text-brand-600 hover:text-brand-700">
              View all →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/tutorials/${article.slug}`}
                className="group block rounded-lg border border-border-subtle bg-white p-5 hover:border-brand-400 transition-colors"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-editorial-accent">
                  {article.category}
                </p>
                <p className="mt-2 font-semibold text-foreground">{article.title}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all">
                  View more
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-xl font-semibold text-foreground text-center">Frequently asked questions</h2>
        <div className="mt-6">
          <FaqAccordion items={faqItemsFlat.slice(0, 6)} />
        </div>
        <p className="mt-4 text-center text-sm">
          <Link href="/faqs" className="font-medium text-brand-600 hover:text-brand-700">
            See all FAQs →
          </Link>
        </p>
      </section>
    </div>
  );
}