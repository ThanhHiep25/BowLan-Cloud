
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-12 md:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className=" p-1.5 rounded-lg">
                <Image src="/logo.png" alt="BowlanCloud Logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-2xl font-bold text-white">BowlanCloud</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Nhà cung cấp giải pháp hạ tầng Cloud Server, VPS và Anti-DDoS chất lượng cao hàng đầu Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" aria-label="Facebook" title="Facebook" className="text-slate-400 hover:text-[#f97316] transition-colors bg-white/5 p-2 rounded-full"><Facebook size={18} /></a>
              <a href="https://twitter.com/" aria-label="Twitter" title="Twitter" className="text-slate-400 hover:text-[#f97316] transition-colors bg-white/5 p-2 rounded-full"><Twitter size={18} /></a>
              <a href="https://www.linkedin.com/" aria-label="LinkedIn" title="LinkedIn"  className="text-slate-400 hover:text-[#f97316]   transition-colors bg-white/5 p-2 rounded-full"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-[#f97316] pl-3">Dịch vụ</h3>
            <ul className="space-y-3">
              <li><Link href="/pages/products?tab=Cloud%20Server" className="text-slate-400 hover:text-[#f97316] text-sm transition-colors">Cloud Server NVMe</Link></li>
              <li><Link href="/pages/products?tab=VPS" className="text-slate-400 hover:text-[#f97316] text-sm transition-colors">VPS Hosting Giá Rẻ</Link></li>
              <li><Link href="/pages/products?tab=Proxy%20Server" className="text-slate-400 hover:text-[#f97316] text-sm transition-colors">Private Proxy IPv4</Link></li>
              <li><Link href="/pages/products?tab=Máy%20chủ%20vật%20lý" className="text-slate-400 hover:text-[#f97316] text-sm transition-colors">Thuê Máy Chủ Vật Lý</Link></li>
              <li><Link href="/pages/products?tab=Anti-DDoS" className="text-slate-400 hover:text-[#f97316] text-sm transition-colors">Anti-DDoS Game/Web</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-[#0ea5e9] pl-3">Hỗ trợ</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Trung tâm trợ giúp (Help Center)</a></li>
              <li><Link href="/pages/commitment" className="text-slate-400 hover:text-white text-sm transition-colors">Cam kết dịch vụ</Link></li>
              <li><Link href="/pages/refund" className="text-slate-400 hover:text-white text-sm transition-colors">Chính sách hoàn tiền</Link></li>
              <li><Link href="/pages/partners#api" className="text-slate-400 hover:text-white text-sm transition-colors">Tài liệu API Developer</Link></li>
              <li><Link href="/pages/status" className="text-slate-400 hover:text-white text-sm transition-colors">Trạng thái hệ thống (Status)</Link></li>
              <li><Link href="/pages/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="/pages/terms" className="text-slate-400 hover:text-white text-sm transition-colors">Điều khoản sử dụng</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-green-500 pl-3">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#f97316] shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Phường Lái Thiêu, Thành Phố Hồ Chí Minh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#f97316] shrink-0" />
                <span className="text-white font-bold text-sm">0937.349.707</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#f97316] shrink-0" />
                <span className="text-slate-400 text-sm">support@bowlan.net</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Bowlan Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
