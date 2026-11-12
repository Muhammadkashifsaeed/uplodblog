import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion-wrapper";
import { BlogCard } from "@/components/home/blog-card";
import { BLOG_POSTS, getPostsByCategory } from "@/lib/blog-data";
import type { BlogCategorySlug } from "@/types";

interface TopicSectionProps {
  badge: string;
  title: string;
  description: string;
  highlights: readonly { title: string; summary: string }[];
  categorySlug?: BlogCategorySlug;
  ctaHref?: string;
  ctaLabel?: string;
}

export function TopicPageView({
  badge,
  title,
  description,
  highlights,
  categorySlug,
  ctaHref = "/blog",
  ctaLabel = "Browse All Guides",
}: TopicSectionProps) {
  const categoryPosts = categorySlug ? getPostsByCategory(categorySlug) : [];
  const displayedPosts =
    categoryPosts.length > 0 ? categoryPosts : BLOG_POSTS.slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div>
        <FadeIn>
          <Badge variant="accent">{badge}</Badge>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#071a3e] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            {description}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="flex h-full flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-base text-[#071a3e]">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.summary}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
                  >
                    <span>{ctaLabel}</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <section aria-labelledby="category-articles-heading">
        <div className="mb-5 flex items-center justify-between">
          <h2
            id="category-articles-heading"
            className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
          >
            {categoryPosts.length > 0 ? `Latest in ${badge}` : "Featured Guides"}
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} variant="vertical" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
