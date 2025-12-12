import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';

export const metadata: Metadata = {
  title: 'Trạng thái hệ thống | BowlanCloud',
  description: 'Cập nhật thời gian thực trạng thái hoạt động của hạ tầng BowlanCloud: website, API, data center, ping.',
  alternates: {
    canonical: `${siteUrl}/pages/status`,
  },
  openGraph: {
    title: 'Trạng thái hệ thống | BowlanCloud',
    description: 'Theo dõi uptime, ping và tình trạng các datacenter BowlanCloud theo thời gian thực.',
    url: `${siteUrl}/pages/status`,
    siteName: 'BowlanCloud',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-status.jpg`,
        width: 1200,
        height: 630,
        alt: 'Trạng thái hệ thống BowlanCloud',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trạng thái hệ thống | BowlanCloud',
    description: 'Giám sát uptime và tình trạng dịch vụ BowlanCloud.',
    images: [`${siteUrl}/og-status.jpg`],
  },
};
