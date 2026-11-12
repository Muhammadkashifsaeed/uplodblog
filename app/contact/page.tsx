import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Mail, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { FadeIn, RevealSection } from "@/components/common/motion-wrapper";
import { DemoContactForm } from "@/components/forms/demo-contact-form";

export const metadata: Metadata = {
  title: "Contact Us – Editorial & Support",
  description:
    "Contact the UploadBlog.com editorial team for article corrections, feedback, advertising inquiries, or content partnerships anytime.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us – Editorial & Support | UploadBlog.com",
    description:
      "Reach the UploadBlog.com team at admin@uploadblog.com or send a message online.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
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
            <span className="font-semibold text-[#071a3e]">Contact Us</span>
          </nav>

          <FadeIn className="mt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/90 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs">
              <MessageSquare className="h-3.5 w-3.5 text-blue-600" aria-hidden />
              Contact UploadBlog.com
            </span>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071a3e] sm:text-4xl">
              Get in touch with UploadBlog.com
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Have a question, editorial feedback, correction request, or
              partnership inquiry? Send us a message below or email our team
              directly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto grid max-w-4xl gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <RevealSection className="lg:col-span-8">
            <Card className="rounded-2xl border-slate-200/90 shadow-xs">
              <CardHeader>
                <CardTitle className="text-xl text-[#071a3e]">
                  Send a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DemoContactForm />
              </CardContent>
            </Card>
          </RevealSection>

          <RevealSection delay={0.08} className="space-y-4 lg:col-span-4">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#071a3e]">
                <Mail className="h-4 w-4 text-blue-600" aria-hidden />
                <span>Direct Email</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                For privacy inquiries, corrections, or editorial submissions:
              </p>
              <a
                href="mailto:admin@uploadblog.com"
                className="mt-2 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                admin@uploadblog.com
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#071a3e]">
                <Clock className="h-4 w-4 text-blue-600" aria-hidden />
                <span>Response Time</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Our team reviews incoming messages Monday through Friday and
                typically responds within 1–2 business days.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
