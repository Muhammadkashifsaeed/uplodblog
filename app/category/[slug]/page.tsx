import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { formatSeoDescription, formatSeoTitle } from "@/lib/seo";
import { BlogExplorer } from "@/components/blog/blog-explorer";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_TITLES: Record<string, string> = {
  "account-management": "Account Management",
  ai: "AI",
  "ai-tools": "AI Tools",
  "animal-care-farming": "Animal Care & Farming",
  "automotive-trailer-security": "Automotive & Trailer Security",
  "beauty-skincare": "Beauty & Skincare",
  blog: "Blog",
  "business-finance": "Business & Finance",
  "gaming-guides": "Gaming Guides",
  "health-tips": "Health Tips",
  service: "Service",
  "technology-gadgets": "Technology & Gadgets",
  "video-production": "Video Production",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_TITLES).map((slug) => ({ slug }));
}

function formatCategoryTitle(slug: string): string {
  if (CATEGORY_TITLES[slug]) return CATEGORY_TITLES[slug];
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = formatCategoryTitle(slug);
  const seoTitle = formatSeoTitle(`${label} Articles & Guides`);
  const seoDescription = formatSeoDescription(
    `Browse helpful ${label} stories, practical guides, reviews, and fresh updates published on UploadBlog.com to help you make informed decisions.`
  );

  return {
    title: {
      absolute: seoTitle,
    },
    description: seoDescription,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `/category/${slug}`,
    },
  };
}

async function CategoryContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const label = formatCategoryTitle(slug);

  const mappedCategory =
    slug === "ai-tools" || slug === "ai"
      ? "ai-tools"
      : slug === "business-finance"
        ? "business-finance"
        : slug === "technology-gadgets"
          ? "technology-gadgets"
          : slug === "video-production"
            ? "video-production"
            : slug === "service"
              ? "service"
              : slug === "blog"
                ? "blog"
                : slug === "health-tips"
                  ? "health-tips"
                  : slug === "gaming-guides"
                    ? "gaming-guides"
                    : "all";

  return (
    <>
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
            <Link
              href="/blog"
              className="transition-colors hover:text-blue-600"
            >
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />
            <span className="font-semibold text-[#071a3e]">{label}</span>
          </nav>

          <p className="mt-4 inline-flex items-center rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs">
            UploadBlog Category
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071a3e] sm:text-4xl">
            {label}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Explore useful articles, guides, and practical resources under{" "}
            {label}.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogExplorer initialCategory={mappedCategory} showCategoryFilter />
        </div>
      </section>
    </>
  );
}

export default function CategorySlugPage({ params }: CategoryPageProps) {
  return (
    <div className="bg-white">
      <Suspense
        fallback={
          <div className="mx-auto max-w-7xl px-4 py-12 text-sm text-slate-500 sm:px-6 lg:px-8">
            Loading category...
          </div>
        }
      >
        <CategoryContent params={params} />
      </Suspense>
    </div>
  );
}
