import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getHomeSectionPosts } from "@/lib/blog-data";
import type { BlogCategorySlug } from "@/types";
import {
  RevealSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion-wrapper";
import { BlogCard } from "@/components/home/blog-card";
import { FeaturedBlogCard } from "@/components/home/featured-blog-card";

interface FeaturedCategorySectionProps {
  sectionLabel?: string;
  title: string;
  viewAllLabel: string;
  viewAllHref: string;
  categorySlug: BlogCategorySlug;
}

export function FeaturedCategorySection({
  sectionLabel = "FEATURED CATEGORY",
  title,
  viewAllLabel,
  viewAllHref,
  categorySlug,
}: FeaturedCategorySectionProps) {
  const { featuredPost, secondaryPosts } = getHomeSectionPosts(categorySlug);

  if (!featuredPost) return null;

  const headingId = `featured-${categorySlug}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-slate-100 bg-white py-10 first:border-t-0 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealSection className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
              {sectionLabel}
            </p>
            <div
              aria-hidden
              className="mt-2 h-[3px] w-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
            <h2
              id={headingId}
              className="mt-2.5 text-2xl font-bold tracking-tight text-[#071a3e] sm:text-3xl"
            >
              {title}
            </h2>
          </div>

          <Link
            href={viewAllHref}
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-[#071a3e] transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </RevealSection>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <RevealSection delay={0.05} className="lg:col-span-6">
            <FeaturedBlogCard post={featuredPost} />
          </RevealSection>

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
  );
}
