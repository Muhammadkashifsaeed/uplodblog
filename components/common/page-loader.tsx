"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import logoImg from "@/public/images/logo.png";

const PageLoaderContext = React.createContext<boolean>(true);

export function usePageReady(): boolean {
  return React.useContext(PageLoaderContext);
}

export function PageLoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = React.useState(true);
  const [pageReady, setPageReady] = React.useState(false);

  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealTimer = window.setTimeout(
      () => {
        setVisible(false);
        setPageReady(true);
      },
      prefersReducedMotion ? 80 : 820
    );

    return () => {
      window.clearTimeout(revealTimer);
    };
  }, []);

  return (
    <PageLoaderContext.Provider value={pageReady}>
      <AnimatePresence>
        {visible && (
          <motion.div
            key="site-loader"
            role="status"
            aria-live="polite"
            aria-label="Loading UploadBlog.com"
            initial={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -28,
              transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
            }}
            className="pointer-events-none fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#041638_0%,#062863_52%,#041a46_100%)] px-6 text-white"
          >
            {/* Ambient Decorative Glows */}
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
            />
            <motion.div
              aria-hidden
              animate={{ scale: [1.1, 0.96, 1.1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-96 w-96 rounded-full bg-purple-500/15 blur-3xl"
            />

            <div className="relative flex flex-col items-center text-center">
              {/* Logo Reveal */}
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={logoImg}
                  alt="UploadBlog.com"
                  priority
                  quality={95}
                  sizes="260px"
                  className="h-11 w-auto object-contain drop-shadow-[0_10px_28px_rgba(56,189,248,0.3)] sm:h-13"
                />
              </motion.div>

              {/* Animated Gradient Progress Track Below Logo */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.32, delay: 0.12 }}
                className="mt-6 w-56 sm:w-64"
              >
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15 p-[1px] ring-1 ring-white/10">
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full rounded-full bg-[linear-gradient(90deg,#22d3ee_0%,#38bdf8_38%,#8b5cf6_72%,#ec4899_100%)] shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  />
                </div>

                {/* Animated Bouncing Dots + Tagline */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium tracking-wide text-slate-200/85">
                  <div className="flex items-center gap-1" aria-hidden>
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
                        transition={{
                          duration: 0.72,
                          repeat: Infinity,
                          delay: dot * 0.14,
                          ease: "easeInOut",
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                      />
                    ))}
                  </div>
                  <span>Trusted Knowledge Magazine</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </PageLoaderContext.Provider>
  );
}
