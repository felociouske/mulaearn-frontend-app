import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { siteConfig } from "../lib/site-config";

// Plain Server Component — no interactivity needed, so no "use client".
export default function Footer() {
  const year = new Date().getFullYear();

  // Not in siteConfig yet — fill in your real URLs here, or move this
  // array into site-config.ts later once you're happy with it.
  const socialLinks = [
    { name: "X", href: "https://x.com/yourhandle", icon: FaXTwitter },
    { name: "Instagram", href: "https://instagram.com/yourhandle", icon: FaInstagram },
    { name: "LinkedIn", href: "https://linkedin.com/company/yourhandle", icon: FaLinkedinIn },
    { name: "TikTok", href: "https://tiktok.com/@yourhandle", icon: FaTiktok },
  ];

  return (
    <footer className="border-t border-border-subtle bg-brand-900 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-brand-200">{siteConfig.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-brand-200 hover:bg-brand-700 hover:text-white transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}