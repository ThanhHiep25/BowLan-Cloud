import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Đối tác & dịch vụ BowlanCloud',
  description: 'Thông tin hợp tác, liên kết dịch vụ và ưu đãi dành cho đối tác BowlanCloud.',
  alternates: {
    canonical: `${siteUrl}/pages/partners`,
  },
  openGraph: {
    title: 'Đối tác & dịch vụ BowlanCloud',
    description: 'Chương trình hợp tác, affiliate và ưu đãi dành cho đối tác BowlanCloud.',
    url: `${siteUrl}/pages/partners`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-partners.jpg`,
        width: 1200,
        height: 630,
        alt: 'Đối tác BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đối tác & dịch vụ BowlanCloud',
    description: 'Ưu đãi và liên kết dành cho đối tác BowlanCloud.',
    images: [`${siteUrl}/og-partners.jpg`],
  },
};
