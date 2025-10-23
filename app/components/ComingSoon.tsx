'use client'

import React from 'react'

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background-gradient)' }}>
      <div className="text-center max-w-2xl mx-auto px-6">
        {/* 装饰性图标 */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#4D7C6F]/20 to-[#7AA095]/20 rounded-3xl flex items-center justify-center shadow-lg">
            <svg className="w-12 h-12 text-[#4D7C6F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>

        {/* 主标题 */}
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2C5A4D] mb-6">
          敬请期待
        </h1>

        {/* 副标题 */}
        <p className="text-xl text-[#4D7C6F] mb-8 leading-relaxed">
          该功能正在开发中，即将为你呈现精彩内容
        </p>

        {/* 描述文字 */}
        <p className="text-base text-gray-600 mb-12 max-w-lg mx-auto">
          我们正在努力为你打造更好的学习和开发体验。请持续关注我们的更新，第一时间获取最新功能。
        </p>

        {/* 装饰性元素 */}
        <div className="flex justify-center space-x-2 mb-12">
          <div className="w-2 h-2 bg-[#4D7C6F] rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-[#4D7C6F] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-[#4D7C6F] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>

              </div>
    </div>
  )
}

export default ComingSoon