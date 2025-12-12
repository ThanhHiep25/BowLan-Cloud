'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Zap, Globe, Clock, ArrowRight, Server, Cpu, Lock, Info, ChevronLeft, ChevronRight, Activity, Router, Network, MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import CircuitBoard from '@/components/cirboard/CircuitBoard';
import { TESTIMONIALS } from '../../../constants';





const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const features = [
  {
    icon: <Zap className="h-8 w-8 text-[#f97316]" />,
    title: "Cloud Server Tốc Độ Cao",
    description: "Hạ tầng NVMe Enterprise RAID 10 kết hợp CPU Platinum mới nhất, cam kết hiệu năng xử lý vượt trội."
  },
  {
    icon: <Shield className="h-8 w-8 text-[#0ea5e9]" />,
    title: "Anti-DDoS Đa Lớp",
    description: "Công nghệ lọc AI Filter chặn đứng các cuộc tấn công TCP/UDP Flood, bảo vệ Layer 4 & Layer 7 tuyệt đối."
  },
  {
    icon: <Globe className="h-8 w-8 text-green-400" />,
    title: "Hạ Tầng Đa Quốc Gia",
    description: "Datacenter chuẩn Tier 3 tại Hà Nội, TP.HCM, Singapore và US. Kết nối mạng nội địa và quốc tế ổn định."
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "Support 24/7/365",
    description: "Đội ngũ kỹ thuật trực chiến tại Datacenter 24/7. Cam kết phản hồi Ticket dưới 15 phút."
  }
];

// const itemVariants = {
//   hidden: { opacity: 0, y: 0 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
// };

