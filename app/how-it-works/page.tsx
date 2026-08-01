import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "How It Works",
  description: `A step-by-step look at how to sign up, choose a plan, complete tasks, and withdraw your earnings on ${siteConfig.name}.`,
};

const steps = [
  {
    title: "1. Create your free account",
    body: "Sign up with your username, email, phone number, and country. Pay the affordable activation fee to activate your account.",
  },
  {
    title: "2. Choose a plan",
    body: "Plans unlock more earning opportunities — from a set number of chat profiles to survey, video, review, ebook, and ad tasks. Higher tiers unlock more.",
  },
  {
    title: "3. Complete tasks",
    body: "Chat with unlocked profiles, answer survey questions, watch videos, or complete other unlocked tasks. Earnings are credited to your Account Balance.",
  },
  {
    title: "4. Invite others (optional)",
    body: "Share your referral link. When someone you referred purchases a plan, you earn huge commissions credited to your Yield Wallet.",
  },
  {
    title: "5. Withdraw your earnings",
    body: "Once you've reached the minimum withdrawal amount (Ksh 200 or your local equivalent), request a withdrawal to M-Pesa or your country's supported method.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 editorial-prose">
      <h1 className="text-3xl font-bold text-brand-900">How {siteConfig.name} works</h1>
      <p className="mt-4 text-foreground/70">
        Here&apos;s exactly what happens from sign-up to your first withdrawal.
      </p>

      <ol className="mt-8 space-y-6">
        {steps.map((step) => (
          <li key={step.title} className="rounded-lg border border-border-subtle bg-white p-5">
            <p className="font-semibold text-brand-700">{step.title}</p>
            <p className="mt-1 text-sm text-foreground/70">{step.body}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-sm">
        Have more questions? Visit our <Link href="/faqs" className="font-medium text-brand-600">FAQs page</Link>{" "}
        or read the full <Link href="/tutorials/registration-guide" className="font-medium text-brand-600">registration guide</Link>.
      </p>
    </div>
  );
}