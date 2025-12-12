
import React from 'react';
import Link from 'next/link';
import { Check, Server, Shield, Globe, Cpu, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProductPlan } from '../../../types';

const MotionDiv = motion.div;
const MotionButton = motion.button;

interface ServiceCardProps {
  plan: ProductPlan;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ plan }) => {
  const getIcon = () => {
    switch (plan.type) {
      case 'Cloud Server': return <Server className="h-10 w-10 text-[#0ea5e9]" />;
      case 'VPS': return <Cpu className="h-10 w-10 text-[#f97316]" />;
      case 'Proxy Server': return <Globe className="h-10 w-10 text-green-400" />;
      case 'Anti-DDoS': return <Shield className="h-10 w-10 text-red-500" />;
      case 'Máy chủ vật lý': return <Box className="h-10 w-10 text-orange-300" />;
      default: return <Server className="h-10 w-10 text-white" />;
    }
  };

  return (
    <MotionDiv 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className={`relative flex flex-col rounded-2xl p-6 md:p-8 border group h-full z-0 hover:z-20 transition-colors ${
        plan.popular 
          ? 'bg-[#121212] border-[#f97316] shadow-xl shadow-[#f97316]/10' 
          : 'bg-[#171717] border-white/5'
      }`}
    >
      {/* Hover Gradient Overlay - Animated via CSS for performance, triggered by parent hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#f97316]/10 via-transparent to-[#0ea5e9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Border Glow Effect */}
      <div className="absolute inset-0 rounded-2xl border border-[#f97316]/0 group-hover:border-[#f97316]/50 transition-colors duration-500 pointer-events-none shadow-[0_0_0_0_rgba(249,115,22,0)] group-hover:shadow-[inset_0_0_20px_rgba(249,115,22,0.1)]" />

      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-[#f97316] to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-30 whitespace-nowrap">
          Bán Chạy Nhất
        </div>
      )}

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col h-full">
        <MotionDiv 
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="mb-6 bg-[#0a0a0a] w-16 h-16 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-[#f97316]/30 transition-colors duration-500"
        >
          {getIcon()}
        </MotionDiv>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f97316] transition-colors duration-300">{plan.name}</h3>
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight group-hover:text-shadow-lg transition-all duration-300">{plan.price.split('/')[0]}</span>
            <span className="text-slate-500 text-sm font-medium ml-1">/{plan.price.split('/')[1]}</span>
          </div>
        </div>

        <div className="space-y-4 mb-8 grow">
          {plan.cpu !== 'N/A' && (
            <div className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors duration-300">
              <span className="text-slate-400 text-sm">CPU</span>
              <span className="text-white font-semibold text-sm">{plan.cpu}</span>
            </div>
          )}
          {plan.ram !== 'N/A' && (
            <div className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors duration-300">
              <span className="text-slate-400 text-sm">RAM</span>
              <span className="text-white font-semibold text-sm">{plan.ram}</span>
            </div>
          )}
          {plan.disk !== 'N/A' && (
            <div className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors duration-300">
              <span className="text-slate-400 text-sm">Lưu trữ</span>
              <span className="text-white font-semibold text-sm">{plan.disk}</span>
            </div>
          )}
          <div className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors duration-300">
            <span className="text-slate-400 text-sm">Băng thông</span>
            <span className="text-white font-semibold text-sm">{plan.bandwidth}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-[#f97316] mr-2 shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-slate-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href={`/pages/products/${plan.id}`} className="block mt-auto">
            <MotionButton 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label='Configure and Order Button'
            className={`w-full py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-colors duration-300 ${
                plan.popular
                ? 'bg-[#f97316] hover:bg-[#ea580c] text-white shadow-lg shadow-[#f97316]/20 hover:shadow-[#f97316]/40'
                : 'bg-white/5 hover:bg-[#f97316] hover:text-white text-slate-300 border border-white/10 hover:border-[#f97316]'
            }`}
            >
            Cấu hình & Đăng ký
            </MotionButton>
        </Link>
      </div>
    </MotionDiv>
  );
};

export default ServiceCard;
