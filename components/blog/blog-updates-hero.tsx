"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Sparkles } from "lucide-react";

const BLOG_DIRECTORY_CATEGORIES = [
  { label: "Account Management", href: "/category/account-management" },
  { label: "AI", href: "/category/ai" },
  { label: "AI Tools", href: "/category/ai-tools" },
  { label: "Animal Care & Farming", href: "/category/animal-care-farming" },
  {
    label: "Automotive & Trailer Security",
    href: "/category/automotive-trailer-security",
  },
  { label: "Beauty & Skincare", href: "/category/beauty-skincare" },
  { label: "Blog", href: "/category/blog" },
  { label: "Business & Finance", href: "/category/business-finance" },
] as const;

const DISCOVER_TOOLS_LINKS = [
  { label: "AI Tools", href: "/ai-tools" },
  { label: "Technology & Gadgets", href: "/technology-gadgets" },
  { label: "Gaming", href: "/gaming" },
  { label: "Business & Finance", href: "/business-finance" },
] as const;

export function BlogUpdatesHero() {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  };

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(125deg,#eaf2ff_0%,#f4f7ff_48%,#fdf0f7_100%)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Side */}
          <div className="space-y-5 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              <span>Trusted Knowledge Magazine</span>
            </div>

            <div className="space-y-1.5">
              <h1 className="text-4xl font-extrabold tracking-tight text-[#071a3e] sm:text-5xl">
                UploadBlog.com
              </h1>
              <p className="text-2xl font-bold tracking-tight text-blue-700 sm:text-3xl">
                Blog &amp; Updates
              </p>
            </div>

            <p className="max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
              Read the latest stories, guides, news, and updates from
              uploadblog.com. Explore useful content about AI, technology,
              gadgets, gaming, entertainment, and digital trends.
            </p>

            {/* Category Pills */}
            <div
              aria-label="Blog Categories"
              className="flex flex-wrap gap-2 pt-1"
            >
              {BLOG_DIRECTORY_CATEGORIES.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="inline-flex items-center rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-[#071a3e] shadow-2xs transition-all duration-150 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                >
                  {category.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Discover + Search Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,35,80,0.08)] backdrop-blur-sm sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                Discover on UploadBlog
              </p>
              <h2 className="mt-2 text-xl font-bold leading-snug tracking-tight text-[#071a3e] sm:text-2xl">
                Clear information for the questions that matter.
              </h2>

              {/* Search Box */}
              <div className="mt-5 border-t border-slate-100 pt-5">
                <h3 className="text-sm font-bold text-[#071a3e]">Search</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Find guides, comparisons, and articles across every topic on
                  UploadBlog.com.
                </p>

                <form onSubmit={handleSearch} className="mt-3 flex gap-2">
                  <div className="relative flex-1">
                    <Search
                      className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400"
                      aria-hidden
                    />
                    <input
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search articles, AI, tech..."
                      aria-label="Search UploadBlog articles"
                      className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pr-3 pl-9 text-sm text-[#071a3e] placeholder:text-slate-400 transition-colors focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-4 text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110 cursor-pointer"
                  >
                    Search
                  </button>
                </form>
              </div>

              {/* Tools & Topics */}
              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Tools &amp; Topics
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {DISCOVER_TOOLS_LINKS.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-[#071a3e] transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span>{tool.label}</span>
                      <ArrowRight className="h-3 w-3" aria-hidden />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

