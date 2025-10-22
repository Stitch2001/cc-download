'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const quickLinks = [
  { label: '首页', href: '#' },
  { label: '我的观察', href: '#experience' },
  { label: '开发案例', href: '#tools' },
  { label: '关于我', href: '#footer' }
];

const socialLinks = [
  {
    name: "邮箱",
    url: "mailto:dstech01@163.com",
    info: "dstech01@163.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.89 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "微信公众号：地鼠说",
    info: "关注地鼠公众号",
    qrcode: "/images/mp-qrcode.png",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5,4C5.36,4 2,6.69 2,10C2,11.89 3.08,13.56 4.78,14.66L4,17L6.5,15.5C7.39,15.81 8.37,16 9.41,16C9.15,15.37 9,14.7 9,14C9,10.69 12.13,8 16,8C16.09,8 16.17,8.01 16.26,8.01C15.25,5.7 12.61,4 9.5,4M6.5,6.5A1,1 0 0,1 7.5,7.5A1,1 0 0,1 6.5,8.5A1,1 0 0,1 5.5,7.5A1,1 0 0,1 6.5,6.5M11.5,6.5A1,1 0 0,1 12.5,7.5A1,1 0 0,1 11.5,8.5A1,1 0 0,1 10.5,7.5A1,1 0 0,1 11.5,6.5M16,9C13.24,9 11,11.24 11,14C11,16.76 13.24,19 16,19C16.67,19 17.31,18.84 17.89,18.56L20,20L19.38,18.06C20.45,17.05 21,15.61 21,14C21,11.24 18.76,9 16,9M14,11.5A1,1 0 0,1 15,12.5A1,1 0 0,1 14,13.5A1,1 0 0,1 13,12.5A1,1 0 0,1 14,11.5M18,11.5A1,1 0 0,1 19,12.5A1,1 0 0,1 18,13.5A1,1 0 0,1 17,12.5A1,1 0 0,1 18,11.5Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    name: "小红书：地鼠Stitch",
    info: "关注地鼠小红书",
    qrcode: "/images/xiaohongshu-qrcode.png",
    url: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.44,0H221.67c17.93,0,33.86,15.57,34.33,33.48V221.72A35.09,35.09,0,0,1,221.66,256H33.5A35.14,35.14,0,0,1,0,221.64V33.56C0.43,15.93,15.81,0.5,33.44,0Zm16.73,91.44c-.13,19.87-.06,39.75-.16,59.63a2.1,2.1,0,0,1-2.13,2.6c-2.39.14-4.79.06-7.19.08,1.61,4,3.35,7.86,5.15,11.73,4.52-.15,9.68.79,13.54-2.17,3.47-2.58,4.58-7.17,4.51-11.3,0-20.19,0-40.39-.09-60.58C59.26,91.41,54.71,91.4,50.17,91.44Zm56.08-.9q-5.08,11.67-10.36,23.24c-1,2.31-2.21,5.37-.11,7.46,2.69,2.44,6.64,1.5,9.94,1.72-2.29,5.78-5.3,11.27-7.23,17.19-1.07,2.92,1.6,5.89,4.52,5.92,5.29.36,10.6,0,15.9.14,1.73-3.87,3.47-7.73,5.17-11.62-3.09,0-6.21.22-9.25-.39,3.29-8.26,7.19-16.25,10.68-24.41-4.27-.5-9.1.89-13-.77,1.9-6.4,5.36-12.27,7.8-18.5C115.61,90.5,110.93,90.47,106.25,90.54Zm72.75.05,0,5.21c-3.06,0-6.12,0-9.18,0q0,7,0,13.93c3.07,0,6.13,0,9.19.06q.12,6,0,12.08c-4.6.09-9.21,0-13.81.07-.06,4.64-.05,9.27,0,13.9,4.61.05,9.23,0,13.84,0,0,9.86,0,19.73,0,29.59,4.62,0,9.23,0,13.85,0q0-14.79,0-29.57c6.74,0,13.47-.1,20.21,0,2.37-.2,5.08,1.46,5,4.07a110.67,110.67,0,0,1,0,11.08,2.26,2.26,0,0,1-2.12,2.39c-3.85.28-7.71,0-11.57.13,1.7,4,3.35,8,5.28,11.95,6.35-.33,14.11,1.27,18.95-4,4.6-4.26,3.22-11,3.41-16.56-.29-5.85,1.14-12.46-2.49-17.58-3.09-4.34-8.66-5.52-13.68-5.61-.3-7,1.37-15.19-3.78-20.88-4.8-5.38-12.53-5.4-19.17-5.14l0-5.2C188.23,90.56,183.61,90.57,179,90.59Zm-49.42,5.22q0,7,0,13.92c2.9,0,5.79,0,8.69,0,0,13.91,0,27.83,0,41.74-4.15.07-8.31,0-12.46.05-2.15,4.62-4.25,9.26-6.34,13.9,15.48.06,31,0,46.44,0q0-6.94,0-13.9c-4.45,0-8.91,0-13.36-.05q0-20.88,0-41.77c2.91,0,5.81,0,8.72,0,0-4.64,0-9.29,0-13.93C150.73,95.79,140.16,95.77,129.58,95.81Zm91.35,1.28c-3.88,2.94-2.61,8.32-2.78,12.51,2.59,0,5.19.14,7.78-.09,4.16-.38,7.29-5.23,5.62-9.15C230.24,96.06,224.43,94.19,220.93,97.09ZM27,109.72c-.7,9.12-1.41,18.23-2.07,27.35a22.12,22.12,0,0,1-1.32,6.06c2.34,5.35,4.68,10.7,7.18,16,5.6-7.49,7.68-16.93,8.26-26.1.49-7.8,1.36-15.59,1.64-23.4C36.1,109.79,31.54,109.68,27,109.72Zm46.13,0q1,12.69,2,25.37c.73,8.48,2.92,17.12,8.1,24,2.47-5.29,4.83-10.63,7.17-16A21.67,21.67,0,0,1,89,137c-.66-9.09-1.38-18.18-2.08-27.27Q80,109.69,73.1,109.72Zm17.16,54.69c7.08,2.09,14.58.66,21.85,1.05,2.14-4.63,4.27-9.27,6.35-13.93-7.27-.28-14.67.76-21.8-1.07Q93.42,157.41,90.26,164.41Z" fill="currentColor"/>
      </svg>
    )
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPopover, setShowPopover] = useState<string | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });

  const handlePopoverOpen = (qrcode: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const popoverWidth = 164; // 150px + 16px padding
    const popoverHeight = 164; // 150px + 16px padding

    let left = rect.left + window.scrollX;
    let top = rect.bottom + window.scrollY + 8;

    // 确保不超出右边界
    if (left + popoverWidth > window.innerWidth + window.scrollX) {
      left = window.innerWidth + window.scrollX - popoverWidth;
    }

    // 确保不超出左边界
    if (left < window.scrollX) {
      left = window.scrollX;
    }

    // 检查是否会超出底部边界，如果会就显示在上方
    if (top + popoverHeight > window.innerHeight + window.scrollY) {
      top = rect.top + window.scrollY - popoverHeight - 8;
    }

    setPopoverPosition({ top, left });
    setShowPopover(qrcode);
  };

  const handlePopoverClose = () => {
    setShowPopover(null);
  };

  return (
    <footer
      className="bg-secondary-light border-t border-[rgba(0,0,0,0.05)] pt-10 pb-6 relative overflow-hidden"
      id="footer"
    >
      {/* 背景装饰 */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(77,124,111,0.03)0%,rgba(77,124,111,0)70%)] top-[-200px] right-[-200px] z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* 品牌介绍部分 */}
          <div className="col-span-1">
            <div className="mb-3">
              <h6 className="text-xl font-semibold tracking-[-0.01em] text-foreground mb-1">
                地鼠的编程笔记
              </h6>
              <p className="text-sm text-gray-600 leading-relaxed mb-3 max-w-md">
                南大文科硕士，第一代 AI 驱动的全栈工程师，致力于让每个小白都能享受 AI 编程的红利。
              </p>
            </div>

            <div className="flex gap-2 mb-3 relative">
              {socialLinks.map((link, index) => (
                <div key={index}>
                  {link.name === "邮箱" ? (
                    <Link
                      href={link.url}
                      className="text-gray-600 w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all duration-200 hover:transform hover:-translate-y-1 hover:text-primary-main hover:border-primary-main hover:bg-primary-light/10"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </Link>
                  ) : (
                    <div
                      onMouseEnter={(e) => handlePopoverOpen(link.qrcode || '', e)}
                      onMouseLeave={handlePopoverClose}
                      className="text-gray-600 w-9 h-9 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] transition-all duration-200 cursor-pointer hover:transform hover:-translate-y-1 hover:text-primary-main hover:border-primary-main hover:bg-primary-light/10"
                    >
                      {link.icon}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Popover - 使用 fixed 定位 */}
            {showPopover && (
              <div
                className="fixed p-2 bg-white rounded-lg shadow-xl border border-[rgba(0,0,0,0.08)] pointer-events-none z-[9999]"
                style={{
                  top: `${popoverPosition.top}px`,
                  left: `${popoverPosition.left}px`,
                }}
                onMouseLeave={handlePopoverClose}
              >
                <img
                  src={showPopover}
                  alt="QR Code"
                  className="w-[150px] h-[150px] object-contain rounded"
                />
              </div>
            )}

            <p className="text-xs text-gray-600 opacity-80">
              &copy; {currentYear} 地鼠。保留所有权利。
            </p>
          </div>

          {/* 快速链接部分 */}
          <div className="col-span-1">
            <h6 className="text-xl font-semibold tracking-[-0.01em] text-foreground mb-3">
              快速链接
            </h6>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-600 no-underline transition-all duration-200 hover:text-primary-main hover:transform hover:translate-x-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 联系我部分 */}
          <div className="col-span-1">
            <h6 className="text-xl font-semibold tracking-[-0.01em] text-foreground mb-3">
              联系我
            </h6>
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:dstech01@163.com"
                className="text-gray-600 no-underline flex items-center gap-1 transition-all duration-200 hover:text-primary-main"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.1 2.89 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.89 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
                dstech01@163.com
              </Link>
              <div className="flex items-center gap-1 text-gray-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" fill="currentColor"/>
                </svg>
                江苏，南京
              </div>
            </div>
          </div>

          {/* 头像部分 */}
          <div className="col-span-1 flex justify-center md:justify-end items-center">
            <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
              {/* 头像背景装饰 */}
              <div
                className="absolute w-full h-full rounded-full bg-gradient-to-br from-primary-main/8 to-primary-main/2 z-0"
              />

              <div
                className="absolute w-[130px] h-[130px] md:w-[170px] md:h-[170px] rounded-full border border-dashed border-primary-main/20 z-0 animate-spin"
                style={{ animationDuration: '30s' }}
              />

              <img
                src="/images/dishu.png"
                alt="地鼠的照片"
                className="absolute w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full border-4 border-white shadow-lg z-20 object-cover"
              />

              {/* 装饰元素 */}
              <div
                className="absolute w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary-main to-primary-light bottom-[8px] right-[15px] md:bottom-[10px] md:right-[20px] z-10 transform -rotate-12 shadow-md"
              />

              <div
                className="absolute w-4 h-4 md:w-5 md:h-5 rounded-lg bg-gradient-to-br from-primary-main to-primary-light top-[20px] right-[35px] md:top-[30px] md:right-[50px] z-10 transform rotate-12 shadow-md"
              />
            </div>
          </div>
        </div>

        {/* 分割线 */}
        <div className="my-5 border-t border-[rgba(0,0,0,0.07)]"></div>

        {/* ICP 备案信息 */}
        <div className="text-center">
          <p className="text-xs text-gray-600 opacity-60">
            <Link
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit no-underline hover:underline"
            >
              粤ICP备2025395881号-2
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;