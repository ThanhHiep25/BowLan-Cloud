import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Điều Khoản Sử Dụng | BowlanCloud',
  description:
    'Điều khoản sử dụng dịch vụ BOWLAN: quy định, trách nhiệm, thanh toán và chính sách sử dụng Cloud Server, VPS, Proxy, Anti-DDoS.',
  alternates: {
    canonical: `${siteUrl}/pages/terms`,
  },
  openGraph: {
    title: 'Điều Khoản Sử Dụng | BowlanCloud',
    description:
      'Đọc điều khoản và điều kiện sử dụng dịch vụ BOWLAN: Cloud Server, VPS, Proxy, Anti-DDoS.',
    url: `${siteUrl}/pages/terms`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-terms.jpg`,
        width: 1200,
        height: 630,
        alt: 'Điều Khoản Sử Dụng BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Điều Khoản Sử Dụng | BowlanCloud',
    description: 'Điều khoản sử dụng dịch vụ BOWLAN.',
    images: [`${siteUrl}/og-terms.jpg`],
  },
};
