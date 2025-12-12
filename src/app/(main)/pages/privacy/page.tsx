'use client';

import React from 'react';
import { Shield, Database, Lock, Eye, Cookie} from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSection = motion.section;

interface PrivacySection {
  id: number;
  title: string;
  icon: React.ReactNode;
  subsections: {
    title: string;
    items: string[];
  }[];
}

const PrivacyPage: React.FC = () => {
  const sections: PrivacySection[] = [
    {
      id: 1,
      title: 'Cam Kết Bảo Mật',
      icon: <Shield className="w-6 h-6" />,
      subsections: [
        {
          title: 'Công Nghệ Bảo Mật',
          items: [
            'Mã hóa dữ liệu theo tiêu chuẩn AES-256',
            'Firewall Layer 4 và Layer 7 tiên tiến',
            'Hệ thống phát hiện xâm nhập (IDS/IPS)',
            'Giám sát 24/7 bởi hệ thống AI',
          ],
        },
        {
          title: 'Backup & Khôi Phục',
          items: [
            'Backup tự động hàng ngày',
            'Lưu trữ backup tại nhiều địa điểm khác nhau',
            'Khôi phục dữ liệu nhanh chóng khi cần thiết',
            'Thời gian lưu trữ backup: tối thiểu 30 ngày',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Thu Thập Thông Tin',
      icon: <Database className="w-6 h-6" />,
      subsections: [
        {
          title: 'Thông Tin Chúng Tôi Thu Thập',
          items: [
            'Họ tên và thông tin liên hệ',
            'Địa chỉ email và số điện thoại',
            'Thông tin thanh toán',
            'Địa chỉ IP và thông tin truy cập',
          ],
        },
        {
          title: 'Mục Đích Thu Thập',
          items: [
            'Cung cấp và quản lý dịch vụ',
            'Xử lý thanh toán và xuất hóa đơn',
            'Hỗ trợ kỹ thuật và chăm sóc khách hàng',
            'Gửi thông báo về dịch vụ và bảo trì',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Quyền Riêng Tư Khách Hàng',
      icon: <Eye className="w-6 h-6" />,
      subsections: [
        {
          title: 'Cam Kết Không Chia Sẻ',
          items: [
            'Không chia sẻ thông tin khách hàng với bên thứ ba',
            'Không bán hoặc cho thuê dữ liệu cá nhân',
            'Chỉ tiết lộ khi có yêu cầu từ cơ quan pháp luật',
          ],
        },
        {
          title: 'Quyền Của Khách Hàng',
          items: [
            'Quyền truy cập và xem thông tin cá nhân',
            'Quyền chỉnh sửa thông tin không chính xác',
            'Quyền yêu cầu xóa dữ liệu cá nhân',
            'Quyền từ chối nhận email marketing',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Bảo Mật Dữ Liệu',
      icon: <Lock className="w-6 h-6" />,
      subsections: [
        {
          title: 'Lưu Trữ An Toàn',
          items: [
            'Dữ liệu được lưu trữ trên server bảo mật cao',
            'Trung tâm dữ liệu đạt chuẩn Tier III',
            'Kiểm soát truy cập nghiêm ngặt',
            'Mã hóa dữ liệu khi truyền tải',
          ],
        },
        {
          title: 'Bảo Mật Tài Khoản',
          items: [
            'Khuyến khích sử dụng mật khẩu mạnh',
            'Hỗ trợ xác thực hai yếu tố (2FA)',
            'Cảnh báo đăng nhập bất thường',
            'Tự động đăng xuất sau thời gian không hoạt động',
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Cookies & Tracking',
      icon: <Cookie className="w-6 h-6" />,
      subsections: [
        {
          title: 'Sử Dụng Cookies',
          items: [
            'Cookies để ghi nhớ đăng nhập',
            'Cookies phân tích để cải thiện dịch vụ',
            'Khách hàng có thể tắt cookies trong trình duyệt',
          ],
        },
        {
          title: 'Google Analytics',
          items: [
            'Sử dụng Google Analytics để phân tích lưu lượng',
            'Dữ liệu được ẩn danh hóa',
            'Không thu thập thông tin cá nhân nhận dạng',
          ],
        },
      ],
    }
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-[#0a0a0a] to-[#171717] mt-10 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chính Sách Bảo Mật
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cam kết bảo vệ thông tin và quyền riêng tư của khách hàng
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <MotionSection
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-[#171717] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-[#f97316]/10 transition-all duration-300"
            >
              {/* Section Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#f97316]">{section.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {section.id}. {section.title}
                </h2>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.subsections.map((subsection, subIdx) => (
                  <MotionDiv
                    key={`${section.id}-${subIdx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx * 0.05) + (subIdx * 0.05) }}
                    viewport={{ once: true }}
                    className="bg-[#0a0a0a]/50 border border-white/5 rounded-2xl p-5 hover:border-[#0ea5e9]/20 hover:bg-[#0a0a0a]/80 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-1 h-5 bg-[#f97316] rounded-full shrink-0 mt-1"></div>
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {subsection.title}
                      </h3>
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3">
                      {subsection.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                        >
                          <span className="w-1.5 h-1.5 bg-[#0ea5e9]/50 rounded-full shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </MotionDiv>
                ))}
              </div>

              
            </MotionSection>
          ))}
        </div>
         {/* Contact Section */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 mb-6">
                Nếu bạn có câu hỏi về điều khoản này, vui lòng liên hệ với chúng tôi:
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-white">
                <div className="flex items-center gap-2 bg-[#171717] px-4 py-2 rounded-lg border border-white/10">
                 
                  <a
                    href="mailto:support@bowlan.net"
                    className="hover:text-[#f97316] transition-colors"
                  >
                    support@bowlan.net
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-[#171717] px-4 py-2 rounded-lg border border-white/10">
                  
                  <a
                    href="https://t.me/Bowlan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0ea5e9] transition-colors"
                  >
                    @Bowlan
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-[#171717] px-4 py-2 rounded-lg border border-white/10">
                 
                  <a href="tel:0937349707" className="hover:text-[#f97316] transition-colors">
                    0937.349.707
                  </a>
                </div>
              </div>
            </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
