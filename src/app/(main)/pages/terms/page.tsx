'use client';

import React from 'react';
import { Check, AlertCircle, Lock, Shield, Clock, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSection = motion.section;

interface TermSection {
  id: number;
  title: string;
  icon: React.ReactNode;
  subsections: {
    title: string;
    items: string[];
  }[];
}

const TermsPage: React.FC = () => {
  const sections: TermSection[] = [
    {
      id: 1,
      title: 'Chấp Nhận Điều Khoản',
      icon: <Check className="w-6 h-6" />,
      subsections: [
        {
          title: 'Phạm Vi Áp Dụng',
          items: [
            'Áp dụng cho tất cả khách hàng sử dụng dịch vụ BOWLAN',
            'Áp dụng cho tất cả các loại dịch vụ: Cloud VPS, Máy Chủ Vật Lý, Anti-DDoS, Proxy',
            'Có hiệu lực kể từ thời điểm đăng ký dịch vụ',
          ],
        },
        {
          title: 'Sửa Đổi Điều Khoản',
          items: [
            'BOWLAN có quyền sửa đổi điều khoản bất kỳ lúc nào',
            'Thông báo trước 15 ngày khi có thay đổi quan trọng',
            'Khách hàng tiếp tục sử dụng dịch vụ sau thay đổi = chấp nhận điều khoản mới',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Đăng Ký & Tài Khoản',
      icon: <Lock className="w-6 h-6" />,
      subsections: [
        {
          title: 'Yêu Cầu Đăng Ký',
          items: [
            'Phải từ đủ 18 tuổi trở lên',
            'Cung cấp thông tin chính xác và đầy đủ',
            'Một email chỉ đăng ký một tài khoản',
            'Chịu trách nhiệm về tất cả hoạt động trên tài khoản',
          ],
        },
        {
          title: 'Bảo Mật Tài Khoản',
          items: [
            'Bảo mật thông tin đăng nhập tài khoản',
            'Không chia sẻ tài khoản cho người khác',
            'Thông báo ngay khi phát hiện truy cập trái phép',
            'BOWLAN không chịu trách nhiệm về thiệt hại do lộ mật khẩu',
          ],
        },
        {
          title: 'Đình Chỉ Tài Khoản',
          items: [
            'BOWLAN có quyền đình chỉ/xóa tài khoản vi phạm điều khoản',
            'Tài khoản không hoạt động quá 12 tháng có thể bị xóa',
            'Thông báo trước 7 ngày khi đình chỉ tài khoản',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Nội Dung Được Phép',
      icon: <Check className="w-6 h-6" />,
      subsections: [
        {
          title: 'Mục Đích Sử Dụng Hợp Pháp',
          items: [
            'Website thương mại điện tử hợp pháp',
            'Blog, diễn đàn, mạng xã hội',
            'Ứng dụng web và mobile apps',
            'Game server và streaming server',
            'Email server doanh nghiệp',
            'Backup và lưu trữ dữ liệu',
            'Development và Testing environment',
          ],
        },
        {
          title: 'Quy Định Về Tài Nguyên',
          items: [
            'Sử dụng tài nguyên trong phạm vi gói đã đăng ký',
            'Không abuse CPU, RAM, Bandwidth',
            'Mining cryptocurrency bị cấm trên Cloud VPS',
            'Nâng cấp gói khi cần thêm tài nguyên',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Nội Dung Bị Cấm',
      icon: <AlertCircle className="w-6 h-6" />,
      subsections: [
        {
          title: 'Nội Dung Bất Hợp Pháp',
          items: [
            'Vi phạm pháp luật Việt Nam',
            'Nội dung khiêu dâm, bạo lực',
            'Đánh bạc, cờ bạc trực tuyến',
            'Buôn bán hàng cấm, ma túy',
            'Vi phạm bản quyền, sở hữu trí tuệ',
          ],
        },
        {
          title: 'Hoạt Động Tấn Công',
          items: [
            'Spam email, SMS',
            'Phishing, lừa đảo',
            'DDoS, tấn công mạng',
            'Brute force, port scanning',
            'Malware, virus, trojan',
            'Proxy ẩn danh cho mục đích xấu',
          ],
        },
        {
          title: 'Hậu Quả Vi Phạm',
          items: [
            'Cảnh cáo lần 1: Yêu cầu gỡ bỏ nội dung vi phạm',
            'Vi phạm lần 2: Tạm ngưng dịch vụ 24h',
            'Vi phạm nghiêm trọng: Xóa dịch vụ, không hoàn tiền',
            'Báo cơ quan chức năng nếu vi phạm pháp luật',
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Thanh Toán & Gia Hạn',
      icon: <Clock className="w-6 h-6" />,
      subsections: [
        {
          title: 'Phương Thức Thanh Toán',
          items: [
            'Chuyển khoản ngân hàng',
            'Ví điện tử (Momo, ZaloPay)',
            'Thẻ ATM/Visa/Mastercard',
          ],
        },
        {
          title: 'Chu Kỳ Thanh Toán',
          items: [
            'Thanh toán trước khi sử dụng dịch vụ',
            'Các gói: 1 tháng, 3 tháng, 6 tháng, 12 tháng',
            'Ưu đãi khi thanh toán dài hạn',
          ],
        },
        {
          title: 'Gia Hạn Dịch Vụ',
          items: [
            'Thông báo nhắc gia hạn trước 7 ngày',
            'Dịch vụ bị tạm ngưng sau 3 ngày hết hạn',
            'Dữ liệu bị xóa sau 7 ngày không gia hạn',
            'Không tự động gia hạn',
          ],
        },
      ],
    },
    {
      id: 6,
      title: 'Trách Nhiệm Của BOWLAN',
      icon: <Shield className="w-6 h-6" />,
      subsections: [
        {
          title: 'BOWLAN Cam Kết',
          items: [
            'Cung cấp dịch vụ đúng như mô tả',
            'Duy trì uptime 99.99%',
            'Hỗ trợ kỹ thuật 24/7',
            'Bảo mật dữ liệu khách hàng',
            'Backup tự động hàng ngày',
          ],
        },
        {
          title: 'BOWLAN Không Chịu Trách Nhiệm',
          items: [
            'Thiệt hại do khách hàng cấu hình sai',
            'Mất dữ liệu do khách hàng xóa nhầm',
            'Tấn công DDoS lớn hơn cam kết',
            'Sự cố do bên thứ ba (nhà mạng, datacenter)',
            'Nội dung và dữ liệu khách hàng upload',
          ],
        },
      ],
    },
    {
      id: 7,
      title: 'Trách Nhiệm Của Khách Hàng',
      icon: <FileText className="w-6 h-6" />,
      subsections: [
        {
          title: 'Khách Hàng Phải',
          items: [
            'Sử dụng dịch vụ đúng mục đích',
            'Tuân thủ pháp luật Việt Nam',
            'Bảo mật thông tin đăng nhập',
            'Cập nhật hệ điều hành, bảo mật',
            'Sao lưu dữ liệu quan trọng',
            'Thanh toán đúng hạn',
          ],
        },
        {
          title: 'Khách Hàng Chịu Trách Nhiệm',
          items: [
            'Toàn bộ nội dung trên server',
            'Vi phạm pháp luật từ server',
            'Thiệt hại do cấu hình sai',
            'Bồi thường nếu gây thiệt hại cho BOWLAN',
          ],
        },
      ],
    },
    {
      id: 8,
      title: 'Giới Hạn Trách Nhiệm',
      icon: <AlertCircle className="w-6 h-6" />,
      subsections: [
        {
          title: 'Giới Hạn Bồi Thường',
          items: [
            'Bồi thường tối đa = giá trị dịch vụ trong tháng đó',
            'Không bồi thường thiệt hại gián tiếp',
            'Không bồi thường cho downtime do bảo trì đã thông báo',
          ],
        },
        {
          title: 'Force Majeure (Bất Khả Kháng)',
          items: [
            'Thiên tai, hỏa hoạn, động đất',
            'Chiến tranh, bạo loạn',
            'Sự cố hạ tầng quốc gia',
            'Yêu cầu từ cơ quan nhà nước',
          ],
        },
      ],
    },
    {
      id: 9,
      title: 'Chấm Dứt Dịch Vụ',
      icon: <Clock className="w-6 h-6" />,
      subsections: [
        {
          title: 'Khách Hàng Chấm Dứt',
          items: [
            'Có thể hủy dịch vụ bất kỳ lúc nào',
            'Không hoàn tiền sau 3 ngày đầu',
            'Dữ liệu bị xóa sau khi hủy',
          ],
        },
        {
          title: 'BOWLAN Chấm Dứt',
          items: [
            'Vi phạm điều khoản nghiêm trọng',
            'Không thanh toán sau 7 ngày hết hạn',
            'Yêu cầu từ cơ quan pháp luật',
            'Thông báo trước 7 ngày (trừ vi phạm nghiêm trọng)',
          ],
        },
      ],
    },
    {
      id: 10,
      title: 'Quy Định Khác',
      icon: <FileText className="w-6 h-6" />,
      subsections: [
        {
          title: 'Luật Áp Dụng',
          items: [
            'Điều khoản này tuân theo pháp luật Việt Nam',
            'Tranh chấp giải quyết tại Việt Nam',
          ],
        },
        {
          title: 'Liên Hệ & Hỗ Trợ',
          items: [
            'Email: support@bowlan.net',
            'Telegram: @Bowlan',
            'Hotline: 0937.349.707',
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <MotionSection
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Điều Khoản <span className="text-[#f97316]">Sử Dụng</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Quy định và trách nhiệm khi sử dụng dịch vụ BOWLAN
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Cập nhật lần cuối: 16/09/2025
          </p>
        </MotionSection>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, idx) => (
            <MotionDiv
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#171717] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#f97316]/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#f97316]/10"
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#f97316]/20 text-[#f97316] hover:bg-[#f97316]/30 transition-colors">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {section.id}. {section.title}
                  </h2>
                </div>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.subsections.map((subsection, subIdx) => (
                  <MotionDiv
                    key={subIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (idx * 0.05) + (subIdx * 0.05) }}
                    className="bg-[#0a0a0a]/50 border border-white/5 rounded-2xl p-5 hover:border-[#0ea5e9]/20 transition-all duration-300 hover:bg-[#0a0a0a]/80"
                  >
                    <h3 className="text-lg font-bold text-[#0ea5e9] mb-4 flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#f97316] rounded-full"></span>
                      {subsection.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {subsection.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex gap-3 items-start text-slate-300 text-sm leading-relaxed"
                        >
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#f97316]/60 mt-2"></span>
                          <span className="hover:text-slate-200 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          ))}

          {/* Footer Info */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Xác Nhận Chấp Nhận</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Bằng việc sử dụng dịch vụ BOWLAN, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý với tất cả các điều khoản và điều kiện nêu trên. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng tôi.
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Có hiệu lực từ:</strong> 16/09/2025
              </p>
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
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
