import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import type { BlogPost } from "@/types";
import { cn } from "@/utils";

interface BlogCardProps {
  post: BlogPost;
  variant?: "horizontal" | "vertical";
  className?: string;
}

export function BlogCard({
  post,
  variant = "horizontal",
  className,
}: BlogCardProps) {
  if (variant === "vertical") {
    return (
      <article
        className={cn(
          "group h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/90 hover:shadow-[0_14px_34px_rgba(15,35,80,0.09)]",
          className
        )}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <div
            className={`relative aspect-video w-full overflow-hidden ${
              post.imageFit === "contain" ? "bg-white p-2" : "bg-slate-100"
            }`}
          >
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              quality={92}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
              className={`${
                post.imageFit === "contain"
                  ? "object-contain p-1"
                  : "object-cover"
              } transition-transform duration-500 ease-out group-hover:scale-[1.04]`}
            />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                <Calendar className="h-3 w-3" aria-hidden />
                {post.date}
              </span>
            </div>

            <h3 className="mt-2.5 text-lg font-bold leading-snug tracking-tight text-[#071a3e] transition-colors duration-200 group-hover:text-blue-600">
              {post.title}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
              {post.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/90 hover:shadow-[0_14px_30px_rgba(15,35,80,0.09)]",
        className
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="grid grid-cols-1 items-center gap-4 p-3.5 sm:grid-cols-[188px_1fr] sm:p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            quality={92}
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        </div>

        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
              <Calendar className="h-3 w-3" aria-hidden />
              {post.date}
            </span>
          </div>

          <h3 className="line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-[#071a3e] transition-colors duration-200 group-hover:text-blue-600 sm:text-base">
            {post.title}
          </h3>

          <p className="line-clamp-2 text-xs leading-5 text-slate-600 sm:text-[13px]">
            {post.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}

