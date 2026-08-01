import type { FaqItem } from "@/components/FaqAccordion";

// Every question here comes directly from your SEO Blueprint's "Core
// Questions to Answer" list — this is the content that's meant to rank
// for "is MulaEarn legit/scam" style searches. Grouped by category so the
// FAQs page can render section headers (better for internal linking +
// readability than one giant flat list).

export const faqCategories: { category: string; items: FaqItem[] }[] = [
  {
    category: "About MulaEarn",
    items: [
      {
        question: "What is MulaEarn?",
        answer:
          "MulaEarn is an online earning platform where you can make real money from tasks like chatting with foreigners, Engage in surveys, wheel spinning, and reviews, all with straightforward withdrawals to mobile money.",
      },
      {
        question: "How does MulaEarn work?",
        answer:
          "You create a free account, activate the account to unlock earning opportunities suits you, complete tasks, and withdraw your earnings once you reach the minimum withdrawal amount.",
      },
      {
        question: "Is MulaEarn free?",
        answer:
          "There is a one-time activation fee to open an account. Optional paid plans unlock additional earning opportunities.",
      },
      {
        question: "Who owns MulaEarn?",
        answer: "MulaEarn is owned by the Ugitics Management operated in Kenya, with a team focused on connecting everyday earners with real paying opportunities across Africa and beyond.",
      },
      {
        question: "How do I create an account?",
        answer:
          "Click \"Sign up\", enter your username, email, phone number, choose your country, and set a password. Proceed to account activation.",
      },
      {
        question: "Can I use it in Kenya?",
        answer:
          "Yes — MulaEarn was built with Kenya as its home market, with M-Pesa as a supported withdrawal method, alongside support for Uganda, Tanzania, Ghana, Nigeria, and other countries.",
      },
    ],
  },
  {
    category: "Trust & Safety",
    items: [
      {
        question: "Is MulaEarn legit?",
        answer:
          "MulaEarn is a real platform with real people behind it, transparent policies, and a support team you can actually reach. As with any earning platform, we encourage you to read our full policies before depositing.",
      },
      {
        question: "Is MulaEarn a scam?",
        answer:
          "No — MulaEarn is under a verified management with a good reputation or transforming peoples' financial statuses, publishes clear withdrawal rules, and every earning transaction is recorded and visible in your dashboard.",
      },
      {
        question: "Is it safe?",
        answer:
          "Your account is protected by a password you control, and all payment requests go through a reviewed approval process before funds move.",
      },
      {
        question: "Can I actually earn money?",
        answer:
          "Yes — every completed chat, survey, or task is credited to your account balance instantly or after quick review, and is visible in your dashboard as it happens.",
      },
      {
        question: "What are people saying about it?",
        answer: "Visit our Reviews page to read real feedback from MulaEarn users.",
      },
    ],
  },
  {
    category: "Company & Trust",
    items: [
      {
        question: "Which countries does MulaEarn operate in?",
        answer:
          "MulaEarn is built with Kenya as its home market, with M-Pesa as a supported withdrawal method, alongside support for Uganda, Tanzania, Ghana, Nigeria, and other countries shown at sign-up.",
      },
      {
        question: "Where are MulaEarn's physical offices?",
        answer:
          "MulaEarn under the Ugitics Management has its offices located in One Africa Place, Chiromo Rd, Nairobi - Kenya",
      },
      {
        question: "When did MulaEarn start?",
        answer: "Mulearn was registered as a verified platfrom on 7th March 2021.",
      },
      {
        question: "Who manages MulaEarn?",
        answer: "MulaEarn is managed by the Ugitics Management, a team of professionals with experience in online earning platforms and digital services.",
      },
      {
        question: "Do I need to pay a fee to join MulaEarn?",
        answer:
          "Yes — creating a MulaEarn account requires a one-time activation fee. Optional paid plans unlock additional earning opportunities.",
      },
      {
        question: "What are MulaEarn's plan prices?",
        answer:
          "Plan prices vary by tier and are listed on the Plans page",
      },
    ],
  },
  {
    category: "Earning",
    items: [
      {
        question: "How do I earn money?",
        answer:
          "Depending on your plan, you can earn by chatting with available profiles, answering survey questions correctly, watching short videos, writing app or movie reviews, reading ebooks, and clicking ads.",
      },
      {
        question: "How much can I earn?",
        answer:
          "Earnings vary by task: survey questions pay Ksh 30 per correct answer, video/review/ebook/ad tasks pay a flat rate, and chat earnings depend on the profile you're chatting with.",
      },
      {
        question: "What tasks are available?",
        answer: "Available tasks depend on your plan tier and are listed under the Tasks section of your dashboard once logged in.",
      },
      {
        question: "Are there bonuses?",
        answer: "Check the News section for any current promotions or bonus periods.",
      },
    ],
  },
  {
    category: "Withdrawals & Payments",
    items: [
      {
        question: "How do I withdraw?",
        answer:
          "Go to your dashboard's Withdraw section, choose the wallet you're withdrawing from, enter your M-Pesa (or local) details, and submit — approved withdrawals are paid out to your provided details.",
      },
      {
        question: "Minimum withdrawal?",
        answer: "The minimum withdrawal is Ksh 200 (or the equivalent in your local currency)",
      },
      {
        question: "Supported payment methods?",
        answer:
          "Kenya is supported via M-Pesa; other countries have their own local deposit/withdrawal methods shown on your dashboard based on your selected country.",
      },
      {
        question: "How long do withdrawals take?",
        answer: "Withdrawal requests are reviewed and processed as quickly as possible after submission.",
      },
      {
        question: "What if payment is delayed?",
        answer: "If a payment seems delayed beyond the normal processing time, contact support with your withdrawal request details.",
      },
    ],
  },
  {
    category: "Account Help",
    items: [
      {
        question: "Forgot password?",
        answer: "Use the \"Forgot password\" link on the login page to reset it via your registered email.",
      },
      {
        question: "Account suspended?",
        answer: "If your account has been suspended, contact support for details on why and what steps you can take.",
      },
      {
        question: "Referral not showing?",
        answer: "Referrals appear once the referred user completes registration with your referral code. If it's missing after that, contact support.",
      },
      {
        question: "Why haven't I been paid?",
        answer:
          "Check your withdrawal request status in your dashboard first — most delays are due to a request still being in review. If it's been approved but not received, contact support.",
      },
      {
        question: "How do I contact support?",
        answer: "Visit our Contact page for the current support channels.",
      },
    ],
  },
];

export const faqItemsFlat: FaqItem[] = faqCategories.flatMap((c) => c.items);