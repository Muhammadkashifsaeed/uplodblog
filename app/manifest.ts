import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UploadBlog.com",
    short_name: "UploadBlog",
    description:
      "Trusted guides, reviews, and practical insights on AI tools, technology, gaming, business, finance, and everyday life.",
    start_url: "/",
    display: "standalone",
    background_color: "#041638",
    theme_color: "#062863",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

