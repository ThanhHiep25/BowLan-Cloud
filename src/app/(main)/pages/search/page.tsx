'use client';

import React, { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCT_PLANS, BLOG_POSTS } from '@/constants';
import ServiceCard from '@/components/card/ServiceCard';
import { FileText, Search, Calendar, User, ArrowRight, Package, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ProductPlan, BlogPost } from '@/types';

const MotionDiv = motion.div;

const SearchPageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  React.useEffect(() => {
    // Client-side only
    if (typeof document !== 'undefined') {
      document.title = `BowlanCloud | Search: ${searchQuery}`;
    }
  }, [searchQuery]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return (PRODUCT_PLANS as ProductPlan[]).filter((plan: ProductPlan) => 
      plan.name.toLowerCase().includes(lowerQuery) ||
      plan.type.toLowerCase().includes(lowerQuery) ||
      plan.features.some((f: string) => f.toLowerCase().includes(lowerQuery))
    );
  }, [searchQuery]);

  const filteredBlogs = useMemo(() => {
    if (!searchQuery) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return (BLOG_POSTS as BlogPost[]).filter((post: BlogPost) => 
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  const hasResults = filteredProducts.length > 0 || filteredBlogs.length > 0;

  return (
    <div className="py-16 md:py-24 bg-dark min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 pt-10">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-6 border border-white/10">
            <Search className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Kết quả tìm kiếm</h1>
          <p className="text-slate-400 text-lg">
            {searchQuery ? (
              <>
                Tìm thấy <span className="text-white font-bold">{filteredProducts.length + filteredBlogs.length}</span> kết quả cho từ khóa <span className="text-primary font-bold">&quot;{searchQuery}&quot;</span>
              </>
            ) : (
              "Vui lòng nhập từ khóa để tìm kiếm"
            )}
          </p>
        </div>

        {hasResults ? (
          <div className="space-y-16">
            {/* Products Section */}
            {filteredProducts.length > 0 && (
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                  <Package className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-white">Dịch vụ &amp; Sản phẩm</h2>
                  <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-bold border border-primary/20">
                    {filteredProducts.length}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {filteredProducts.map((plan: ProductPlan) => (
                    <ServiceCard key={plan.id} plan={plan} />
                  ))}
                </div>
              </MotionDiv>
            )}

            {/* Blogs Section */}
            {filteredBlogs.length > 0 && (
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                  <FileText className="text-secondary" size={24} />
                  <h2 className="text-2xl font-bold text-white">Bài viết &amp; Tin tức</h2>
                  <span className="bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-full text-xs font-bold border border-secondary/20">
                    {filteredBlogs.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.map((post: BlogPost) => (
                    <Link href={`/pages/blog?q=${encodeURIComponent(post.title)}`} key={post.id} className="group h-full">
                      <article className="bg-dark-light rounded-2xl overflow-hidden border border-white/5 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                        <div className="h-48 overflow-hidden relative shrink-0">
                            <Image 
                            src={post.imageUrl} 
                            alt={post.title} 
                            width={400}
                            height={200}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-dark to-transparent opacity-60"></div>
                            <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg z-10">
                            {post.category}
                            </div>
                        </div>
                        <div className="p-6 flex flex-col grow">
                            <div className="flex items-center text-slate-500 text-xs mb-3 space-x-4">
                                <div className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</div>
                                <div className="flex items-center"><User size={12} className="mr-1" /> {post.author}</div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-secondary transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-slate-400 text-sm mb-4 line-clamp-2 grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-secondary font-bold text-sm mt-auto">
                                Đọc chi tiết <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </MotionDiv>
            )}
          </div>
        ) : (
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16 bg-dark-light rounded-3xl border border-white/5 border-dashed"
          >
            <div className="inline-block p-4 bg-white/5 rounded-full mb-6">
               <Search size={48} className="text-slate-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Không tìm thấy kết quả nào</h3>
            <p className="text-slate-400 mb-8">
              Chúng tôi không tìm thấy sản phẩm hay bài viết nào phù hợp với từ khóa của bạn.
              Hãy thử lại với từ khóa khác ngắn gọn hơn.
            </p>
            <div className="flex justify-center gap-4 flex-col sm:flex-row">
                <Link href="/pages/products" className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold transition-colors">
                    Xem tất cả sản phẩm
                </Link>
                <Link href="/pages/blog" className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold transition-colors">
                    Đọc tin tức
                </Link>
            </div>
          </MotionDiv>
        )}
      </div>
    </div>
  );
};

function SearchPageLoading() {
  return (
    <div className="py-16 md:py-24 bg-dark min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-primary animate-spin" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchPageLoading />}>
      <SearchPageContent />
    </Suspense>
  );
}
