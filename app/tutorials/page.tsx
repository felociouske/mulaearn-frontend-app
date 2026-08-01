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
            className="block rounded-lg border border-border-subtle bg-white p-5 hover:border-brand-400 transition-colors"
          >
            <p className="font-semibold text-foreground">{tutorial.title}</p>
            <p className="mt-1 text-sm text-foreground/60">{tutorial.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}