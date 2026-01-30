import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { PERSONAL_INFO } from "@/lib/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Full-Stack Developer`,
  description: PERSONAL_INFO.intro,
  keywords: [
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "AWS",
    "London",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  openGraph: {
    title: `${PERSONAL_INFO.name} | Full-Stack Developer`,
    description: PERSONAL_INFO.intro,
    url: "/",
    siteName: PERSONAL_INFO.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Full-Stack Developer`,
    description: PERSONAL_INFO.intro,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
