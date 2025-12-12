import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Blog BowlanCloud | Kiến thức VPS, Cloud, Proxy, Anti-DDoS',
  description:
    'Bài viết hướng dẫn quản trị VPS, bảo mật server, tối ưu Cloud NVMe, Proxy và giải pháp Anti-DDoS.',
  alternates: {
    canonical: `${siteUrl}/pages/blog`,
  },
  openGraph: {
    title: 'Blog BowlanCloud | Kiến thức VPS, Cloud, Proxy, Anti-DDoS',
    description:
      'Tổng hợp kiến thức vận hành VPS, Cloud Server, Proxy, Anti-DDoS và tin tức khuyến mãi mới nhất.',
    url: `${siteUrl}/pages/blog`,
    siteName: 'BowlanCloud',
    type: 'article',
    images: [
      {
        url: `${siteUrl}/og-blog.jpg`,
        width: 1200,
        height: 630,
        alt: 'Blog VPS Cloud Proxy Anti-DDoS BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog BowlanCloud | Kiến thức VPS, Cloud, Proxy, Anti-DDoS',
    description:
      'Chia sẻ kinh nghiệm vận hành VPS/Cloud, bảo mật, tối ưu hiệu năng và chống DDoS.',
    images: [`${siteUrl}/og-blog.jpg`],
  },
};
