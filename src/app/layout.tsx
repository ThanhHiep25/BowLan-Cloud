import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn'),
  title: "BowlanCloud",
  description: "Nền tảng cung cấp dịch vụ VPS, Cloud Server, Proxy và AntiDDoS chuyên nghiệp hàng đầu Việt Nam.",
  icons: {
    icon: "/logo.png",
  },
  creator: "Nguyen Hiep",
  keywords: "BowlanCloud, Cloud Server, VPS, Proxy, Anti-DDoS",
  openGraph: {
    title: "BowlanCloud",
    description: "Nền tảng cung cấp dịch vụ VPS, Cloud Server, Proxy và AntiDDoS chuyên nghiệp hàng đầu Việt Nam.",
    siteName: "BowlanCloud",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bowlan.vn";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BowlanCloud",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Preload hero background images for LCP optimization */}
        <link rel="preload" as="image" href="/bg-nav/photo-1451187580459-43490279c0fa.avif" fetchPriority="high" />
        <link rel="preload" as="image" href="/bg-nav/photo-1518770660439-4636190af475.avif" />
        <link rel="preload" as="image" href="/bg-nav/photo-1550751827-4bd374c3f58b.avif" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <AuthProvider>
          {children}
          <SpeedInsights />
        </AuthProvider>
      </body>
    </html>
  );
}
