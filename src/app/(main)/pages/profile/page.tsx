
'use client';

import React, { useState } from 'react';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { User, Mail, Phone, Shield, CreditCard, Server, Clock, Edit2, Save, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

const MotionDiv = motion.div;

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock stats for the profile
  const stats = [
    { label: 'Số dư tài khoản', value: '5.250.000đ', icon: <CreditCard className="text-green-400" />, color: 'border-green-500/20 bg-green-500/5' },
    { label: 'Dịch vụ đang chạy', value: '3 VPS', icon: <Server className="text-[#f97316]" />, color: 'border-[#f97316]/20 bg-[#f97316]/5' },
    { label: 'Ticket hỗ trợ', value: '0 Đang xử lý', icon: <Clock className="text-[#0ea5e9]" />, color: 'border-[#0ea5e9]/20 bg-[#0ea5e9]/5' },
  ];

  if (!isAuthenticated || !user) {
    redirect('/auth/login');
  }

  return (
    <div className="min-h-screen mt-10 bg-dark py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
           <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Hồ sơ cá nhân</h1>
           <p className="text-slate-400">Quản lý thông tin tài khoản và bảo mật</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Left Column - User Card */}
           <div className="lg:col-span-1">
              <MotionDiv 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-dark-light border border-white/10 rounded-3xl p-6 md:p-8 text-center relative overflow-hidden shadow-xl"
              >
                  <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-r from-[#f97316]/20 to-[#0ea5e9]/20"></div>
                  
                  <div className="relative z-10 mt-12 mb-6 inline-block">
                      <div className="w-32 h-32 rounded-full p-1 bg-dark border-4 border-dark relative group cursor-pointer">
                          <Image src={user.avatar || '/default-avatar.png'} alt={user.fullName} width={128} height={128} className="w-full h-full rounded-full object-cover" />
                          <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <Camera className="text-white" size={24} />
                          </div>
                      </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-1">{user.fullName}</h2>
                  <p className="text-slate-400 text-sm mb-6 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> 
                    Thành viên hoạt động
                  </p>
                  
                  <div className="space-y-4 text-left bg-white/5 rounded-2xl p-4 border border-white/5">
                      <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">ID Tài khoản</span>
                          <span className="text-white font-mono">{user.id.split('-')[1] || '882910'}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Ngày tham gia</span>
                          <span className="text-white">20/05/2024</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">Xác thực Email</span>
                          <span className="text-green-400 font-bold text-xs border border-green-500/30 bg-green-500/10 px-2 py-0.5 rounded-full">Đã xác thực</span>
                      </div>
                  </div>
              </MotionDiv>
           </div>

           {/* Right Column - Stats & Info */}
           <div className="lg:col-span-2 space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {stats.map((stat, idx) => (
                      <MotionDiv 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-dark-light border ${stat.color} rounded-2xl p-5 flex flex-col items-start`}
                      >
                          <div className="mb-3 p-2 rounded-lg bg-white/5 inline-block">
                             {stat.icon}
                          </div>
                          <span className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">{stat.label}</span>
                          <span className="text-white text-xl md:text-2xl font-bold">{stat.value}</span>
                      </MotionDiv>
                  ))}
              </div>

              {/* Personal Information Form */}
              <MotionDiv 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="bg-dark-light border border-white/10 rounded-3xl p-6 md:p-8"
              >
                  <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          <User className="text-[#f97316]" size={20} /> Thông tin cá nhân
                      </h3>
                      <button 
                        onClick={() => setIsEditing(!isEditing)}
                        aria-label='Edit Profile Button'
                        className="text-sm text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors"
                      >
                          {isEditing ? <><Save size={14} /> Lưu thay đổi</> : <><Edit2 size={14} /> Chỉnh sửa</>}
                      </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-sm font-medium text-slate-400 mb-2">Họ và tên</label>
                          <div className="relative">
                              <input 
                                type="text" 
                                defaultValue={user.fullName}
                                disabled={!isEditing}
                                className={`w-full bg-black/40 border rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors ${isEditing ? 'border-white/20' : 'border-transparent cursor-not-allowed text-slate-300'}`}
                              />
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          </div>
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                          <div className="relative">
                              <input 
                                type="text" 
                                defaultValue={user.email}
                                disabled={true} // Email usually shouldn't be changed easily
                                className="w-full bg-black/40 border border-transparent rounded-xl px-4 py-3 pl-11 text-slate-400 cursor-not-allowed focus:outline-none"
                              />
                              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          </div>
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-slate-400 mb-2">Số điện thoại</label>
                          <div className="relative">
                              <input 
                                type="text" 
                                defaultValue={user.phone || 'Chưa cập nhật'}
                                disabled={!isEditing}
                                className={`w-full bg-black/40 border rounded-xl px-4 py-3 pl-11 text-white focus:outline-none focus:border-[#f97316] transition-colors ${isEditing ? 'border-white/20' : 'border-transparent cursor-not-allowed text-slate-300'}`}
                              />
                              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                          </div>
                      </div>
                  </div>
              </MotionDiv>

              {/* Security Settings */}
              <MotionDiv 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="bg-dark-light border border-white/10 rounded-3xl p-6 md:p-8"
              >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Shield className="text-[#0ea5e9]" size={20} /> Bảo mật
                  </h3>
                  
                  <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                          <div>
                              <p className="text-white font-medium">Đổi mật khẩu</p>
                              <p className="text-slate-400 text-xs">Cập nhật mật khẩu mới thường xuyên để bảo vệ tài khoản</p>
                          </div>
                          <button aria-label="Update Password Button" className="text-sm bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                              Cập nhật
                          </button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                          <div>
                              <p className="text-white font-medium">Xác thực 2 yếu tố (2FA)</p>
                              <p className="text-slate-400 text-xs">Tăng cường bảo mật với Google Authenticator</p>
                          </div>
                          <button aria-label="Update 2FA Button" className="text-sm bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 text-[#0ea5e9] border border-[#0ea5e9]/30 px-4 py-2 rounded-lg transition-colors">
                              Kích hoạt
                          </button>
                      </div>
                  </div>
              </MotionDiv>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
