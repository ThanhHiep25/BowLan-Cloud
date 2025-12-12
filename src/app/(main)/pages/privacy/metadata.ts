import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlancloud.com';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật | BOWLAN Cloud',
  description:
    'Chính sách bảo mật của BOWLAN Cloud - Cam kết bảo vệ thông tin và quyền riêng tư của khách hàng với công nghệ mã hóa AES-256 và giám sát 24/7.',
  keywords: [
    'chính sách bảo mật',
    'bảo mật dữ liệu',
    'quyền riêng tư',
    'bảo vệ thông tin',
    'BOWLAN',
  ],
  openGraph: {
    type: 'website',
    url: `${siteUrl}/pages/privacy`,
    title: 'Chính Sách Bảo Mật | BOWLAN Cloud',
    description:
      'Chính sách bảo mật của BOWLAN Cloud - Cam kết bảo vệ thông tin và quyền riêng tư của khách hàng.',
    siteName: 'BOWLAN Cloud',
    images: [
      {
        url: `${siteUrl}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'BOWLAN Cloud - Chính Sách Bảo Mật',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bowlancloud',
    title: 'Chính Sách Bảo Mật | BOWLAN Cloud',
    description:
      'Chính sách bảo mật của BOWLAN Cloud - Cam kết bảo vệ thông tin và quyền riêng tư.',
    images: [`${siteUrl}/og-cover.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
