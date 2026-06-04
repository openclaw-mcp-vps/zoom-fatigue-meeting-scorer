import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MeetingScore – Score Meetings for Productivity & Fatigue Risk",
  description: "Analyze calendar patterns and meeting characteristics to score fatigue risk and get actionable optimization recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aecab96c-06fa-4484-ae1e-089494ce78bc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
