// Simple HTML sanitizer to prevent XSS attacks while allowing basic HTML tags
export function sanitizeHtml(html: string): string {
  // Remove script tags and event handlers to prevent XSS
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '');
}