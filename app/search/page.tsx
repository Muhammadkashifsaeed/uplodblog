import { Suspense } from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { FadeIn } from "@/components/common/motion-wrapper";
import { SearchResultsClient } from "@/components/blog/search-results-client";

export const metadata: Metadata = {
  title: "Search Articles, Guides & Topics",
  description:
    "Search guides, comparisons, technology reviews, AI tools, gaming articles, and topic hubs across UploadBlog.com quickly.",
  alternates: {
    canonical: "/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <FadeIn>
        <Badge variant="accent">Search</Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#071a3e] sm:text-4xl">
          Search UploadBlog.com
        </h1>
        <p className="mt-2 text-base text-slate-600">
          Find guides, comparisons, and topic hubs across the site.
        </p>
      </FadeIn>

      <Suspense
        fallback={
          <p className="text-sm text-slate-500">Loading search results...</p>
        }
      >
        <SearchResultsClient />
      </Suspense>
    </div>
  );
}
