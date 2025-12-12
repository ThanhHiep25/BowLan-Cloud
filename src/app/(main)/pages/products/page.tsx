'use client';
import React, { Suspense } from 'react';

import { ChevronDown, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import { ProductType } from '../../../../../types';
import ServiceCard from '@/components/card/ServiceCard';
import { PRODUCT_PLANS } from '../../../../../constants';

const MotionDiv = motion.div;

const ITEMS_PER_PAGE = 3;

const ProductsPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
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
      document.title = "Bảng Giá Thuê VPS, Cloud Server & Proxy Mới Nhất | BowlanCloud";
      
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
             <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Bảng Giá Thuê <span className="text-gradient">Cloud Server</span> & VPS</h1>
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
                className={`grow md:grow-0 px-4 md:px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === tab
                    ? 'bg-[#f97316] text-white shadow-lg shadow-[#f97316]/25 scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                >
                {tab}
                </button>
            ))}
          </div>
        </MotionDiv>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
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
