import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BowlanCloud - Đăng nhập / Đăng ký",
  description: "Đăng nhập hoặc đăng ký tài khoản BowlanCloud",
  icons: {
    icon: "/logo.png",
  },
  creator: "Nguyen Hiep",
  keywords: "BowlanCloud, Cloud Server, VPS, Proxy, Anti-DDoS",
  openGraph: {
    title: "BowlanCloud - Đăng nhập / Đăng ký",
    description: "Đăng nhập hoặc đăng ký tài khoản BowlanCloud",
    siteName: "BowlanCloud",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
