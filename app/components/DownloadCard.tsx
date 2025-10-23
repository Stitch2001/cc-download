'use client'

import { useState, useEffect } from 'react'
import { detectOS, getDownloadLink, DownloadLink } from '@/app/utils/detectOS'

interface DownloadCardProps {
  title: string
  icon: React.ReactNode
  downloadLinks: DownloadLink
  version?: string
  comingSoon?: boolean
  onTutorialClick?: () => void
  showTutorialButton?: boolean
  tutorialButtonText?: string
}

export default function DownloadCard({
  title,
  icon,
  downloadLinks,
  version,
  comingSoon = false,
  onTutorialClick,
  showTutorialButton = true,
  tutorialButtonText = '安装教程'
}: DownloadCardProps) {
  const [userOS, setUserOS] = useState<'windows' | 'mac' | 'linux'>('windows')

  useEffect(() => {
    setUserOS(detectOS())
  }, [])

  const getOSLabel = () => {
    switch (userOS) {
      case 'windows':
        return 'Windows'
      case 'mac':
        return 'macOS'
      case 'linux':
        return 'Linux'
      default:
        return 'Windows'
    }
  }

  const getDownloadButtonText = () => {
    if (comingSoon) return '敬请期待'
    if (downloadLinks.mac === '#pre-installed' && userOS === 'mac') return '已预装'
    return '下载'
  }

  const handleDownload = () => {
    if (comingSoon) return

    const link = getDownloadLink(downloadLinks)
    if (link === '#pre-installed') {
      alert('macOS 已预装 Git，无需额外安装')
      return
    }
    window.open(link, '_blank')
  }

  return (
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
            {icon}
          </div>
        </div>

        {/* 中间信息区域 */}
        <div className="flex-grow">
          <div className="flex items-baseline gap-3 mb-2">
            <h2
              className="text-2xl font-semibold"
              style={{ color: 'var(--primary-dark)' }}
            >
              {title}
            </h2>
            {version && (
              <span style={{ color: 'var(--primary-main)' }}>v{version}</span>
            )}
          </div>
        </div>

        {/* 右侧按钮区域 */}
        <div className="flex-shrink-0 ml-8 flex items-center space-x-4">
          {/* 下载按钮区域 */}
          <div className="flex items-center space-x-3">
            {/* 系统图标 */}
            <div className="flex items-center justify-center" style={{ color: 'var(--primary-main)' }}>
              {userOS === 'windows' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.942-1.801" fill="currentColor"/>
                </svg>
              ) : userOS === 'mac' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              )}
            </div>
            <button
              onClick={handleDownload}
              disabled={comingSoon || (downloadLinks.mac === '#pre-installed' && userOS === 'mac')}
              className={`h-12 px-8 rounded-full font-medium text-base transition-all hover:shadow-md ${
                comingSoon || (downloadLinks.mac === '#pre-installed' && userOS === 'mac')
                  ? 'cursor-not-allowed'
                  : 'hover:scale-105 active:scale-95 cursor-pointer'
              }`}
              style={{
                backgroundColor: comingSoon || (downloadLinks.mac === '#pre-installed' && userOS === 'mac')
                  ? 'var(--secondary-dark)'
                  : 'var(--primary-main)',
                color: comingSoon || (downloadLinks.mac === '#pre-installed' && userOS === 'mac')
                  ? 'var(--primary-light)'
                  : 'var(--secondary-light)'
              }}
            >
              {getDownloadButtonText()}
            </button>
          </div>

          {/* 安装教程按钮 */}
          {showTutorialButton && (
            <button
              onClick={onTutorialClick}
              className="h-12 px-6 rounded-full font-medium text-base transition-all hover:shadow-md border-2 hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                backgroundColor: '#ffffff',
                borderColor: 'var(--primary-main)',
                color: 'var(--primary-main)'
              }}
            >
              {tutorialButtonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}