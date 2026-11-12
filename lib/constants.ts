import type { NavItem } from "@/types";
import { clientEnv } from "@/lib/env";

export const SITE_CONFIG = {
  name: clientEnv.NEXT_PUBLIC_APP_NAME,
  brandName: "UploadBlog.com",
  tagline: "Useful answers without the noise.",
  description:
    "UploadBlog brings together clear guides, practical explainers, useful reviews and fresh insights across AI, technology, gaming, business and the digital topics shaping everyday decisions.",
  url: clientEnv.NEXT_PUBLIC_APP_URL,
  social: {
    facebook: clientEnv.NEXT_PUBLIC_FACEBOOK_URL,
    instagram: clientEnv.NEXT_PUBLIC_INSTAGRAM_URL,
  },
} as const;

export const HEADER_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Technology & Gadgets", href: "/technology-gadgets" },
  { label: "Gaming", href: "/gaming" },
  { label: "Business & Finance", href: "/business-finance" },
  { label: "Blog", href: "/blog" },
];

export const FOOTER_EXPLORE_LINKS: NavItem[] = [
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Technology & Gadgets", href: "/technology-gadgets" },
  { label: "Gaming", href: "/gaming" },
  { label: "Business & Finance", href: "/business-finance" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const FOOTER_BOTTOM_LINKS: NavItem[] = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact", href: "/contact" },
];

export const BRAND_BADGES = [
  "Clear Information",
  "Practical Guides",
  "Reader Focused",
] as const;

export interface TopicEntry {
  title: string;
  category: string;
  href: string;
  summary: string;
}

export const SEARCHABLE_TOPICS: TopicEntry[] = [
  {
    title:
      "Video Production Melbourne: Managing Sudden Weather Changes and Shifting Light During Outdoor Shoots",
    category: "Video Production",
    href: "/blog/video-production-melbourne-weather-outdoor-shoots",
    summary:
      "Managing sudden weather changes and shifting light during outdoor shoots in Melbourne.",
  },
  {
    title:
      "7 Smart Ways to Save Story Content for Social Media and Blog Content Planning",
    category: "Service",
    href: "/blog/7-smart-ways-to-save-story-content",
    summary:
      "Save, organize, and repurpose Instagram Story content for ongoing social media and blog planning.",
  },
  {
    title:
      "From Tiny Components to Real Motion: How Mini Engine Kits Bring Engineering to Life",
    category: "Technology & Gadgets",
    href: "/blog/mini-engine-kits-bring-engineering-to-life",
    summary:
      "How functional scale mini engine kits bring mechanical engineering concepts to life.",
  },
  {
    title: "Mortgage Broker Sydney Olympic Park: What to Look for Before You Apply",
    category: "Business & Finance",
    href: "/blog/mortgage-broker-sydney-olympic-park",
    summary:
      "What to compare beyond headline interest rates when choosing a mortgage broker.",
  },
  {
    title: "The Best AI Tools for Small Business in 2026: A Complete Guide",
    category: "AI Tools",
    href: "/blog/best-ai-tools-for-small-business-2026-complete-guide",
    summary:
      "Discover the best AI tools to improve productivity, save time and grow your business.",
  },
  {
    title: "How to Choose the Best Sports Experience with Fanatix",
    category: "Blog",
    href: "/blog/choose-best-sports-experience-fanatix",
    summary:
      "Tips for booking memorable live motorsport and international sporting experiences.",
  },
  {
    title:
      "Comparing Aetna Medicare Advantage Benefits, Costs and Provider Access",
    category: "Health Tips",
    href: "/blog/comparing-aetna-medicare-advantage-benefits",
    summary:
      "Compare Aetna Medicare Advantage plan benefits, networks, and out-of-pocket costs.",
  },
  {
    title: "Civil Engineering Careers: Benefits of Earning a Master’s Degree",
    category: "Blog",
    href: "/blog/civil-engineering-careers-masters-degree",
    summary:
      "How graduate civil engineering specialization supports long-term career progression.",
  },
  {
    title: "How Medicare Advantage Plans 2027 May Fit Different Health Needs",
    category: "Health Tips",
    href: "/blog/medicare-advantage-plans-2027-health-needs",
    summary:
      "How to evaluate Medicare Advantage 2027 plan features against real healthcare needs.",
  },
  {
    title:
      "Live Dealer Blackjack: How Technology Has Changed the Online Casino Experience",
    category: "Gaming Guides",
    href: "/blog/live-dealer-blackjack-online-casino-experience",
    summary:
      "How HD live streaming and OCR tech transformed real-time live dealer blackjack.",
  },
  {
    title: "Top-11 Game Localization Solutions: Unlocking Global Gaming Markets",
    category: "Gaming",
    href: "/blog/top-game-localization-solutions-global-gaming",
    summary:
      "How game studios expand worldwide with modern localization platforms.",
  },
  {
    title: "Vidnoz AI: The Right AI Tool for Streamlining Video Production",
    category: "AI Tools",
    href: "/blog/vidnoz-ai-streamlining-video-production",
    summary:
      "Explore how AI video tools simplify content creation without filming overhead.",
  },
  {
    title: "Top Digital Marketing Trends by UploadBlog.com in 2025",
    category: "AI Tools",
    href: "/blog/top-digital-marketing-trends-uploadblog-2025",
    summary:
      "Discover important trends, strategies and technologies shaping modern marketing.",
  },
  {
    title: "How to Use AI for Local SEO in 2025",
    category: "AI Tools",
    href: "/blog/how-to-use-ai-for-local-seo-in-2025",
    summary:
      "Learn how AI can improve local search visibility for businesses.",
  },
  {
    title: "Health & Lifestyle Guides",
    category: "Health & Lifestyle",
    href: "/health-lifestyle",
    summary:
      "Useful everyday information on wellness, ergonomics, and modern habits.",
  },
  {
    title: "Reviews & How-To",
    category: "Reviews & How-To",
    href: "/reviews-how-to",
    summary:
      "Compare tools, understand trade-offs, and decide with confidence.",
  },
  {
    title: "AI Tools Directory & Practical Workflows",
    category: "AI Tools",
    href: "/ai-tools",
    summary:
      "Comparisons, tutorials, and practical guides for modern AI writing, coding, and productivity tools.",
  },
  {
    title: "Technology & Gadgets Reviews",
    category: "Technology & Gadgets",
    href: "/technology-gadgets",
    summary:
      "Clear hardware explainers, laptop buying guides, and smart device breakdowns.",
  },
  {
    title: "Gaming Guides, Gear & Performance Tips",
    category: "Gaming",
    href: "/gaming",
    summary:
      "Setup optimizations, peripheral comparisons, and PC/console gaming insights.",
  },
  {
    title: "Business & Finance Explainers",
    category: "Business & Finance",
    href: "/business-finance",
    summary:
      "Digital business tools, personal finance frameworks, and creator economy insights.",
  },
  {
    title: "UploadBlog Editorial Feed",
    category: "Blog",
    href: "/blog",
    summary:
      "Latest guides, comparisons, and explainers across the topics modern readers care about most.",
  },
  {
    title: "About UploadBlog.com",
    category: "Company",
    href: "/about",
    summary:
      "Learn about our reader-focused editorial approach and mission.",
  },
  {
    title: "Contact UploadBlog.com",
    category: "Support",
    href: "/contact",
    summary:
      "Get in touch with the UploadBlog editorial and partnerships team.",
  },
];
