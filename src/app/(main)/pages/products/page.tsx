'use client';
import React, { Suspense } from 'react';

import { ChevronDown, Loader2, ShieldCheck, Bot, Activity, Gauge, Zap, Headset, Cpu, KeyboardMusic, HardDrive } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductType } from '../../../../../types';
import ServiceCard from '@/components/card/ServiceCard';
import { PRODUCT_PLANS } from '../../../../../constants';
import Image from 'next/image';
import Link from 'next/link';

const MotionDiv = motion.div;

const ITEMS_PER_PAGE = 3;

const ProductsPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const antiDdosFeatures = [
    { title: 'Tường Lửa Đa Tầng', desc: 'Phát hiện ngay lưu lượng bất thường từ cơ sở dữ liệu Firewall, ngăn chặn đến 99.9% lưu lượng không hợp lệ.', icon: ShieldCheck },
    { title: 'Ưu Tiên Bot SEO', desc: 'Tối ưu đường truyền cho bot tìm kiếm, đảm bảo bot SEO hoạt động mượt mà, không bị chặn.', icon: Bot },
    { title: 'Tăng Tốc Website', desc: 'CDN toàn cầu giảm độ trễ, tăng tốc trải nghiệm người dùng, tối ưu hiệu suất tải trang.', icon: Gauge },
    { title: 'Giám Sát Thông Minh', desc: 'Phân tích lưu lượng độc hại theo thời gian thực và ra quyết định tự động, không ảnh hưởng khách hàng thật.', icon: Activity },
    { title: '99,9% Hoạt Động', desc: 'Hệ thống dự phòng nhiều lớp, tự động chuyển mạch khi có sự cố để duy trì dịch vụ liên tục.', icon: Zap },
    { title: 'Hỗ Trợ 24/7', desc: 'Đội ngũ kỹ thuật phản hồi tức thì, đồng hành xử lý sự cố trong mọi khung giờ.', icon: Headset },
  ];

  const cloudFeatures = [
    { title: 'Windows', icon: "/av-de/Windows_logo_-_2012_(dark_blue).svg.png" },
    { title: 'Ubuntu', icon: "/av-de/ubuntu-logo.svg" },
    { title: 'AlmaLinux', icon: "/av-de/almalinux-logo.svg" },
    { title: 'CentOS', icon: "/av-de/CentOS_color_logo.svg.png" },
    { title: 'Debian', icon: "/av-de/Openlogo-debianV2.svg.png" },
  ]

  const cloudPlus = [
    { title: 'Addon CPU', icon: Cpu, desc: '+1 vCore', price: "+35.000đ" },
    { title: 'Addon RAM', icon: KeyboardMusic, desc: '+1 GB', price: "+25.000đ" },
    { title: 'Addon DISK', icon: HardDrive, desc: '+10 GB SSD', price: "+15.000đ" },
    { title: 'Addon NETWORK', icon: Gauge, desc: '+100Mbps', price: "+100.000đ" },
  ]

  const dedicatePlus = [
    { title: 'Addon GPU', icon: Cpu, desc: '+4GB GPU', price: "+600.000đ" },
    { title: 'Addon RAM', icon: KeyboardMusic, desc: '+32 GB', price: "+500.000đ" },
    { title: 'Addon DISK', icon: HardDrive, desc: '+800 GB SSD', price: "+600.000đ" },
    { title: 'Addon NETWORK', icon: Gauge, desc: '+500Mbps', price: "+500.000đ" },
  ]

  // Derive activeTab from URL params (always in sync)
  const activeTab = React.useMemo(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const foundType = Object.values(ProductType).find(t => t === tabParam);
      if (foundType) return foundType;
    }
    return ProductType.CLOUD_SERVER;
  }, [searchParams]);

  const [visibleCount, setVisibleCount] = React.useState(ITEMS_PER_PAGE);
  const [isLoadingMore, setIsLoadingMore] = React.useState(false);

  React.useEffect(() => {
    // Client-side only
    if (typeof document !== 'undefined') {
      document.title = "Bảng Giá Thuê Cloud Server & Proxy Mới Nhất | BowlanCloud";

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Cập nhật bảng giá cho thuê VPS, Cloud Server, Proxy và Anti-DDoS mới nhất. Giá chỉ từ 80k/tháng, uptime 99.9%, hỗ trợ kỹ thuật 24/7.');
      }
    }
  }, []);

  // Reset visible count when activeTab changes
  React.useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [activeTab]);


  const handleTabChange = (tab: ProductType) => {
    router.push(`?tab=${tab}`);
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate a small network delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => prev + ITEMS_PER_PAGE);
      setIsLoadingMore(false);
    }, 500);
  };

  const filteredProducts = PRODUCT_PLANS.filter(plan => plan.type === activeTab);
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;
  const tabs = Object.values(ProductType);

  return (
    <div className="py-16 md:py-24 bg-[#0a0a0a] min-h-screen relative overflow-hidden">
      {/* Background Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Glow */}
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-[#f97316]/5 rounded-full blur-[120px] opacity-40 animate-pulse"></div>

        {/* Bottom Right Glow */}
        <div className="absolute -bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-[#0ea5e9]/5 rounded-full blur-[120px] opacity-40 animate-pulse delay-1000"></div>

        {/* Center Subtle Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px] opacity-30"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 pt-8 md:pt-10">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Bảng Giá Thuê <span className="text-gradient">Cloud Server</span> & Proxy</h1>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto">
              Hệ thống bảng giá minh bạch, không phí ẩn.
              Cam kết hoàn tiền trong 7 ngày nếu không hài lòng với chất lượng dịch vụ.
            </p>
          </MotionDiv>
        </div>

        {/* Tabs - Dashboard Style */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12 md:mb-16"
        >
          <div className="bg-[#171717]/80 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 flex flex-wrap justify-center gap-2 shadow-2xl w-full md:w-auto relative z-20">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                aria-label={`Tab Button ${tab}`}
                className={`grow md:grow-0 px-4 md:px-6 py-3 cursor-pointer rounded-xl text-sm font-bold transition-all duration-300 ${activeTab === tab
                  ? 'bg-[#f97316] text-white shadow-lg shadow-[#f97316]/25 scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </MotionDiv>

        {activeTab === ProductType.ANTI_DDOS && (
          <>
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-14 rounded-3xl border border-white/5 bg-[#0b0b0d] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_40%)]" />
              <div className="relative grid md:grid-cols-2 gap-10 p-8 md:p-12 items-center">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-[#f97316] uppercase tracking-[0.2em]">Anti-DDoS Shield</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Lá Chắn Vững Chắc cho hạ tầng của bạn</h2>
                  <p className="text-slate-300 text-base md:text-lg">Mô hình firewall thông minh giúp dịch vụ đứng vững trước các cuộc tấn công DDoS phức tạp, bảo vệ ứng dụng và tối ưu hiệu suất truy cập.</p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      target='_blank'
                      href="https://viettelidc.com.vn/tin-tuc/firewall-la-gi-vai-tro-va-tam-quan-trong-cua-firewall-doi-voi-nguoi-dung"
                      className="px-5 py-3 cursor-pointer rounded-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold transition-colors shadow-lg shadow-[#f97316]/20">
                      Tìm Hiểu Firewall
                    </Link>
                    <Link target='_blank' href="https://t.me/Bowlan" className="px-5 py-3 cursor-pointer rounded-full border border-[#f97316]/60 text-[#f97316] hover:bg-[#f97316]/10 font-bold transition-colors">
                      Tư Vấn Ngay
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-[#0e0e11] border border-white/5 rounded-2xl p-1 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                    <Image src="/anti.jpg" width={500} height={500} alt="Anti-DDoS Shield" className="w-full rounded-2xl" />
                  </div>
                </div>
              </div>
            </MotionDiv>

            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold text-[#f97316]'>Công Nghệ Nổi Bật</p>
              <hr className="border-[#f97316] max-w-1/2 mx-auto shadow-[0_20px_80px_rgba(0,0,0,0.45)]" />
            </div>

            <MotionDiv

              className="grid md:grid-cols-2 max-w-5xl mx-auto  gap-4 md:gap-6 mb-16"
            >
              {antiDdosFeatures.map(({ title, desc }) => (
                <div key={title} className="h-full rounded-2xl bg-[#121212] border border-white/5 hover:border-[#f97316]/50 transition-colors p-5 shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-3">

                    <h3 className="text-xl font-bold text-[#f97316]">{title}</h3>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{desc}</p>
                </div>
              ))}
            </MotionDiv>


            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>Chi Phí Sử Dụng FireWall</p>
            </div>

          </>
        )}

        {activeTab === ProductType.CLOUD_SERVER && (
          <>
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-14 rounded-3xl border border-white/5 bg-[#0b0b0d] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_40%)]" />
              <div className="flex flex-col items-center justify-center gap-10 p-8 md:p-12 text-center relative">
                <p className="text-xl font-semibold text-[#f97316] uppercase tracking-[0.2em]">Cloud Server</p>
                <h2 className="text-xl md:text-2xl text-center font-bold text-white leading-tight">Giải pháp máy ảo mạnh mẽ (VPS), linh hoạt và ổn định với công nghệ ảo hóa VMware.</h2>
                <p className="text-slate-300 text-base md:text-lg">Những gì làm cho dịch vụ của chúng tôi trở nên khác biệt.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link target='_blank' href="https://t.me/Bowlan" className="text-lg px-5 py-3 cursor-pointer rounded-full border border-[#f97316]/60 text-[#f97316] hover:bg-[#f97316]/10 font-bold transition-colors">
                    Tư Vấn Ngay
                  </Link>
                </div>

              </div>
            </MotionDiv>

            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>Hỗ trợ tất cả hệ điều hành phổ biến</p>
              <p className="text-slate-300 text-lg">Chúng tôi hỗ trợ nhiều hệ điều hành phổ biến.</p>
            </div>

            <MotionDiv
              className="grid md:grid-cols-5 grid-cols-2 max-w-5xl mx-auto  gap-4 md:gap-6 mb-16"
            >
              {cloudFeatures.map(({ title, icon }) => (
                <div key={title} className="h-full rounded-2xl flex flex-col items-center justify-center bg-[#121212] border border-white/5 hover:border-[#f97316]/50 transition-colors p-5 shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Image src={icon} alt={title} width={40} height={40} className="w-20 h-20" />
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{title}</p>
                </div>
              ))}
            </MotionDiv>

            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>Bảng Giá Cloud Server</p>
            </div>
          </>
        )}

        {activeTab === ProductType.DEDICATED && (
          <>
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-14 rounded-3xl border border-white/5 bg-[#0b0b0d] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_40%)]" />
              <div className="flex flex-col items-center justify-center gap-10 p-8 md:p-12 text-center relative">
                <p className="text-xl font-semibold text-[#f97316] uppercase tracking-[0.2em]">Cho Thuê Máy Chủ Vật Lý</p>
                <h2 className="text-xl md:text-2xl text-center font-bold text-white leading-tight">
                  Giải pháp máy chủ Dell PowerEdge mạnh mẽ, và độ tin cậy cao đáp ứng cho các tác vụ yêu cầu tài nguyên lớn.
                </h2>
                <p className="text-slate-300 text-base md:text-lg">Toàn quyền sử dụng tài nguyên mà không lo chia sẻ.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link target="_blank" href="https://t.me/Bowlan" className="text-lg px-5 py-3 cursor-pointer rounded-full border border-[#f97316]/60 text-[#f97316] hover:bg-[#f97316]/10 font-bold transition-colors">
                    Tư Vấn Ngay
                  </Link>
                </div>

              </div>
            </MotionDiv>

            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>Hỗ trợ tất cả hệ điều hành phổ biến</p>
              <p className="text-slate-300 text-lg">Chúng tôi hỗ trợ nhiều hệ điều hành phổ biến.</p>
            </div>

            <MotionDiv
              className="grid md:grid-cols-5 grid-cols-2 max-w-5xl mx-auto  gap-4 md:gap-6 mb-16"
            >

              {cloudFeatures.map(({ title, icon }) => (
                <div key={title} className="h-full rounded-2xl flex flex-col items-center justify-center bg-[#121212] border border-white/5 hover:border-[#f97316]/50 transition-colors p-5 shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Image src={icon} alt={title} width={40} height={40} className="w-20 h-20" />
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{title}</p>
                </div>
              ))}
            </MotionDiv>

            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>Cấu Hình Cho Thuê Máy Chủ Vật Lý</p>
            </div>

          </>
        )}

        {activeTab === ProductType.PROXY && (
          <>
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-14 rounded-3xl border border-white/5 bg-[#0b0b0d] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.12),transparent_40%)]" />
              <div className="flex flex-col items-center justify-center gap-10 p-8 md:p-12 text-center relative">
                <p className="text-xl font-semibold text-[#f97316] uppercase tracking-[0.2em]">Proxy Server Việt Nam</p>
                <h2 className="text-xl md:text-2xl text-center font-bold text-white leading-tight">
                  Proxy server Việt Nam tốc độ cao, ổn định và bảo mật. Hỗ trợ giao thức HTTP/SOCKS5.
                </h2>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link target="_blank" href="https://t.me/Bowlan" className="text-lg px-5 py-3 cursor-pointer rounded-full border border-[#f97316]/60 text-[#f97316] hover:bg-[#f97316]/10 font-bold transition-colors">
                    Tư Vấn Ngay
                  </Link>
                </div>

              </div>
            </MotionDiv>

            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>Bảng Giá Proxy Server</p>
            </div>

          </>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 " id='product-znxx'>
          {visibleProducts.length > 0 ? (
            visibleProducts.map((plan) => (
              <ServiceCard key={plan.id} plan={plan} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-[#171717]/30 rounded-3xl border border-white/5 border-dashed backdrop-blur-sm">
              <p className="text-slate-500 text-lg">Đang cập nhật gói cước cho danh mục này.</p>
            </div>
          )}
        </div>


        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mb-20">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              aria-label="Load More"
              className="flex items-center gap-2 px-8 py-3 bg-[#171717]/80 backdrop-blur-sm border border-white/10 hover:border-[#f97316]/50 text-white rounded-full font-bold transition-all hover:bg-white/5 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin text-[#f97316]" />
                  Đang tải...
                </>
              ) : (
                <>
                  Xem thêm gói dịch vụ
                  <ChevronDown className="w-5 h-5 text-[#f97316] group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}

        {activeTab === ProductType.CLOUD_SERVER && (
          <>
            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>CẤU HÌNH BỔ SUNG CLOUD SERVER</p>
              <p className="text-slate-300 text-lg">THEO THÁNG</p>
            </div>

            <MotionDiv
              className="grid md:grid-cols-4 grid-cols-1 max-w-7xl mx-auto  gap-4 md:gap-6 mb-16"
            >
              {cloudPlus.map(({ title, icon, desc, price }) => (
                <div key={title} className="h-full rounded-2xl flex flex-col  items-center justify-center bg-[#121212] border border-white/5 hover:border-[#f97316]/50 transition-colors p-5 shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    {React.createElement(icon, { className: "w-10 h-10 text-[#f97316]" })}
                  </div>
                  <p className="text-slate-300 font-bold text-lg leading-relaxed">{title}</p>
                  <div className="flex flex-row items-center justify-between mt-4 w-full p-4 border border-white/10 rounded-lg bg-[#0b0b0d]">
                    <p className="text-white font-bold text-sm">{desc}</p>
                    <p className="text-[#f97316] font-semibold text-sm">{price}</p>
                  </div>
                </div>
              ))}
            </MotionDiv>
          </>
        )}

        {activeTab === ProductType.DEDICATED && (
          <>
            <div className="max-w-2xl mx-auto mb-16 space-y-4 text-center">
              <p className='text-3xl font-bold'>CẤU HÌNH BỔ SUNG MÁY CHỦ VẬT LÝ</p>
              <p className="text-slate-300 text-lg">THEO THÁNG</p>
            </div>

            <MotionDiv
              className="grid md:grid-cols-4 grid-cols-1 max-w-7xl mx-auto  gap-4 md:gap-6 mb-16"
            >
              {dedicatePlus.map(({ title, icon, desc, price }) => (
                <div key={title} className="h-full rounded-2xl flex flex-col  items-center justify-center bg-[#121212] border border-white/5 hover:border-[#f97316]/50 transition-colors p-5 shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    {React.createElement(icon, { className: "w-10 h-10 text-[#f97316]" })}
                  </div>
                  <p className="text-slate-300 font-bold text-lg leading-relaxed">{title}</p>
                  <div className="flex flex-row items-center justify-between mt-4 w-full p-4 border border-white/10 rounded-lg bg-[#0b0b0d]">
                    <p className="text-white font-bold text-sm">{desc}</p>
                    <p className="text-[#f97316] font-semibold text-sm">{price}</p>
                  </div>
                </div>
              ))}
            </MotionDiv>
          </>
        )}

        {/* Additional Info / FAQ */}
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 text-center">Câu hỏi thường gặp (FAQ)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#171717]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#f97316]/30 transition-colors shadow-lg hover:shadow-xl hover:shadow-[#f97316]/5">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="text-[#f97316] bg-[#f97316]/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">Q</span> VPS và Cloud Server khác nhau gì?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed pl-10">
                Cloud Server sử dụng hạ tầng ảo hóa KVM trên cụm Cluster máy chủ vật lý, đảm bảo an toàn dữ liệu (Redundancy) tốt hơn VPS thông thường chạy trên 1 node vật lý đơn lẻ.
              </p>
            </div>
            <div className="bg-[#171717]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#f97316]/30 transition-colors shadow-lg hover:shadow-xl hover:shadow-[#f97316]/5">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="text-[#f97316] bg-[#f97316]/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">Q</span> Proxy IPv4 có sạch không?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed pl-10">
                Proxy tại BowLanCloud là Private IP 100%, không chia sẻ. IP sạch, Trust cao, phù hợp nuôi tài khoản Facebook, Ebay, Amazon, Etsy...
              </p>
            </div>
            <div className="bg-[#171717]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#f97316]/30 transition-colors shadow-lg hover:shadow-xl hover:shadow-[#f97316]/5">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="text-[#f97316] bg-[#f97316]/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">Q</span> Hỗ trợ thanh toán qua đâu?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed pl-10">
                Chúng tôi hỗ trợ thanh toán tự động 24/7 qua chuyển khoản Ngân hàng (VietQR), Momo, ZaloPay và tiền ảo (USDT).
              </p>
            </div>
            <div className="bg-[#171717]/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#f97316]/30 transition-colors shadow-lg hover:shadow-xl hover:shadow-[#f97316]/5">
              <h3 className="font-bold text-white text-lg mb-3 flex items-center gap-2">
                <span className="text-[#f97316] bg-[#f97316]/10 w-8 h-8 rounded-full flex items-center justify-center text-sm">Q</span> Chính sách Anti-DDoS thế nào?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed pl-10">
                Mặc định các gói Cloud đều được bảo vệ cơ bản. Với gói Anti-DDoS Pro, chúng tôi cam kết lọc sạch 99.99% traffic tấn công Layer 4/7.
              </p>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

function ProductsPageLoading() {
  return (
    <div className="py-16 md:py-24 bg-dark min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-primary animate-spin" />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsPageLoading />}>
      <ProductsPageContent />
    </Suspense>
  );
}
