import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Background from "./components/Background";
import ThemeProvider from "./theme/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Greenhouse Web Designs",
  description:
    "Custom websites built for growth. Greenhouse Web Designs helps businesses and individuals stand out with fast, modern, and responsive web solutions.",
  keywords: [
    "Web Design",
    "Freelance Web Developer",
    "Custom Websites",
    "Small Business Websites",
    "SEO Optimization",
    "Website Copywriting",
    "Next.js",
    "Responsive Design",
    "Conversion Optimization",
    "User Experience",
    "UI/UX Design",
    "Performance Optimization",
    "Content Strategy",
    "Frontend Development",
    "Full Stack Development",
  ],
  robots: "index, follow",
  author: "Jacob Adam",
  language: "en",
  canonical: "https://www.greenhousewebdesigns.com/",
  openGraph: {
    title: "Greenhouse Web Designs",
    description:
      "Custom websites built for growth. Fast, modern, and responsive solutions for small businesses and individuals.",
    url: "https://www.greenhousewebdesigns.com/",
    siteName: "Greenhouse Web Designs",
    images: [
      {
        url: "https://www.greenhousewebdesigns.com/webdesign.webp",
        width: 1200,
        height: 630,
        alt: "Custom website design and SEO services for growing businesses",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenhouse Web Designs",
    description:
      "Custom websites built for growth. Fast, modern, and responsive solutions for small businesses and individuals.",
    images: ["https://www.greenhousewebdesigns.com/webdesign.webp"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  publishedDate: "2025-05-12",
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
