
'use client';

import React from 'react';
import { CheckCircle, AlertCircle, Server, Globe, Activity, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const SERVICES = [
    { name: 'Website BowLanCloud', status: 'operational', uptime: '100%' },
    { name: 'Client Portal', status: 'operational', uptime: '99.99%' },
    { name: 'API System', status: 'operational', uptime: '100%' },
    { name: 'Payment Gateway', status: 'operational', uptime: '100%' },
];

const REGIONS = [
    { name: 'Hà Nội (Viettel IDC)', status: 'operational', ping: '2ms' },
    { name: 'Hà Nội (VNPT)', status: 'operational', ping: '3ms' },
    { name: 'TP.HCM (FPT)', status: 'operational', ping: '4ms' },
    { name: 'TP.HCM (Viettel)', status: 'performance_issues', ping: '45ms' },
    { name: 'Singapore (SG1)', status: 'operational', ping: '35ms' },
];

const StatusPage: React.FC = () => {

    React.useEffect(() => {
        // Client-side only
        if (typeof document !== 'undefined') {
            document.title = "Trạng thái hệ thống | BowlanCloud";

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Cập nhật trạng thái hoạt động của hệ thống BowlanCloud, bao gồm website, client portal, API, và các khu vực máy chủ.');
            }
        }
    }, []);

    return (
        <div className="bg-dark min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-green-500/10 rounded-full mb-4">
                        <Activity className="text-green-500 w-8 h-8" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Trạng thái hệ thống</h1>
                    <p className="text-slate-400">Cập nhật thời gian thực về hoạt động của hạ tầng BowLan</p>
                </div>

                {/* Main Status Banner */}
                <div className="bg-green-500 rounded-2xl p-6 md:p-8 mb-10 flex flex-col md:flex-row items-center justify-between shadow-lg shadow-green-500/20">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="bg-white/20 p-3 rounded-full">
                            <CheckCircle className="text-white w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">Tất cả hệ thống hoạt động bình thường</h2>
                            <p className="text-green-100">Lần cập nhật cuối: Vừa xong</p>
                        </div>
                    </div>
                </div>

                {/* Uptime History Graph (Mock Visual) */}
                <div className="bg-dark-light border border-white/10 rounded-2xl p-6 mb-10">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-white">Uptime 90 ngày qua</h3>
                        <span className="text-green-400 text-sm font-bold">99.99%</span>
                    </div>
                    <div className="flex gap-1 h-12 items-end">
                        {[...Array(60)].map((_, i) => {
                            // Create a random outage visual for effect
                            const isOutage = i === 45;
                            return (
                                <MotionDiv
                                    key={i}
                                    initial={{ height: '0%' }}
                                    animate={{ height: '100%' }}
                                    transition={{ delay: i * 0.01 }}
                                    className={`flex-1 rounded-sm ${isOutage ? 'bg-yellow-500' : 'bg-green-500'}`}
                                    title={isOutage ? 'Gián đoạn nhẹ (14/05)' : 'Hoạt động tốt'}
                                />
                            );
                        })}
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                        <span>90 ngày trước</span>
                        <span>Hôm nay</span>
                    </div>
                </div>

                {/* Core Services */}
                <div className="mb-10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Globe size={20} className="text-primary" /> Dịch vụ cốt lõi
                    </h3>
                    <div className="grid gap-4">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-dark-light border border-white/10 rounded-xl p-4 flex items-center justify-between">
                                <span className="font-bold text-slate-200">{service.name}</span>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-slate-400 hidden sm:block">{service.uptime} uptime</span>
                                    <span className="flex items-center gap-2 text-green-400 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                                        <CheckCircle size={14} /> Operational
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Data Centers */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Server size={20} className="text-secondary" /> Cloud Data Centers
                    </h3>
                    <div className="grid gap-4">
                        {REGIONS.map((region, idx) => (
                            <div key={idx} className="bg-dark-light border border-white/10 rounded-xl p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${region.status === 'operational' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></span>
                                    <span className="font-bold text-slate-200">{region.name}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm text-slate-500 flex items-center gap-1">
                                        <Clock size={12} /> {region.ping}
                                    </span>
                                    {region.status === 'operational' ? (
                                        <span className="text-green-400 font-bold text-sm">Hoạt động</span>
                                    ) : (
                                        <span className="text-yellow-400 font-bold text-sm flex items-center gap-1">
                                            <AlertCircle size={14} /> Bảo trì
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center text-sm text-slate-500">
                    <p>Sự cố khẩn cấp? Liên hệ ngay <span className="text-primary">1900-8888</span> hoặc <span className="text-primary">support@bowlan.net</span></p>
                </div>
            </div>
        </div>
    );
};

export default StatusPage;
