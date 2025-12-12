'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, Server, Globe, Clock, CheckCircle, Database, Shield, Loader2, CreditCard } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { PRODUCT_PLANS } from '../../../../../../constants';


const OS_OPTIONS = [
  { id: 'ubuntu-22', name: 'Ubuntu 22.04 LTS', type: 'linux' },
  { id: 'ubuntu-20', name: 'Ubuntu 20.04 LTS', type: 'linux' },
  { id: 'centos-7', name: 'CentOS 7.9', type: 'linux' },
  { id: 'almalinux-8', name: 'AlmaLinux 8', type: 'linux' },
  { id: 'windows-2019', name: 'Windows Server 2019', type: 'windows', price: 150000 },
  { id: 'windows-2022', name: 'Windows Server 2022', type: 'windows', price: 150000 },
];

const LOCATIONS = [
  { id: 'vn-han', name: 'Hà Nội (Viettel IDC)', flag: '🇻🇳' },
  { id: 'vn-hcm', name: 'Hồ Chí Minh (FPT)', flag: '🇻🇳' },
  { id: 'sg', name: 'Singapore', flag: '🇸🇬', extra: 50000 },
];

const BILLING_CYCLES = [
  { id: 1, name: '1 Tháng', discount: 0 },
  { id: 3, name: '3 Tháng', discount: 5 },
  { id: 6, name: '6 Tháng', discount: 10 },
  { id: 12, name: '12 Tháng', discount: 20 },
];

const ProductConfigPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const { isAuthenticated } = useAuth();
  
  const product = PRODUCT_PLANS.find(p => p.id === id);
  
  const [selectedOS, setSelectedOS] = useState(OS_OPTIONS[0].id);
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0].id);
  const [billingCycle, setBillingCycle] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  

  // Redirect if product not found
  useEffect(() => {
    if (!product) {
      router.push('/pages/products');
    }
  }, [product, router]);

  const totalPrice = useMemo(() => {
    if (!product) return 0;
    
    // Extract numeric value from string like "150.000đ/tháng"
    const basePrice = parseInt(product.price.replace(/\D/g, ''));
    
    const osPrice = OS_OPTIONS.find(os => os.id === selectedOS)?.price || 0;
    const locationPrice = LOCATIONS.find(loc => loc.id === selectedLocation)?.extra || 0;
    
    const monthlyTotal = basePrice + osPrice + locationPrice;
    const totalBeforeDiscount = monthlyTotal * billingCycle;
    
    const discountPercent = BILLING_CYCLES.find(c => c.id === billingCycle)?.discount || 0;
    const discountAmount = totalBeforeDiscount * (discountPercent / 100);
    
    return totalBeforeDiscount - discountAmount;
  }, [product, selectedOS, selectedLocation, billingCycle]);

  if (!product) return null;

  const handleOrder = () => {
    if (!isAuthenticated) {
        router.push('/auth/login');
        return;
    }
    setIsProcessing(true);
    // Mock processing
    setTimeout(() => {
        setIsProcessing(false);
        router.push('/pages/profile'); // Redirect to profile/dashboard after "purchase"
    }, 1500);
  };

  return (
    <div className="bg-[#0a0a0a] mt-10 min-h-screen py-12 md:py-16">
       <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
             <Link href="/pages/products" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-4">
                <ArrowLeft size={16} className="mr-2" /> Quay lại danh sách
             </Link>
             <h1 className="text-3xl md:text-4xl font-bold text-white">Cấu hình dịch vụ</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
             
             {/* Left: Configuration Form */}
             <div className="lg:col-span-2 space-y-8">
                
                {/* Product Info Box */}
                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#f97316]/10 p-3 rounded-xl">
                             <Server className="text-[#f97316] w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{product.name}</h3>
                            <div className="flex gap-3 text-sm text-slate-400 mt-1">
                                <span>{product.cpu}</span> &bull; <span>{product.ram}</span> &bull; <span>{product.disk}</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-white">{product.price}</p>
                        <p className="text-slate-500 text-xs">Gia hạn hàng tháng</p>
                    </div>
                </div>

                {/* Location Selection */}
                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Globe size={20} className="text-[#0ea5e9]" /> Chọn vị trí máy chủ
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {LOCATIONS.map(loc => (
                            <button
                                key={loc.id}
                                onClick={() => setSelectedLocation(loc.id)}
                                aria-label={`Location Button ${loc.name}`}
                                className={`relative p-4 rounded-xl border text-left transition-all ${
                                    selectedLocation === loc.id 
                                    ? 'border-[#f97316] bg-[#f97316]/5' 
                                    : 'border-white/10 bg-black/20 hover:border-white/30'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-2xl">{loc.flag}</span>
                                    {selectedLocation === loc.id && <CheckCircle size={18} className="text-[#f97316]" />}
                                </div>
                                <div className="font-bold text-white text-sm">{loc.name}</div>
                                {loc.extra && <div className="text-xs text-slate-400 mt-1">+ {loc.extra.toLocaleString()}đ</div>}
                            </button>
                        ))}
                    </div>
                </div>

                {/* OS Selection */}
                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Database size={20} className="text-green-500" /> Chọn Hệ điều hành
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {OS_OPTIONS.map(os => (
                            <button
                                key={os.id}
                                onClick={() => setSelectedOS(os.id)}
                                aria-label={`Operating System Button ${os.name}`}
                                className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                                    selectedOS === os.id 
                                    ? 'border-[#f97316] bg-[#f97316]/5' 
                                    : 'border-white/10 bg-black/20 hover:border-white/30'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    {os.type === 'linux' ? (
                                        <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 font-bold text-xs">Lx</div>
                                    ) : (
                                        <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 font-bold text-xs">Win</div>
                                    )}
                                    <div>
                                        <div className="text-sm font-bold text-white">{os.name}</div>
                                        {os.price && <div className="text-xs text-slate-400">+ {os.price.toLocaleString()}đ</div>}
                                    </div>
                                </div>
                                {selectedOS === os.id && <CheckCircle size={18} className="text-[#f97316]" />}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Billing Cycle */}
                <div className="bg-[#171717] border border-white/10 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Clock size={20} className="text-orange-400" /> Chu kỳ thanh toán
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {BILLING_CYCLES.map(cycle => (
                            <button
                                key={cycle.id}
                                onClick={() => setBillingCycle(cycle.id)}
                                aria-label={`Billing Cycle Button ${cycle.name}`}
                                className={`relative p-4 rounded-xl border text-center transition-all ${
                                    billingCycle === cycle.id 
                                    ? 'border-[#f97316] bg-[#f97316]/5 ring-1 ring-[#f97316]' 
                                    : 'border-white/10 bg-black/20 hover:border-white/30'
                                }`}
                            >
                                {cycle.discount > 0 && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                        Giảm {cycle.discount}%
                                    </div>
                                )}
                                <div className="font-bold text-white mb-1">{cycle.name}</div>
                                {selectedLocation && <div className="text-xs text-slate-400">Gia hạn tự động</div>}
                            </button>
                        ))}
                    </div>
                </div>
             </div>

             {/* Right: Summary & Checkout */}
             <div className="lg:col-span-1">
                 <div className="sticky top-24">
                     <div className="bg-[#171717] border border-white/10 rounded-2xl p-6 shadow-2xl">
                         <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Hóa đơn tạm tính</h3>
                         
                         <div className="space-y-3 mb-6 text-sm">
                             <div className="flex justify-between text-slate-300">
                                 <span>Gói dịch vụ:</span>
                                 <span className="text-white font-bold">{product.name}</span>
                             </div>
                             <div className="flex justify-between text-slate-300">
                                 <span>CPU:</span>
                                 <span className="text-white">{product.cpu}</span>
                             </div>
                             <div className="flex justify-between text-slate-300">
                                 <span>RAM:</span>
                                 <span className="text-white">{product.ram}</span>
                             </div>
                             <div className="flex justify-between text-slate-300">
                                 <span>Datacenter:</span>
                                 <span className="text-white">{LOCATIONS.find(l => l.id === selectedLocation)?.name}</span>
                             </div>
                             <div className="flex justify-between text-slate-300">
                                 <span>Hệ điều hành:</span>
                                 <span className="text-white">{OS_OPTIONS.find(o => o.id === selectedOS)?.name}</span>
                             </div>
                             <div className="flex justify-between text-slate-300">
                                 <span>Chu kỳ:</span>
                                 <span className="text-white">{BILLING_CYCLES.find(c => c.id === billingCycle)?.name}</span>
                             </div>
                         </div>

                         <div className="bg-black/30 rounded-xl p-4 mb-6 border border-white/5">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-slate-400 text-sm">Tổng tiền</span>
                                 <span className="text-2xl font-bold text-[#f97316]">{totalPrice.toLocaleString()}đ</span>
                             </div>
                             {billingCycle > 1 && (
                                 <div className="text-right text-xs text-green-400">
                                     Đã tiết kiệm {(totalPrice * 0.2).toLocaleString()}đ
                                 </div>
                             )}
                         </div>

                         <button 
                            onClick={handleOrder}
                            disabled={isProcessing}
                            aria-label="Checkout Button"
                            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#f97316]/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                         >
                             {isProcessing ? <Loader2 className="animate-spin" /> : <><CreditCard size={20} /> Thanh toán ngay</>}
                         </button>

                         <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                             <Shield size={12} /> Bảo mật thanh toán 100%
                         </p>
                     </div>

                     {/* Features Summary */}
                     <div className="mt-6 bg-[#171717]/50 border border-white/5 rounded-2xl p-4">
                         <h4 className="font-bold text-white mb-3 text-sm">Đặc quyền đi kèm:</h4>
                         <ul className="space-y-2">
                             <li className="flex items-start gap-2 text-xs text-slate-300">
                                 <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                                 <span>Miễn phí DirectAdmin (Trị giá $5)</span>
                             </li>
                             <li className="flex items-start gap-2 text-xs text-slate-300">
                                 <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                                 <span>Backup tự động hàng tuần</span>
                             </li>
                             <li className="flex items-start gap-2 text-xs text-slate-300">
                                 <CheckCircle size={14} className="text-green-500 shrink-0 mt-0.5" />
                                 <span>Hỗ trợ kỹ thuật 24/7/365</span>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ProductConfigPage;
