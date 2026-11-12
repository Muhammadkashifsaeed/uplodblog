import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_CONFIG } from "@/lib/constants";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1.0 },
  { path: "/blog", changeFrequency: "daily", priority: 0.9 },
  { path: "/ai-tools", changeFrequency: "weekly", priority: 0.85 },
  { path: "/technology-gadgets", changeFrequency: "weekly", priority: 0.85 },
  { path: "/gaming", changeFrequency: "weekly", priority: 0.85 },
  { path: "/business-finance", changeFrequency: "weekly", priority: 0.85 },
  { path: "/health-lifestyle", changeFrequency: "weekly", priority: 0.8 },
  { path: "/reviews-how-to", changeFrequency: "weekly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.4 },
];

const CATEGORY_SLUGS = [
  "account-management",
  "ai",
  "ai-tools",
  "animal-care-farming",
  "automotive-trailer-security",
  "beauty-skincare",
  "blog",
  "business-finance",
  "gaming-guides",
  "health-tips",
  "service",
  "technology-gadgets",
  "video-production",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url.replace(/\/+$/, "");
  const lastModified = new Date("2026-11-12T00:00:00.000Z");

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const categoryEntries: MetadataRoute.Sitemap = CATEGORY_SLUGS.map(
    (slug) => ({
      url: `${baseUrl}/category/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const postEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...categoryEntries, ...postEntries];
}

