import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { newsPosts } from "@/lib/news-data";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return newsPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
  };
}

function NewsArticleJsonLd({ post }: { post: (typeof newsPosts)[number] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = newsPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 editorial-prose">
      <NewsArticleJsonLd post={post} />
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-brand-100 px-2 py-1 font-medium text-brand-700">{post.category}</span>
        <time dateTime={post.date} className="text-foreground/50">
          {new Date(post.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </div>
      <h1 className="mt-2 text-3xl font-bold text-brand-900">{post.title}</h1>

      <div className="mt-8">
        {post.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}