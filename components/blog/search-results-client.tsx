"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion-wrapper";
import { BlogCard } from "@/components/home/blog-card";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SEARCHABLE_TOPICS } from "@/lib/constants";

function SearchResultsInner({ initialQuery }: { initialQuery: string }) {
  const router = useRouter();
  const [query, setQuery] = React.useState(initialQuery);

  const matchingPosts = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return BLOG_POSTS;
    return BLOG_POSTS.filter(
      (post) =>
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.category.toLowerCase().includes(normalized) ||
        post.author.toLowerCase().includes(normalized)
    );
  }, [query]);

  const matchingTopics = React.useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return SEARCHABLE_TOPICS;
    return SEARCHABLE_TOPICS.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.summary.toLowerCase().includes(normalized)
    );
  }, [query]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    router.replace(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  };

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-2xl flex-col gap-2.5 sm:flex-row sm:items-center"
      >
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles, AI tools, technology, gaming, finance..."
            aria-label="Search UploadBlog"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-10 text-sm text-[#071a3e] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-6 text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110 active:scale-[0.98] cursor-pointer"
        >
          <Search className="h-4 w-4" aria-hidden />
          <span>Search</span>
        </button>
      </form>

      {matchingPosts.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#071a3e]">
              Articles ({matchingPosts.length})
            </h2>
          </div>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {matchingPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} variant="vertical" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {matchingTopics.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[#071a3e]">
            Topic Hubs &amp; Quick Links ({matchingTopics.length})
          </h2>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matchingTopics.map((item) => (
              <StaggerItem key={item.href}>
                <Card className="flex h-full flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">
                      {item.category}
                    </Badge>
                    <CardTitle className="pt-2 text-base text-[#071a3e]">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
                    >
                      <span>Visit page</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {matchingPosts.length === 0 && matchingTopics.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-sm font-medium text-slate-700">
            No matching articles or topics found for &ldquo;{query}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              router.replace("/search");
            }}
            className="mt-3 text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
          >
            Show all articles
          </button>
        </div>
      )}
    </div>
  );
}

export function SearchResultsClient() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  return <SearchResultsInner key={urlQuery} initialQuery={urlQuery} />;
}
