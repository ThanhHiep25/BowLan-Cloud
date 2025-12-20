'use client';

import React from 'react';
import { CheckCircle2, Server, Shield, Eye, Settings, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionSection = motion.section;

interface CommitmentSection {
  id: number;
  title: string;
  icon: React.ReactNode;
  subsections: {
    title: string;
    items: string[];
  }[];
}

const CommitmentPage: React.FC = () => {
  const sections: CommitmentSection[] = [
    {
      id: 1,
      title: 'Cam Kết Uptime 99.99%',
      icon: <CheckCircle2 className="w-6 h-6" />,
      subsections: [
        {
          title: 'Cam Kết Thời Gian Hoạt Động',
          items: [
            'Uptime 99.99% cho tất cả các gói dịch vụ',
            'Tính toán downtime tối đa: 4.38 giờ/năm',
            'Giám sát 24/7 bởi hệ thống tự động',
            'Cảnh báo sớm khi phát hiện vấn đề',
          ],
        },
        {
          title: 'Bảo Trì & Nâng Cấp',
          items: [
            'Bảo trì định kỳ được thông báo trước tối thiểu 24 giờ',
            'Bảo trì thường được thực hiện vào lúc 2-4 giờ sáng',
            'Thời gian bảo trì tối đa: 2 giờ/lần',
            'Không tính thời gian bảo trì đã thông báo vào downtime',
          ],
        },
        {
          title: 'Bồi Thường SLA',
          items: [
            'Uptime < 99.99%: Bồi thường 10% giá trị dịch vụ tháng đó',
            'Uptime < 99.9%: Bồi thường 25% giá trị dịch vụ tháng đó',
            'Uptime < 99%: Bồi thường 50% giá trị dịch vụ tháng đó',
            'Bồi thường bằng credit hoặc gia hạn thêm thời gian sử dụng',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Cam Kết Hỗ Trợ Kỹ Thuật',
      icon: <Headphones className="w-6 h-6" />,
      subsections: [
        {
          title: 'Hỗ Trợ 24/7',
          items: [
            'Hỗ trợ kỹ thuật 24 giờ/ngày, 7 ngày/tuần, 365 ngày/năm',
            'Không nghỉ lễ, Tết, các ngày cuối tuần',
            'Đội ngũ kỹ thuật viên luôn sẵn sàng',
          ],
        },
        {
          title: 'Thời Gian Phản Hồi',
          items: [
            'Telegram & Zalo: Phản hồi trong 15 phút',
            'Email: Phản hồi trong 30 phút',
            'Ticket: Phản hồi trong 1 giờ',
            'Sự cố khẩn cấp: Xử lý ngay lập tức',
          ],
        },
        {
          title: 'Kênh Hỗ Trợ',
          items: [
            'Telegram: @Bowlan (Ưu tiên nhất)',
            'Zalo: 0937.349.707',
            'Facebook: facebook.com/Baolan03',
            'Email: support@bowlan.net',
            'Hotline: 0937.349.707',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Cam Kết Chất Lượng Phần Cứng',
      icon: <Server className="w-6 h-6" />,
      subsections: [
        {
          title: 'Hạ Tầng Máy Chủ',
          items: [
            'CPU Intel Xeon Gold 6133 thế hệ mới nhất',
            'RAM ECC DDR4 Samsung chính hãng',
            '100% ổ cứng SSD NVMe Samsung DC',
            'Network Card 10Gbps',
          ],
        },
        {
          title: 'Trung Tâm Dữ Liệu',
          items: [
            'Datacenter FPT Telecom - Tiêu chuẩn Tier III',
            'Cấu hình điện lưới 10kV dự phòng N+1',
            'Máy phát điện dự phòng N+1',
            'Hệ thống làm mát hiện đại',
            'An ninh vật lý 24/7',
          ],
        },
        {
          title: 'Đường Truyền Mạng',
          items: [
            'Đường truyền quốc tế 100Gbps',
            'Kết nối peering 3 nhà mạng lớn VN (Viettel, VNPT, FPT)',
            'Tốc độ truy cập nhanh từ mọi nơi',
            'Chống chịu tấn công DDoS Layer 4 lên đến 10Gbps',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Cam Kết Bảo Mật',
      icon: <Shield className="w-6 h-6" />,
      subsections: [
        {
          title: 'Bảo Mật Hệ Thống',
          items: [
            'Firewall Layer 4 và Layer 7 tiên tiến',
            'Hệ thống phát hiện và ngăn chặn xâm nhập (IDS/IPS)',
            'Giám sát bảo mật 24/7 bởi AI',
            'Cập nhật bản vá bảo mật thường xuyên',
          ],
        },
        {
          title: 'Bảo Mật Dữ Liệu',
          items: [
            'Mã hóa dữ liệu theo chuẩn AES-256',
            'Backup tự động hàng ngày',
            'Lưu trữ backup tại nhiều địa điểm',
            'Khôi phục dữ liệu nhanh chóng khi cần',
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Cam Kết Minh Bạch',
      icon: <Eye className="w-6 h-6" />,
      subsections: [
        {
          title: 'Về Giá Cả',
          items: [
            'Giá cả rõ ràng, không phí ẩn',
            'Không tăng giá đột ngột',
            'Thông báo trước khi có thay đổi giá',
            'Ưu đãi cho khách hàng lâu năm',
          ],
        },
        {
          title: 'Về Tài Nguyên',
          items: [
            'Cung cấp đúng tài nguyên như cam kết',
            'Không overselling (bán quá tải nguyên)',
            'Khách hàng có thể kiểm tra tài nguyên bất kỳ lúc nào',
            'Nâng cấp/hạ cấp linh hoạt',
          ],
        },
        {
          title: 'Về Sự Cố',
          items: [
            'Thông báo ngay khi phát hiện sự cố',
            'Cập nhật tiến độ xử lý liên tục',
            'Giải thích rõ nguyên nhân sự cố',
            'Biện pháp khắc phục lâu dài',
          ],
        },
      ],
    },
    {
      id: 6,
      title: 'Cam Kết Chất Lượng Dịch Vụ',
      icon: <Settings className="w-6 h-6" />,
      subsections: [
        {
          title: 'Quản Lý Dịch Vụ',
          items: [
            'Panel quản lý dễ sử dụng',
            'Toàn quyền root/administrator access',
            'Tự cài đặt OS bất kỳ lúc nào',
            'Theo dõi tài nguyên real-time',
          ],
        },
        {
          title: 'Tính Năng Bổ Sung',
          items: [
            'Snapshot & Backup miễn phí',
            'Firewall tùy chỉnh',
            'Monitoring & Alert',
            'API đầy đủ cho automation',
          ],
        },
        {
          title: 'Nâng Cấp & Mở Rộng',
          items: [
            'Nâng cấp tài nguyên dễ dàng',
            'Scale up/down theo nhu cầu',
            'Không downtime khi nâng cấp',
            'Thanh toán chênh lệch linh hoạt',
          ],
        },
      ],
    }
  ];

  return (
    <main className="min-h-screen mt-10 bg-linear-to-b from-[#0a0a0a] to-[#171717] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f97316] mb-4">
            Cam Kết Dịch Vụ
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Chất lượng dịch vụ đẳng cấp - Hỗ trợ tận tâm 24/7
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <MotionSection
              key={section.id}
              className="bg-[#171717] border border-white/10 rounded-3xl p-6 md:p-8  transition-all duration-300"
            >
              {/* Section Title */}
              <div className="flex items-center gap-4 mb-6">
               
                <h2 className="text-2xl md:text-3xl font-bold text-[#f97316]">
                  {section.id}. {section.title}
                </h2>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 gap-6">
                {section.subsections.map((subsection, subIdx) => (
                  <MotionDiv
                    key={`${section.id}-${subIdx}`}
                    className="rounded-2xl p-5  transition-all duration-300"
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
                          <span className="w-1.5 h-1.5 bg-white rounded-full shrink-0 mt-2"></span>
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

export default CommitmentPage;
