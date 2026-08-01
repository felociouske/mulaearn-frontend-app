import type { Metadata } from "next";
import Link from "next/link";
import { newsPosts } from "@/lib/news-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "News & Updates",
  description: `Feature updates, payment method changes, and maintenance notices from ${siteConfig.name}.`,
};

export default function NewsIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-900">News &amp; updates</h1>
      <p className="mt-3 text-foreground/70">The latest from {siteConfig.name}.</p>

      <div className="mt-8 space-y-4">
        {newsPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/news/${post.slug}`}
            className="block rounded-lg border border-border-subtle bg-white p-5 hover:border-brand-400 transition-colors"
          >
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-brand-100 px-2 py-1 font-medium text-brand-700">{post.category}</span>
              <time dateTime={post.date} className="text-foreground/50">
                {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </time>
            </div>
            <p className="mt-2 font-semibold text-foreground">{post.title}</p>
            <p className="mt-1 text-sm text-foreground/60">{post.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}