import { BlogPost, NavLinkItem, ProductPlan, ProductType } from "./types";

export const PRODUCT_PLANS: ProductPlan[] = [
  // Cloud Server
  {
    id: "cloud-1",
    name: "CLOUD VN 1-1-20",
    price: "70.000đ/tháng",
    cpu: "1 vCore",
    ram: "1 GB",
    disk: "20 GB SSD",
    bandwidth: "100/100 Mbps",
    type: ProductType.CLOUD_SERVER,
    features: ["1 IP riêng", "Backup hàng ngày", "Window/Linux", "Hỗ trợ 24/7"],
  },
  {
    id: "cloud-2",
    name: "CLOUD VN 1-2-25",
    price: "90.000đ/tháng",
    cpu: "1 vCore",
    ram: "2 GB",
    disk: "25 GB SSD",
    bandwidth: "100/100 Mbps",
    type: ProductType.CLOUD_SERVER,
    features: ["1 IP riêng", "Backup hàng ngày", "Window/Linux", "Hỗ trợ 24/7"],
    popular: true,
  },
  {
    id: "cloud-3",
    name: "CLOUD VN 2-4-30",
    price: "150.000đ/tháng",
    cpu: "2 vCore",
    ram: "4 GB",
    disk: "30 GB SSD",
    bandwidth: "100/100 Mbps",
    type: ProductType.CLOUD_SERVER,
    features: ["1 IP riêng", "Backup hàng ngày", "Window/Linux", "Hỗ trợ 24/7"],
  },
  {
    id: "cloud-4",
    name: "CLOUD VN 4-8-50",
    price: "330.000đ/tháng",
    cpu: "4 vCore",
    ram: "8 GB",
    disk: "50 GB SSD",
    bandwidth: "100/100 Mbps",
    type: ProductType.CLOUD_SERVER,
    features: ["1 IP riêng", "Backup hàng ngày", "Window/Linux", "Hỗ trợ 24/7"],
  },
  {
    id: "cloud-5",
    name: "CLOUD VN 8-16-70",
    price: "650.000đ/tháng",
    cpu: "8 vCore",
    ram: "16 GB",
    disk: "70 GB SSD",
    bandwidth: "100/100 Mbps",
    type: ProductType.CLOUD_SERVER,
    features: ["1 IP riêng", "Backup hàng ngày", "Window/Linux", "Hỗ trợ 24/7"],
  },
  {
    id: "cloud-6",
    name: "CLOUD VN 8-32-100",
    price: "1.200.000đ/tháng",
    cpu: "8 vCore",
    ram: "32 GB",
    disk: "100 GB SSD",
    bandwidth: "100/100 Mbps",
    type: ProductType.CLOUD_SERVER,
    features: ["1 IP riêng", "Backup hàng ngày", "Window/Linux", "Hỗ trợ 24/7"],
  },
  // Proxy
  {
    id: "proxy-1",
    name: "IPv4 Private Proxy",
    price: "30.000đ/proxy",
    cpu: "N/A",
    ram: "N/A",
    disk: "N/A",
    bandwidth: "Unlimited",
    type: ProductType.PROXY,
    features: [
      "IP tĩnh riêng biệt",
      "HTTP/SOCKS5",
      "Uptime 99.9%",
      "Nuôi Ebay/Amazon",
    ],
  },
  {
    id: "proxy-2",
    name: "Proxy Server VN",
    price: "50.000đ/tháng",
    cpu: "N/A",
    ram: "N/A",
    disk: "N/A",
    bandwidth: "100/100 Mbps",
    type: ProductType.PROXY,
    features: [
      "IP Riêng: IPv4",
      "HTTP/SOCKS5",
      "Hỗ trợ nhiều cổng",
      "Không giới hạn băng thông",
    ],
    popular: true,
  },
  {
    id: "proxy-3",
    name: "IPv6 Rotating",
    price: "200.000đ/tháng",
    cpu: "N/A",
    ram: "N/A",
    disk: "N/A",
    bandwidth: "Unlimited",
    type: ProductType.PROXY,
    features: [
      "Hàng triệu IP",
      "Xoay IP mỗi request",
      "Phù hợp Crawl Data",
      "Giá rẻ tiết kiệm",
    ],
  },
  {
    id: "proxy-4",
    name: "Residential Proxy",
    price: "150.000đ/GB",
    cpu: "N/A",
    ram: "N/A",
    disk: "N/A",
    bandwidth: "Theo dung lượng",
    type: ProductType.PROXY,
    features: [
      "IP dân cư thật",
      "Không bị block",
      "Target quốc gia",
      "Thanh toán PAYG",
    ],
  },
  // Dedicated
  {
    id: "dedi-1",
    name: "20C/40T DE62-VN",
    price: "2.800.000đ/tháng",
    cpu: "2x Xeon 2680v2",
    ram: "256 GB DDR3 ECC",
    disk: "800GB SSD",
    bandwidth: "1 Gbps",
    type: ProductType.DEDICATED,
    features: [
      "FPT Việt Nam",
      "Kết nối ổn định",
      "Hỗ trợ 24/7 VIP",
      "Bảo hành phần cứng",
      "Cấu hình tuỳ chọn (Giá cả thay đổi theo cấu hình)",
    ],
  },
  {
    id: "dedi-2",
    name: "28C/56T DE63-VN",
    price: "3.850.000đ/tháng",
    cpu: "2x Xeon 2680v4",
    ram: "128 GB DDR4 ECC",
    disk: "800GB  SSD",
    bandwidth: "1 Gbps",
    type: ProductType.DEDICATED,
    features: [
      "FPT Việt Nam",
      "Kết nối ổn định",
      "Hỗ trợ 24/7 VIP",
      "Bảo hành phần cứng",
      "Cấu hình tuỳ chọn (Giá cả thay đổi theo cấu hình)",
    ],
  },
  {
    id: "dedi-3",
    name: "40C/80T DE64-VN",
    price: "4.200.000đ/tháng",
    cpu: "2x Xeon Gold 6133",
    ram: "128 GB DDR4 ECC",
    disk: "800GB SSD",
    bandwidth: "1 Gbps",
    type: ProductType.DEDICATED,
    features: [
      "FPT Việt Nam",
      "Kết nối ổn định",
      "Hỗ trợ 24/7 VIP",
      "Bảo hành phần cứng",
      "Cấu hình tuỳ chọn (Giá cả thay đổi theo cấu hình)",
    ],
  },
  // Anti DDoS
  {
    id: "ddos-1",
    name: "Anti-DDoS Basic",
    price: "$70/month",
    cpu: "AI Filter",
    ram: "Global Node",
    disk: "N/A",
    bandwidth: "Clean Traffic",
    type: ProductType.ANTI_DDOS,
    features: [
      "Hỗ trợ 1 miền / tháng",
      "Bảo vệ DDoS mặt định",
      "Không giới hạn lưu lượng",
      "Không giới hạn băng thông",
    ],
  },
  {
    id: "ddos-2",
    name: "Anti-DDoS Pro",
    price: "$110/month",
    cpu: "Custom Rules",
    ram: "Multi-CDN",
    disk: "N/A",
    bandwidth: "Unlimited Clean",
    type: ProductType.ANTI_DDOS,
    features: [
      "Hỗ trợ 1 miền / tháng",
      "Tất cả tính năng cơ bản",
      "Tường lửa thông minh",
      "Hỗ trợ 24/7",
    ],
    popular: true,
  },
  {
    id: "ddos-3",
    name: "Anti-DDoS Premium",
    price: "$150/month",
    cpu: "Custom Rules",
    ram: "Multi-CDN",
    disk: "N/A",
    bandwidth: "Unlimited Clean",
    type: ProductType.ANTI_DDOS,
    features: [
      "Hỗ trợ 1 miền / tháng",
      "Tất cả tính năng nâng cao",
      "Tường lửa cao cấp",
      "Bảng điều khiển trực quan",
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Tại sao nên chuyển từ Shared Hosting sang Cloud Server?",
    excerpt:
      "Khám phá những lợi ích vượt trội về hiệu năng, bảo mật và độ ổn định khi nâng cấp hệ thống của bạn lên Cloud Server NVMe.",
    date: "20/05/2024",
    author: "Admin",
    category: "Kiến thức",
    imageUrl:
      "https://images.unsplash.com/photo-1483478550801-ceba96c89ae7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "Hướng dẫn cài đặt Proxy Server riêng tư an toàn",
    excerpt:
      "Bảo mật danh tính và dữ liệu của bạn trên internet với hướng dẫn thiết lập Proxy IPv4 Private chi tiết trên Linux.",
    date: "18/05/2024",
    author: "Kỹ thuật",
    category: "Hướng dẫn",
    imageUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "Anti-DDoS hoạt động như thế nào trong Game Online?",
    excerpt:
      "Tìm hiểu cơ chế hoạt động của các cuộc tấn công từ chối dịch vụ vào Game Server và giải pháp phòng chống hiệu quả.",
    date: "15/05/2024",
    author: "Security Team",
    category: "Bảo mật",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Top 5 Distro Linux tốt nhất cho Web Server 2024",
    excerpt:
      "Đánh giá chi tiết ưu nhược điểm của Ubuntu, CentOS, Debian, AlmaLinux và Rocky Linux cho môi trường Production.",
    date: "10/06/2024",
    author: "SysAdmin",
    category: "Hệ điều hành",
    imageUrl:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Tối ưu hóa tốc độ Website WordPress với Redis và Varnish",
    excerpt:
      "Hướng dẫn cấu hình Caching Layer giúp website của bạn tải nhanh gấp 10 lần trên hạ tầng VPS SSD.",
    date: "05/06/2024",
    author: "DevOps",
    category: "Tối ưu",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "IPv6 Rotating Proxy là gì? Ứng dụng trong Crawl Data",
    excerpt:
      "Giải pháp tiết kiệm chi phí cho việc thu thập dữ liệu quy mô lớn mà không lo bị chặn IP.",
    date: "01/06/2024",
    author: "Data Team",
    category: "Proxy",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Trang chủ", path: "/" },
  {
    name: "Sản phẩm",
    path: "/pages/products",
    children: [
      {
        name: "Anti-DDoS",
        path: `/pages/products?tab=${encodeURIComponent(
          ProductType.ANTI_DDOS
        )}`,
      },
      {
        name: "Cloud Server",
        path: `/pages/products?tab=${encodeURIComponent(
          ProductType.CLOUD_SERVER
        )}`,
      },
      {
        name: "Proxy Server",
        path: `/pages/products?tab=${encodeURIComponent(ProductType.PROXY)}`,
      },
      {
        name: "Máy chủ vật lý",
        path: `/pages/products?tab=${encodeURIComponent(
          ProductType.DEDICATED
        )}`,
      },
    ],
  },
  {
    name: "Đối tác",
    path: "/pages/partners",
    children: [
      { name: "Cộng tác viên", path: "/pages/partners#affiliate" },
      { name: "Tích hợp API", path: "/pages/partners#api" },
    ],
  },
  { name: "Bài viết", path: "/pages/blog" },
  { name: "Liên hệ", path: "/pages/contact" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "CEO TechViet",
    quote:
      "Hệ thống Cloud Server tại BowlanCloud rất ổn định, tốc độ NVMe giúp website của chúng tôi tải nhanh hơn 300% so với nhà cung cấp cũ.",
    avatar: "/av-u/32.jpg",
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Marketing Manager",
    quote:
      "Dịch vụ Proxy 4G rất chất lượng, IP sạch giúp team mình chạy quảng cáo Facebook mượt mà, không lo bị checkpoint.",
    avatar: "/av-u/44.jpg",
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    role: "Game Studio Lead",
    quote:
      "Hệ thống Anti-DDoS Game hoạt động cực kỳ hiệu quả. Server game của chúng tôi online 24/7 bất chấp các đợt tấn công lớn.",
    avatar: "/av-u/86.jpg",
  },
];
