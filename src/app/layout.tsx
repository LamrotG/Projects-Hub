import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { TopBar } from "@/components/top-bar";
import { Footer } from "@/components/footer";
import { getAllProjects } from "@/lib/projects";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projects Hub",
  description:
    "A curated showcase of engineering projects, architecture decisions, and technical case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const projects = getAllProjects();

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TopBar projects={projects} />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
