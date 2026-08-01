"use client";
// Needs "use client" because of the useState toggle for the mobile menu.

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig, appUrl } from "@/lib/site-config";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border-subtle bg-white/95 backdrop-blur sticky top-0 z-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-brand-700">
          {siteConfig.name}
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-brand-600 transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* These are absolute links to the separate dashboard app (a
            different project/domain entirely) — NOT Next.js <Link>
            client-side navigation, since that only works within this app. */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`${appUrl}/login`} className="text-sm font-medium text-brand-700 hover:text-brand-600">
            Log in
          </a>
          <a
            href={`${appUrl}/register`}
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            Sign up free
          </a>
        </div>

        <button
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-1 border-t border-border-subtle bg-white px-4 py-3 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-md px-2 py-2 hover:bg-brand-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-2 border-t border-border-subtle pt-3">
            <a href={`${appUrl}/login`} className="flex-1 rounded-md border border-brand-600 px-3 py-2 text-center text-brand-700">
              Log in
            </a>
            <a href={`${appUrl}/register`} className="flex-1 rounded-md bg-brand-600 px-3 py-2 text-center text-white">
              Sign up
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}