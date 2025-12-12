import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Đăng ký Affiliate | BowlanCloud',
  description: 'Trở thành đối tác affiliate BowlanCloud, nhận hoa hồng khi giới thiệu VPS, Cloud Server, Proxy và Anti-DDoS.',
  alternates: {
    canonical: `${siteUrl}/pages/affiliate`,
  },
  openGraph: {
    title: 'Đăng ký Affiliate | BowlanCloud',
    description: 'Chương trình affiliate BowlanCloud: hoa hồng hấp dẫn cho đối tác giới thiệu dịch vụ.',
    url: `${siteUrl}/pages/affiliate`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-affiliate.jpg`,
        width: 1200,
        height: 630,
        alt: 'Affiliate BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đăng ký Affiliate | BowlanCloud',
    description: 'Tham gia affiliate BowlanCloud và nhận hoa hồng từ VPS/Cloud/Proxy/Anti-DDoS.',
    images: [`${siteUrl}/og-affiliate.jpg`],
  },
};
