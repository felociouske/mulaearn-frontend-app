// Central place for site-wide constants — every page's metadata, the nav,
// and the footer all read from here so "mulaEarn" or the domain never has
// to be retyped (and re-typo'd) across a dozen files.

export const siteConfig = {
  name: "MulaEarn",
  domain: "https://mulaearn.co",
  define: "Home",
  tagline: "Chat foreigners from the UK, USA, Germany and Turkey amongst other foreigners and Earn huge incomes. Engage in Mulaearn tasks and earn addational income.",
  description:
    "MulaEarn lets you earn money online by chatting with foreigners, taking surveys, watching videos, and more, with fast, transparent withdrawals to M-Pesa and other local payment methods.",
};

// The dashboard now lives in a SEPARATE project (React + Vite), on its own
// domain/subdomain. This site has NO auth code at all — "Log in"/"Sign up"
// buttons just link out to it. Set this via NEXT_PUBLIC_APP_URL at deploy
// time (e.g. https://app.mulaearn.co); defaults to a local Vite dev server
// URL so `npm run dev` on this project links out correctly during development.
export const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/tutorials", label: "Tutorials" },
  { href: "/faqs", label: "FAQs" },
  { href: "/news", label: "News" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];