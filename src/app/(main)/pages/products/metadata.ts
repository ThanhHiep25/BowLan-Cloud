import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Bảng giá VPS, Cloud Server, Proxy | BowlanCloud',
  description:
    'Bảng giá thuê VPS, Cloud Server NVMe, Proxy, Anti-DDoS mới nhất. Giá từ 80k/tháng, uptime 99.9%, hỗ trợ 24/7.',
  alternates: {
    canonical: `${siteUrl}/pages/products`,
  },
  openGraph: {
    title: 'Bảng giá VPS, Cloud Server, Proxy | BowlanCloud',
    description:
      'Thuê VPS, Cloud Server NVMe, Proxy và Anti-DDoS với hạ tầng Tier 3, giá minh bạch, không phí ẩn.',
    url: `${siteUrl}/pages/products`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-products.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bảng giá VPS Cloud Proxy BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng giá VPS, Cloud Server, Proxy | BowlanCloud',
    description:
      'Giá thuê VPS, Cloud Server NVMe, Proxy, Anti-DDoS cập nhật liên tục, hỗ trợ 24/7.',
    images: [`${siteUrl}/og-products.jpg`],
  },
};
