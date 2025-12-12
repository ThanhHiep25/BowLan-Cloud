'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Search, Home, LayoutGrid, BookOpen, User, LogOut, Settings, Bell, ChartNetwork } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import SearchModal from '../search/SearchModal';
import { NAV_LINKS } from '../../../constants';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const MotionNav = motion.nav;
const MotionDiv = motion.div;

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Mark hydration complete after first render (synchronously to prevent mismatch)
  React.useLayoutEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (path: string) => {
    closeMenu();

    if (path.includes('#')) {
      const [pathname, hash] = path.split('#');
      if (pathname === '' || pathname === '/') {
        router.push('/' + (hash ? '#' + hash : ''));
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      router.push(path);
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    closeMenu();
    router.push('/');
  };

  // const navbarVariants = {
  //   hidden: { y: -100, opacity: 0 },
  //   visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  // };

  const mobileMenuVariants = {
    closed: { y: "100%", opacity: 0 },
    open: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 400, damping: 30 } }
  };

  return (
    <>
      {/* Top Navbar */}
      <MotionNav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group z-50" onClick={closeMenu}>
              <div className="p-2 rounded-lg shadow-lg shadow-[#f97316]/20 lg:hover:shadow-[#f97316]/40 transition-shadow duration-200">
                <Image src="/logo.png" alt="BowlanCloud Logo" width={32} height={32} className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Bowlan<span className="text-orange-400 font-bold">Cloud</span>
              </span>
            </Link>

            {/* Desktop Menu - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
              <div className="flex items-center space-x-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.name} className="relative group px-1">
                    {link.children ? (
                      <div className="relative">
                        <button
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1 group-hover:bg-white/5 ${pathname.startsWith(link.path) && link.path !== '/'
                            ? 'text-[#f97316]'
                            : 'text-slate-300 hover:text-white'
                            }`}
                          aria-label={`Toggle ${link.name} Dropdown`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 opacity-70" />
                        </button>

                        <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2 transition-all duration-200 ease-out z-50">
                          <div className="bg-[#151515]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5 p-2">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.path}
                                onClick={() => handleNavigation(child.path)}
                                className="block px-4 py-3 text-sm text-slate-400 hover:bg-white/10 hover:text-white rounded-xl transition-all"
                              >
                                <span className="block font-medium">{child.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${pathname === link.path
                          ? 'text-white'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        {link.name}
                        {pathname === link.path && (
                          <MotionDiv
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f97316] mx-4"
                          />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Right Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Trigger */}
              <button
                aria-label="Open Search"
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center space-x-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-2 rounded-full transition-colors border border-transparent hover:border-white/10 active:bg-white/20"
              >
                <Search size={18} />
                <span className="text-xs text-slate-500 hidden xl:inline-block pr-1">⌘K</span>
              </button>

              {/* Auth Section - Only render user profile after hydration */}
              {isHydrated && isAuthenticated && user ? (
                <div className="relative">
                  <button
                    aria-label="Toggle Profile Dropdown"
                    onClick={() => setIsProfileOpen(!isProfileOpen)}

                    className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-2 pr-4 py-1.5 transition-colors duration-200 active:bg-white/20"
                  >
                    {user.avatar && <Image src={user.avatar} alt={user.fullName} width={32} height={32} className="rounded-full border border-[#f97316]/50" />}
                    <div className="text-left hidden xl:block">
                      <p className="text-xs font-bold text-white leading-none">{user.fullName}</p>
                      <p className="text-[10px] text-[#f97316]  leading-none mt-0.5">Thành viên</p>
                    </div>
                    <ChevronDown size={14} className="text-slate-400" />
                  </button>

                  <AnimatePresence>
                    {isProfileOpen && (
                      <MotionDiv
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-64 bg-[#151515] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50"
                      >
                        <div className="p-4 border-b border-white/5">
                          <p className="text-white font-bold">{user.fullName}</p>
                          <p className="text-slate-500 text-xs truncate">{user.email}</p>
                        </div>
                        <div className="p-2">
                          <Link href="/pages/profile" onClick={() => setIsProfileOpen(false)}>
                            <button aria-label="Go to Profile" className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-[#f97316] rounded-xl flex items-center gap-3 transition-colors">
                              <User size={16} /> Hồ sơ cá nhân
                            </button>
                          </Link>

                          <button aria-label="Manage Services" className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-[#f97316] rounded-xl flex items-center gap-3 transition-colors">
                            <ChartNetwork size={16} /> Quản lý dịch vụ
                          </button>
                          <button aria-label="View Notifications" className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-[#f97316] rounded-xl flex items-center gap-3 transition-colors">
                            <Bell size={16} /> Thông báo
                          </button>
                          <button aria-label="Account Settings" className="w-full text-left px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-[#f97316] rounded-xl flex items-center gap-3 transition-colors">
                            <Settings size={16} /> Cài đặt tài khoản
                          </button>
                        </div>
                        <div className="p-2 border-t border-white/5">
                          <button aria-label="Log Out" onClick={handleLogout} className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl flex items-center gap-3 transition-colors">
                            <LogOut size={16} /> Đăng xuất
                          </button>
                        </div>
                      </MotionDiv>
                    )}
                  </AnimatePresence>
                </div>
              ) : !isHydrated ? null : (
                <Link href="/auth/login">
                  <button aria-label="Log In" className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#f97316]/30 transition-colors duration-200 active:bg-[#e24800]">
                    Đăng nhập
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </MotionNav>

      {/* Search Modal Component */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 lg:hidden pb-safe">
        <div className="grid grid-cols-5 items-center justify-items-center h-16 px-2">
          <Link href="/" onClick={closeMenu} className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${pathname === '/' ? 'text-[#f97316]' : 'text-slate-400'}`}>
            <Home size={22} />
            <span className="text-[10px] font-medium">Trang chủ</span>
          </Link>
          <Link href="/pages/products" onClick={closeMenu} className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${pathname.startsWith('/products') ? 'text-[#f97316]' : 'text-slate-400'}`}>
            <LayoutGrid size={22} />
            <span className="text-[10px] font-medium">Sản phẩm</span>
          </Link>
          <button aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)} className="flex flex-col items-center justify-center -mt-5">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${isOpen ? 'bg-white text-dark rotate-90' : 'bg-[#f97316] text-white shadow-[#f97316]/40'}`}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </div>
          </button>
          <Link href="/pages/blog" onClick={closeMenu} className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${pathname.startsWith('/blog') ? 'text-[#f97316]' : 'text-slate-400'}`}>
            <BookOpen size={22} />
            <span className="text-[10px] font-medium">Bài viết</span>
          </Link>

          {isAuthenticated ? (
            <Link href="/pages/profile" onClick={closeMenu} className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${pathname === '/profile' ? 'text-[#f97316]' : 'text-slate-400'}`}>
              <div className={`w-6 h-6 rounded-full overflow-hidden border ${pathname === '/profile' ? 'border-[#f97316]' : 'border-transparent'}`}>
                {user?.avatar && <Image src={user.avatar} alt="Me" width={24} height={24} className="w-full h-full object-cover" />}
              </div>
              <span className="text-[10px] font-medium">Tôi</span>
            </Link>
          ) : (
            <Link href="/auth/login" onClick={closeMenu} className={`flex flex-col items-center justify-center space-y-1 w-full h-full ${pathname.startsWith('/login') ? 'text-[#f97316]' : 'text-slate-400'}`}>
              <User size={22} />
              <span className="text-[10px] font-medium">Tài khoản</span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <MotionDiv
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-[#0a0a0a] z-40 lg:hidden flex flex-col pt-20 pb-24 overflow-y-auto"
          >
            <div className="px-6 pt-6 flex flex-col h-full min-h-min">
              {/* User Header on Mobile Menu */}
              {isAuthenticated && user && (
                <div className="mb-8 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <Link href="/profile" onClick={closeMenu} className="flex items-center gap-3 grow">
                    {user.avatar && <Image src={user.avatar} alt={user.fullName} width={48} height={48} className="rounded-full border-2 border-[#f97316]" />}
                    <div>
                      <h3 className="text-white font-bold">{user.fullName}</h3>
                      <p className="text-slate-400 text-xs">{user.email}</p>
                    </div>
                  </Link>
                  <button aria-label="Logout" onClick={handleLogout} className="bg-white/10 p-2 rounded-lg text-red-400 hover:bg-red-500/20">
                    <LogOut size={20} />
                  </button>
                </div>
              )}

              {/* Mobile Search Trigger (Replaces inline input) */}
              <button
                onClick={() => {
                  closeMenu();
                  setIsSearchOpen(true);
                }}
                aria-label="Search"
                className="mb-8 w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-4 flex items-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <Search className="mr-3" size={20} />
                <span>Tìm kiếm sản phẩm, bài viết...</span>
              </button>

              <div className="grow space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <MotionDiv
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 last:border-0 pb-2"
                  >
                    {link.children ? (
                      <>
                        <button
                          aria-label={`Toggle ${link.name} Dropdown`}
                          onClick={() => toggleDropdown(link.name)}
                          className={`w-full flex items-center justify-between px-2 py-4 text-lg font-bold ${pathname.startsWith(link.path) && link.path !== '/' ? 'text-[#f97316]' : 'text-white'
                            }`}
                        >
                          <span>{link.name}</span>
                          <MotionDiv
                            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                          >
                            <ChevronDown size={20} />
                          </MotionDiv>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.name && (
                            <MotionDiv
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-1 pl-4 pb-4 bg-white/5 rounded-xl mb-2">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.path}
                                    onClick={() => handleNavigation(child.path)}
                                    className="block px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-[#f97316] hover:bg-white/5 transition-colors"
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </MotionDiv>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.path}
                        onClick={closeMenu}
                        className={`block px-2 py-4 text-lg font-bold ${pathname === link.path
                          ? 'text-[#f97316]'
                          : 'text-white'
                          }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </MotionDiv>
                ))}
              </div>

              {!isAuthenticated && (
                <div className="pt-8 mt-auto">
                  <Link href="/auth/login" onClick={closeMenu}>
                    <button aria-label="Access Client Portal" className="w-full bg-white/10 text-white border border-white/10 px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
                      <User size={18} /> Truy cập Client Portal
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
