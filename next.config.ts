import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true, // 添加这个选项来避免图片优化问题
  },
};

export default nextConfig;
