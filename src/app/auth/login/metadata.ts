import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Đăng nhập | BowlanCloud',
  description: 'Đăng nhập tài khoản BowlanCloud để quản lý Cloud Server, VPS, Proxy và Anti-DDoS.',
  alternates: {
    canonical: `${siteUrl}/auth/login`,
  },
  openGraph: {
    title: 'Đăng nhập | BowlanCloud',
    description: 'Truy cập bảng điều khiển BowlanCloud: Cloud Server, VPS, Proxy, Anti-DDoS.',
    url: `${siteUrl}/auth/login`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-auth.jpg`,
        width: 1200,
        height: 630,
        alt: 'Đăng nhập BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đăng nhập | BowlanCloud',
    description: 'Đăng nhập quản lý dịch vụ BowlanCloud.',
    images: [`${siteUrl}/og-auth.jpg`],
  },
};
