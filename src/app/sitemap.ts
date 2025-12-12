export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/pages/products`, lastModified: now },
    { url: `${base}/pages/blog`, lastModified: now },
    { url: `${base}/pages/status`, lastModified: now },
    { url: `${base}/pages/terms`, lastModified: now },
    { url: `${base}/pages/privacy`, lastModified: now },
    { url: `${base}/pages/commitment`, lastModified: now },
    { url: `${base}/pages/refund`, lastModified: now },
    { url: `${base}/pages/contact`, lastModified: now },
    { url: `${base}/auth/login`, lastModified: now },
    { url: `${base}/auth/register`, lastModified: now },
  ];
}
