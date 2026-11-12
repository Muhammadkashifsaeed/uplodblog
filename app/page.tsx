import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { FeaturedCategorySection } from "@/components/home/featured-category-section";

export const metadata: Metadata = {
  title: {
    absolute: "UploadBlog.com – Trusted Tech, AI & Business Guides",
  },
  description:
    "Explore research-backed guides, clear reviews, and practical insights on AI tools, technology, gaming, business, finance, and everyday life.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "UploadBlog.com – Trusted Tech, AI & Business Guides",
    description:
      "Explore research-backed guides, clear reviews, and practical insights on AI tools, technology, gaming, business, finance, and everyday life.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategorySection
        title="AI Tools"
        viewAllLabel="View All AI Tools"
        viewAllHref="/ai-tools"
        categorySlug="ai-tools"
      />
      <FeaturedCategorySection
        title="Technology & Gadgets"
        viewAllLabel="View All Technology & Gadgets"
        viewAllHref="/technology-gadgets"
        categorySlug="technology-gadgets"
      />
      <FeaturedCategorySection
        title="Gaming"
        viewAllLabel="View All Gaming"
        viewAllHref="/gaming"
        categorySlug="gaming"
      />
      <FeaturedCategorySection
        title="Business & Finance"
        viewAllLabel="View All Business & Finance"
        viewAllHref="/business-finance"
        categorySlug="business-finance"
      />
    </>
  );
}
