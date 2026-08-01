export type Tutorial = {
  slug: string;
  title: string;
  summary: string;
  body: string[]; // each entry is one paragraph/section, rendered as separate <p>/<h2> blocks
};

// Matches the 5 tutorial topics named in your SEO blueprint exactly:
// Registration guide, First withdrawal guide, Referral strategies,
// Common mistakes, Beginner's guide.
export const tutorials: Tutorial[] = [
  {
    slug: "profitable-user-guide",
    title: "How to Be a Profitable MulaEarn User",
    summary: "Practical habits that separate high-earning MulaEarn users from the rest.",
    body: [
      "Profitability on MulaEarn comes down to consistency, picking the right plan, and reinvesting smartly — not luck.",
      "## Pick a plan that matches your time",
      "A higher-tier plan only pays off if you actually have the time to complete the tasks it unlocks — match your plan to your realistic daily availability.",
      "## Prioritize your highest-paying tasks first",
      "Check your dashboard daily and complete higher-paying task types before lower-paying ones so you're not leaving easy earnings on the table.",
      "## Reinvest early earnings into referrals",
      "Instead of withdrawing every shilling immediately, some of the most profitable users put early earnings toward growing their referral network, since referral commissions compound over time.",
      "## Track your numbers weekly",
      "Compare your Total Yield week over week — if it's flat, that's a signal to either upgrade your plan or focus more on referrals.",
    ],
  },
  {
    slug: "marketing-mulaearn-commissions",
    title: "How to Market MulaEarn and Earn Commissions",
    summary: "How to promote MulaEarn honestly and effectively to grow your referral commissions.",
    body: [
      "Marketing MulaEarn well means being upfront that you earn a commission — this builds trust and actually converts better.",
      "## Use your real results",
      "Screenshots of your own dashboard earnings (with sensitive details blurred) are more convincing than generic promotional language.",
      "## Choose the right channels",
      "Share in groups or communities where people already do online tasks or gig work, rather than mass, untargeted posting.",
      "## Be upfront about the commission",
      "Tell people directly that you earn 70% of their plan purchase — this is disclosure, not a downside, and audiences respond better to it.",
      "## Follow up, don't just post and forget",
      "Most conversions happen after a short follow-up message answering questions, not from the first share.",
    ],
  },
  {
    slug: "join-mulaearn-community",
    title: "How to Join the MulaEarn Community",
    summary: "Where to connect with other MulaEarn users for tips, support, and updates.",
    body: [
      "Being part of the MulaEarn community helps you learn faster from other users' experience.",
      "## TODO",
      "Add the actual community channel(s) here — e.g. WhatsApp group link, Telegram channel, Facebook group — plus any join requirements.",
    ],
  },
  {
    slug: "grow-your-team",
    title: "How to Grow Your Own Team on MulaEarn",
    summary: "Building a referral team that earns you ongoing commission income.",
    body: [
      "Growing a 'team' on MulaEarn means building a network of active referrals under you who keep earning — and keep earning you commission.",
      "## Start with people you trust",
      "Your first few team members should be people you can personally support and answer questions for, since their early success drives further referrals.",
      "## TODO",
      "Confirm whether MulaEarn has a multi-level structure (i.e. do you earn from your referrals' referrals) or if commission is single-level only — this needs to be accurate before publishing, since it affects how 'team growing' is described.",
    ],
  },
  {
    slug: "5-easy-ways-to-get-referrals",
    title: "5 Easy Ways You Can Easily Get Referrals",
    summary: "Simple, low-effort methods to start earning referral commissions on MulaEarn.",
    body: [
      "You don't need a big following to start earning referral commissions — these five methods work at any scale.",
      "## 1. Share your referral link in your WhatsApp status",
      "A daily status update mentioning your earnings is low-effort and reaches people who already know and trust you.",
      "## 2. Post in local online-jobs and side-hustle groups",
      "Facebook and WhatsApp groups focused on online income opportunities are full of people actively looking for exactly this.",
      "## 3. Offer to walk a friend through their first task",
      "Personally helping someone complete their first task after signing up under your link dramatically increases the odds they stick around and upgrade.",
      "## 4. Use your own results as proof",
      "A real screenshot of your Yield Wallet is more persuasive than any generic pitch.",
      "## 5. Revisit people who signed up but never upgraded",
      "A referral only earns you commission once they purchase a plan — check your Referral Summary and follow up with anyone still on the free tier.",
    ],
  },
  {
    slug: "access-foreign-profiles",
    title: "2 Easy Steps to Access Foreign Profiles",
    summary: "How to unlock and access foreign chat profiles on MulaEarn.",
    body: [
      "## TODO",
      "Fill in the actual 2 steps here — e.g. which plan tier unlocks foreign profiles, and where in the dashboard users go to access them. Needs to be accurate since this is a specific product feature.",
    ],
  },
  {
    slug: "how-to-bid-foreign-profiles",
    title: "How to Bid on Foreign Profiles",
    summary: "A walkthrough of the bidding process for foreign profiles on MulaEarn.",
    body: [
      "## TODO",
      "Fill in the actual bidding mechanic here — e.g. is it a fixed price, an auction, first-come-first-served? This is a financial mechanic users will act on directly, so it needs to be precise before publishing.",
    ],
  },
];