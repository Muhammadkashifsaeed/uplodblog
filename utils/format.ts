/**
 * Formats an ISO date string or Date object into a human-readable string.
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }
): string {
  const parsed = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat("en-US", options).format(parsed);
}

/**
 * Truncates text to a maximum length and appends an ellipsis if needed.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength)).trimEnd()}...`;
}

