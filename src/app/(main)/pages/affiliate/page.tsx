'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, User, Phone, Eye, EyeOff, Loader2, ArrowLeft, Globe, Megaphone, CheckCircle, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const MotionDiv = motion.div;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  marketingChannel: string;
  strategy: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const AffiliateRegisterPage: React.FC = () => {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    marketingChannel: '',
    strategy: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  
  const [errors, setErrors] = useState<{[key: string]: string | undefined}>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getValidationErrors = (): {[key: string]: string} => {
    const newErrors: {[key: string]: string} = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;

    if (!formData.fullName.trim()) newErrors.fullName = 'Họ tên không được để trống.';
    
    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ.';
    }

    if (!formData.phone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.';
    } else if (!phoneRegex.test(formData.phone)) {
        if (!/^0\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'Số điện thoại phải gồm 10 số và bắt đầu bằng số 0.';
        }
    }

    if (!formData.marketingChannel.trim()) {
        newErrors.marketingChannel = 'Vui lòng cung cấp link kênh truyền thông.';
    }

    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp.';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Bạn phải đồng ý với điều khoản chương trình Affiliate.';
    }

    return newErrors;
  };

  React.useEffect(() => {
      // Client-side only
      if (typeof document !== 'undefined') {
        document.title = "Đăng ký Đối tác Affiliate | BowlanCloud";
        
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 'Đăng ký trở thành đối tác Affiliate của BowlanCloud để nhận hoa hồng trọn đời lên đến 20%. Tham gia ngay để bắt đầu kiếm tiền từ dịch vụ của chúng tôi.');
        }
      }
    }, []);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = getValidationErrors();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        const firstErrorField = Object.keys(validationErrors)[0];
        const element = document.getElementById(firstErrorField === 'agreeTerms' ? 'terms' : firstErrorField);
        if (element) {
            element.focus();
        }
        return;
    }

    setIsLoading(true);
    try {
        await register({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            password: formData.password
        });
        
        setTimeout(() => {
             router.push('/auth/login');
        }, 500);
       
    } catch (error) {
        console.error(error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
      setFormData(prev => ({ ...prev, [field]: value }));
      if (errors[field]) {
          setErrors(prev => ({ ...prev, [field]: undefined }));
      }
  };

  return (
    <div className="min-h-screen mt-20 bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden py-10">
       {/* Background Decoration */}
       <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#f97316]/5 rounded-full blur-[120px]" />
       <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#0ea5e9]/5 rounded-full blur-[120px]" />

      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#171717] border border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl p-6 md:p-10 relative z-10"
      >
        <div className="text-center mb-8">
           <div className="inline-flex items-center justify-center bg-[#f97316]/10 p-3 rounded-full mb-4">
              <DollarSign className="text-[#f97316] w-8 h-8" aria-hidden="true" />
           </div>
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Đăng ký Đối tác Affiliate</h2>
           <p className="text-slate-400 text-sm">Nhận hoa hồng trọn đời lên đến 20% cùng BowlanCloud</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          
          {/* Personal Info Section */}
          <div className="space-y-4">
              <h3 className="text-white font-bold border-b border-white/10 pb-2">1. Thông tin cá nhân</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-1.5">Họ và tên</label>
                    <div className="relative">
                    <input 
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        placeholder="Nguyễn Văn A"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={`w-full bg-black/40 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
                    />
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                    </div>
                    {errors.fullName && <p id="fullName-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.fullName}</p>}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">Số điện thoại</label>
                    <div className="relative">
                        <input 
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="0912xxxxxx"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                            className={`w-full bg-black/40 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
                        />
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                    </div>
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                <div className="relative">
                    <input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="email@domain.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
                    />
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                </div>
                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.email}</p>}
              </div>
          </div>

          {/* Marketing Info Section */}
          <div className="space-y-4">
              <h3 className="text-white font-bold border-b border-white/10 pb-2 pt-2">2. Kênh quảng bá</h3>
              <div>
                <label htmlFor="marketingChannel" className="block text-sm font-medium text-slate-300 mb-1.5">Link Website / Social Media (Facebook, Youtube, TikTok)</label>
                <div className="relative">
                    <input 
                        id="marketingChannel"
                        type="text"
                        value={formData.marketingChannel}
                        onChange={(e) => handleChange('marketingChannel', e.target.value)}
                        placeholder="https://..."
                        aria-invalid={!!errors.marketingChannel}
                        aria-describedby={errors.marketingChannel ? "marketingChannel-error" : undefined}
                        className={`w-full bg-black/40 border ${errors.marketingChannel ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
                    />
                    <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                </div>
                {errors.marketingChannel && <p id="marketingChannel-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.marketingChannel}</p>}
              </div>
              <div>
                <label htmlFor="strategy" className="block text-sm font-medium text-slate-300 mb-1.5">Kế hoạch phát triển (Tùy chọn)</label>
                <div className="relative">
                    <textarea 
                        id="strategy"
                        value={formData.strategy}
                        onChange={(e) => handleChange('strategy', e.target.value)}
                        placeholder="Mô tả ngắn gọn về cách bạn sẽ giới thiệu BowlanCloud đến khách hàng..."
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500 min-h-[100px] resize-none"
                    />
                    <Megaphone className="absolute left-3.5 top-4 text-slate-500" size={18} aria-hidden="true" />
                </div>
              </div>
          </div>

          {/* Password Section */}
          <div className="space-y-4">
             <h3 className="text-white font-bold border-b border-white/10 pb-2 pt-2">3. Bảo mật tài khoản</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-1.5">Mật khẩu</label>
                    <div className="relative">
                    <input 
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        placeholder="Tối thiểu 6 ký tự"
                        aria-invalid={!!errors.password}
                        aria-describedby={errors.password ? "password-error" : undefined}
                        className={`w-full bg-black/40 border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 pr-10 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
                    />
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                    <button 
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors focus:outline-none"
                        aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                        aria-pressed={showPassword}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    </div>
                    {errors.password && <p id="password-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.password}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-1.5">Xác nhận mật khẩu</label>
                    <div className="relative">
                    <input 
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        placeholder="Nhập lại mật khẩu"
                        aria-invalid={!!errors.confirmPassword}
                        aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                        className={`w-full bg-black/40 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 pr-10 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
                    />
                    <CheckCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
                    <button 
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors focus:outline-none"
                        aria-label={showConfirmPassword ? "Ẩn mật khẩu xác nhận" : "Hiện mật khẩu xác nhận"}
                        aria-pressed={showConfirmPassword}
                    >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                    </div>
                    {errors.confirmPassword && <p id="confirmPassword-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.confirmPassword}</p>}
                </div>
             </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start pt-2">
            <div className="flex items-center h-5">
                <input 
                  id="terms" 
                  type="checkbox" 
                  checked={formData.agreeTerms}
                  onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                  aria-invalid={!!errors.agreeTerms}
                  className="h-4 w-4 rounded border-slate-600 bg-black/40 text-[#f97316] focus:ring-[#f97316]/20 focus:ring-offset-0" 
                />
            </div>
            <div className="ml-2 text-sm">
                <label htmlFor="terms" className="text-slate-400 cursor-pointer select-none">
                  Tôi đồng ý với <Link href="/pages/servicesBowlan" className="text-[#f97316] hover:text-white">Chính sách Affiliate</Link> và <Link href="#" className="text-[#f97316] hover:text-white">Điều khoản dịch vụ</Link>.
                </label>
                {errors.agreeTerms && <p className="text-red-500 text-xs mt-1" role="alert">{errors.agreeTerms}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            aria-busy={isLoading}
            aria-label="Đăng ký tham gia ngay"
            className="w-full bg-linear-to-r from-[#f97316] to-orange-600 hover:from-orange-600 hover:to-[#f97316] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#f97316]/20 transition-all transform active:scale-95 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-6"
          >
            {isLoading ? <Loader2 className="animate-spin mr-2" size={20} /> : 'Đăng ký tham gia ngay'}
          </button>
        </form>
        <div className="mt-8 text-center">
            <Link href="/pages/servicesBowlan" className="inline-flex items-center text-slate-500 hover:text-white text-sm transition-colors">
                <ArrowLeft size={14} className="mr-1" aria-hidden="true" /> Quay lại trang Đối tác
            </Link>
        </div>
      </MotionDiv>
    </div>
  );
};

export default AffiliateRegisterPage;
