import { Mail, Phone, MessageCircle, Send, MapPin, Clock, Globe } from "lucide-react"
import type { Metadata } from "next"



export const metadata: Metadata = {
    title: "Liên Hệ BOWLAN Cloud - Hỗ Trợ 24/7",
    description: "Liên hệ BOWLAN Cloud để được hỗ trợ. Chúng tôi cung cấp dịch vụ khách hàng 24/7 qua Telegram, WhatsApp, Zalo, và Email.",
    keywords: "liên hệ bowlan, hỗ trợ khách hàng, bowlan cloud support",
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/pages/contact`,
    },
    openGraph: {
        title: "Liên Hệ BOWLAN Cloud",
        description: "Hỗ trợ khách hàng 24/7 - Liên hệ BOWLAN Cloud qua nhiều kênh",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/pages/contact`,
        type: "website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "BOWLAN Cloud Contact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Liên Hệ BOWLAN Cloud",
        description: "Hỗ trợ khách hàng 24/7",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png`],
    },
}

export default function ContactPage() {
    const contactChannels = [
        {
            id: 'telegram',
            name: 'Telegram',
            icon: Send,
            value: '@Bowlan',
            url: 'https://t.me/Bowlan',
            description: 'Nhắn tin trực tiếp qua Telegram',
            color: 'text-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            icon: Phone,
            value: '+84 937 349 707',
            url: 'https://wa.me/84937349707',
            description: 'Liên hệ qua WhatsApp',
            color: 'text-green-500',
            bgColor: 'bg-green-50'
        },
        {
            id: 'zalo',
            name: 'Zalo',
            icon: MessageCircle,
            value: '0937 349 707',
            url: 'https://zalo.me/0937349707',
            description: 'Chat qua Zalo - Ứng dụng Việt Nam',
            color: 'text-cyan-500',
            bgColor: 'bg-cyan-50'
        },
        {
            id: 'email',
            name: 'Email',
            icon: Mail,
            value: 'support@bowlan.net',
            url: 'mailto:support@bowlan.net',
            description: 'Gửi email hỗ trợ',
            color: 'text-orange-500',
            bgColor: 'bg-orange-50'
        },
    ]

    const infos = [
        {
            id: 'support',
            icon: Clock,
            title: 'Hỗ Trợ 24/7',
            description: 'Chúng tôi sẵn sàng giúp bạn mọi lúc',
            color: 'text-purple-500',
            bgColor: 'bg-purple-50'
        },
        {
            id: 'global',
            icon: Globe,
            title: 'Phục Vụ Toàn Cầu',
            description: 'Hỗ trợ khách hàng tại hơn 50 quốc gia',
            color: 'text-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            id: 'location',
            icon: MapPin,
            title: 'Văn Phòng Việt Nam',
            description: 'Đặc biệt hỗ trợ khách hàng Việt Nam',
            color: 'text-red-500',
            bgColor: 'bg-red-50'
        },
    ]

    return (
        <div className="min-h-screen bg-[#0a0a0a] to-[#171717] text-white pt-32 pb-16" style={{ backgroundImage: 'linear-gradient(180deg, #0a0a0a 0%, #171717 100%)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(90deg, #f97316 0%, #0ea5e9 100%)' }}>
                        Liên Hệ Bowlan Cloud
                    </h1>
                    <p className="text-xl text-gray-300 mb-2">
                        Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
                    </p>
                    <p className="text-lg text-gray-400">
                        Hỗ trợ khách hàng 24/7 qua nhiều kênh liên lạc
                    </p>
                </div>

                {/* Contact Channels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contactChannels.map((channel) => {
                        const IconComponent = channel.icon
                        return (
                            <a
                                key={channel.id}
                                href={channel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group ${channel.bgColor} rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 transform`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`${channel.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <IconComponent className="w-8 h-8" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {channel.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-3">
                                        {channel.description}
                                    </p>
                                    <p className={`${channel.color} font-semibold`}>
                                        {channel.value}
                                    </p>
                                </div>
                            </a>
                        )
                    })}
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {infos.map((info) => {
                        const IconComponent = info.icon
                        return (
                            <div
                                key={info.id}
                                className={`${info.bgColor} rounded-3xl p-8 text-center border border-gray-200`}
                            >
                                <div className={`${info.color} mb-4 flex justify-center`}>
                                    <IconComponent className="w-10 h-10" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {info.title}
                                </h3>
                                <p className="text-gray-600">
                                    {info.description}
                                </p>
                            </div>
                        )
                    })}
                </div>   
                {/* Structured Data for Local Business */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            name: 'BOWLAN Cloud',
                            image: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
                            description: 'Cloud infrastructure and server hosting provider',
                            telephone: '+84937349707',
                            email: 'support@bowlan.net',
                            url: process.env.NEXT_PUBLIC_SITE_URL,
                            contactPoint: {
                                '@type': 'ContactPoint',
                                contactType: 'Customer Support',
                                telephone: '+84937349707',
                                email: 'support@bowlan.net',
                                areaServed: 'VN',
                                availableLanguage: ['vi', 'en'],
                                hoursAvailable: 'Mo-Su 00:00-23:59',
                            },
                            sameAs: [
                                'https://t.me/Bowlan',
                                'https://zalo.me/0937349707',
                                'https://www.facebook.com/bowlan',
                            ],
                            address: {
                                '@type': 'PostalAddress',
                                addressCountry: 'VN',
                                addressLocality: 'Ho Chi Minh City',
                                addressRegion: 'HCM',
                            },
                        }),
                    }}
                />
            </div>
        </div>
    )
}
