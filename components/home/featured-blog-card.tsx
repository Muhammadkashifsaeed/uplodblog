import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { BlogPost } from "@/types";

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-[0_16px_38px_rgba(15,35,80,0.1)]">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div
          className={`relative aspect-video w-full overflow-hidden rounded-t-2xl ${
            post.imageFit === "contain" ? "bg-white p-3" : "bg-slate-100"
          }`}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            quality={95}
            priority={post.homeSection === "ai-tools"}
            sizes="(max-width: 1024px) 100vw, 680px"
            className={`${
              post.imageFit === "contain" ? "object-contain p-2" : "object-cover"
            } transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                {post.date}
              </span>
            </div>

            <h3 className="text-xl font-bold leading-snug tracking-tight text-[#071a3e] transition-colors duration-200 group-hover:text-blue-600 sm:text-2xl">
              {post.title}
            </h3>

            <p className="text-sm leading-6 text-slate-600 sm:text-[15px]">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

