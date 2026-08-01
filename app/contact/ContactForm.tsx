"use client";
// Client Component: needs useState for the form fields and an onClick
// handler — this is the interactive part of an otherwise server-rendered page.

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // IMPORTANT LIMITATION, FLAGGED: there is no backend /api/contact
  // endpoint yet (the Django backend we built doesn't have one). This
  // builds a mailto: link as a working fallback so the form is genuinely
  // functional today, not a dead button. Once you confirm a real support
  // email/contact workflow, I'll wire this to a proper backend endpoint
  // instead — that's a quick follow-up, not a rebuild.
  const supportEmail = "support@easyearn.co"; // placeholder address — confirm the real one before launch

  const mailtoHref = `mailto:${supportEmail}?subject=${encodeURIComponent(
    `EasyEarn support request from ${name || "a user"}`
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-border-subtle px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="email">
          Your email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-border-subtle px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border border-border-subtle px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
      >
        Send message
      </button>
    </form>
  );
}