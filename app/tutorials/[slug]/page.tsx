import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tutorials } from "@/lib/tutorials-data";
import { siteConfig } from "@/lib/site-config";
import TutorialBody from "../TutorialBody";

// Pre-renders one static HTML page per tutorial at build time — this is
// what makes each guide its own fast, individually indexable URL rather
// than one big JS-rendered blob.
export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = tutorials.find((t) => t.slug === slug);
  if (!tutorial) return {};

  return {
    title: tutorial.title,
    description: tutorial.summary,
  };
}

function ArticleJsonLd({ title, summary }: { title: string; summary: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD requires raw HTML injection via dangerouslySetInnerHTML — content below is static, not user input, so this is safe
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default async function TutorialDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tutorial = tutorials.find((t) => t.slug === slug);

  if (!tutorial) {
    notFound(); // renders Next.js's 404 page for an unknown slug
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 editorial-prose">
      <ArticleJsonLd title={tutorial.title} summary={tutorial.summary} />

      <Link
        href="/tutorials"
        className="group inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-all hover:gap-2 hover:text-brand-700"
      >
        <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">
          ←
        </span>
        Back to all guides
      </Link>

      <p className="mt-6 text-xs font-medium uppercase tracking-wide text-editorial-accent">Tutorial</p>
      <h1 className="mt-2 text-3xl font-bold text-brand-900">{tutorial.title}</h1>
      <p className="mt-3 text-foreground/70">{tutorial.summary}</p>

      <div className="mt-8">
        <TutorialBody blocks={tutorial.body} />
      </div>
    </div>
  );
}