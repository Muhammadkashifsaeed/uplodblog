"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { HEADER_NAV_ITEMS, SEARCHABLE_TOPICS } from "@/lib/constants";
import { cn } from "@/utils";
import logoImg from "@/public/images/logo.png";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const headerRef = React.useRef<HTMLElement>(null);

  const isLinkActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  React.useEffect(() => {
    if (!searchOpen) return;
    const focusTimer = setTimeout(() => {
      searchInputRef.current?.focus();
    }, 60);
    return () => clearTimeout(focusTimer);
  }, [searchOpen]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  const filteredTopics = React.useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return SEARCHABLE_TOPICS.slice(0, 5);
    return SEARCHABLE_TOPICS.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = searchQuery.trim();
    setSearchOpen(false);
    setMobileMenuOpen(false);
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  };

  return (
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[linear-gradient(135deg,#041638_0%,#062863_52%,#041a46_100%)] shadow-[0_8px_30px_rgba(2,10,32,0.35)]"
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[92px] lg:px-8">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="UploadBlog.com Home"
            className="flex shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Image
              src={logoImg}
              alt="UploadBlog.com"
              priority
              quality={95}
              sizes="(max-width: 640px) 185px, 215px"
              className="h-9 w-auto object-contain sm:h-10 lg:h-[42px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 xl:gap-3 lg:flex">
            <nav aria-label="Primary" className="flex items-center gap-1 xl:gap-2">
              {HEADER_NAV_ITEMS.map((item) => {
                const active = isLinkActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "group relative px-2.5 py-2 text-[14px] xl:text-[15px] font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md",
                      active ? "text-white" : "text-white/85 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute right-2.5 bottom-0.5 left-2.5 h-[2.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 transition-transform duration-200 origin-left",
                        active
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-80"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setSearchOpen((prev) => !prev)}
              aria-expanded={searchOpen}
              aria-controls="header-search-bar"
              aria-label={searchOpen ? "Close search" : "Open search"}
              className={cn(
                "ml-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer",
                searchOpen
                  ? "border-cyan-400/70 bg-white/15 text-cyan-300"
                  : "border-white/20 bg-white/[0.06] hover:border-cyan-400/60 hover:bg-white/15 hover:text-cyan-300"
              )}
            >
              {searchOpen ? (
                <X className="h-[18px] w-[18px]" aria-hidden />
              ) : (
                <Search className="h-[18px] w-[18px]" aria-hidden />
              )}
            </button>

            <Link
              href="/contact"
              className="ml-1 inline-flex h-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-5 text-sm font-semibold text-white whitespace-nowrap shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(14,165,233,0.45)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen((prev) => !prev);
              }}
              aria-expanded={searchOpen}
              aria-controls="header-search-bar"
              aria-label={searchOpen ? "Close search" : "Open search"}
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-xl border text-white transition-colors cursor-pointer",
                searchOpen
                  ? "border-cyan-400/70 bg-white/15 text-cyan-300"
                  : "border-white/20 bg-white/[0.06] hover:border-cyan-400/60 hover:bg-white/15"
              )}
            >
              {searchOpen ? (
                <X className="h-[18px] w-[18px]" aria-hidden />
              ) : (
                <Search className="h-[18px] w-[18px]" aria-hidden />
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setSearchOpen(false);
                setMobileMenuOpen((prev) => !prev);
              }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] text-white transition-colors hover:border-cyan-400/60 hover:bg-white/15 cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Drawer */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 bg-[#04173a]/95 backdrop-blur-md lg:hidden"
            >
              <nav
                aria-label="Mobile Primary"
                className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
              >
                {HEADER_NAV_ITEMS.map((item) => {
                  const active = isLinkActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors",
                        active
                          ? "bg-white/10 text-white"
                          : "text-white/85 hover:bg-white/[0.06] hover:text-white"
                      )}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span
                          aria-hidden
                          className="h-2 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        />
                      )}
                    </Link>
                  );
                })}

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.4)] transition-all hover:brightness-110"
                >
                  Contact Us
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Header Slide-Down Search Bar */}
        <AnimatePresence initial={false}>
          {searchOpen && (
            <motion.div
              id="header-search-bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/15 bg-[linear-gradient(135deg,#041638_0%,#062863_52%,#041a46_100%)] shadow-[0_14px_30px_rgba(2,10,32,0.35)]"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                <form
                  onSubmit={handleSearchSubmit}
                  className="mx-auto flex max-w-3xl items-center gap-2.5 sm:gap-3"
                >
                  <div className="relative flex-1">
                    <Search
                      className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400 sm:left-4 sm:h-[18px] sm:w-[18px]"
                      aria-hidden
                    />
                    <input
                      ref={searchInputRef}
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Search AI tools, tech, gaming, finance, or guides..."
                      aria-label="Search UploadBlog articles"
                      className="h-11 w-full rounded-xl border border-slate-200/90 bg-white pr-4 pl-10 text-sm font-medium text-[#071a3e] placeholder:text-slate-400 shadow-sm transition-all focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:h-12 sm:pl-11 sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(37,99,235,0.45)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_8px_24px_rgba(14,165,233,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:h-12 sm:gap-2 sm:px-6 cursor-pointer"
                  >
                    <Search className="h-4 w-4" aria-hidden />
                    <span>Search</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search bar"
                    className="inline-flex h-11 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/[0.08] text-white/85 transition-colors hover:border-cyan-400/60 hover:bg-white/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:h-12 sm:w-12 cursor-pointer"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                  </button>
                </form>

                {searchQuery.trim().length > 0 && (
                  <div className="mx-auto mt-3 max-w-3xl overflow-hidden rounded-xl border border-white/15 bg-[#051d49]/95 p-2 shadow-lg">
                    {filteredTopics.length > 0 ? (
                      <ul className="max-h-64 space-y-1 overflow-y-auto">
                        {filteredTopics.map((topic) => (
                          <li key={topic.href}>
                            <Link
                              href={topic.href}
                              onClick={() => setSearchOpen(false)}
                              className="flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 transition-colors hover:bg-white/10"
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium text-white">
                                  {topic.title}
                                </p>
                                <p className="truncate text-xs text-slate-300">
                                  {topic.summary}
                                </p>
                              </div>
                              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/[0.08] px-2.5 py-0.5 text-[11px] font-medium text-cyan-300">
                                {topic.category}
                                <ArrowRight className="h-3 w-3" aria-hidden />
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="px-3 py-3 text-center text-sm text-slate-300">
                        No quick matches. Click <strong className="text-white">Search</strong> to view full results.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
}
