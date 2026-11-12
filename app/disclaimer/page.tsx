import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  ChevronRight,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial & Affiliate Disclaimer",
  description:
    "Effective Date: August 2025. Review the UploadBlog.com general information, professional advice, affiliate disclosure, and liability terms.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Editorial & Affiliate Disclaimer | UploadBlog.com",
    description:
      "Effective Date: August 2025. Review UploadBlog.com general information, affiliate disclosure, and liability terms.",
    url: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="border-b border-slate-200/80 bg-[linear-gradient(125deg,#eaf2ff_0%,#f4f7ff_48%,#fdf0f7_100%)] py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm"
          >
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />
            <span className="font-semibold text-[#071a3e]">Disclaimer</span>
          </nav>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs">
              <AlertCircle className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              UploadBlog.com
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-xs">
              <Calendar className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              Effective Date: August 2025
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071a3e] sm:text-4xl">
            Disclaimer – UploadBlog.com
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
            The information provided on UploadBlog.com is for general
            informational and educational purposes only. By using our website,
            you acknowledge and agree to the following disclaimers:
          </p>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-10">
            {/* 1. General Information Only */}
            <section aria-labelledby="disclaimer-1" className="space-y-3">
              <h2
                id="disclaimer-1"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                1. General Information Only
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                All content published on UploadBlog.com (articles, guides,
                reviews, and resources) is created for informational purposes.
                While we strive to provide accurate and up-to-date information,
                we make no guarantees about completeness, reliability, or
                accuracy.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 2. Not Professional Advice */}
            <section aria-labelledby="disclaimer-2" className="space-y-3">
              <h2
                id="disclaimer-2"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                2. Not Professional Advice
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                The content on UploadBlog.com should not be considered as:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>Legal advice</li>
                <li>Financial advice</li>
                <li>Medical or health advice</li>
                <li>Professional consultation of any kind</li>
              </ul>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Always seek advice from a qualified professional before making
                decisions based on information from this website.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 3. Affiliate & Advertising Disclosure */}
            <section aria-labelledby="disclaimer-3" className="space-y-3">
              <h2
                id="disclaimer-3"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                3. Affiliate &amp; Advertising Disclosure
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>
                  UploadBlog.com may include affiliate links, sponsored posts, or
                  advertisements.
                </li>
                <li>
                  If you click these links or make a purchase, we may earn a
                  small commission at no extra cost to you.
                </li>
                <li>
                  These partnerships help keep our content free and updated.
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* 4. External Links Disclaimer */}
            <section aria-labelledby="disclaimer-4" className="space-y-3">
              <h2
                id="disclaimer-4"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                4. External Links Disclaimer
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Our website may contain links to external websites that are not
                controlled or maintained by us. We are not responsible for the
                content, accuracy, or privacy practices of third-party websites.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 5. Limitation of Liability */}
            <section aria-labelledby="disclaimer-5" className="space-y-3">
              <h2
                id="disclaimer-5"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                5. Limitation of Liability
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                UploadBlog.com and its team shall not be held responsible for
                any loss, damage, or inconvenience caused by reliance on
                information from this website. Use the information at your own
                risk.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 6. Changes to This Disclaimer */}
            <section aria-labelledby="disclaimer-6" className="space-y-3">
              <h2
                id="disclaimer-6"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                6. Changes to This Disclaimer
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                We may update this Disclaimer from time to time. Updates will be
                reflected with a new Effective Date at the top of this page.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 7. Contact Us */}
            <section
              aria-labelledby="disclaimer-7"
              className="rounded-2xl border border-blue-100 bg-slate-50/80 p-5 sm:p-6"
            >
              <h2
                id="disclaimer-7"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                7. Contact Us
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                If you have any questions regarding this Disclaimer, please
                reach out to us:{" "}
                <a
                  href="mailto:admin@uploadblog.com"
                  className="inline-flex items-center gap-1.5 font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  admin@uploadblog.com
                </a>{" "}
                or by visiting our Contact Us page.
              </p>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110"
                >
                  <span>Visit Contact Us Page</span>
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
