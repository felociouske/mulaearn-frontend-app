import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn who's behind ${siteConfig.name} and what we're building for online earners across East and West Africa.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 editorial-prose">
      <h1 className="text-3xl font-bold text-brand-900">About {siteConfig.name}</h1>
      <p className="mt-4 text-foreground/70">
        {/* NOTE FOR YOU: this is placeholder marketing copy for you to
            personalize — replace with your real story once you're ready.
            I've kept it general rather than inventing specific claims
            (registration numbers, team size, founding date) that aren't
            confirmed. */}
        {siteConfig.name} was built to connect everyday people across Kenya, Uganda, Tanzania, Ghana,
        Nigeria, and beyond with real, paying earning opportunities, from chatting with people who
        need someone to talk to, to surveys, video tasks, and more.
      </p>

      <h2>Our mission</h2>
      <p>
        We believe earning money online should be straightforward and transparent: affordable activation fee, clear rules on how much each task pays, and a support team you can actually reach when
        something goes wrong.
      </p>

      <h2>Who owns {siteConfig.name}?</h2>
      <p>
        {siteConfig.name} is owned by the Ugitics Management.
      </p>

      <h2>Where we operate</h2>
      <ul>
        <li>Kenya — full support including M-Pesa withdrawals</li>
        <li>Uganda, Tanzania, Ghana, Nigeria — supported with local deposit/withdrawal methods</li>
        <li>International — other countries can join and use supported international payment options</li>
      </ul>
    </div>
  );
}