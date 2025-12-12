'use client'

import { ChevronRight, MessageCircle, Send, Phone, Mail } from "lucide-react"
import { useState } from "react"

const Contact: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    // Contact methods with proper SEO-friendly URLs and aria labels
    const contactMethods = [
        { 
            id: 'telegram', 
            name: 'Telegram', 
            icon: Send, 
            color: 'bg-blue-500 hover:bg-blue-600',
            url: 'https://t.me/Bowlan',
            ariaLabel: 'Liên hệ với BOWLAN qua Telegram'
        },
        { 
            id: 'whatsapp', 
            name: 'WhatsApp', 
            icon: Phone, 
            color: 'bg-green-500 hover:bg-green-600',
            url: 'https://wa.me/84937349707',
            ariaLabel: 'Liên hệ với BOWLAN qua WhatsApp'
        },
        { 
            id: 'zalo', 
            name: 'Zalo', 
            icon: MessageCircle, 
            color: 'bg-cyan-500 hover:bg-cyan-600',
            url: 'https://zalo.me/0937349707',
            ariaLabel: 'Liên hệ với BOWLAN qua Zalo'
        },
        { 
            id: 'email', 
            name: 'Email', 
            icon: Mail, 
            color: 'bg-orange-500 hover:bg-orange-600',
            url: 'mailto:support@bowlan.net',
            ariaLabel: 'Gửi email đến BOWLAN'
        },
    ]

    return (
        <div className="fixed bottom-60 right-0 z-50 hidden lg:block" role="region" aria-label="Liên hệ hỗ trợ khách hàng">
           {/* Contact Menu Items */}
           {isOpen && (
               <div className="flex flex-col gap-3 mb-4 items-center cursor-pointer pr-2 animate-in fade-in slide-in-from-right-4 duration-300">
                   {contactMethods.map((method) => {
                       const IconComponent = method.icon
                       const isHovered = hoveredId === method.id
                       return (
                           <a
                               key={method.id}
                               href={method.url}
                               target="_blank"
                               rel="noopener noreferrer"
                               onMouseEnter={() => setHoveredId(method.id)}
                               onMouseLeave={() => setHoveredId(null)}
                               className={`w-12 h-12 ${method.color} flex items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316] ${
                                   isHovered ? '-translate-x-3 shadow-2xl' : 'translate-x-0'
                               }`}
                               aria-label={method.ariaLabel}
                               title={method.name}
                           >
                               <IconComponent className="w-6 h-6 text-white" aria-hidden="true" />
                           </a>
                       )
                   })}
               </div>
           )}

           {/* Main Toggle Button */}
           <button 
               onClick={() => setIsOpen(!isOpen)}
               className="w-12 h-20 bg-[#f97316] hover:bg-[#ea580c] cursor-pointer flex items-center justify-center rounded-l-2xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f97316]"
               aria-expanded={isOpen}
               aria-label={isOpen ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}
               aria-controls="contact-menu"
           >
             <ChevronRight className={`w-6 h-6 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
           </button>

           {/* Hidden contact info for SEO */}
           <div className="sr-only" id="contact-menu">
               <h2>Liên hệ BOWLAN Cloud</h2>
               <p>Hỗ trợ khách hàng 24/7</p>
               <ul>
                   {contactMethods.map((method) => (
                       <li key={method.id}>
                           <a href={method.url} target="_blank" rel="noopener noreferrer">
                               {method.name}: {method.url}
                           </a>
                       </li>
                   ))}
               </ul>
           </div>
        </div>
    )
}

export default Contact