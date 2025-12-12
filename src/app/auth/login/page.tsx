'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Loader2, Facebook, Chrome, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';


const MotionDiv = motion.div;

const LoginPage: React.FC = () => {

  const { login } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    // Client-side only
    if (typeof document !== 'undefined') {
      document.title = 'Đăng nhập | BowlanCloud';
    }
  }, []);


  const getValidationErrors = () => {
    const newErrors: { email?: string; password?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ.';
    }

    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập mật khẩu.';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = getValidationErrors();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
        // Focus the first field with an error
        const firstErrorField = Object.keys(validationErrors)[0];
        const element = document.getElementById(firstErrorField);
        if (element) {
            element.focus();
        }
        return;
    }

    setIsLoading(true);
    try {
        await login(formData.email, formData.password);
        router.push('/');
    } catch {
        setErrors({ general: 'Đăng nhập thất bại. Vui lòng thử lại.' });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#f97316]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0ea5e9]/10 rounded-full blur-[120px]" />

      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#171717] border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-6 md:p-8 relative z-10"
      >
        <div className="text-center mb-8">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Đăng nhập</h2>
           <p className="text-slate-400 text-sm">Chào mừng trở lại với BowlanCloud Solutions</p>
        </div>

        {errors.general && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm text-center" role="alert">
            {errors.general}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
            <div className="relative">
              <input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                   setFormData({...formData, email: e.target.value});
                   if (errors.email) setErrors({...errors, email: undefined});
                }}
                placeholder="name@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
              />
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
            </div>
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1" role="alert">
                 {errors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
               <label htmlFor="password" className="text-sm font-medium text-slate-300">Mật khẩu</label>
               <Link href="#" className="text-xs text-[#f97316] hover:text-[#ea580c] transition-colors">Quên mật khẩu?</Link>
            </div>
            <div className="relative">
              <input 
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => {
                   setFormData({...formData, password: e.target.value});
                   if (errors.password) setErrors({...errors, password: undefined});
                }}
                placeholder="Nhập mật khẩu của bạn"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
                className={`w-full bg-black/40 border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 pl-11 pr-10 text-white focus:outline-none focus:border-[#f97316] transition-colors placeholder-slate-500`}
              />
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} aria-hidden="true" />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors focus:outline-none focus:text-white"
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                aria-pressed={showPassword}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-red-500 text-xs mt-1 ml-1 flex items-center gap-1" role="alert">
                 {errors.password}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center">
            <input 
              id="remember-me" 
              type="checkbox" 
              checked={formData.rememberMe}
              onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
              className="h-4 w-4 rounded border-slate-600 bg-black/40 text-[#f97316] focus:ring-[#f97316]/20 focus:ring-offset-0" 
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400 cursor-pointer select-none">
              Ghi nhớ đăng nhập
            </label>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isLoading}
            aria-busy={isLoading}
            aria-label="Đăng nhập"
            className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#f97316]/20 transition-all transform active:scale-95 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="animate-spin mr-2" size={20} /> : 'Đăng nhập'}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-[#171717] px-2 text-slate-500">Hoặc đăng nhập với</span>
            </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
            <button type="button" aria-label="Login with Google" className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <Chrome size={18} className="mr-2 text-red-500" aria-hidden="true" /> Google
            </button>
            <button type="button" aria-label="Login with Facebook" className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-white/20">
                <Facebook size={18} className="mr-2 text-blue-500" aria-hidden="true" /> Facebook
            </button>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center text-sm text-slate-400">
            Chưa có tài khoản? <Link href="/auth/register" className="text-[#f97316] font-bold hover:text-white transition-colors">Đăng ký ngay</Link>
        </div>
        
        <div className="mt-6 text-center">
            <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white text-sm transition-colors">
                <ArrowLeft size={14} className="mr-1" aria-hidden="true" /> Quay lại trang chủ
            </Link>
        </div>
      </MotionDiv>
    </div>
  );
};

export default LoginPage;
