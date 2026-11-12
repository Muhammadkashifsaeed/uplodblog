import type { Metadata } from "next";
import { Badge, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/motion-wrapper";
import { BRAND_BADGES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us – Our Editorial Mission",
  description:
    "Learn how UploadBlog.com researches, writes, and curates clear, reader-focused guides across AI tools, technology, gaming, and business.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us – Our Editorial Mission | UploadBlog.com",
    description:
      "Learn how UploadBlog.com researches, writes, and curates clear, reader-focused guides across AI, tech, gaming, and business.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <FadeIn>
        <Badge variant="accent">About UploadBlog.com</Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#071a3e] sm:text-4xl">
          Useful answers without the noise.
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600">
          {SITE_CONFIG.description}
        </p>
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-3">
        {BRAND_BADGES.map((principle) => (
          <StaggerItem key={principle}>
            <Card className="h-full transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-[#071a3e]">
                  {principle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">
                  Every guide and comparison is written to help readers make clear,
                  confident everyday decisions.
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}

