import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroCategoryItem } from "@/types";

interface CategoryCardProps {
  category: HeroCategoryItem;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex items-center justify-between gap-4 rounded-xl px-3 py-3.5 transition-all duration-200 hover:bg-blue-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-xs font-bold tracking-wide text-blue-700 transition-colors group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
          {category.number}.
        </span>
        <div className="min-w-0">
          <h3 className="text-[15px] font-bold leading-snug text-[#071a3e] transition-colors group-hover:text-blue-700">
            {category.title}
          </h3>
          <p className="mt-0.5 truncate text-xs text-slate-500 sm:text-[13px]">
            {category.subtitle}
          </p>
        </div>
      </div>

      <ArrowRight
        className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600"
        aria-hidden
      />
    </Link>
  );
}

