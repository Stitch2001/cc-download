'use client'

export type OSType = 'windows' | 'mac' | 'linux'

export function detectOS(): OSType {
  if (typeof window === 'undefined') {
    return 'windows' // 服务端默认返回 Windows
  }

  const userAgent = navigator.userAgent.toLowerCase()

  if (userAgent.includes('win')) {
    return 'windows'
  } else if (userAgent.includes('mac') || userAgent.includes('iphone') || userAgent.includes('ipad')) {
    return 'mac'
  } else if (userAgent.includes('linux')) {
    return 'linux'
  }

  return 'windows' // 默认返回 Windows
}

export interface DownloadLink {
  windows: string
  mac: string
  linux?: string
}

export function getDownloadLink(links: DownloadLink): string {
  const os = detectOS()
  return links[os] || links.windows
}