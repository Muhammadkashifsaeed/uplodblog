import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { formatSeoDescription, formatSeoTitle } from "@/lib/seo";
import {
  getAllBlogSlugs,
  getCategoryHref,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog-data";
import { FadeIn, RevealSection } from "@/components/common/motion-wrapper";
import { BlogCard } from "@/components/home/blog-card";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  const seoTitle = formatSeoTitle(post.title);
  const seoDescription = formatSeoDescription(post.excerpt);

  return {
    title: {
      absolute: seoTitle,
    },
    description: seoDescription,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: seoDescription,
      url: `/blog/${post.slug}`,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image.src,
          width: post.image.width,
          height: post.image.height,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [post.image.src],
    },
  };
}

function BlogDetailSkeleton() {
  return (
    <div className="mt-6 animate-pulse space-y-6">
      <div className="h-6 w-40 rounded-full bg-slate-200" />
      <div className="h-10 w-3/4 rounded-xl bg-slate-200" />
      <div className="h-5 w-full rounded-lg bg-slate-100" />
      <div className="aspect-video w-full rounded-2xl bg-slate-200" />
      <div className="space-y-3 pt-4">
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-5/6 rounded bg-slate-100" />
        <div className="h-4 w-4/6 rounded bg-slate-100" />
      </div>
    </div>
  );
}

async function BlogArticleContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.categorySlug, 3);
  const baseUrl = SITE_CONFIG.url.replace(/\/+$/, "");

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}${post.image.src}`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "UploadBlog.com",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Header */}
      <FadeIn>
        <header className="mt-6 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={getCategoryHref(post.categorySlug)}
              className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 hover:bg-blue-100"
            >
              {post.category}
            </Link>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
              <Calendar className="h-4 w-4" aria-hidden />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
              <Clock className="h-4 w-4" aria-hidden />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
              <User className="h-4 w-4" aria-hidden />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#071a3e] sm:text-4xl">
            {post.title}
          </h1>

          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            {post.excerpt}
          </p>
        </header>
      </FadeIn>

      {/* Featured Image */}
      <div
        className={`relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm ${
          post.imageFit === "contain" ? "bg-white p-4" : "bg-slate-100"
        }`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          quality={95}
          sizes="(max-width: 896px) 100vw, 896px"
          className={
            post.imageFit === "contain" ? "object-contain p-2" : "object-cover"
          }
        />
      </div>

      {/* Full Article Body */}
      <div className="mt-8 space-y-8 border-b border-slate-200 pb-10">
        {post.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-slate-700">
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7 text-slate-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <RevealSection>
          <section
            aria-labelledby="related-articles-heading"
            className="pt-10"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2
                id="related-articles-heading"
                className="text-2xl font-bold tracking-tight text-[#071a3e]"
              >
                Related Articles
              </h2>
              <Link
                href="/blog"
                className="text-sm font-semibold text-blue-600 hover:underline"
              >
                View All Articles
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} variant="vertical" />
              ))}
            </div>
          </section>
        </RevealSection>
      )}
    </>
  );
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return (
    <article className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          <span>Back to Blog</span>
        </Link>

        <Suspense fallback={<BlogDetailSkeleton />}>
          <BlogArticleContent params={params} />
        </Suspense>
      </div>
    </article>
  );
}
