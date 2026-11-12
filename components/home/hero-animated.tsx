"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { HeroCategoryItem } from "@/types";
import { usePageReady } from "@/components/common/page-loader";
import { CategoryCard } from "@/components/home/category-card";

interface HeroAnimatedProps {
  trustPoints: readonly string[];
  categories: HeroCategoryItem[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function HeroAnimated({ trustPoints, categories }: HeroAnimatedProps) {
  const isReady = usePageReady();

  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(125deg,#eaf2ff_0%,#f4f7ff_48%,#fdf0f7_100%)]">
      {/* Subtle floating radial glows */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-200/45 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-pink-200/45 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side Content */}
          <div className="space-y-5 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.45, delay: 0.04, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              <span>Trusted Knowledge Magazine</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.11, ease: EASE }}
              className="space-y-3"
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-[#071a3e] sm:text-5xl lg:text-[52px] lg:leading-[1.08]">
                UploadBlog.com
              </h1>
              <p className="text-xl font-bold leading-snug text-[#122b57] sm:text-2xl">
                Insights, Reviews &amp; Guides That Help You Make Better
                Decisions
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.48, delay: 0.18, ease: EASE }}
              className="max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base"
            >
              UploadBlog brings useful research, practical guides and clear
              explanations together in one place, covering technology, business,
              health, lifestyle and the everyday questions readers want answered
              without unnecessary noise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.46, delay: 0.25, ease: EASE }}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <Link
                href="/blog"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-6 text-sm font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_10px_26px_rgba(14,165,233,0.35)] active:scale-[0.98]"
              >
                <span>Explore Articles</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>

              <Link
                href="#categories"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-[#071a3e] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-50/60 hover:text-blue-700"
              >
                Browse Topics
              </Link>
            </motion.div>

            {/* Trust Points */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.44, delay: 0.32, ease: EASE }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-2"
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 sm:text-sm"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Check className="h-3 w-3 stroke-[2.5]" aria-hidden />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right Side Discover Card */}
          <motion.div
            id="categories"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={
              isReady
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 24, scale: 0.97 }
            }
            transition={{ duration: 0.54, delay: 0.16, ease: EASE }}
            className="scroll-mt-24 lg:col-span-6"
          >
            <div className="rounded-3xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_20px_50px_rgba(15,35,80,0.08)] backdrop-blur-sm sm:p-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-600">
                DISCOVER ON UPLOADBLOG
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-[#071a3e] sm:text-[26px]">
                Clear information for the questions that matter.
              </h2>

              <div className="mt-5 divide-y divide-slate-100">
                {categories.map((category, index) => (
                  <motion.div
                    key={category.number}
                    initial={{ opacity: 0, x: 14 }}
                    animate={
                      isReady
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: 14 }
                    }
                    transition={{
                      duration: 0.42,
                      delay: 0.25 + index * 0.07,
                      ease: EASE,
                    }}
                    className="py-1 first:pt-0 last:pb-0"
                  >
                    <CategoryCard category={category} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

