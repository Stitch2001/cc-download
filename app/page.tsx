'use client'

import DownloadCard from '@/app/components/DownloadCard'
import { DownloadLink } from '@/app/utils/detectOS'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

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

  return (
    <div
      className="min-h-screen text-[var(--foreground)] font-sans"
      style={{ background: 'var(--background-gradient)' }}
    >
      {/* 页面头部 */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-semibold leading-10 tracking-tight mb-4">
            软件安装
          </h1>
          <p className="text-lg leading-8 max-w-2xl mx-auto" style={{ color: 'var(--primary-dark)' }}>
            快速下载最新版本的开发工具，自动匹配您的操作系统
          </p>
        </div>
      </div>

      {/* 主要内容区域 */}
      <main className="max-w-4xl mx-auto px-6 pb-20">
        <div className="space-y-8">

          {/* VSCode 下载卡片 */}
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
          />

          {/* Node.js 下载卡片 */}
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
          />

          {/* Git 下载卡片 */}
          <DownloadCard
            title="Git"
            icon={
              <svg width="64" height="64" viewBox="0 0 128 128" fill="none">
                <path fill="#F05032" d="M124.74 58.56L69.44 3.26c-2.99-2.99-7.84-2.99-10.83 0L47.84 14.03l13.68 13.68c3.18-1.08 6.83-.35 9.36 2.18 2.55 2.55 3.27 6.24 2.14 9.44l13.18 13.18c3.2-1.13 6.89-.41 9.44 2.14 3.58 3.58 3.58 9.38 0 12.96-3.58 3.58-9.38 3.58-12.96 0-2.69-2.69-3.36-6.65-1.99-9.96L70.91 45.27v32.48c.87.43 1.69.99 2.41 1.71 3.58 3.58 3.58 9.38 0 12.96-3.58 3.58-9.38 3.58-12.96 0-3.58-3.58-3.58-9.38 0-12.96.86-.86 1.85-1.51 2.92-1.94V45.02c-1.07-.43-2.06-1.08-2.92-1.94-2.71-2.71-3.37-6.7-1.97-10.02L44.26 19.44 3.26 60.44c-2.99 2.99-2.99 7.84 0 10.83l55.3 55.3c2.99 2.99 7.84 2.99 10.83 0l55.35-55.35c2.99-2.99 2.99-7.84 0-10.83z"/>
              </svg>
            }
            downloadLinks={downloadLinks.git}
            version="2.51.1"
          />

        </div>

        {/* 命令行区域 */}
        <div className="mt-8 space-y-4">
          {commands.map((command, index) => (
            <div
              key={index}
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
              <div className="p-4">
                <div className="font-mono text-sm text-white break-all">
                  {command}
                </div>
              </div>
            </div>
          ))}
        </div>

        </main>
    </div>
  )
}