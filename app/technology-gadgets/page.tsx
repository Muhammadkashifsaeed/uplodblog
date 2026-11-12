import type { Metadata } from "next";
import { TopicPageView } from "@/components/common/topic-page-view";

export const metadata: Metadata = {
  title: "Technology, Gadgets & Hardware Guides",
  description:
    "Clear tech explainers, hands-on gadget reviews, hardware comparisons, and engineering kit breakdowns to help you buy smarter.",
  alternates: {
    canonical: "/technology-gadgets",
  },
  openGraph: {
    title: "Technology, Gadgets & Hardware Guides | UploadBlog.com",
    description:
      "Clear tech explainers, hands-on gadget reviews, hardware comparisons, and engineering kit breakdowns.",
    url: "/technology-gadgets",
  },
};

const HIGHLIGHTS = [
  {
    title: "Laptops & Workstations",
    summary:
      "Objective breakdowns of battery life, display quality, and daily performance.",
  },
  {
    title: "Mobile & Audio Gear",
    summary:
      "Honest reviews of smartphones, headphones, and accessories worth your budget.",
  },
  {
    title: "Home Tech & Networking",
    summary:
      "Simple guides to Wi-Fi upgrades, storage, and reliable desk setups.",
  },
] as const;

export default function TechnologyGadgetsPage() {
  return (
    <TopicPageView
      badge="Technology & Gadgets"
      title="Clear tech explainers and hardware reviews."
      description="Understand specs that actually matter—from everyday laptops and smartphones to smart home essentials."
      highlights={HIGHLIGHTS}
      categorySlug="technology-gadgets"
    />
  );
}

