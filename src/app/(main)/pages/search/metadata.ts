import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Tìm kiếm nội dung | BowlanCloud',
  description: 'Tìm bài viết, dịch vụ VPS, Cloud Server, Proxy và Anti-DDoS trên BowlanCloud.',
  alternates: {
    canonical: `${siteUrl}/pages/search`,
  },
  openGraph: {
    title: 'Tìm kiếm nội dung | BowlanCloud',
    description: 'Tra cứu nhanh bài viết, sản phẩm VPS, Cloud Server, Proxy, Anti-DDoS.',
    url: `${siteUrl}/pages/search`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-search.jpg`,
        width: 1200,
        height: 630,
        alt: 'Tìm kiếm BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tìm kiếm nội dung | BowlanCloud',
    description: 'Tìm kiếm bài viết và dịch vụ trên BowlanCloud.',
    images: [`${siteUrl}/og-search.jpg`],
  },
};
