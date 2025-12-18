'use client';
import React, { useMemo, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Facebook, Twitter, Linkedin, Share2, Copy, Check } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';
import type { BlogPost, ContentBlock } from '@/types';

const BlogDetailPage: React.FC = (): React.ReactNode => {
    const router = useRouter();
    const params = useParams();
    const postId = params.id as string;
    const [copiedCode, setCopiedCode] = useState<string | null>(null);

    const post = useMemo(() => {
        return (BLOG_POSTS as BlogPost[]).find(p => p.id === postId);
    }, [postId]);

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(code);
        setTimeout(() => setCopiedCode(null), 2000);
    };

    React.useEffect(() => {
        // Client-side only
        if (typeof document !== 'undefined') {
            document.title = `Blog | BowlanCloud | ${post?.title}`;

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Tổng hợp các bài viết hướng dẫn quản trị VPS, bảo mật Server và tin tức khuyến mãi mới nhất.');
            }
        }
    }, [post]);

    const renderContentBlock = (block: ContentBlock, index: number) => {
        const blockId = block.type.startsWith('heading') ? `heading-${index}` : undefined;

        switch (block.type) {
            case 'heading2':
                return (
                    <h2 key={index} id={blockId} className="text-3xl font-bold text-white mt-12 mb-6 pb-4 border-b border-white/10 scroll-mt-20">
                        {block.title}
                    </h2>
                );
            case 'heading3':
                return (
                    <h3 key={index} id={blockId} className="text-2xl font-bold text-white mt-8 mb-4 scroll-mt-20">
                        {block.title}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p key={index} className="text-slate-300 leading-relaxed mb-6">
                        {block.content}
                    </p>
                );
            case 'list':
                return (
                    <ul key={index} className="text-slate-300 mb-6 space-y-3">
                        {block.items?.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 ml-2">
                                <span className="text-[#f97316] mt-1.5 shrink-0">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                );
            case 'code':
                return (
                    <div key={index} className="relative mb-6">
                        <div className="bg-[#171717] border border-white/10 rounded-xl overflow-hidden">
                            <div className="flex items-center justify-between bg-[#0f0f0f] px-4 py-2 border-b border-white/10">
                                <span className="text-xs font-mono text-slate-400">{block.language || 'code'}</span>
                                <button
                                    onClick={() => copyToClipboard(block.content || '')}
                                    className="p-1.5 hover:bg-white/10 rounded transition-colors cursor-pointer"
                                    title="Copy code"
                                >
                                    {copiedCode === block.content ? (
                                        <Check size={16} className="text-green-400" />
                                    ) : (
                                        <Copy size={16} className="text-slate-400" />
                                    )}
                                </button>
                            </div>
                            <pre className="p-4 overflow-x-auto">
                                <code className="text-[#fbbf24] text-sm font-mono whitespace-pre-wrap">
                                    {block.content}
                                </code>
                            </pre>
                        </div>
                    </div>
                );
            case 'blockquote':
                return (
                    <blockquote key={index} className="border-l-4 border-[#f97316] pl-4 pr-4 py-2 bg-white/5 rounded-r my-6 text-slate-400 italic">
                        {block.content}
                    </blockquote>
                );
            default:
                return null;
        }
    };

    const handleShare = (platform: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const baseUrl = typeof window !== 'undefined'
            ? window.location.origin
            : process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';
        const url = encodeURIComponent(`${baseUrl}/pages/blog/${postId}`);
        const title = post ? encodeURIComponent(post.title) : 'Blog Post';

        let shareUrl = '';
        const dims = 'width=600,height=400';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
        }

        if (shareUrl && typeof window !== 'undefined') {
            window.open(shareUrl, 'Share', dims);
        }
    };

    React.useEffect(() => {
        if (post) {
            document.title = `${post.title} | BowlanCloud`;
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', post.excerpt);
            }
        }
    }, [post]);

    if (!post) {
        return (
            <div className="py-16 md:py-20 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-white mb-4">Bài viết không tìm thấy</h1>
                    <button
                        onClick={() => router.back()}
                        className="px-6 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-bold transition-colors"
                    >
                        Quay lại
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-8 md:py-16 bg-[#0a0a0a] min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl mt-16">
                {/* Back Button */}
                <button
                    type="button"
                    aria-label="Back"
                    title="Back"
                    onClick={() => router.back()}
                    className="flex items-center cursor-pointer gap-2 text-[#f97316] hover:text-[#ea580c] mb-8 transition-colors font-semibold"
                >
                    <ArrowLeft size={20} />
                    Quay lại
                </button>

                {/* Article Header */}
                <div className="mb-10 animate-fade-in-up">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 pb-8 border-b border-white/10">
                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                            <div className="flex items-center gap-1">
                                <Calendar size={16} className="text-[#f97316]" />
                                {post.date}
                            </div>
                            <div className="hidden sm:block text-white/20">•</div>
                            <div className="flex items-center gap-1">
                                <User size={16} className="text-[#f97316]" />
                                {post.author}
                            </div>
                        </div>
                        <div className="sm:ml-auto">
                            <span className="inline-block bg-[#f97316]/10 text-[#f97316] px-4 py-1 rounded-full text-sm font-semibold border border-[#f97316]/20">
                                {post.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 animate-fade-in-up">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="mb-12 animate-fade-in-up">
                    <div>
                        {(post.content as ContentBlock[]).map((block, index) =>
                            renderContentBlock(block, index)
                        )}
                    </div>
                </div>

                {/* Share Section */}
                <div className="py-8 border-t border-white/10 animate-fade-in-up">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <h3 className="text-white font-bold mb-4 sm:mb-0 flex items-center gap-2">
                                <Share2 size={20} className="text-[#f97316]" />
                                Chia sẻ bài viết
                            </h3>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={(e) => handleShare('facebook', e)}
                                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white/5 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 rounded-lg transition-all border border-white/10 hover:border-blue-500/50"
                                title="Share on Facebook"
                                aria-label="Share on Facebook"
                            >
                                <Facebook size={18} />
                                <span className="hidden sm:inline text-sm">Facebook</span>
                            </button>
                            <button
                                onClick={(e) => handleShare('twitter', e)}
                                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white/5 hover:bg-sky-400/20 text-slate-300 hover:text-sky-400 rounded-lg transition-all border border-white/10 hover:border-sky-400/50"
                                title="Share on Twitter"
                                aria-label="Share on Twitter"
                            >
                                <Twitter size={18} />
                                <span className="hidden sm:inline text-sm">Twitter</span>
                            </button>
                            <button
                                onClick={(e) => handleShare('linkedin', e)}
                                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-white/5 hover:bg-blue-700/20 text-slate-300 hover:text-blue-300 rounded-lg transition-all border border-white/10 hover:border-blue-700/50"
                                title="Share on LinkedIn"
                                aria-label="Share on LinkedIn"
                            >
                                <Linkedin size={18} />
                                <span className="hidden sm:inline text-sm">LinkedIn</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailPage;
