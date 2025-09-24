"use client";

import DOMPurify from "dompurify";
import { Policy } from "../data";

interface PolicyDisplayProps {
  policy: Policy;
}

export default function PolicyDisplay({ policy }: PolicyDisplayProps) {
  // Sanitize the HTML content on the client side to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(policy.content);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center border-b border-border pb-8 mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {policy.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last Updated: {policy.lastUpdated}
          </p>
        </div>

        {/* Rendered HTML Content */}
        <div
          // The `prose` class from @tailwindcss/typography styles the raw HTML
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>
    </section>
  );
}