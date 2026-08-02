import Image from "next/image";
import { FaWhatsapp, FaTelegram, FaXTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa6";
import type { TutorialBlock } from "@/lib/tutorials-data";

const socialIcons = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  x: FaXTwitter,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  instagram: FaInstagram,
};

export default function TutorialBody({ blocks }: { blocks: TutorialBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="text-xl font-semibold text-foreground">
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={index} className="text-sm leading-relaxed text-foreground/80">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ol key={index} className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/80">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "image":
            return (
              <figure key={index}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={800}
                  height={450}
                  className="rounded-lg border border-border-subtle"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs text-foreground/50">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "video":
            return (
              <figure key={index}>
                <video
                  src={block.src}
                  poster={block.poster}
                  controls
                  preload="metadata"
                  className="w-full rounded-lg border border-border-subtle"
                >
                  Your browser does not support embedded video.
                </video>
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs text-foreground/50">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "links":
            return (
              <div key={index} className="rounded-lg border border-border-subtle bg-white p-5">
                {block.title && (
                  <p className="mb-3 text-sm font-semibold text-foreground">{block.title}</p>
                )}
                <div className="flex flex-wrap gap-3">
                  {block.items.map((link) => {
                    const Icon = socialIcons[link.icon];
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-md bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
                      >
                        <Icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}