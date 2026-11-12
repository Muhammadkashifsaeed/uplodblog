import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, ChevronRight, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection",
  description:
    "Effective Date: August 2025. Read how UploadBlog.com collects, uses, secures, and protects your personal and non-personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy & Data Protection | UploadBlog.com",
    description:
      "Effective Date: August 2025. Read how UploadBlog.com collects, uses, and protects your data.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            <span className="font-semibold text-[#071a3e]">Privacy Policy</span>
          </nav>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              UploadBlog.com
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-xs">
              <Calendar className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              Effective Date: August 2025
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#071a3e] sm:text-4xl">
            Privacy Policy – UploadBlog.com
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">
            At UploadBlog.com, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you visit our website.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-10">
            {/* 1. Information We Collect */}
            <section aria-labelledby="policy-1" className="space-y-3">
              <h2
                id="policy-1"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                1. Information We Collect
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                When you interact with UploadBlog.com, we may collect the
                following types of information:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>
                  <strong className="font-semibold text-[#071a3e]">
                    Personal Information:
                  </strong>{" "}
                  Name, email address, or other details when you sign up,
                  comment, or contact us.
                </li>
                <li>
                  <strong className="font-semibold text-[#071a3e]">
                    Non-Personal Information:
                  </strong>{" "}
                  Browser type, device information, IP address, and pages you
                  visit (collected automatically via cookies &amp; analytics).
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* 2. How We Use Your Information */}
            <section aria-labelledby="policy-2" className="space-y-3">
              <h2
                id="policy-2"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                2. How We Use Your Information
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                We use collected data for:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>Improving site performance and user experience.</li>
                <li>Responding to inquiries and providing support.</li>
                <li>
                  Sending newsletters, updates, and promotions (only if you
                  opt-in).
                </li>
                <li>
                  Protecting our website from fraud or unauthorized activities.
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* 3. Cookies & Tracking */}
            <section aria-labelledby="policy-3" className="space-y-3">
              <h2
                id="policy-3"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                3. Cookies &amp; Tracking
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                UploadBlog.com uses cookies and similar tracking technologies to
                enhance your browsing experience.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>
                  Cookies help us analyze traffic, remember user preferences,
                  and deliver personalized content.
                </li>
                <li>
                  You may disable cookies in your browser settings, but some
                  features may not function properly.
                </li>
              </ul>
            </section>

            <hr className="border-slate-100" />

            {/* 4. Third-Party Services */}
            <section aria-labelledby="policy-4" className="space-y-3">
              <h2
                id="policy-4"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                4. Third-Party Services
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                We may use trusted third-party services (e.g., Google Analytics,
                advertising partners, or affiliate networks). These providers may
                collect certain information under their own privacy policies.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 5. Data Security */}
            <section aria-labelledby="policy-5" className="space-y-3">
              <h2
                id="policy-5"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                5. Data Security
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                We take reasonable measures to secure your personal
                information. However, no online transmission is 100% secure, and
                we cannot guarantee absolute protection.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 6. Your Rights */}
            <section aria-labelledby="policy-6" className="space-y-3">
              <h2
                id="policy-6"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                6. Your Rights
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700 sm:text-base">
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of email communications.</li>
                <li>Request information about how your data is used.</li>
              </ul>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                For data requests, contact us at{" "}
                <a
                  href="mailto:admin@uploadblog.com"
                  className="font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
                >
                  admin@uploadblog.com
                </a>
                .
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 7. Children's Privacy */}
            <section aria-labelledby="policy-7" className="space-y-3">
              <h2
                id="policy-7"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                7. Children’s Privacy
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                UploadBlog.com is not intended for children under the age of 13.
                We do not knowingly collect personal information from minors.
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 8. Updates to This Policy */}
            <section aria-labelledby="policy-8" className="space-y-3">
              <h2
                id="policy-8"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                8. Updates to This Policy
              </h2>
              <p className="text-sm leading-7 text-slate-700 sm:text-base">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated “Effective Date.”
              </p>
            </section>

            <hr className="border-slate-100" />

            {/* 9. Contact Us */}
            <section
              aria-labelledby="policy-9"
              className="rounded-2xl border border-blue-100 bg-slate-50/80 p-5 sm:p-6"
            >
              <h2
                id="policy-9"
                className="text-xl font-bold tracking-tight text-[#071a3e] sm:text-2xl"
              >
                9. Contact Us
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                For questions about this Privacy Policy, contact us at:{" "}
                <a
                  href="mailto:admin@uploadblog.com"
                  className="inline-flex items-center gap-1.5 font-semibold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  admin@uploadblog.com
                </a>
              </p>

              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#0ea5e9] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110"
                >
                  <span>Contact Us Now</span>
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
