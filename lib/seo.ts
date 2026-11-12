/**
 * Formats an article or category title to fit cleanly inside Google's ~50-60 character
 * SERP title limit once the layout suffix (" | UploadBlog.com") is appended.
 */
export function formatSeoTitle(
  rawTitle: string,
  suffix = " | UploadBlog.com",
  maxTotalLength = 60
): string {
  const clean = rawTitle.replace(/\s+/g, " ").trim();
  const maxBodyLength = Math.max(24, maxTotalLength - suffix.length);

  if (clean.length <= maxBodyLength) {
    return `${clean}${suffix}`;
  }

  const slice = clean.slice(0, maxBodyLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed =
    lastSpace > Math.floor(maxBodyLength * 0.55)
      ? slice.slice(0, lastSpace)
      : slice;

  return `${trimmed.replace(/[:;,\-–—]+$/, "").trim()}…${suffix}`;
}

/**
 * Formats a clean meta description inside the optimal ~120-158 character SEO range,
 * stripping editorial ellipsis artifacts like "[…]".
 */
export function formatSeoDescription(
  rawText: string,
  maxLength = 158
): string {
  const clean = rawText
    .replace(/\[…\]|\[\.\.\.\]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (clean.length <= maxLength) {
    return clean;
  }

  const slice = clean.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed =
    lastSpace > Math.floor(maxLength * 0.65)
      ? slice.slice(0, lastSpace)
      : slice;

  return `${trimmed.replace(/[:;,\-–—.]+$/, "").trim()}.`;
}

