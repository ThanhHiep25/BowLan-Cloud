
'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Code, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Client-side only
    if (typeof document !== 'undefined') {
      document.title = "Hợp tác cùng BowLan | BowlanCloud";

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Cùng nhau phát triển và chia sẻ lợi nhuận. Hệ thống Affiliate hoa hồng cao nhất thị trường và API mạnh mẽ cho Developer.');
      }
    }
  }, []);


  useEffect(() => {
    // Handle hash-based scrolling for section links
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Timeout to ensure rendering complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <div className="bg-dark min-h-screen mt-10 pb-20">
      {/* Hero Partners */}
      <section className="py-16 md:py-24 bg-linear-to-b from-dark-light to-dark border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Hợp tác cùng <span className="text-[#f97316]">BowLan</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Cùng nhau phát triển và chia sẻ lợi nhuận. Hệ thống Affiliate hoa hồng cao nhất thị trường và API mạnh mẽ cho Developer.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Affiliate Section */}
        <div id="affiliate" className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-20 md:mb-32 scroll-mt-32">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-[#f97316]/10 text-[#f97316] px-4 py-1.5 rounded-full mb-6 border border-[#f97316]/20">
              <DollarSign size={16} />
              <span className="text-sm font-bold uppercase">Affiliate Program</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cộng tác viên bán hàng</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg">
              Kiếm tiền thụ động dễ dàng bằng cách giới thiệu khách hàng sử dụng dịch vụ tại BowLanCloud.
              Hoa hồng trọn đời lên đến <span className="text-white font-bold">20%</span> cho mỗi hóa đơn thanh toán thành công.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-[#f97316] mr-3 shrink-0" />
                Hoa hồng 20% trọn đời khách hàng
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-[#f97316]  mr-3 shrink-0" />
                Rút tiền tự động qua Ngân hàng/Momo (Min 200k)
              </li>
              <li className="flex items-center text-slate-300">
                <CheckCircle className="w-5 h-5 text-[#f97316] mr-3 shrink-0" />
                Cookie lưu trữ 90 ngày, Last Click
              </li>
            </ul>
            <Link href="/pages/affiliate">
              <button 
              type="button"
              aria-label="Register as Affiliate"
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-lg font-bold transition-colors shadow-lg shadow-[#f97316]/20 w-full md:w-auto">
                Đăng ký làm CTV ngay
              </button>
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-dark-light p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#f97316]/20 rounded-full blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
                <div className="bg-dark p-4 md:p-6 rounded-2xl text-center border border-white/5">
                  <Users className="mx-auto h-8 w-8 md:h-10 md:w-10 text-[#0ea5e9] mb-4" />
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-1">1.500+</h4>
                  <span className="text-slate-500 text-xs md:text-sm font-medium">Đối tác hoạt động</span>
                </div>
                <div className="bg-dark p-4 md:p-6 rounded-2xl text-center border border-white/5">
                  <DollarSign className="mx-auto h-8 w-8 md:h-10 md:w-10 text-[#f97316] mb-4" />
                  <h4 className="text-white font-bold text-2xl md:text-3xl mb-1">5 Tỷ+</h4>
                  <span className="text-slate-500 text-xs md:text-sm font-medium">Hoa hồng đã chi trả</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API Section */}
        <div id="api" className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center scroll-mt-32">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-[#0ea5e9]/10 text-[#0ea5e9] px-4 py-1.5 rounded-full mb-6 border border-[#0ea5e9]/20">
              <Code size={16} />
              <span className="text-sm font-bold uppercase">Developer API</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tích hợp API Reseller</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-lg">
              Hệ thống API RESTful đầy đủ tài liệu giúp bạn dễ dàng tích hợp chức năng mua, quản lý VPS/Proxy vào website hoặc ứng dụng quản lý riêng.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button 
              type="button"
              aria-label="View API Documentation"
              className="bg-[#0ea5e9] hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0ea5e9]/20 w-full sm:w-auto">
                Xem tài liệu API <ArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl font-mono text-xs md:text-sm relative group">
              <div className="absolute inset-0 bg-linear-to-r from-[#0ea5e9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="bg-[#2d2d2d] px-4 py-3 flex items-center space-x-2 border-b border-white/10">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-500 ml-3 text-xs">api-client — bash</span>
              </div>
              <div className="p-4 md:p-6 text-slate-300 leading-relaxed overflow-x-auto">
                <p className="text-slate-500 mb-3"># Create a new VPS instance via API</p>
                <div className="whitespace-pre">
                  <p className="mb-4">
                    <span className="text-[#0ea5e9]">curl</span> -X POST https://api.bowlancloud.vn/v1/instances \<br />
                    {'\u00A0\u00A0'}-H <span className="text-green-400">&quot;Authorization: Bearer YOUR_API_KEY&quot;</span> \<br />
                    {'\u00A0\u00A0'}-d <span className="text-yellow-300">{`'{`}</span><br />
                    {'\u00A0\u00A0\u00A0\u00A0'}<span className="text-[#f97316]">&quot;plan&quot;</span>: <span className="text-yellow-300">&quot;vps-business&quot;</span>,<br />
                    {'\u00A0\u00A0\u00A0\u00A0'}<span className="text-[#f97316]">&quot;os&quot;</span>: <span className="text-yellow-300">&quot;ubuntu-22-04&quot;</span>,<br />
                    {'\u00A0\u00A0\u00A0\u00A0'}<span className="text-[#f97316]">&quot;region&quot;</span>: <span className="text-yellow-300">&quot;vn-han&quot;</span><br />
                    {'\u00A0\u00A0'}<span className="text-yellow-300">{`}'`}</span>
                  </p>
                  <div className="border-t border-white/10 my-4 pt-4">
                    <p className="text-green-400 mb-1">{'{'}</p>
                    <p className="ml-4 mb-1"><span className="text-[#f97316]">&quot;id&quot;</span>: <span className="text-yellow-300">&quot;ins-123456&quot;</span>,</p>
                    <p className="ml-4 mb-1"><span className="text-[#f97316]">&quot;status&quot;</span>: <span className="text-yellow-300">&quot;creating&quot;</span>,</p>
                    <p className="ml-4 mb-1"><span className="text-[#f97316]">&quot;ip_address&quot;</span>: <span className="text-yellow-300">&quot;103.123.xxx.xxx&quot;</span></p>
                    <p className="text-green-400">{'}'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
