import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlancloud.com';

export const metadata: Metadata = {
  title: 'Cam Kết Dịch Vụ | BOWLAN Cloud',
  description:
    'Cam kết dịch vụ của BOWLAN Cloud - Uptime 99.99%, hỗ trợ 24/7, phần cứng chất lượng cao, và bảo mật tối ưu cho tất cả khách hàng.',
  keywords: [
    'cam kết dịch vụ',
    'uptime 99.99%',
    'hỗ trợ 24/7',
    'chất lượng dịch vụ',
    'BOWLAN',
  ],
  openGraph: {
    type: 'website',
    url: `${siteUrl}/pages/commitment`,
    title: 'Cam Kết Dịch Vụ | BOWLAN Cloud',
    description:
      'Cam kết dịch vụ của BOWLAN Cloud - Uptime 99.99%, hỗ trợ 24/7, phần cứng chất lượng cao.',
    siteName: 'BOWLAN Cloud',
    images: [
      {
        url: `${siteUrl}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'BOWLAN Cloud - Cam Kết Dịch Vụ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bowlancloud',
    title: 'Cam Kết Dịch Vụ | BOWLAN Cloud',
    description:
      'Cam kết dịch vụ của BOWLAN Cloud - Uptime 99.99%, hỗ trợ 24/7.',
    images: [`${siteUrl}/og-cover.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
