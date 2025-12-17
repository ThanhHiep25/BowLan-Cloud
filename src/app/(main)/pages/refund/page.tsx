'use client';

import React from 'react';
import { RefreshCw, FileCheck, Clock, AlertCircle, HelpCircle, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSection = motion.section;

interface RefundSection {
  id: number;
  title: string;
  icon: React.ReactNode;
  subsections: {
    title: string;
    items: string[];
  }[];
}

const RefundPolicyPage: React.FC = () => {
  const sections: RefundSection[] = [
    {
      id: 1,
      title: 'Chính Sách Trải Nghiệm 3 Ngày',
      icon: <RefreshCw className="w-6 h-6" />,
      subsections: [
        {
          title: 'Điều Kiện Áp Dụng',
          items: [
            'Áp dụng cho tất cả khách hàng lần đầu sử dụng dịch vụ BOWLAN',
            'Áp dụng cho các gói Cloud VPS và Máy Chủ Vật Lý',
            'Thời gian trải nghiệm: 3 ngày kể từ khi kích hoạt dịch vụ',
            'Khách hàng chưa vi phạm điều khoản sử dụng',
          ],
        },
        {
          title: 'Quyền Lợi Khách Hàng',
          items: [
            'Toàn quyền quản trị server trong thời gian trải nghiệm',
            'Hỗ trợ kỹ thuật 24/7 miễn phí',
            'Hoàn tiền 100% nếu không hài lòng trong 3 ngày đầu',
            'Không cần lý do cụ thể để yêu cầu hoàn tiền',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Điều Kiện Hoàn Tiền',
      icon: <FileCheck className="w-6 h-6" />,
      subsections: [
        {
          title: 'Các Trường Hợp Được Hoàn Tiền',
          items: [
            'Yêu cầu hoàn tiền trong vòng 3 ngày đầu sử dụng',
            'Dịch vụ không đáp ứng được nhu cầu sử dụng',
            'Chất lượng dịch vụ không như mô tả',
            'Khách hàng muốn chuyển sang gói dịch vụ khác',
          ],
        },
        {
          title: 'Các Trường Hợp Không Được Hoàn Tiền',
          items: [
            'Yêu cầu hoàn tiền sau 3 ngày sử dụng dịch vụ',
            'Dịch vụ đã sử dụng quá 50% tài nguyên cam kết',
            'Vi phạm điều khoản sử dụng (spam, DDoS, nội dung bất hợp pháp)',
            'Dịch vụ bị đình chỉ do vi phạm chính sách',
            'Dịch vụ Add-on hoặc dịch vụ bổ sung',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Quy Trình Hoàn Tiền',
      icon: <DollarSign className="w-6 h-6" />,
      subsections: [
        {
          title: 'Bước 1: Liên Hệ Yêu Cầu',
          items: [
            'Liên hệ bộ phận hỗ trợ qua Telegram: @Bowlan',
            'Hoặc gửi email đến: support@bowlan.net',
            'Hoặc gọi Hotline: 0937.349.707',
          ],
        },
        {
          title: 'Bước 2: Cung Cấp Thông Tin',
          items: [
            'Mã đơn hàng hoặc ID dịch vụ',
            'Email đăng ký tài khoản',
            'Lý do muốn hoàn tiền (tùy chọn)',
            'Thông tin tài khoản nhận hoàn tiền',
          ],
        },
        {
          title: 'Bước 3: Xử Lý & Hoàn Tiền',
          items: [
            'Thời gian xử lý: 1-3 ngày làm việc',
            'Hoàn tiền qua phương thức thanh toán ban đầu',
            'Nếu thanh toán qua chuyển khoản: hoàn về tài khoản ngân hàng',
            'Nếu thanh toán qua ví điện tử: hoàn về ví điện tử',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Thời Gian Hoàn Tiền',
      icon: <Clock className="w-6 h-6" />,
      subsections: [
        {
          title: 'Thời Gian Xử Lý',
          items: [
            'Xác nhận yêu cầu: Trong vòng 24 giờ',
            'Xử lý hoàn tiền: 1-3 ngày làm việc',
            'Thời gian tiền về tài khoản: 3-7 ngày làm việc (tùy ngân hàng)',
          ],
        },
        {
          title: 'Phương Thức Hoàn Tiền',
          items: [
            'Chuyển khoản ngân hàng: 3-5 ngày làm việc',
            'Ví điện tử (Momo, ZaloPay): 1-2 ngày làm việc',
            'Thẻ tín dụng: 5-7 ngày làm việc',
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Lưu Ý Quan Trọng',
      icon: <AlertCircle className="w-6 h-6" />,
      subsections: [
        {
          title: 'Về Dữ Liệu',
          items: [
            'Vui lòng sao lưu dữ liệu trước khi yêu cầu hoàn tiền',
            'Dữ liệu sẽ bị xóa sau khi hoàn tất hoàn tiền',
            'BOWLAN không chịu trách nhiệm về dữ liệu sau khi hủy dịch vụ',
          ],
        },
        {
          title: 'Về Dịch Vụ',
          items: [
            'Dịch vụ sẽ bị đình chỉ ngay sau khi hoàn tiền',
            'Không thể khôi phục dịch vụ sau khi đã hoàn tiền',
            'Khách hàng có thể đăng ký dịch vụ mới bất kỳ lúc nào',
          ],
        },
      ],
    },
    {
      id: 6,
      title: 'Câu Hỏi Thường Gặp',
      icon: <HelpCircle className="w-6 h-6" />,
      subsections: [
        {
          title: 'Các Câu Hỏi Phổ Biến',
          items: [
            'Q: Tôi có thể hoàn tiền sau 3 ngày không? - Chính sách hoàn tiền 100% chỉ áp dụng trong 3 ngày đầu. Sau thời gian này, bạn có thể liên hệ với bộ phận hỗ trợ để được tư vấn các giải pháp khác.',
            'Q: Hoàn tiền có mất phí không? - Không, hoàn tiền 100% không mất bất kỳ khoản phí nào trong 3 ngày đầu.',
            'Q: Tôi có thể sử dụng dịch vụ lại sau khi hoàn tiền không? - Có, bạn hoàn toàn có thể đăng ký và sử dụng dịch vụ của BOWLAN bất kỳ lúc nào.',
          ],
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen mt-10 bg-linear-to-b from-[#0a0a0a] to-[#171717] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chính Sách Hoàn Tiền
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trải nghiệm 3 ngày miễn phí - Hoàn tiền 100% nếu không hài lòng
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <MotionSection
              key={section.id}
              className="bg-[#171717] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#f97316]/30 hover:shadow-xl hover:shadow-[#f97316]/10 transition-all duration-300"
            >
              {/* Section Title */}
              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {section.id}. {section.title}
                </h2>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 gap-6">
                {section.subsections.map((subsection, subIdx) => (
                  <MotionDiv
                    key={`${section.id}-${subIdx}`}
                    className="rounded-2xl p-5 hover:border-[#0ea5e9]/20 hover:bg-[#0a0a0a]/80 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-1 h-5 bg-[#f97316] rounded-full shrink-0 mt-1"></div>
                      <h3 className="text-xl font-semibold text-white">
                        {subsection.title}
                      </h3>
                    </div>

                    {/* Items List */}
                    <ul className="space-y-3">
                      {subsection.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className="flex items-start gap-3 text-gray-300 text-lg"
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

export default RefundPolicyPage;
