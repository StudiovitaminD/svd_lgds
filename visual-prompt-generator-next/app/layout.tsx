import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visual Prompt Studio · Learn Geeta",
  description: "Build complete visual prompts with Learn Geeta brand DNA.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
