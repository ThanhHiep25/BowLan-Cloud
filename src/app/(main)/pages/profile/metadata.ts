import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Hồ sơ tài khoản | BowlanCloud',
  description: 'Quản lý hồ sơ tài khoản, bảo mật và thông tin liên hệ tại BowlanCloud.',
  alternates: {
    canonical: `${siteUrl}/pages/profile`,
  },
  openGraph: {
    title: 'Hồ sơ tài khoản | BowlanCloud',
    description: 'Cập nhật hồ sơ, bảo mật và thông tin tài khoản BowlanCloud.',
    url: `${siteUrl}/pages/profile`,
    siteName: 'BowlanCloud',
    type: 'profile',
    images: [
      {
        url: `${siteUrl}/og-profile.jpg`,
        width: 1200,
        height: 630,
        alt: 'Hồ sơ tài khoản BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hồ sơ tài khoản | BowlanCloud',
    description: 'Trang hồ sơ và bảo mật tài khoản BowlanCloud.',
    images: [`${siteUrl}/og-profile.jpg`],
  },
};
