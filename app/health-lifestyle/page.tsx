import type { Metadata } from "next";
import { TopicPageView } from "@/components/common/topic-page-view";

export const metadata: Metadata = {
  title: "Health, Wellness & Lifestyle Guides",
  description:
    "Clear consumer health guides, Medicare coverage comparisons, ergonomic desk habits, and everyday lifestyle insights without the noise.",
  alternates: {
    canonical: "/health-lifestyle",
  },
  openGraph: {
    title: "Health, Wellness & Lifestyle Guides | UploadBlog.com",
    description:
      "Clear consumer health guides, Medicare coverage comparisons, ergonomic desk habits, and everyday lifestyle insights.",
    url: "/health-lifestyle",
  },
};

const HIGHLIGHTS = [
  {
    title: "Everyday Wellness Habits",
    summary:
      "Evidence-informed routines for sleep, focus, and sustainable daily energy.",
  },
  {
    title: "Digital Balance & Ergonomics",
    summary:
      "Practical workspace setups and screen-time habits for remote workers.",
  },
  {
    title: "Clear Consumer Health Guides",
    summary:
      "Straightforward explainers on wearables, sleep trackers, and daily essentials.",
  },
] as const;

export default function HealthLifestylePage() {
  return (
    <TopicPageView
      badge="Health & Lifestyle"
      title="Useful everyday information for modern living."
      description="Clear, practical insights covering everyday wellness, healthy digital routines, and balanced lifestyle choices."
      highlights={HIGHLIGHTS}
      categorySlug="health-lifestyle"
    />
  );
}

