import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageLoaderProvider } from "@/components/common/page-loader";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteBaseUrl = (() => {
  try {
    return new URL(SITE_CONFIG.url);
  } catch {
    return new URL("https://uploadblog.com");
  }
})();

export const metadata: Metadata = {
  metadataBase: siteBaseUrl,
  title: {
    default: "UploadBlog.com – Trusted Tech, AI & Business Guides",
    template: "%s | UploadBlog.com",
  },
  description:
    "Explore research-backed guides, clear reviews, and practical insights on AI tools, technology, gaming, business, finance, and everyday life.",
  applicationName: "UploadBlog.com",
  keywords: [
    "UploadBlog",
    "AI Tools",
    "Technology & Gadgets",
    "Gaming Guides",
    "Business & Finance",
    "Product Reviews",
    "How-To Guides",
  ],
  authors: [{ name: "UploadBlog Editorial Team", url: siteBaseUrl.origin }],
  creator: "UploadBlog.com",
  publisher: "UploadBlog.com",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "UploadBlog.com",
    title: "UploadBlog.com – Trusted Tech, AI & Business Guides",
    description:
      "Explore research-backed guides, clear reviews, and practical insights on AI tools, technology, gaming, business, finance, and everyday life.",
    images: [
      {
        url: "/images/Best-AI-tools-for-small-business-1024x576.jpg",
        width: 1024,
        height: 576,
        alt: "UploadBlog.com – Trusted Knowledge Magazine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UploadBlog.com – Trusted Tech, AI & Business Guides",
    description:
      "Explore research-backed guides, clear reviews, and practical insights on AI tools, technology, gaming, business, finance, and everyday life.",
    images: ["/images/Best-AI-tools-for-small-business-1024x576.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "UploadBlog.com",
        url: siteBaseUrl.origin,
        logo: `${siteBaseUrl.origin}/images/logo.png`,
        sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.instagram],
      },
      {
        "@type": "WebSite",
        name: "UploadBlog.com",
        url: siteBaseUrl.origin,
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteBaseUrl.origin}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <PageLoaderProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PageLoaderProvider>
      </body>
    </html>
  );
}
