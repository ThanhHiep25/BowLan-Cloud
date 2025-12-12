# 🌐 BOWLAN Cloud - Next.js Project

Dự án website cho dịch vụ Cloud VPS, Máy Chủ Vật Lý, Anti-DDoS, và Proxy của **BOWLAN Cloud**. Được xây dựng với **Next.js 16**, **TypeScript**, **Tailwind CSS**, và **Framer Motion**.

---

### Chẩn đoán các vấn đề về hiệu suất 20:25:00 10 thg 12, 2025
<img width="991" height="573" alt="image" src="https://github.com/user-attachments/assets/92221496-c54c-486a-84f8-8bcf19aac29e" />


## 📋 Mục Lục

- [🎯 Giới Thiệu](#-giới-thiệu)
- [⚡ Yêu Cầu Hệ Thống](#-yêu-cầu-hệ-thống)
- [🚀 Cài Đặt & Chạy](#-cài-đặt--chạy)
- [📁 Cấu Trúc Project](#-cấu-trúc-project)
- [🎨 Hệ Thống Thiết Kế](#-hệ-thống-thiết-kế)
- [📄 Các Trang Chính](#-các-trang-chính)
- [🔒 SEO & Metadata](#-seo--metadata)
- [🛠️ Công Nghệ Sử Dụng](#️-công-nghệ-sử-dụng)
- [📚 Hướng Dẫn Phát Triển](#-hướng-dẫn-phát-triển)
- [🚀 Triển Khai Production](#-triển-khai-production)

---

## 🎯 Giới Thiệu

**BOWLAN Cloud** là nền tảng cung cấp các dịch vụ hạ tầng đám mây (Cloud Infrastructure) với các tính năng:

✅ **Cloud VPS** - Máy chủ ảo với cấu hình cao  
✅ **Máy Chủ Vật Lý** - Dedicated Server mạnh mẽ  
✅ **Anti-DDoS** - Bảo vệ chống tấn công DDoS Layer 4 lên đến 10Gbps  
✅ **Proxy Service** - Dịch vụ proxy ổn định  
✅ **Uptime 99.99%** - Cam kết thời gian hoạt động cao nhất  
✅ **Hỗ Trợ 24/7** - Đội ngũ kỹ thuật viên luôn sẵn sàng  

---

## ⚡ Yêu Cầu Hệ Thống

| Công Nghệ | Phiên Bản | Ghi Chú |
|-----------|-----------|--------|
| **Node.js** | `18.17+` | Runtime JavaScript |
| **npm** | `9+` hoặc **pnpm**, **yarn**, **bun** | Package Manager |
| **Next.js** | `16.0.7` | Framework |
| **React** | `19.0.0+` | UI Library |
| **TypeScript** | `5.0+` | Type Safety |
| **Tailwind CSS** | `4` | Styling |

---

## 🚀 Cài Đặt & Chạy

### 1. Clone Repository

```bash
git clone <repository-url>
cd bowlancloud-next
```

### 2. Cài Đặt Dependencies

```bash
npm install
# hoặc
pnpm install
# hoặc
yarn install
```

### 3. Cấu Hình Biến Môi Trường

Tạo file `.env.local` trong thư mục gốc:

```env
# Site URL (dùng cho metadata, canonical URLs, sitemap)
NEXT_PUBLIC_SITE_URL=https://bowlancloud.com

# Analytics (tùy chọn)
NEXT_PUBLIC_GA_ID=G-XXXXXXX

# API Endpoints (nếu có)
NEXT_PUBLIC_API_URL=https://api.bowlancloud.com
```

### 4. Chạy Development Server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### 5. Build Production

```bash
npm run build
npm run start
```

---

## 📁 Cấu Trúc Project

```
bowlancloud-next/
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── page.tsx                 # Trang chủ
│   │   │   ├── metadata.ts              # SEO metadata trang chủ
│   │   │   └── pages/
│   │   │       ├── products/
│   │   │       │   ├── page.tsx         # Trang sản phẩm
│   │   │       │   └── metadata.ts
│   │   │       ├── blog/
│   │   │       │   ├── page.tsx         # Trang blog
│   │   │       │   └── metadata.ts
│   │   │       ├── status/
│   │   │       │   ├── page.tsx         # Trang trạng thái hệ thống
│   │   │       │   └── metadata.ts
│   │   │       ├── terms/
│   │   │       │   ├── page.tsx         # Điều khoản sử dụng
│   │   │       │   └── metadata.ts
│   │   │       ├── privacy/
│   │   │       │   ├── page.tsx         # Chính sách bảo mật
│   │   │       │   └── metadata.ts
│   │   │       ├── commitment/
│   │   │       │   ├── page.tsx         # Cam kết dịch vụ
│   │   │       │   └── metadata.ts
│   │   │       └── refund/
│   │   │           ├── page.tsx         # Chính sách hoàn tiền
│   │   │           └── metadata.ts
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── page.tsx             # Trang đăng nhập
│   │   │   │   └── metadata.ts
│   │   │   └── register/
│   │   │       ├── page.tsx             # Trang đăng ký
│   │   │       └── metadata.ts
│   │   ├── layout.tsx                   # Root layout + JSON-LD
│   │   ├── globals.css                  # Global styles
│   │   ├── sitemap.ts                   # Dynamic sitemap
│   │   └── robots.txt/
│   │       └── route.ts                 # Robots.txt API route
│   │
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Navbar.tsx               # Navigation component
│   │   ├── footer/
│   │   │   └── Footer.tsx               # Footer component
│   │   ├── card/                        # Reusable card components
│   │   ├── search/
│   │   │   └── SearchModal.tsx          # Search modal
│   │   ├── buttonback/                  # Back button component
│   │   ├── scrolltotop/                 # Scroll to top component
│   │   ├── cirboard/                    # Circle board component
│   │   └── aichat/                      # AI chat component
│   │
│   ├── context/
│   │   └── AuthContext.tsx              # Authentication context
│   │
│   ├── services/
│   │   └── geminiService.ts             # Gemini AI API service
│   │
│   └── types.ts                         # Global TypeScript types
│
├── public/
│   └── og-cover.jpg                     # OG image (placeholder)
│
├── constants.ts                         # Global constants
├── next.config.ts                       # Next.js configuration
├── tsconfig.json                        # TypeScript configuration
├── tailwind.config.ts                   # Tailwind CSS configuration
├── postcss.config.mjs                   # PostCSS configuration
├── eslint.config.mjs                    # ESLint configuration
├── package.json                         # Dependencies
└── README.md                            # Tài liệu này
```

---

## 🎨 Hệ Thống Thiết Kế

### Color Palette

| Màu | Hex | Tên | Sử Dụng |
|-----|-----|-----|--------|
| **Primary** | `#f97316` | Orange 500 | Nút, hover effects, accents |
| **Primary Hover** | `#ea580c` | Orange 600 | Trạng thái hover |
| **Secondary** | `#0ea5e9` | Sky 500 | Borders, secondary elements |
| **Dark** | `#0a0a0a` | Neutral 950 | Background chính |
| **Dark Light** | `#171717` | Neutral 900 | Cards, secondary background |

### Responsive Breakpoints

```
Mobile:   < 768px   (1 column)
Tablet:   768px+    (2 columns)
Desktop:  1024px+   (3+ columns)
```

### Typography

```
Headings:  font-bold, text-white, scaled by size
Body:      text-gray-300, text-sm/base/lg
Accents:   text-[#f97316] or text-[#0ea5e9]
```

### Component Styling

- **Cards**: `bg-[#171717] border border-white/10 rounded-3xl p-6 md:p-8`
- **Hover**: `hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-[#f97316]/10`
- **Subsections**: `grid grid-cols-1 md:grid-cols-2 gap-6`
- **Animations**: Framer Motion with staggered timing

---

## 📄 Các Trang Chính

### 🏠 Trang Chủ (`/`)
- Giới thiệu về BOWLAN Cloud
- Hiển thị các dịch vụ chính
- Call-to-action buttons
- **Metadata**: Title, description, OG tags

### 📦 Sản Phẩm (`/pages/products`)
- Danh sách các gói Cloud VPS, Máy Chủ Vật Lý
- Bảng giá chi tiết
- Tính năng và so sánh
- **Metadata**: Product-focused SEO

### 📝 Blog (`/pages/blog`)
- Bài viết và tin tức
- Hướng dẫn sử dụng dịch vụ
- **Metadata**: Blog-specific SEO

### 📊 Trạng Thái Hệ Thống (`/pages/status`)
- Hiển thị uptime real-time
- Status của các datacenter
- Thông báo maintenance
- **Metadata**: Status page metadata

### ⚖️ Điều Khoản Sử Dụng (`/pages/terms`)
- 10 mục chính bao gồm:
  - Chấp nhận điều khoản
  - Đăng ký & Tài khoản
  - Nội dung & Quyền sở hữu
  - ...
- **Card-based layout** với subsections
- **Metadata**: Legal page SEO

### 🔒 Chính Sách Bảo Mật (`/pages/privacy`)
- Công nghệ bảo mật
- Thu thập thông tin
- Quyền riêng tư khách hàng
- Cookies & Tracking
- **Metadata**: Privacy-focused SEO

### 🤝 Cam Kết Dịch Vụ (`/pages/commitment`)
- Uptime 99.99% guarantee
- Hỗ trợ kỹ thuật 24/7
- Chất lượng phần cứng
- Bảo mật và minh bạch
- **Metadata**: Service commitment SEO

### 💰 Chính Sách Hoàn Tiền (`/pages/refund`)
- Trải nghiệm 3 ngày miễn phí
- Điều kiện hoàn tiền
- Quy trình yêu cầu hoàn tiền
- Thời gian xử lý
- **Metadata**: Refund policy SEO

### 🔐 Đăng Nhập (`/auth/login`)
- Form đăng nhập
- Xác thực người dùng
- **Metadata**: Login page SEO

### ✍️ Đăng Ký (`/auth/register`)
- Form đăng ký tài khoản
- Xác thực dữ liệu
- **Metadata**: Register page SEO

---

## 🔒 SEO & Metadata

### Sitemap (`/sitemap.xml`)

Tự động sinh ra từ `src/app/sitemap.ts`. Bao gồm 10 routes chính:

```typescript
- /
- /pages/products
- /pages/blog
- /pages/status
- /pages/terms
- /pages/privacy
- /pages/commitment
- /pages/refund
- /auth/login
- /auth/register
```

### Robots.txt (`/robots.txt`)

Được serve từ `src/app/robots.txt/route.ts`:

```
User-agent: *
Allow: /
Sitemap: https://bowlancloud.com/sitemap.xml
```

### JSON-LD Schema

**Organization schema** được nhúng trong `src/app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BOWLAN Cloud",
  "url": "https://bowlancloud.com",
  "logo": "https://bowlancloud.com/logo.png",
  "sameAs": [
    "https://facebook.com/Baolan03",
    "https://telegram.me/Bowlan"
  ]
}
```

### Metadata Exports

Mỗi trang có file `metadata.ts` với:

```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: [...],
  canonical: `${siteUrl}/path`,
  openGraph: { ... },
  twitter: { ... },
  robots: { index: true, follow: true }
}
```

### Dynamic Canonical URLs

Sử dụng `NEXT_PUBLIC_SITE_URL` environment variable:

```typescript
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlancloud.com';
```

---

## 🛠️ Công Nghệ Sử Dụng

### Frontend Framework
- **Next.js 16.0.7** - React framework cho production
- **React 19.0.0** - UI library
- **TypeScript 5** - Static type checking

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Framer Motion** - Animation library

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type safety
- **Next.js Dev Server** - Hot reload development

### Services
- **Gemini AI API** - AI chat integration (optional)

---

## 📚 Hướng Dẫn Phát Triển

### Thêm Trang Mới

1. Tạo thư mục: `src/app/(main)/pages/new-page/`
2. Tạo file `page.tsx`:

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

export default function NewPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a0a0a] to-[#171717] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white">New Page</h1>
      </div>
    </main>
  );
}
```

3. Tạo file `metadata.ts`:

```typescript
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlancloud.com';

export const metadata: Metadata = {
  title: 'Page Title | BOWLAN Cloud',
  description: 'Page description...',
  canonical: `${siteUrl}/pages/new-page`,
  openGraph: { ... },
  twitter: { ... }
};
```

4. Cập nhật sitemap trong `src/app/sitemap.ts`:

```typescript
return [
  // ...
  { url: `${base}/pages/new-page`, lastModified: now },
];
```

### Thêm Component Mới

1. Tạo file: `src/components/component-name/ComponentName.tsx`
2. Export component:

```typescript
'use client';

import React from 'react';

interface ComponentNameProps {
  // Props here
}

export const ComponentName: React.FC<ComponentNameProps> = (props) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

3. Import và sử dụng:

```typescript
import ComponentName from '@/components/component-name/ComponentName';
```

### Styling Best Practices

✅ Sử dụng Tailwind classes  
✅ Giữ components responsive (mobile-first)  
✅ Sử dụng semantic colors (primary, secondary, dark)  
✅ Áp dụng hover/transition effects  
✅ Sử dụng Framer Motion cho animations  

```typescript
className="
  bg-[#171717] border border-white/10 rounded-3xl p-6 md:p-8
  hover:border-[#f97316]/30 hover:shadow-xl
  transition-all duration-300
"
```

### TypeScript Convention

```typescript
interface Props {
  title: string;
  count?: number;
}

interface SectionData {
  id: number;
  title: string;
  items: string[];
}

const MyComponent: React.FC<Props> = ({ title, count }) => {
  return <div>{title}</div>;
};
```

---

## 🚀 Triển Khai Production

### Checklist Trước Deploy

- [ ] Cập nhật `NEXT_PUBLIC_SITE_URL` trong environment
- [ ] Thay thế OG images bằng ảnh thực (1200x630px)
- [ ] Test metadata render trên social media tools
- [ ] Verify sitemap generation: `/sitemap.xml`
- [ ] Test robots.txt: `/robots.txt`
- [ ] Run ESLint: `npm run lint`
- [ ] Build project: `npm run build`
- [ ] Test production build locally: `npm run start`

### Deploy trên Vercel (Recommended)

```bash
# Push code lên GitHub
git push origin main

# Connect repository trên Vercel dashboard
# https://vercel.com/new

# Configure environment variables
# NEXT_PUBLIC_SITE_URL = https://bowlancloud.com

# Auto-deploy on push
```

### Deploy trên VPS/Dedicated Server

```bash
# 1. SSH vào server
ssh root@your-server-ip

# 2. Clone repository
cd /var/www
git clone <repository-url> bowlancloud-next

# 3. Cài dependencies
cd bowlancloud-next
npm install --production

# 4. Build
npm run build

# 5. Setup PM2
npm install -g pm2
pm2 start npm --name "bowlancloud" -- start

# 6. Setup Nginx reverse proxy
# Config /etc/nginx/sites-available/bowlancloud
# upstream bowlancloud {
#   server 127.0.0.1:3000;
# }
# server {
#   listen 80;
#   server_name bowlancloud.com;
#   location / {
#     proxy_pass http://bowlancloud;
#   }
# }

# 7. Enable SSL với Let's Encrypt
certbot --nginx -d bowlancloud.com

# 8. Restart services
systemctl restart nginx
```

### SEO Verification

1. **Google Search Console**
   - Thêm property
   - Submit sitemap: `/sitemap.xml`
   - Verify domain

2. **Bing Webmaster Tools**
   - Thêm website
   - Submit sitemap

3. **Rich Results Test**
   - Test URL tại: https://search.google.com/test/rich-results
   - Verify JSON-LD schema

4. **PageSpeed Insights**
   - Test performance: https://pagespeed.web.dev

---

##  Người thực hiện

- **Tên** : Nguyen Hiep

---

## 📄 License

Project này là proprietary software của BOWLAN Cloud.
Vui lòng xin cấp quyền trước khi sao chép.

---

**Last Updated**: December 8, 2025  
**Version**: 1.0.0
