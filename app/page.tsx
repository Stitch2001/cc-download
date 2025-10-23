'use client'

import React, { useRef } from 'react'
import DownloadCard from '@/app/components/DownloadCard'
import ComingSoon from '@/app/components/ComingSoon'
import Navbar from '@/app/components/Navbar'
import { DownloadLink } from '@/app/utils/detectOS'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState<'software' | 'game' | 'personal' | 'miniprogram'>('software')
  const [showVideos, setShowVideos] = useState({
    vscode: false,
    nodejs: false,
    git: false,
    terminal1: false,
    terminal2: false
  })
  const [toastVisible, setToastVisible] = useState(false)
  const contactTextRef = useRef<HTMLSpanElement>(null)

  // 监听导航栏按钮事件
  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      const page = event.detail as 'software' | 'game' | 'personal' | 'miniprogram'
      setCurrentPage(page)
    }

    window.addEventListener('navigateTo', handleNavigate as EventListener)

    return () => {
      window.removeEventListener('navigateTo', handleNavigate as EventListener)
    }
  }, [])

  // Toast自动关闭
  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false)
      }, 5000) // 5秒后自动关闭

      return () => clearTimeout(timer)
    }
  }, [toastVisible])

  // 下载链接配置
  const downloadLinks = {
    vscode: {
      windows: 'https://code.visualstudio.com/sha/download?build=stable&os=win32-arm64',
      mac: 'https://code.visualstudio.com/sha/download?build=stable&os=darwin-universal'
    } as DownloadLink,
    nodejs: {
      windows: 'https://nodejs.org/dist/v22.21.0/node-v22.21.0-x64.msi',
      mac: 'https://nodejs.org/dist/v22.21.0/node-v22.21.0.pkg'
    } as DownloadLink,
    git: {
      windows: 'https://github.com/git-for-windows/git/releases/download/v2.51.1.windows.1/Git-2.51.1-64-bit.exe',
      mac: '#pre-installed'
    } as DownloadLink
  }

  const commands = [
    'npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com',
    'npx zcf'
  ]

  const handleCopy = async (command: string, index: number) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const toggleVideo = (software: 'vscode' | 'nodejs' | 'git' | 'terminal1' | 'terminal2') => {
    setShowVideos(prev => ({
      ...prev,
      [software]: !prev[software]
    }))
  }

  // 渲染软件安装页面
  const renderSoftwarePage = () => (
    <div>
      {/* 页面头部 */}
      <div className="py-4 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold leading-10 tracking-tight my-4">
            软件安装
          </h1>
          <div className="mb-6">
            <span
              className="text-base font-medium text-[#4D7C6F] hover:text-[#2C5A4D] underline cursor-pointer transition-colors duration-200"
              onClick={() => {
                // 这里可以添加点击后的处理逻辑
                console.log('通用解决方案被点击')
              }}
            >
              以下所有步骤遇到报错的通用解决方案点这里
            </span>
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-6">

          {/* VSCode 下载卡片 */}
          <div className="space-y-4">
            <div className="text-left">
              <p className="text-lg text-[#4D7C6F] font-medium">
                第一步：下载VS Code，这款软件会帮助你阅读代码
              </p>
            </div>
            <DownloadCard
              title="Visual Studio Code"
              icon={
                <Image
                  src="/images/vscode.png"
                  alt="Visual Studio Code"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              }
              downloadLinks={downloadLinks.vscode}
              version="1.96.2"
              onTutorialClick={() => toggleVideo('vscode')}
              tutorialButtonText={showVideos.vscode ? '收起' : '安装教程'}
            />

            {/* 视频区域 */}
            {showVideos.vscode && (
              <div className="w-full max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--secondary-light)' }}>
                  <iframe
                    src="//player.bilibili.com/player.html?isOutside=true&aid=115373240229117&bvid=BV1Mc48zEEoj&cid=33074121132&p=1"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            )}

            {/* VSCode插件安装说明卡片 */}
            <div className="w-full max-w-4xl mx-auto mt-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--secondary-light)', opacity: 0.8 }}>
                <h4 className="text-base font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                  插件安装说明：
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
                  安装完成后，左侧最后一个图标是插件市场，在插件市场中，搜索claude，然后下载Claude Code for VS Code插件。
                </p>
                <p className="text-sm mt-2 italic" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                  不建议改成中文，大家学习编程要逐渐适应英文环境，一开始可能比较难，后面会发现来来去去就那么几个词。
                </p>
              </div>
            </div>
          </div>

          {/* Node.js 下载卡片 */}
          <div className="space-y-4">
            <div className="text-left">
              <p className="text-lg text-[#4D7C6F] font-medium">
                第二步：下载Node.js，这款软件是运行Claude Code的必要条件
              </p>
            </div>
            <DownloadCard
              title="Node.js"
              icon={
                <Image
                  src="/images/javascript.png"
                  alt="JavaScript / Node.js"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              }
              downloadLinks={downloadLinks.nodejs}
              version="22.21.0"
              onTutorialClick={() => toggleVideo('nodejs')}
              tutorialButtonText={showVideos.nodejs ? '收起' : '安装教程'}
            />

            {/* 视频区域 */}
            {showVideos.nodejs && (
              <div className="w-full max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--secondary-light)' }}>
                  <iframe
                    src="//player.bilibili.com/player.html?isOutside=true&aid=115373240229117&bvid=BV1Mc48zEEoj&cid=33074121132&p=1"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Git 下载卡片 */}
          <div className="space-y-4">
            <div className="text-left">
              <p className="text-lg text-[#4D7C6F] font-medium">
                第三步：下载Git，这款软件也是运行Claude Code的必要条件。MacOS用户可跳过。
              </p>
            </div>
            <DownloadCard
              title="Git"
              icon={
                <svg width="64" height="64" viewBox="0 0 128 128" fill="none">
                  <path fill="#F05032" d="M124.74 58.56L69.44 3.26c-2.99-2.99-7.84-2.99-10.83 0L47.84 14.03l13.68 13.68c3.18-1.08 6.83-.35 9.36 2.18 2.55 2.55 3.27 6.24 2.14 9.44l13.18 13.18c3.2-1.13 6.89-.41 9.44 2.14 3.58 3.58 3.58 9.38 0 12.96-3.58 3.58-9.38 3.58-12.96 0-2.69-2.69-3.36-6.65-1.99-9.96L70.91 45.27v32.48c.87.43 1.69.99 2.41 1.71 3.58 3.58 3.58 9.38 0 12.96-3.58 3.58-9.38 3.58-12.96 0-3.58-3.58-3.58-9.38 0-12.96.86-.86 1.85-1.51 2.92-1.94V45.02c-1.07-.43-2.06-1.08-2.92-1.94-2.71-2.71-3.37-6.7-1.97-10.02L44.26 19.44 3.26 60.44c-2.99 2.99-2.99 7.84 0 10.83l55.3 55.3c2.99 2.99 7.84 2.99 10.83 0l55.35-55.35c2.99-2.99 2.99-7.84 0-10.83z"/>
                </svg>
              }
              downloadLinks={downloadLinks.git}
              version="2.51.1"
              onTutorialClick={() => toggleVideo('git')}
              tutorialButtonText={showVideos.git ? '收起' : '安装教程'}
            />

            {/* 视频区域 */}
            {showVideos.git && (
              <div className="w-full max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--secondary-light)' }}>
                  <iframe
                    src="//player.bilibili.com/player.html?isOutside=true&aid=115373240229117&bvid=BV1Mc48zEEoj&cid=33074121132&p=1"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            )}
          </div>

        </div>

        {/* 命令行区域 */}
        <div className="mt-8 space-y-4">
          <div className="text-left">
            <p className="text-lg text-[#4D7C6F] font-medium">
              第四步：从终端安装Claude Code
            </p>
          </div>
          {commands.map((command, index) => {
          const terminalType = index === 0 ? 'terminal1' : 'terminal2'
          const showTerminalVideo = showVideos[terminalType]

          return (
          <React.Fragment key={index}>
            {/* 第五步文字（在第二个终端卡片前显示） */}
            {index === 1 && (
              <div className="space-y-4">
                <div className="text-left">
                  <p className="text-lg text-[#4D7C6F] font-medium">
                    第五步：寻找适合你的大模型API
                  </p>
                </div>

                {/* 大模型API卡片 */}
                <div
                  className="w-full max-w-4xl mx-auto rounded-xl border border-solid transition-colors hover:border-transparent hover:shadow-lg"
                  style={{
                    backgroundColor: 'var(--secondary-light)',
                    borderColor: 'var(--primary-light)',
                    color: 'var(--foreground)'
                  }}
                >
                  <div className="flex items-center p-8">
                    {/* 左侧图标区域 */}
                    <div className="flex-shrink-0 mr-8">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <Image
                          src="/images/xianyu.png"
                          alt="闲鱼"
                          width={64}
                          height={64}
                          className="w-16 h-16"
                        />
                      </div>
                    </div>

                    {/* 中间信息区域 */}
                    <div className="flex-grow">
                      <div className="flex items-baseline gap-3 mb-2">
                        <h2
                          className="text-2xl font-semibold"
                          style={{ color: 'var(--primary-dark)' }}
                        >
                          闲鱼
                        </h2>
                        <span style={{ color: 'var(--primary-main)' }}>遇事不决问闲鱼。</span>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                        闲鱼搜索"claudecode中转"，购买激活码后向商家索要API_URL和API_KEY。
                      </p>
                    </div>

                    {/* 右侧按钮区域 */}
                    <div className="flex-shrink-0 ml-8">
                      <button
                        className="h-12 px-6 rounded-full font-medium text-base transition-all hover:shadow-md border-2 hover:scale-105 active:scale-95 cursor-pointer"
                        style={{
                          backgroundColor: '#ffffff',
                          borderColor: '#4D7C6F',
                          color: '#4D7C6F'
                        }}
                      >
                        看不懂点这里
                      </button>
                    </div>
                  </div>
                </div>

                {/* 智谱GLM-4.6说明文字 */}
                <div className="text-left mt-4">
                  <div className="text-base" style={{ color: 'var(--foreground)' }}>
                    或者直接用我们买的智谱GLM-4.6，性能和claude-sonnet-4模型不相上下。
                    <div className="relative inline-block">
                      <span
                        ref={contactTextRef}
                        className="underline cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText('dstech001')
                            setToastVisible(true)
                          } catch (err) {
                            console.error('复制失败:', err)
                            setToastVisible(true)
                          }
                        }}
                        style={{ color: 'var(--primary-main)' }}
                      >
                        联系我获取。
                      </span>

                      {/* Toast通知 */}
                      {toastVisible && (
                        <div
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
                          style={{ minWidth: '250px' }}
                        >
                          <div
                            className="rounded-lg shadow-lg p-3 flex items-start space-x-2"
                            style={{
                              backgroundColor: 'var(--secondary-light)',
                              borderLeft: '3px solid #4D7C6F'
                            }}
                          >
                            <div className="flex-shrink-0">
                              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="#4D7C6F"/>
                                </svg>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-xs font-medium mb-1" style={{ color: 'var(--foreground)' }}>
                                联系方式
                              </h4>
                              <p className="text-xs" style={{ color: 'var(--foreground)', opacity: 0.8 }}>
                                微信号：dstech001
                              </p>
                              <p className="text-xs mt-1" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
                                已复制到剪贴板
                              </p>
                            </div>
                            <button
                              onClick={() => setToastVisible(false)}
                              className="flex-shrink-0 p-1 rounded hover:bg-gray-100 transition-colors"
                              style={{ color: 'var(--foreground)', opacity: 0.6 }}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" fill="currentColor"/>
                              </svg>
                            </button>
                          </div>
                          {/* 小三角形指示器 */}
                          <div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1"
                            style={{
                              width: 0,
                              height: 0,
                              borderLeft: '6px solid transparent',
                              borderRight: '6px solid transparent',
                              borderTop: '6px solid var(--secondary-light)'
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 第六步文字（在第二个终端卡片前显示） */}
            {index === 1 && (
              <div className="text-left">
                <p className="text-lg text-[#4D7C6F] font-medium">
                  第六步：配置API_URL和API_KEY
                </p>
              </div>
            )}
            {/* 终端卡片 */}
            <div
              className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden"
              style={{ backgroundColor: '#1e1e1e' }}
            >
              <div
                className="px-4 py-2 flex items-center justify-between border-b"
                style={{ borderColor: '#333' }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-gray-400">终端</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleVideo(terminalType)}
                    className="px-3 py-1 text-xs rounded-md border border-white bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {showTerminalVideo ? '收起' : (index === 0 ? '安装教程' : '配置教程')}
                  </button>
                  <button
                    onClick={() => handleCopy(command, index)}
                    className="p-2 rounded-md transition-colors hover:bg-gray-700 cursor-pointer"
                    style={{ color: '#ffffff' }}
                    title={copiedIndex === index ? "已复制!" : "复制命令"}
                  >
                    {copiedIndex === index ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="font-mono text-sm text-white break-all">
                  {command}
                </div>
              </div>
            </div>

            {/* 对应的安装教程视频区域 */}
            {showTerminalVideo && (
              <div className="w-full max-w-4xl mx-auto mt-4">
                <div className="rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--secondary-light)' }}>
                  <iframe
                    src="//player.bilibili.com/player.html?isOutside=true&aid=115373240229117&bvid=BV1Mc48zEEoj&cid=33074121132&p=1"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    className="w-full aspect-video"
                  />
                </div>
              </div>
            )}

            {/* 配置说明文字（仅对第二个终端卡片显示） */}
            {index === 1 && (
              <div className="w-full max-w-4xl mx-auto mt-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--secondary-light)', opacity: 0.8 }}>
                  <h4 className="text-base font-medium mb-2" style={{ color: 'var(--foreground)' }}>
                    配置说明：
                  </h4>
                  <ol className="text-sm space-y-1" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
                    <li>1. 首先输入<span className="font-mono bg-gray-200 px-1 rounded" style={{ backgroundColor: '#e5e5e5' }}>y</span>，确认安装。</li>
                    <li>2. 然后输入<span className="font-mono bg-gray-200 px-1 rounded" style={{ backgroundColor: '#e5e5e5' }}>3</span>，进入API配置界面。</li>
                    <li>3. 再选择<span className="font-mono bg-gray-200 px-1 rounded" style={{ backgroundColor: '#e5e5e5' }}>2.自定义API配置</span>。</li>
                    <li>4. 然后选择<span className="font-mono bg-gray-200 px-1 rounded" style={{ backgroundColor: '#e5e5e5' }}>1.添加配置</span>，配置名称随便输入，认证类型选择API Key，然后依次输入你获得的API_URL和API_KEY即可。</li>
                    <li>5. 也可以点击<span className="font-medium" style={{ color: 'var(--primary-main)' }}>「配置教程」</span>查看视频。</li>
                  </ol>
                </div>

                {/* 大功告成庆祝文字 */}
                <div className="mt-8 text-center" style={{ marginTop: '96px' }}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4D7C6F' }}>
                    大功告成！
                  </h2>
                  <p className="text-xl md:text-2xl font-medium" style={{ color: 'var(--foreground)' }}>
                    开始享受你的Claude Code吧！
                  </p>
                </div>
              </div>
            )}
          </React.Fragment>
        )})}
        </div>
      </main>
    </div>
  )

  return (
    <div
      className="min-h-screen text-[var(--foreground)] font-sans"
      style={{ background: 'var(--background-gradient)' }}
    >
      {/* 导航栏 */}
      <Navbar currentPage={currentPage} />

      {/* 页面内容 */}
      {currentPage === 'software' ? (
        renderSoftwarePage()
      ) : (
        <ComingSoon />
      )}

      </div>
  )
}