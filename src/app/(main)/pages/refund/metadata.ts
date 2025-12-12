import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlancloud.com';

export const metadata: Metadata = {
  title: 'Chính Sách Hoàn Tiền | BOWLAN Cloud',
  description:
    'Chính sách hoàn tiền của BOWLAN Cloud - Trải nghiệm 3 ngày miễn phí, hoàn tiền 100% nếu không hài lòng, không yêu cầu lý do.',
  keywords: [
    'chính sách hoàn tiền',
    'hoàn tiền 100%',
    'trải nghiệm 3 ngày',
    'hoàn lại tiền',
    'BOWLAN',
  ],
  
  openGraph: {
    type: 'website',
    url: `${siteUrl}/pages/refund`,
    title: 'Chính Sách Hoàn Tiền | BOWLAN Cloud',
    description:
      'Chính sách hoàn tiền của BOWLAN Cloud - Trải nghiệm 3 ngày miễn phí, hoàn tiền 100%.',
    siteName: 'BOWLAN Cloud',
    images: [
      {
        url: `${siteUrl}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'BOWLAN Cloud - Chính Sách Hoàn Tiền',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bowlancloud',
    title: 'Chính Sách Hoàn Tiền | BOWLAN Cloud',
    description:
      'Chính sách hoàn tiền của BOWLAN Cloud - Hoàn tiền 100% trong 3 ngày đầu.',
    images: [`${siteUrl}/og-cover.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
