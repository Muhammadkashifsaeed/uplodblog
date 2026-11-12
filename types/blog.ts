import type { StaticImageData } from "next/image";

export type BlogCategorySlug =
  | "ai-tools"
  | "technology-gadgets"
  | "gaming"
  | "business-finance"
  | "health-lifestyle"
  | "reviews-how-to"
  | "video-production"
  | "service"
  | "blog"
  | "health-tips"
  | "gaming-guides";

export interface BlogArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: BlogCategorySlug;
  tags: BlogCategorySlug[];
  date: string;
  readTime: string;
  author: string;
  image: StaticImageData;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  featured?: boolean;
  homeSection?: BlogCategorySlug;
  sections: BlogArticleSection[];
}

export interface HeroCategoryItem {
  number: string;
  title: string;
  subtitle: string;
  href: string;
  categorySlug: BlogCategorySlug;
}
