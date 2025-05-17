import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Background from "./components/Background";
import ThemeProvider from "./theme/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://www.greenhousewebdesigns.com"),
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
      url: "https://www.greenhousewebdesigns.com",
      type: "website",
      title: "Greenhouse Web Designs",
      description:
        "Custom websites built for growth. Fast, modern, and responsive solutions for small businesses and individuals.",
      images: [
        {
          url: "https://www.greenhousewebdesigns.com/webdesign.webp",
          width: 768,
          height: 510,
          alt: "Web Design",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      domain: "www.greenhousewebdesigns.com",
      url: "https://www.greenhousewebdesigns.com",
      title: "Greenhouse Web Designs",
      description:
        "Custom websites built for growth. Fast, modern, and responsive solutions for small businesses and individuals.",
      images: [
        {
          url: "https://www.greenhousewebdesigns.com/webdesign.webp",
          width: 768,
          height: 510,
          alt: "Web Design",
        },
      ],
    },
    publishedTime: "2025-05-12",
  };
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Greenhouse Web Designs" />
        <meta
          property="og:description"
          content="Custom websites built for growth."
        />
        <meta
          property="og:image"
          content="https://www.greenhousewebdesigns.com/webdesign.webp"
        />
        <meta
          property="og:url"
          content="https://www.greenhousewebdesigns.com"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Greenhouse Web Designs" />
        <meta
          name="twitter:description"
          content="Custom websites built for growth."
        />
        <meta
          name="twitter:image"
          content="https://www.greenhousewebdesigns.com/webdesign.webp"
        />
      </Head>
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
    </>
  );
}
