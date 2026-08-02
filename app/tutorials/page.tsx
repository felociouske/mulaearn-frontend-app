import type { Metadata } from "next";
import Link from "next/link";
import { tutorials } from "@/lib/tutorials-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tutorials & Guides",
  description: `Step-by-step guides for using ${siteConfig.name}: registration, withdrawals, referrals, and more.`,
};

export default function TutorialsIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-900">Tutorials &amp; guides</h1>
      <p className="mt-3 text-foreground/70">Everything you need to get the most out of {siteConfig.name}.</p>

      <div className="mt-8 space-y-4">
        {tutorials.map((tutorial) => (
          <Link
            key={tutorial.slug}
            href={`/tutorials/${tutorial.slug}`}
            className="group block rounded-lg border border-border-subtle bg-white p-5 transition-all duration-200 hover:border-brand-400 hover:shadow-md hover:-translate-y-0.5"
          >
            <p className="font-semibold text-foreground transition-colors group-hover:text-brand-700">
              {tutorial.title}
            </p>
            <p className="mt-1 text-sm text-foreground/60">{tutorial.summary}</p>

            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-all group-hover:gap-2">
              Read more
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}