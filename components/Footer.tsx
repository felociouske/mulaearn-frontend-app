import Link from "next/link";
import { navLinks, siteConfig } from "../lib/site-config";

// Plain Server Component — no interactivity needed, so no "use client".
// Footers are exactly the kind of content Google's crawler and internal
// linking both benefit from being server-rendered.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-brand-900 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-brand-200">{siteConfig.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Site</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Support</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-white transition-colors">
                Why haven&apos;t I been paid?
              </Link>
            </li>
            <li>
              <Link href="/tutorials" className="hover:text-white transition-colors">
                First withdrawal guide
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Policies</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/policies/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/policies/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/policies/refunds" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-700 py-4 text-center text-xs text-brand-200">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}