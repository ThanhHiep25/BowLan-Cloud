import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'BowlanCloud | Cloud Server, VPS, Proxy, Anti-DDoS',
  description:
    'BowlanCloud cung cấp Cloud Server NVMe, VPS giá rẻ, Proxy và Anti-DDoS với hạ tầng Tier 3, peering đa hướng và hỗ trợ 24/7.',
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: 'BowlanCloud | Cloud Server, VPS, Proxy, Anti-DDoS',
    description:
      'Hạ tầng cloud NVMe, VPS hiệu năng cao, Proxy riêng tư và giải pháp Anti-DDoS cho web/game.',
    url: `${siteUrl}/`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'BowlanCloud hạ tầng Cloud VPS Proxy Anti-DDoS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BowlanCloud | Cloud Server, VPS, Proxy, Anti-DDoS',
    description:
      'Dịch vụ Cloud Server NVMe, VPS giá rẻ, Proxy và Anti-DDoS với hỗ trợ 24/7.',
    images: [`${siteUrl}/og-cover.jpg`],
  },
};
