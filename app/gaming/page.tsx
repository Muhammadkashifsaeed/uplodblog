import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, Clock, Gamepad2 } from "lucide-react";
import { getHomeSectionPosts } from "@/lib/blog-data";
import {
  RevealSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion-wrapper";
import { BlogCard } from "@/components/home/blog-card";

export const metadata: Metadata = {
  title: "Gaming Guides, Hardware & PC Insights",
  description:
    "Discover gaming hardware explainers, GPU performance breakdowns, PC vs. console comparisons, and global game localization guides.",
  alternates: {
    canonical: "/gaming",
  },
  openGraph: {
    title: "Gaming Guides, Hardware & PC Insights | UploadBlog.com",
    description:
      "Discover gaming hardware explainers, GPU performance breakdowns, PC vs. console comparisons, and localization guides.",
    url: "/gaming",
  },
};

export default function GamingPage() {
  const { featuredPost, secondaryPosts } = getHomeSectionPosts("gaming");
  const allGamingPosts = featuredPost
    ? [featuredPost, ...secondaryPosts]
    : secondaryPosts;

  return (
    <div className="bg-white">
      {/* Category Header Banner */}
      <section className="border-b border-slate-200/80 bg-[linear-gradient(125deg,#eaf2ff_0%,#f4f7ff_48%,#fdf0f7_100%)] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />
            <span className="font-semibold text-[#071a3e]">Gaming</span>
          </nav>

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs">
            <Gamepad2 className="h-3.5 w-3.5" aria-hidden />
            <span>UploadBlog Category</span>
          </div>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071a3e] sm:text-4xl lg:text-5xl">
            Gaming
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Stay up to date with gaming guides, platform insights, useful tips,
            industry developments and practical information for modern players.
          </p>
        </div>
      </section>

      {/* Featured Gaming Section */}
      {featuredPost && (
        <section
          aria-labelledby="featured-gaming-heading"
          className="py-10 sm:py-12"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7">
              <div
                aria-hidden
                className="mb-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              />
              <h2
                id="featured-gaming-heading"
                className="text-2xl font-bold tracking-tight text-[#071a3e] sm:text-3xl"
              >
                Featured Gaming
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
              {/* Left Featured Card */}
              <RevealSection delay={0.05} className="lg:col-span-6">
                <article className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-[0_14px_36px_rgba(15,35,80,0.09)]">
                  <Link
                    href="/blog/top-game-localization-solutions-global-gaming"
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-slate-100">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.imageAlt}
                        fill
                        priority
                        quality={95}
                        sizes="(max-width: 1024px) 100vw, 680px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      />
                    </div>

                    <div className="space-y-3 p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
                        <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                          {featuredPost.category}
                        </span>
                        <span aria-hidden>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" aria-hidden />
                          {featuredPost.date}
                        </span>
                        <span aria-hidden>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" aria-hidden />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold leading-snug tracking-tight text-[#071a3e] transition-colors group-hover:text-blue-600 sm:text-2xl">
                        {featuredPost.title}
                      </h3>

                      <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
                        {featuredPost.excerpt}
                      </p>

                      <div className="pt-1">
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-0.5">
                          <span>Read Article</span>
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              </RevealSection>

              {/* Right Two Smaller Cards */}
              <StaggerContainer className="flex flex-col gap-4 lg:col-span-6">
                {secondaryPosts.map((post) => (
                  <StaggerItem key={post.slug}>
                    <BlogCard post={post} variant="horizontal" />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      )}

      {/* Latest Gaming Articles Section */}
      <section
        aria-labelledby="latest-gaming-heading"
        className="border-t border-slate-100 bg-slate-50/60 py-10 sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div
                aria-hidden
                className="mb-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
              />
              <h2
                id="latest-gaming-heading"
                className="text-2xl font-bold tracking-tight text-[#071a3e] sm:text-3xl"
              >
                Latest Gaming Articles
              </h2>
            </div>

            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold text-blue-700 shadow-xs">
              {allGamingPosts.length} Published Articles
            </span>
          </RevealSection>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allGamingPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} variant="vertical" />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white/80 px-5 py-4 text-center text-sm text-slate-600">
            More Gaming articles will appear here as they are published.
          </div>
        </div>
      </section>
    </div>
  );
}
