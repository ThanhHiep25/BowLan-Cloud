
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, Server, FileText, ArrowRight, CornerDownLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS, PRODUCT_PLANS } from '../../../constants';
import { useRouter } from 'next/navigation';


interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches] = useState(['VPS Giá Rẻ', 'Cloud Server NVMe', 'Anti DDoS Game']);
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      // Focus input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/pages/search?q=${encodeURIComponent(searchQuery.trim())}`);

      onClose();
      setSearchQuery('');
    }
  };

  const handleSuggestionClick = (path: string) => {
    router.push(path);
    onClose();
    setSearchQuery('');
  };

  const filteredBlogSuggestions = searchQuery
    ? BLOG_POSTS.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 2)
    : [];

  const filteredProductSuggestions = searchQuery
    ? PRODUCT_PLANS.filter(plan =>
      plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plan.type.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 3)
    : [];

  const hasSuggestions = filteredProductSuggestions.length > 0 || filteredBlogSuggestions.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#151515] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            {/* Header / Input */}
            <form onSubmit={handleSearchSubmit} className="flex items-center border-b border-white/10 p-4 gap-3">
              <Search className="text-slate-400 w-5 h-5 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm sản phẩm, bài viết, dịch vụ..."
                className="grow bg-transparent text-white placeholder-slate-500 text-lg focus:outline-none"
              />
              <button
                type="button"
                aria-label="Close Search Modal"
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </form>

            {/* Content */}
            <div className="overflow-y-auto custom-scrollbar p-2">
              {searchQuery === '' ? (
                <div className="p-2">
                  <h3 className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Tìm kiếm gần đây</h3>
                  <div className="space-y-1">
                    {recentSearches.map((term, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Search for ${term}`}
                        onClickCapture={() => {
                          router.push(`/pages/search?q=${encodeURIComponent(term)}`);
                          onClose();
                        }}
                        className="w-full text-left px-3 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-primary transition-colors flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <Clock size={16} className="text-slate-500 group-hover:text-primary/70" />
                          <span>{term}</span>
                        </div>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-slate-500" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-2">
                  {hasSuggestions ? (
                    <>
                      {/* Products */}
                      {filteredProductSuggestions.length > 0 && (
                        <div className="mb-4">
                          <h3 className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Sản phẩm</h3>
                          <div className="space-y-1">
                            {filteredProductSuggestions.map(plan => (
                              <button
                                key={plan.id}
                                type="button"
                                aria-label={`View ${plan.name}`}
                                onClick={() => handleSuggestionClick(`/pages/products/${plan.id}`)}
                                className="w-full text-left px-3 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center gap-3 group"
                              >
                                <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors">
                                  <Server size={18} className="text-slate-400 group-hover:text-primary" />
                                </div>
                                <div className="grow">
                                  <div className="text-slate-200 font-medium group-hover:text-primary">{plan.name}</div>
                                  <div className="text-xs text-slate-500">{plan.price} &bull; {plan.type}</div>
                                </div>
                                <CornerDownLeft size={14} className="text-slate-600 opacity-0 group-hover:opacity-100" />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Blogs */}
                      {filteredBlogSuggestions.length > 0 && (
                        <div>
                          <h3 className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Bài viết</h3>
                          <div className="space-y-1">
                            {filteredBlogSuggestions.map(post => (
                              <button
                                key={post.id}
                                type="button"
                                aria-label={`Read article ${post.title}`}
                                onClick={() => handleSuggestionClick(`/pages/blog?q=${encodeURIComponent(post.title)}`)}
                                className="w-full text-left px-3 py-3 rounded-xl hover:bg-white/5 transition-colors flex items-center gap-3 group"
                              >
                                <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:border-secondary/30 group-hover:bg-secondary/10 transition-colors">
                                  <FileText size={18} className="text-slate-400 group-hover:text-secondary" />
                                </div>
                                <div className="grow">
                                  <div className="text-slate-200 font-medium group-hover:text-secondary line-clamp-1">{post.title}</div>
                                  <div className="text-xs text-slate-500">{post.date}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="py-8 text-center">
                      <p className="text-slate-500">Không tìm thấy kết quả cho &quot;{searchQuery}&quot;</p>
                      <button
                        type="button"
                        aria-label="Search Advanced"
                        onClick={handleSearchSubmit}
                        className="mt-2 text-primary hover:text-primary-hover text-sm font-medium flex items-center justify-center gap-1 mx-auto"
                      >
                        Tìm kiếm nâng cao <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-sans text-slate-400">↵</kbd> chọn</span>
                <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-sans text-slate-400">esc</kbd> đóng</span>
              </div>
              <div>
                <span>BowlanCloud™️</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
