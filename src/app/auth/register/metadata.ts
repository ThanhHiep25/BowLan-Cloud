import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Đăng ký tài khoản | BowlanCloud',
  description: 'Tạo tài khoản BowlanCloud để trải nghiệm Cloud Server NVMe, VPS giá rẻ, Proxy và Anti-DDoS.',
  alternates: {
    canonical: `${siteUrl}/auth/register`,
  },
  openGraph: {
    title: 'Đăng ký tài khoản | BowlanCloud',
    description: 'Đăng ký và nhận ưu đãi khi sử dụng Cloud Server, VPS, Proxy, Anti-DDoS.',
    url: `${siteUrl}/auth/register`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-auth.jpg`,
        width: 1200,
        height: 630,
        alt: 'Đăng ký BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đăng ký tài khoản | BowlanCloud',
    description: 'Đăng ký BowlanCloud để quản lý dịch vụ Cloud/VPS/Proxy/Anti-DDoS.',
    images: [`${siteUrl}/og-auth.jpg`],
  },
};
