import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { FadeIn } from "@/components/common/motion-wrapper";
import { BlogExplorer } from "@/components/blog/blog-explorer";

export const metadata: Metadata = {
  title: "Best AI Tools, Workflows & Guides",
  description:
    "Explore honest AI tool reviews, workflow guides, video automation software, marketing trends, and local SEO strategies for teams.",
  alternates: {
    canonical: "/ai-tools",
  },
  openGraph: {
    title: "Best AI Tools, Workflows & Guides | UploadBlog.com",
    description:
      "Explore honest AI tool reviews, workflow guides, video automation software, marketing trends, and local SEO strategies.",
    url: "/ai-tools",
  },
};

export default function AiToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <FadeIn className="mb-8">
        <Badge variant="accent">AI Tools</Badge>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#071a3e] sm:text-4xl">
          Practical AI tools without the hype.
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          Clear guides and hands-on comparisons across AI assistants, video
          production tools, marketing workflows, and local SEO.
        </p>
      </FadeIn>

      <BlogExplorer initialCategory="ai-tools" showCategoryFilter />
    </div>
  );
}
