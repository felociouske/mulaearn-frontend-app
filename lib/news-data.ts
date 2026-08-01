export type NewsPost = {
  slug: string;
  title: string;
  category: "Feature update" | "Payment change" | "Maintenance notice" | "Announcement";
  date: string; // ISO date string
  summary: string;
  body: string[];
};

// NOTE FOR YOU: these are starter posts to give the News section real
// content on launch day. Update the date and details, and add new posts
// here as things actually happen — I haven't invented specific metrics
// or claims (e.g. user counts) that aren't true yet.
export const newsPosts: NewsPost[] = [
  {
    slug: "welcome-to-Mulaearn",
    title: "Welcome to MulaEarn",
    category: "Announcement",
    date: "2026-07-24",
    summary: "MulaEarn is now open for registration — here's what you can do on day one.",
    body: [
      "MulaEarn is now live. You can create a free account, explore available plans, and start earning through chats, surveys, and other tasks.",
      "As we grow, we'll use this News section to share feature updates, payment method changes, and any planned maintenance — check back regularly.",
    ],
  },
  {
    slug: "supported-countries-at-launch",
    title: "Supported Countries at Launch",
    category: "Announcement",
    date: "2026-07-24",
    summary: "A rundown of which countries are supported for sign-up and withdrawals at launch.",
    body: [
      "At launch, MulaEarn supports sign-up from Kenya, Uganda, Tanzania, Ghana, and Nigeria, plus a general international option for other countries.",
      "Kenya is supported with M-Pesa for deposits and withdrawals. Other countries will see their own supported local payment methods on their dashboard.",
    ],
  },
];