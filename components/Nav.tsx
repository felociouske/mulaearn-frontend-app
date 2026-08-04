"use client";
// Needs "use client" because of the useState toggle for the mobile menu.

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig, appUrl } from "@/lib/site-config";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative overflow-hidden border-b border-border-subtle bg-white/95 backdrop-blur sticky top-0 z-50">
      {/* Animated background blobs. pointer-events-none so they never
          block clicks on the nav links sitting above them. */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-brand-300/30 blur-3xl animate-blob" />
        <div className="absolute -top-16 right-10 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute top-10 left-1/3 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/mulaearn.jpg" 
            alt={siteConfig.name}
            width={150}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative transition-colors hover:text-brand-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* These are absolute links to the separate dashboard app (a
            different project/domain entirely) — NOT Next.js <Link>
            client-side navigation, since that only works within this app. */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/254750518501?text=Hello%20MulaEarn%2C%20I'd%20like%20to%20learn%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-700 hover:text-brand-600"
          >
            WhatsApp
          </a>

          <a
            href="https://wa.me/254750518501?text=Hello%20MulaEarn%2C%20I'd%20like%20to%20join."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-700 hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="md:hidden relative z-10 rounded-md p-2 text-foreground"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {/* Three spans that rotate/fade into an X, instead of
              swapping text characters. */}
          <span className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Grid-rows trick: animating from 0fr to 1fr gives a smooth
          height transition without needing to know the content's
          real height (which max-height hacks require guessing). */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="flex flex-col gap-1 border-t border-border-subtle bg-white px-4 py-3 text-sm font-medium">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${
                  isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2 hover:bg-brand-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li
              className={`mt-2 flex gap-2 border-t border-border-subtle pt-3 transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 60}ms` : "0ms" }}
            >
              <a href="https://wa.me/254750518501?text=Hello%20MulaEarn%2C%20I'd%20like%20to%20join." className="flex-1 rounded-md border border-brand-600 px-3 py-2 text-center text-brand-700">
                Log in
              </a>
              <a href="https://wa.me/254750518501?text=Hello%20MulaEarn%2C%20I'd%20like%20to%20join." className="flex-1 rounded-md bg-brand-600 px-3 py-2 text-center text-white">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(20px, -15px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
        }
        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}