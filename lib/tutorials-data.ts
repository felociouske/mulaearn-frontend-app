export type TutorialBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "video"; src: string; poster?: string; caption?: string }
  | {
      type: "links";
      title?: string;
      items: {
        label: string;
        href: string;
        icon: "whatsapp" | "telegram" | "x" | "facebook" | "tiktok" | "instagram";
      }[];
    };

export type Tutorial = {
  slug: string;
  title: string;
  summary: string;
  body: TutorialBlock[];
};

// Matches the 5 tutorial topics named in your SEO blueprint exactly:
// Registration guide, First withdrawal guide, Referral strategies,
// Common mistakes, Beginner's guide.
export const tutorials: Tutorial[] = [
  {
    slug: "referral-strategies",
    title: "Referral Strategies",
    summary: "Practical ways to grow your referral network and earn more on MulaEarn.",
    body: [
      { type: "heading", text: "Referral Strategies" },
      {
        type: "list",
        items: [
          "Make sure you have an active MulaEarn account.",
          "Log in and copy your referral link from your dashboard.",
          "Share it with friends and family members so they can join and activate their accounts.",
          "Share it on your social media accounts and invite your followers.",
          "Post and advertise consistently to reach more potential referrals.",
        ],
      },
      {
        // Fill in real path once you have the screenshot/video, e.g.
        // /tutorials/referral-strategies/copy-link.mp4
        type: "video",
        src: "/tutorials/referral-strategies/copy-link.mp4",
        caption: "Where to find and copy your referral link.",
      },
    ],
  },
  {
    slug: "first-withdrawal-guide",
    title: "First Withdrawal Guide",
    summary: "A step-by-step guide to requesting your first withdrawal on MulaEarn.",
    body: [
      { type: "heading", text: "First Withdrawal" },
      {
        type: "list",
        items: [
          "On your dashboard, navigate to the Withdraw section.",
          "Request an amount that is within your current account balance.",
        ],
      },
      {
        type: "video",
        src: "/tutorials/first-withdrawal-guide/withdraw-demo.mp4",
        caption: "Requesting a withdrawal from the dashboard.",
      },
    ],
  },
  {
    slug: "registration-guide",
    title: "Registration Guide",
    summary: "How to create and activate your MulaEarn account.",
    body: [
      { type: "heading", text: "Registration Guide" },
      {
        type: "list",
        items: [
          "Navigate to the Mulaearn registration page at https://app.mulaearn.co/register.",
          "Fill in your personal details, including your name, email address, and password.",
          "Click the 'Register' button to create your account.",
          "Log in to your new MulaEarn account and complete any additional setup steps as prompted.",
        ],
      },
      {
        type: "video",
        src: "/tutorials/registration-guide/registration-demo.mp4",
        caption: "Creating and activating a MulaEarn account.",
      },
    ],
  },
  {
    slug: "profitable-user-guide",
    title: "How to Be a Profitable MulaEarn User",
    summary: "Practical habits that separate high-earning MulaEarn users from the rest.",
    body: [
      {
        type: "paragraph",
        text: "Profitability on MulaEarn comes down to consistency, picking the right plan, and reinvesting smartly — not luck.",
      },
      { type: "heading", text: "Pick a plan that matches your time" },
      {
        type: "paragraph",
        text: "A higher-tier plan only pays off if you actually have the time to complete the tasks it unlocks — match your plan to your realistic daily availability.",
      },
      { type: "heading", text: "Prioritize your highest-paying tasks first" },
      {
        type: "paragraph",
        text: "Check your dashboard daily and complete higher-paying task types before lower-paying ones so you're not leaving easy earnings on the table.",
      },
      { type: "heading", text: "Reinvest early earnings into referrals" },
      {
        type: "paragraph",
        text: "Instead of withdrawing every shilling immediately, some of the most profitable users put early earnings toward growing their referral network, since referral commissions compound over time.",
      },
      { type: "heading", text: "Track your numbers weekly" },
      {
        type: "paragraph",
        text: "Compare your Total Yield week over week — if it's flat, that's a signal to either upgrade your plan or focus more on referrals.",
      },
    ],
  },
  {
    slug: "marketing-mulaearn-commissions",
    title: "How to Market MulaEarn and Earn Commissions",
    summary: "How to promote MulaEarn honestly and effectively to grow your referral commissions.",
    body: [
      {
        type: "paragraph",
        text: "Marketing MulaEarn well means being upfront that you earn a commission — this builds trust and actually converts better.",
      },
      { type: "heading", text: "Use your real results" },
      {
        type: "paragraph",
        text: "Screenshots of your own dashboard earnings (with sensitive details blurred) are more convincing than generic promotional language.",
      },
      { type: "heading", text: "Choose the right channels" },
      {
        type: "paragraph",
        text: "Share in groups or communities where people already do online tasks or gig work, rather than mass, untargeted posting.",
      },
      { type: "heading", text: "Follow up, don't just post and forget" },
      {
        type: "paragraph",
        text: "Most conversions happen after a short follow-up message answering questions, not from the first share.",
      },
    ],
  },
  {
    slug: "join-mulaearn-community",
    title: "How to Join the MulaEarn Community",
    summary: "Where to connect with other MulaEarn users for tips, support, and updates.",
    body: [
      {
        type: "paragraph",
        text: "Being part of the MulaEarn community helps you learn faster from other users' experience.",
      },
      {
        type: "links",
        title: "Join us on",
        items: [
          { label: "WhatsApp Community", href: "https://chat.whatsapp.com/your-invite-code", icon: "whatsapp" },
          { label: "Telegram Channel", href: "https://t.me/your-channel", icon: "telegram" },
          { label: "Follow us on X", href: "https://x.com/yourhandle", icon: "x" },
        ],
      },
    ],
  },
  {
    slug: "grow-your-team",
    title: "How to Grow Your Own Team on MulaEarn",
    summary: "Building a referral team that earns you ongoing commission income.",
    body: [
      {
        type: "paragraph",
        text: "Growing a 'team' on MulaEarn means building a network of active referrals under you who keep earning — and keep earning you commission.",
      },
      { type: "heading", text: "Start with people you trust" },
      {
        type: "paragraph",
        text: "Your first few team members should be people you can personally support and answer questions for, since their early success drives further referrals.",
      },
      { type: "heading", text: "TODO" },
      {
        type: "paragraph",
        text: "Confirm whether MulaEarn has a multi-level structure (i.e. do you earn from your referrals' referrals) or if commission is single-level only — this needs to be accurate before publishing, since it affects how 'team growing' is described.",
      },
    ],
  },
  {
    slug: "5-easy-ways-to-get-referrals",
    title: "5 Easy Ways You Can Easily Get Referrals",
    summary: "Simple, low-effort methods to start earning referral commissions on MulaEarn.",
    body: [
      {
        type: "paragraph",
        text: "You don't need a big following to start earning referral commissions — these five methods work at any scale.",
      },
      { type: "heading", text: "1. Share your referral link in your WhatsApp status" },
      {
        type: "paragraph",
        text: "A daily status update mentioning your earnings is low-effort and reaches people who already know and trust you.",
      },
      { type: "heading", text: "2. Post in local online-jobs and side-hustle groups" },
      {
        type: "paragraph",
        text: "Facebook and WhatsApp groups focused on online income opportunities are full of people actively looking for exactly this.",
      },
      { type: "heading", text: "3. Offer to walk a friend through their first task" },
      {
        type: "paragraph",
        text: "Personally helping someone complete their first task after signing up under your link dramatically increases the odds they stick around and upgrade.",
      },
      { type: "heading", text: "4. Use your own results as proof" },
      {
        type: "paragraph",
        text: "A real screenshot of your Yield Wallet is more persuasive than any generic pitch.",
      },
      { type: "heading", text: "5. Revisit people who signed up but never upgraded" },
      {
        type: "paragraph",
        text: "A referral only earns you commission once they purchase a plan — check your Referral Summary and follow up with anyone still on the free tier.",
      },
    ],
  },
  {
    slug: "access-foreign-profiles",
    title: "Easy Steps to Access Foreign Profiles",
    summary: "How to unlock and access foreign chat profiles on MulaEarn.",
    body: [
      { type: "heading", text: "Steps to Access Foreign Profiles" },
      {
        type: "list",
        items: [
          "Inorder to access foreign profiles, you need to upgrade to paid plan. This is because foreign profiles are only available to paid users.",
          "Choose a plan that fits your budget and upgrade your account. Once upgraded, you will be able to access foreign profiles.",
          "Navigate to the foreign profiles section in the app and start exploring the available profiles.",
          "Choose the the foreigners that are online and bid to accept their chat request. Once your bid is accepted, you can start chatting with them.",
          "Hold and interactive session and be nice, polite and respectful to the foreigner. This will help you build a good rapport and increase your chances of getting more chat requests in the future.",
        ],
      },
    ],
  },
];