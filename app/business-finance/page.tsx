import type { Metadata } from "next";
import { TopicPageView } from "@/components/common/topic-page-view";

export const metadata: Metadata = {
  title: "Business, SaaS Tools & Finance Guides",
  description:
    "Practical business growth insights, mortgage advice, creative marketing workflows, and personal finance guides for modern founders.",
  alternates: {
    canonical: "/business-finance",
  },
  openGraph: {
    title: "Business, SaaS Tools & Finance Guides | UploadBlog.com",
    description:
      "Practical business growth insights, mortgage advice, creative marketing workflows, and personal finance guides.",
    url: "/business-finance",
  },
};

const HIGHLIGHTS = [
  {
    title: "SaaS & Operations Tools",
    summary:
      "Compare billing, project management, and analytics platforms for lean teams.",
  },
  {
    title: "Personal Finance Fundamentals",
    summary:
      "Clear explainers on budgeting, digital banking, and long-term planning.",
  },
  {
    title: "Creator & Online Business",
    summary:
      "Frameworks for launching, monetizing, and scaling digital products.",
  },
] as const;

export default function BusinessFinancePage() {
  return (
    <TopicPageView
      badge="Business & Finance"
      title="Smart business and finance decisions."
      description="Clear explanations of software stacks, financial tools, and modern digital business strategies."
      highlights={HIGHLIGHTS}
      categorySlug="business-finance"
    />
  );
}