const HomePage: React.FC = () => {
  // Default server-rendered value (neutral evening image)
  const DEFAULT_BG_IMAGE = '/bg-nav/photo-1451187580459-43490279c0fa.avif';
  
  const [bgImage, setBgImage] = useState(DEFAULT_BG_IMAGE);
  const [greeting, setGreeting] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // SEO Optimization
  useEffect(() => {
    document.title = "BowlanCloud - Dịch vụ Cloud Server, VPS & Anti-DDoS Tốc Độ Cao Số 1 VN";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BowlanCloud cung cấp dịch vụ cho thuê Cloud Server NVMe, VPS giá rẻ, Proxy và giải pháp chống DDoS chuyên nghiệp. Hạ tầng Tier 3, Peering đa hướng, hỗ trợ 24/7.');
    }
  }, []);

  // Initialize time-based content after hydration (client-side only)
  useEffect(() => {
    const updateTimeBasedContent = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setBgImage('/bg-nav/photo-1518770660439-4636190af475.avif'); 
        setGreeting('Chào buổi sáng');
      } else if (hour >= 12 && hour < 18) {
        setBgImage('/bg-nav/photo-1550751827-4bd374c3f58b.avif');
        setGreeting('Chào buổi chiều');
      } else {
        setBgImage('/bg-nav/photo-1451187580459-43490279c0fa.avif');
        setGreeting('Chào buổi tối');
      }
    };

    updateTimeBasedContent();
    const interval = setInterval(updateTimeBasedContent, 60000); 
    return () => clearInterval(interval);
  }, []);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };
 
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="bg-[#0a0a0a] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex content-center items-center justify-center min-h-[85vh] lg:min-h-[90vh] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#0a0a0a]/85 z-10"></div>
            
            {/* Circuit Board Effect - Hidden on mobile for performance */}
            <div className="hidden lg:block absolute inset-0 z-11 opacity-20 mix-blend-screen pointer-events-none">
               <CircuitBoard color="#f97316" />
            </div>

            {bgImage && (
              <Image
                src={bgImage}
                alt="Hero Background"
                fill
                className="absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-50"
                priority
                fetchPriority="high"
                sizes="100vw"
                quality={80}
              />
            )}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#f97316]/20 rounded-full blur-[100px] md:blur-[128px] z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-[#0ea5e9]/20 rounded-full blur-[100px] md:blur-[128px] z-10" />
        </div>

        <div className="container relative mx-auto px-4 z-20">
          <MotionDiv 
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
            className="flex flex-wrap items-center justify-center text-center w-full lg:w-10/12 mx-auto"
          >
            <MotionDiv className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6 backdrop-blur-sm hover:border-[#f97316]/50 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]"></span>
              </span>
              <span className="text-slate-300 text-xs md:text-sm font-medium truncate max-w-[250px] sm:max-w-none">{greeting}! Giảm ngay 20% cho đăng ký mới</span>
            </MotionDiv>
            
            <MotionH1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 tracking-tight w-full">
              Nền Tảng <span className="text-gradient">Cloud Server</span> & <br className="hidden md:block"/>
              <span className="text-white">Anti-DDoS</span> Số 1 Việt Nam
            </MotionH1>
            
            <MotionP className="mt-4 text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed px-4 w-full">
              Cung cấp giải pháp thuê <strong>VPS giá rẻ</strong>, <strong>Cloud Server</strong>, <strong>Proxy IPv4/4G</strong> và máy chủ vật lý. 
              Hệ thống quản lý tự động, khởi tạo trong 30 giây.
            </MotionP>
            
            <MotionDiv className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0 w-full">
              <Link href="/pages/products" className="relative overflow-hidden group bg-[#f97316] text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-lg shadow-[#f97316]/30 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95">
                <span className="relative z-10 flex items-center gap-2"><Zap size={20} /> Xem Bảng Giá</span>
                <div className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-shine" />
              </Link>
              <Link href="/pages/products" className="bg-[#0ea5e9] hover:bg-sky-600 text-white font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg shadow-lg shadow-[#0ea5e9]/30 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2">
                <Info size={20} /> Tìm hiểu thêm
              </Link>
              <Link href="/pages/partners" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 font-bold py-3.5 px-8 md:py-4 md:px-10 rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 active:scale-95">
                <ArrowRight size={20} /> Đối tác
              </Link>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-[#171717] border-y border-white/5" style={{ contain: 'layout style paint' }}>
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              {[
                { label: "Khách hàng", value: "10k+", color: "text-[#f97316]" },
                { label: "VPS Active", value: "50k+", color: "text-[#0ea5e9]" },
                { label: "Gbps Anti-DDoS", value: "200+", color: "text-green-500" },
                { label: "Uptime SLA", value: "99.9%", color: "text-slate-400" }
              ].map((stat, idx) => (
                <div key={idx} className="p-2 md:p-4">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className={`${stat.color} text-xs md:text-sm font-semibold uppercase tracking-wider`}>{stat.label}</div>
                </div>
              ))}
           </div>
         </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Tại sao nên thuê Cloud VPS tại <span className="text-[#f97316]">BowLanCloud</span>?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              Chúng tôi cam kết mang lại chất lượng dịch vụ tốt nhất với chi phí tối ưu nhất cho doanh nghiệp của bạn.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <article 
                key={idx}
                className="group bg-[#171717] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-[#f97316]/50 transition-colors duration-300 hover:shadow-xl hover:shadow-[#f97316]/10"
              >
                <div className="mb-6 bg-[#0a0a0a] w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Peering Section */}
      <section className="py-16 md:py-24 bg-[#171717] border-y border-white/5 relative overflow-hidden">
         {/* Circuit Board Effect - Hidden on mobile for performance */}
         <div className="hidden lg:block absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none">
             <CircuitBoard color="#0ea5e9" className="rotate-180" />
         </div>

         {/* Background decoration - Hidden on mobile */}
         <div className="hidden md:block absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute left-0 top-10 w-full h-px bg-linear-to-r from-transparent via-[#f97316] to-transparent"></div>
             <div className="absolute left-0 bottom-10 w-full h-px bg-linear-to-r from-transparent via-[#0ea5e9] to-transparent"></div>
             <div className="absolute right-20 top-0 w-px h-full bg-linear-to-b from-transparent via-white to-transparent opacity-20"></div>
         </div>

         <div className="container mx-auto px-4 relative z-10">
            {/* Peering Part */}
            <div className="mb-20 md:mb-24">
                <div 
                  className="text-center mb-12"
                >
                    <div className="inline-flex items-center space-x-2 bg-[#f97316]/10 border border-[#f97316]/20 rounded-full px-4 py-1 mb-4">
                        <Activity size={14} className="text-[#f97316]" />
                        <span className="text-[#f97316] text-xs font-bold uppercase tracking-wider">Connectivity</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Hạ tầng mạng <span className="text-[#f97316]">Peering</span> Đa Hướng
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg px-4">
                        Kết nối trực tiếp (Direct Connect) tới 3 nhà cung cấp dịch vụ Internet lớn nhất Việt Nam. 
                        Đảm bảo băng thông rộng và độ trễ thấp nhất cho người dùng cuối.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {[
                        { name: "Viettel IDC",imgURL:'/viettel_400x400.jpg', color: "bg-red-600", textColor: "text-red-500", bgSoft: "bg-red-500/10" },
                        { name: "VNPT Data", imgURL:'/vnpt_400x400.jpg', color: "bg-blue-600", textColor: "text-blue-500", bgSoft: "bg-blue-500/10" },
                        { name: "FPT Telecom", imgURL:'/fpt_400x400.png', color: "bg-orange-600", textColor: "text-orange-500", bgSoft: "bg-orange-500/10" }
                    ].map((isp, idx) => (
                        <div 
                            key={idx}
                            className={`group relative overflow-hidden rounded-2xl p-6 md:p-8 border border-white/5 ${isp.bgSoft} hover:border-white/20 transition-all`}
                        >
                            <div className="flex flex-col items-center text-center">
                        <div className={`w-30 h-30 rounded-xl ${isp.color} flex items-center justify-center mb-4 shadow-lg shadow-black/50`}>
                                    <Image src={isp.imgURL} alt={isp.name} width={120} height={120} className="object-contain rounded-xl" loading="lazy" />
                                </div>
                                <h3 className={`text-2xl font-extrabold ${isp.textColor} mb-2`}>{isp.name}</h3>
                                <p className="text-slate-300 text-sm">Băng thông trong nước <br/><strong>10 Gbps+</strong></p>
                                <div className="mt-4 flex items-center space-x-2 text-xs text-slate-400 bg-black/30 px-3 py-1 rounded-full">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span>Low Latency &lt; 5ms</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Data Center Part */}
            <div>
                <div 
                  className="text-center mb-12"
                >
                    <div className="inline-flex items-center space-x-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 rounded-full px-4 py-1 mb-4">
                        <Building2 size={14} className="text-[#0ea5e9]" />
                        <span className="text-[#0ea5e9] text-xs font-bold uppercase tracking-wider">Infrastructure</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Hệ thống Data Center đạt chuẩn <span className="text-[#0ea5e9]">Tier 3</span>
                    </h2>
                    <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg px-4">
                        Hệ thống máy chủ được đặt tại các Data Center đạt chuẩn Tier 3 Quốc tế tại 2 thành phố lớn nhất Việt Nam, 
                        đảm bảo an toàn dữ liệu và hoạt động liên tục 99.99%.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
                     {/* Hanoi */}
                     <div className="bg-[#0f0f0f] rounded-3xl p-2 border border-white/10 shadow-2xl hover:shadow-lg transition-shadow">
                        <div className="relative bg-[#171717] rounded-[20px] p-6 md:p-8 overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Hà Nội</h3>
                                    <span className="text-slate-500 flex items-center gap-1"><MapPin size={14}/> Miền Bắc</span>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Server className="text-red-500 h-8 w-8" />
                                </div>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-center text-slate-300 text-sm">
                                    <Router size={16} className="mr-3 text-slate-500"/> Viettel IDC Hòa Lạc
                                </li>
                                <li className="flex items-center text-slate-300 text-sm">
                                    <Router size={16} className="mr-3 text-slate-500"/> VNPT IDC Nam Thăng Long
                                </li>
                                <li className="flex items-center text-slate-300 text-sm">
                                    <Network size={16} className="mr-3 text-slate-500"/> Kết nối quốc tế: HK, JP
                                </li>
                            </ul>
                        </div>
                     </div>

                     {/* HCMC */}
                     <div className="bg-[#0f0f0f] rounded-3xl p-2 border border-white/10 shadow-2xl hover:shadow-lg transition-shadow">
                        <div className="relative bg-[#171717]  rounded-[20px] p-6 md:p-8 overflow-hidden h-full">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0ea5e9]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                            <div className="flex items-start justify-between mb-8 relative z-10">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">TP. Hồ Chí Minh</h3>
                                    <span className="text-slate-500 flex items-center gap-1"><MapPin size={14}/> Miền Nam</span>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <Server className="text-[#0ea5e9] h-8 w-8" />
                                </div>
                            </div>
                            <ul className="space-y-3 relative z-10">
                                <li className="flex items-center text-slate-300 text-sm">
                                    <Router size={16} className="mr-3 text-slate-500"/> FPT Data Center Tân Thuận
                                </li>
                                <li className="flex items-center text-slate-300 text-sm">
                                    <Router size={16} className="mr-3 text-slate-500"/> Viettel IDC Bình Dương
                                </li>
                                <li className="flex items-center text-slate-300 text-sm">
                                    <Network size={16} className="mr-3 text-slate-500"/> Kết nối quốc tế: SG, US
                                </li>
                            </ul>
                        </div>
                     </div>
                </div>
            </div>
         </div>
      </section>

      {/* Product Preview Sections */}
      <section className="py-16 md:py-20 bg-[#171717]/50 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-1/2 w-full">
               <div className="relative">
                  <div className="absolute -inset-4 bg-linear-to-r from-[#f97316]/50 to-[#0ea5e9]/50 rounded-2xl blur-lg opacity-10 animate-pulse"></div>
                  <Image
                    src="/data-center-16692836603261584616341.jpg"
                    alt="Server Room"
                    width={800}
                    height={600}
                    className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto"
                    loading="lazy"
                    quality={75}
                  />
               </div>
            </div>
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Hạ tầng <span className="text-gradient">Physical Server</span> mạnh mẽ
              </h2>
              <p className="text-slate-400 text-base md:text-lg mb-6">
                Đáp ứng mọi nhu cầu khắt khe nhất về phần cứng. Máy chủ vật lý Dell/HP chính hãng, đặt tại các Data Center đạt chuẩn Tier 3 quốc tế.
              </p>
              <ul className="space-y-4 mb-8 inline-block text-left">
                <li className="flex items-center text-slate-300">
                  <Cpu className="text-[#f97316] mr-3 shrink-0" /> CPU Intel Xeon Gold / Platinum Scalable
                </li>
                <li className="flex items-center text-slate-300">
                  <Server className="text-[#0ea5e9] mr-3 shrink-0" /> RAM DDR4 ECC Registered
                </li>
                <li className="flex items-center text-slate-300">
                  <Lock className="text-green-500 mr-3 shrink-0" /> 100% Quyền quản trị Root
                </li>
              </ul>
              <div className="flex justify-center lg:justify-start">
                <Link href="/pages/products" className="text-[#f97316] font-bold hover:text-white transition-colors inline-flex items-center">
                    Xem cấu hình chi tiết <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-16 md:py-20 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-4">
            <div 
              className="text-center mb-12 md:mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Khách hàng nói gì về chúng tôi?</h2>
                <p className="text-slate-400">Hơn 10,000+ khách hàng đã tin tưởng sử dụng dịch vụ tại BowLanCloud.</p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Slider Content */}
                <div 
                   key={currentTestimonial}
                   className="relative bg-[#171717] rounded-3xl p-6 md:p-12 border border-white/5 shadow-2xl"
                >
                    <div className="absolute -top-6 left-4 md:left-10 text-6xl text-[#f97316] opacity-20 font-serif">&ldquo;</div>
                    
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <div className="shrink-0">
                            {TESTIMONIALS[currentTestimonial].avatar && (
                              <Image
                                src={TESTIMONIALS[currentTestimonial].avatar}
                                alt={TESTIMONIALS[currentTestimonial].name}
                                width={96}
                                height={96}
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#f97316] p-1"
                                loading="lazy"
                              />
                            )}
                        </div>
                        <div className="grow text-center md:text-left">
                            <p className="text-base md:text-xl text-slate-300 italic mb-6 leading-relaxed">
                                {TESTIMONIALS[currentTestimonial].quote}
                            </p>
                            <div>
                                <h4 className="text-white font-bold text-lg">{TESTIMONIALS[currentTestimonial].name}</h4>
                                <span className="text-[#f97316] text-sm font-medium">{TESTIMONIALS[currentTestimonial].role}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-8">
                    <button 
                        aria-label="Previous Testimonial"
                        onClick={prevTestimonial}
                        className="p-3 rounded-full bg-white/5 hover:bg-[#f97316] text-white transition-all border border-white/10"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        aria-label="Next Testimonial"
                        onClick={nextTestimonial}
                        className="p-3 rounded-full bg-white/5 hover:bg-[#f97316] text-white transition-all border border-white/10"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-r from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 md:w-80 h-64 md:h-80 bg-[#f97316]/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 md:w-80 h-64 md:h-80 bg-[#0ea5e9]/20 rounded-full blur-[100px]"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sẵn sàng triển khai dự án của bạn?</h2>
                  <p className="text-slate-400 text-base md:text-lg">
                    Khởi tạo VPS/Cloud Server ngay lập tức với hệ thống tự động hóa 100%. 
                    Dùng thử miễn phí 3 ngày đầu tiên.
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center md:justify-end">
                   <Link href="/pages/products" className="group flex items-center gap-2 bg-[#f97316] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#ea580c] shadow-lg shadow-[#f97316]/30 transition-all active:scale-95">
                        Đăng Ký Ngay <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;