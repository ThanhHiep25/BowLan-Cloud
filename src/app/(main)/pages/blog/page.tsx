'use client';
import React, { useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Search, XCircle, Loader2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';
import type { BlogPost } from '@/types';

const BlogPageContent: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const searchQuery = searchParams.get('q') || '';


    const filteredPosts = useMemo(() => {
        if (!searchQuery) return BLOG_POSTS;

        const lowerQuery = searchQuery.toLowerCase();
        return (BLOG_POSTS as BlogPost[]).filter((post: BlogPost) =>
            post.title.toLowerCase().includes(lowerQuery) ||
            post.excerpt.toLowerCase().includes(lowerQuery) ||
            post.category.toLowerCase().includes(lowerQuery)
        );
    }, [searchQuery]);

    const clearSearch = () => {
        router.push('/pages/blog');
    };

    React.useEffect(() => {
        // Client-side only
        if (typeof document !== 'undefined') {
            document.title = "Bowlan Blogs | BowlanCloud";

            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', 'Tổng hợp các bài viết hướng dẫn quản trị VPS, bảo mật Server và tin tức khuyến mãi mới nhất.');
            }
        }
    }, []);

    const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin', post: BlogPost, e: React.MouseEvent) => {
        e.preventDefault();
        const baseUrl = typeof window !== 'undefined'
            ? window.location.origin
            : process.env.NEXT_PUBLIC_SITE_URL || 'https://bowlan.vn';
        const url = encodeURIComponent(`${baseUrl}/pages/blog/${post.id}`);
        const title = encodeURIComponent(post.title);

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

    return (
        <div className="py-16 md:py-20 bg-[#0a0a0a] min-h-screen">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12 pt-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Kiến Thức & Tin Tức Công Nghệ</h1>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        Tổng hợp các bài viết hướng dẫn quản trị VPS, bảo mật Server và tin tức khuyến mãi mới nhất.
                    </p>
                </div>

                {/* Search Results Header */}
                {searchQuery && (
                    <div className="mb-8 flex flex-col items-center animate-fade-in-up">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white/5 px-4 sm:px-6 py-3 rounded-full border border-white/10 w-full sm:w-auto text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <Search className="text-[#f97316]" size={20} />
                                <span className="text-slate-300">Kết quả tìm kiếm cho: <strong className="text-white">&quot;{searchQuery}&quot;</strong></span>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <span className="text-slate-500 text-sm">({filteredPosts.length} bài viết)</span>
                                <button onClick={clearSearch}
                                    aria-label="Clear Search"
                                    className="ml-2 text-slate-400 hover:text-red-400 transition-colors">
                                    <XCircle size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Posts Grid */}
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up">
                        {filteredPosts.map((post: BlogPost) => (
                            <article key={post.id} className="bg-[#171717] rounded-2xl overflow-hidden border border-white/5 hover:border-[#f97316]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col h-full">
                                <div className="h-48 sm:h-52 overflow-hidden relative shrink-0">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                                    <div className="absolute top-4 left-4 bg-[#f97316] text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg z-10">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col grow relative">
                                    <div className="flex items-center text-slate-500 text-xs mb-4 space-x-4 font-medium uppercase tracking-wide">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-1" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User size={14} className="mr-1" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-[#f97316] transition-colors cursor-pointer line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                                        <a href={`/pages/blog/${post.id}`} className="inline-flex items-center text-[#f97316] font-bold hover:text-[#ea580c] text-sm transition-colors">
                                            Đọc tiếp <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                        </a>

                                        <div className="flex items-center space-x-3">
                                            <span className="text-xs text-slate-600 hidden sm:block">Share:</span>
                                            <button
                                                onClick={(e) => handleShare('facebook', post, e)}
                                                className="text-slate-500 hover:text-blue-500 transition-colors p-1"
                                                title="Share on Facebook"
                                                aria-label="Share on Facebook"
                                            >
                                                <Facebook size={16} />
                                            </button>
                                            <button
                                                onClick={(e) => handleShare('twitter', post, e)}
                                                className="text-slate-500 hover:text-sky-400 transition-colors p-1"
                                                title="Share on Twitter"
                                                aria-label="Share on Twitter"
                                            >
                                                <Twitter size={16} />
                                            </button>
                                            <button
                                                onClick={(e) => handleShare('linkedin', post, e)}
                                                className="text-slate-500 hover:text-blue-700 transition-colors p-1"
                                                title="Share on LinkedIn"
                                                aria-label="Share on LinkedIn"
                                            >
                                                <Linkedin size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#171717] rounded-2xl border border-white/5 border-dashed">
                        <div className="inline-block p-4 bg-[#0a0a0a] rounded-full mb-4">
                            <Search size={48} className="text-slate-600" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Không tìm thấy bài viết nào</h3>
                        <p className="text-slate-400 mb-6">Rất tiếc, chúng tôi không tìm thấy kết quả nào phù hợp với từ khóa <strong>&quot;{searchQuery}&quot;</strong>.</p>
                        <button
                            onClick={clearSearch}
                            aria-label="Clear Search"
                            className="px-6 py-2 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-bold transition-colors">
                            Quay lại tất cả bài viết
                        </button>
                    </div>
                )}

               
            </div>
        </div>
    );
};

function BlogPageLoading() {
    return (
        <div className="py-16 md:py-24 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-[#f97316] animate-spin" />
        </div>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<BlogPageLoading />}>
            <BlogPageContent />
        </Suspense>
    );
}
