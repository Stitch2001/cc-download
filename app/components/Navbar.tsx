'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems: Array<{ label: string; href: string }> = [
  { label: '软件安装', href: '/software' },
  { label: '制作小游戏', href: '/game' },
  { label: '个人主页搭建', href: '/personal' },
  { label: '小程序搭建', href: '/miniprogram' }
];

const Navbar = ({ currentPage }: { currentPage: 'software' | 'game' | 'personal' | 'miniprogram' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 30;

      // 更新滚动状态
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // 控制导航栏显示/隐藏
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // 向下滚动且超过100px时隐藏导航栏
        setIsVisible(false);
      } else {
        // 向上滚动或在顶部时显示导航栏
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, lastScrollY]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md shadow-sm'
            : 'bg-[#f4f1e9]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 左侧：地鼠的编程笔记 */}
            <div className="flex-1">
              <Link
                href="https://dishu.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold tracking-tight text-gray-900 hover:text-[#587b70] transition-colors duration-200"
              >
                地鼠的编程笔记
              </Link>
            </div>

            {/* 中间：三个功能按钮 */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-3">
              {navItems.map((item) => {
                const isActive = currentPage === item.href.replace('/', '')
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      // 通过自定义事件通知主页面切换
                      window.dispatchEvent(new CustomEvent('navigateTo', { detail: item.href.replace('/', '') }))
                    }}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border cursor-pointer hover:scale-[1.02] whitespace-nowrap ${
                      isActive
                        ? 'bg-[#4D7C6F] text-white border-[#4D7C6F]'
                        : 'bg-white/60 text-gray-700 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>

            {/* 右侧：Claude Code教学 */}
            <div className="flex-1 flex items-center justify-end">
              <div className="flex items-center space-x-2">
                <img
                  src="/images/claude-ai-icon.png"
                  alt="Claude Code"
                  className="w-6 h-6"
                />
                <span className="text-xl tracking-tight text-gray-900">
                  Claude Code教学
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-gray-900 hover:text-orange-500 transition-colors duration-200 p-2"
              aria-controls="mobile-menu"
              onClick={handleDrawerToggle}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-96' : 'max-h-0'
          }`}
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-4 space-y-2 bg-white rounded-t-3xl shadow-lg border-t border-gray-100 max-w-sm mx-auto">
            <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
              功能模块
            </div>
            {navItems.map((item) => {
              const isActive = currentPage === item.href.replace('/', '')
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    // 通过自定义事件通知主页面切换
                    window.dispatchEvent(new CustomEvent('navigateTo', { detail: item.href.replace('/', '') }))
                    handleLinkClick()
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#4D7C6F] text-white'
                      : 'text-gray-900 hover:bg-orange-50 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;