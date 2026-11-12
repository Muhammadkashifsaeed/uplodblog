"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";
import type { BlogCategorySlug } from "@/types";
import { BlogCard } from "@/components/home/blog-card";
import { cn } from "@/utils";

interface BlogExplorerProps {
  initialCategory?: BlogCategorySlug | "all";
  showCategoryFilter?: boolean;
}

export function BlogExplorer({
  initialCategory = "all",
  showCategoryFilter = true,
}: BlogExplorerProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<
    BlogCategorySlug | "all"
  >(initialCategory);
  const [query, setQuery] = React.useState("");

  const filteredPosts = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" ||
        post.categorySlug === selectedCategory ||
        post.tags.includes(selectedCategory);

      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {showCategoryFilter && (
          <div
            role="tablist"
            aria-label="Filter articles by category"
            className="flex flex-wrap gap-2"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
              )}
            >
              All Topics
            </button>
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={selectedCategory === category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer",
                  selectedCategory === category.slug
                    ? "bg-blue-600 text-white shadow-xs"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-700"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <div className="relative w-full lg:max-w-xs">
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="h-10 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-10 text-sm text-[#071a3e] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} variant="vertical" />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-sm font-medium text-slate-700">
            No articles matched your current filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setQuery("");
            }}
            className="mt-3 text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}

