"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import {
  BRAND_BADGES,
  FOOTER_BOTTOM_LINKS,
  FOOTER_EXPLORE_LINKS,
  FOOTER_QUICK_LINKS,
  SITE_CONFIG,
} from "@/lib/constants";
import logoImg from "@/public/images/logo.png";

export function Footer() {
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExploreClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      scrollToTop();
    }
  };

  return (
    <footer className="relative w-full bg-[linear-gradient(135deg,#041638_0%,#062863_52%,#041a46_100%)] text-white">
      {/* Top decorative 4-color gradient line */}
      <div
        aria-hidden
        className="h-[3px] w-full bg-[linear-gradient(90deg,#22d3ee_0%,#8b5cf6_34%,#ec4899_68%,#f97316_100%)]"
      />

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 - Brand Section */}
          <div className="space-y-5 lg:col-span-4">
            <Link
              href="/"
              aria-label="UploadBlog.com Home"
              className="inline-flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Image
                src={logoImg}
                alt="UploadBlog.com"
                quality={95}
                sizes="(max-width: 640px) 185px, 215px"
                className="h-9 w-auto object-contain sm:h-10 lg:h-[42px]"
              />
            </Link>

            <p className="max-w-sm text-sm leading-6 text-slate-200/85">
              {SITE_CONFIG.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {BRAND_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow UploadBlog on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#1877F2] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <FaFacebookF className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow UploadBlog on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#f58529_0%,#dd2a7b_50%,#8134af_100%)] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <FaInstagram className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Column 2 - Explore */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold tracking-tight text-white">
              Explore
            </h2>
            <div
              aria-hidden
              className="mt-2 h-[2.5px] w-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
            <ul className="mt-5 space-y-3">
              {FOOTER_EXPLORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-slate-200/85 transition-colors duration-150 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold tracking-tight text-white">
              Quick Links
            </h2>
            <div
              aria-hidden
              className="mt-2 h-[2.5px] w-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
            />
            <ul className="mt-5 space-y-3">
              {FOOTER_QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-slate-200/85 transition-colors duration-150 hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Discover More Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md shadow-[0_12px_32px_rgba(2,10,30,0.3)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
                DISCOVER MORE
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-white">
                Useful answers without the noise.
              </h3>
              <p className="mt-2.5 text-sm leading-6 text-slate-200/85">
                Explore the latest guides, comparisons and explainers across the
                topics modern readers care about most.
              </p>
              <Link
                href="/"
                onClick={handleExploreClick}
                className="group mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(14,165,233,0.45)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>Explore UploadBlog</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-start justify-between gap-4 pr-14 text-xs text-slate-300 sm:flex-row sm:items-center sm:text-sm xl:pr-0">
            <p>© 2026 UploadBlog.com. All rights reserved.</p>
            <nav
              aria-label="Legal and support"
              className="flex flex-wrap items-center gap-5"
            >
              {FOOTER_BOTTOM_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 transition-colors hover:text-cyan-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
        className="fixed right-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#38bdf8] via-[#2563eb] to-[#1d4ed8] text-white shadow-[0_8px_24px_rgba(37,99,235,0.5)] ring-1 ring-white/25 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 cursor-pointer"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </button>
    </footer>
  );
}
