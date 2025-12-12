'use client'

import { useState } from 'react'
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react'

interface FormData {
    name: string
    email: string
    subject: string
    message: string
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error'
    message: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus({ type: 'loading', message: 'Đang gửi...' })

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: 'Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ bạn trong 24 giờ.',
                })
                setFormData({ name: '', email: '', subject: '', message: '' })
            } else {
                setStatus({
                    type: 'error',
                    message: 'Có lỗi xảy ra. Vui lòng thử lại.',
                })
            }
        } catch {
            setStatus({
                type: 'error',
                message: 'Không thể kết nối. Vui lòng sử dụng các kênh liên hệ khác.',
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Status Messages */}
            {status.type === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-green-800 text-sm">{status.message}</p>
                </div>
            )}
            {status.type === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <p className="text-red-800 text-sm">{status.message}</p>
                </div>
            )}

            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Tên của bạn <span className="text-[#f97316]">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                    placeholder="Nhập tên của bạn"
                />
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email của bạn <span className="text-[#f97316]">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                    placeholder="your.email@example.com"
                />
            </div>

            {/* Subject Field */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Chủ đề <span className="text-[#f97316]">*</span>
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                    placeholder="Chủ đề liên hệ"
                />
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Tin nhắn <span className="text-[#f97316]">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all resize-none"
                    placeholder="Viết tin nhắn của bạn..."
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 100%)',
                    backgroundSize: '200% 100%',
                    backgroundPosition: '0% 0%',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundPosition = '100% 0%'
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundPosition = '0% 0%'
                }}
                aria-busy={status.type === 'loading'}
            >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                {status.type === 'loading' ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
            </button>

            {/* Contact Alternatives */}
            <p className="text-center text-sm text-gray-400 pt-4 border-t border-gray-700">
                Hoặc liên hệ trực tiếp qua Telegram, WhatsApp, Zalo để được hỗ trợ nhanh chóng
            </p>
        </form>
    )
}
