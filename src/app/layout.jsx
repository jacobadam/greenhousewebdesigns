import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Background from "./components/Background";
import ThemeProvider from "./theme/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Content Services by Katie Shevlin",
  description:
    "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
  keywords: [
    "freelance editor",
    "freelance writer",
    "SEO",
    "strategy",
    "content strategy",
    "editor",
    "writer",
  ],
  robots: "index, follow",
  author: "Katie Shevlin",
  language: "en",
  canonical: "https://www.katieshevlin.com",
  openGraph: {
    url: "https://www.katieshevlin.com",
    type: "website",
    title: "Content Services by Katie Shevlin",
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
    images: [
      {
        url: "https://www.katieshevlin.com/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "www.katieshevlin.com",
    url: "https://www.katieshevlin.com",
    title: "Content Services by Katie Shevlin",
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
    images: [
      {
        url: "https://www.katieshevlin.com/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Hero Image",
      },
    ],
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Content Services by Katie Shevlin",
    url: "https://www.katieshevlin.com",
    logo: "https://www.katieshevlin.com/logo.webp",
    sameAs: ["https://www.linkedin.com/in/katie-shevlin"],
    description:
      "Professional writing, editing, SEO, and strategy services to elevate your brand. Get expert support to ensure your content has impact and meets your marketing goals.",
  },
  icons: {
    icon: "/ks-logo.ico",
  },
  verification: {
    google: "yvEo-pqgW1kr_MBEKzqV5uFZ7t3DMOv_uLXHsbnBrwk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Nav />
          <main>{children}</main>
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
