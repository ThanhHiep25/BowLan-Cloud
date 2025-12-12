import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
    name: string
    email: string
    subject: string
    message: string
}

// Simple validation function
function validateContactForm(data: ContactFormData): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!data.name || data.name.trim().length < 2) {
        errors.push('Tên phải có ít nhất 2 ký tự')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email || !emailRegex.test(data.email)) {
        errors.push('Email không hợp lệ')
    }

    if (!data.subject || data.subject.trim().length < 3) {
        errors.push('Chủ đề phải có ít nhất 3 ký tự')
    }

    if (!data.message || data.message.trim().length < 10) {
        errors.push('Tin nhắn phải có ít nhất 10 ký tự')
    }

    return {
        valid: errors.length === 0,
        errors,
    }
}

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json()

        // Validate form data
        const { valid, errors } = validateContactForm(body)
        if (!valid) {
            return NextResponse.json(
                { success: false, errors },
                { status: 400 }
            )
        }

        // TODO: Send email or store in database
        // Example: Send email using a service like Resend, SendGrid, etc.
        console.log('Contact form received:', {
            name: body.name,
            email: body.email,
            subject: body.subject,
            message: body.message,
            timestamp: new Date().toISOString(),
        })

        // For now, just return success
        // In production, implement email sending or database storage
        return NextResponse.json(
            {
                success: true,
                message: 'Tin nhắn của bạn đã được nhận. Chúng tôi sẽ liên hệ bạn trong 24 giờ.',
            },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { success: false, message: 'Có lỗi xảy ra. Vui lòng thử lại.' },
            { status: 500 }
        )
    }
}
