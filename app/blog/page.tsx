import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { BlogUpdatesHero } from "@/components/blog/blog-updates-hero";
import {
  RevealSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion-wrapper";
import { getBlogUpdatesArchivePosts, getPostBySlug } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Latest Blog Articles, News & Guides",
  description:
    "Read fresh stories, research-backed guides, tech updates, AI workflows, gaming coverage, and business insights on UploadBlog.com.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Latest Blog Articles, News & Guides | UploadBlog.com",
    description:
      "Read fresh stories, research-backed guides, tech updates, AI workflows, gaming coverage, and business insights on UploadBlog.com.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const latestPost = getPostBySlug(
    "video-production-melbourne-weather-outdoor-shoots"
  );
  const archivePosts = getBlogUpdatesArchivePosts();

  return (
    <div className="bg-white">
      <BlogUpdatesHero />

      <section
        aria-labelledby="latest-posts-heading"
        className="py-10 sm:py-12"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealSection className="mb-7">
            <div
              aria-hidden
              className="mb-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
            <h2
              id="latest-posts-heading"
              className="text-2xl font-bold tracking-tight text-[#071a3e] sm:text-3xl"
            >
              Latest Posts
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
              Fresh articles and updates recently published on uploadblog.com.
            </p>
          </RevealSection>

          {latestPost && (
            <RevealSection delay={0.05}>
              <article className="group overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/90 hover:shadow-[0_16px_40px_rgba(15,35,80,0.09)]">
                <div className="grid items-center lg:grid-cols-12">
                  {/* Left Big Image */}
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="relative aspect-video w-full overflow-hidden bg-slate-100 lg:col-span-6 lg:h-full"
                  >
                    <Image
                      src={latestPost.image}
                      alt={latestPost.imageAlt}
                      fill
                      priority
                      quality={95}
                      sizes="(max-width: 1024px) 100vw, 680px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </Link>

                {/* Right Article Details */}
                <div className="flex flex-col justify-center space-y-4 p-6 sm:p-8 lg:col-span-6">
                  <div>
                    <Link
                      href={`/category/${latestPost.categorySlug}`}
                      className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 transition-colors hover:bg-blue-100"
                    >
                      {latestPost.category}
                    </Link>
                  </div>

                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                  >
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-[#071a3e] transition-colors group-hover:text-blue-600 sm:text-2xl">
                      {latestPost.title}
                    </h3>
                  </Link>

                  <p className="text-sm leading-6 text-slate-600 sm:text-base">
                    {latestPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-medium text-slate-500 sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#071a3e]">
                      <User className="h-3.5 w-3.5 text-blue-600" aria-hidden />
                      By {latestPost.author}
                    </span>
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" aria-hidden />
                      {latestPost.date}
                    </span>
                    <span aria-hidden>•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {latestPost.readTime}
                    </span>
                  </div>

                  <div className="pt-1">
                    <Link
                      href={`/blog/${latestPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-all hover:text-blue-700 group-hover:translate-x-0.5"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
            </RevealSection>
          )}

          {/* Editorial Blog Grid (9 Articles) */}
          <StaggerContainer className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {archivePosts.map((post) => (
              <StaggerItem key={post.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-[0_14px_34px_rgba(15,35,80,0.09)]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className={`relative aspect-video w-full overflow-hidden border-b border-slate-100 ${
                      post.imageFit === "contain"
                        ? "bg-white p-2"
                        : "bg-slate-100"
                    }`}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      quality={95}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                      className={`${
                        post.imageFit === "contain"
                          ? "object-contain p-1"
                          : "object-cover"
                      } transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div>
                      <Link
                        href={`/category/${post.categorySlug}`}
                        className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700 transition-colors hover:bg-blue-100"
                      >
                        {post.category}
                      </Link>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <h3 className="text-lg font-bold leading-snug tracking-tight text-[#071a3e] transition-colors group-hover:text-blue-600">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="mt-2.5 line-clamp-3 text-sm leading-6 text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-4">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-slate-100 pt-3.5 text-xs font-medium text-slate-500">
                        <span className="inline-flex items-center gap-1 font-semibold text-[#071a3e]">
                          <User className="h-3.5 w-3.5 text-blue-600" aria-hidden />
                          By {post.author}
                        </span>
                        <span aria-hidden>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" aria-hidden />
                          {post.date}
                        </span>
                        <span aria-hidden>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" aria-hidden />
                          {post.readTime}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-blue-600 transition-all hover:text-blue-700 group-hover:translate-x-0.5"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
