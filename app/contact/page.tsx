import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${siteConfig.name} support team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-900">Contact us</h1>
      <p className="mt-3 text-foreground/70">
        Questions about your account, a withdrawal, or anything else — send us a message below.
      </p>
      <ContactForm />
    </div>
  );
}