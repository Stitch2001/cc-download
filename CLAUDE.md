# 项目概述

这是一个基于 Next.js 16.0.0 的现代 Web 应用项目，使用 App Router 架构和 Tailwind CSS 4.0。项目名称为 "nextjs"，版本 0.1.0，目前处于初始开发阶段。

## 技术栈

- **框架**: Next.js 16.0.0 (App Router)
- **UI 库**: React 19.2.0
- **样式**: Tailwind CSS 4.0
- **语言**: TypeScript 5.x
- **字体**: Geist Sans & Geist Mono (Google Fonts)
- **构建工具**: Next.js 内置构建系统
- **代码质量**: ESLint 9.x with Next.js 配置

## 项目架构

### 目录结构
```
e:\Desktop\coding\cc-download\
├── app/                    # Next.js App Router 目录
│   ├── globals.css        # 全局样式文件
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页组件
│   └── favicon.ico        # 网站图标
├── public/                # 静态资源
│   ├── next.svg          # Next.js logo
│   ├── vercel.svg        # Vercel logo
│   └── other SVG assets
├── eslint.config.mjs      # ESLint 配置
├── next.config.ts         # Next.js 配置
├── postcss.config.mjs     # PostCSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖和脚本
```

### 架构特点
- **App Router**: 使用 Next.js 最新的 App Router 架构
- **服务端组件**: 默认使用 React Server Components
- **TypeScript**: 全栈 TypeScript 支持
- **响应式设计**: 使用 Tailwind CSS 实现移动优先的响应式设计
- **暗色模式**: 内置暗色主题支持

## 开发工作流

### 常用命令
```bash
# 开发服务器
npm run dev
# 或
yarn dev
pnpm dev
bun dev

# 生产构建
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

### 开发环境
- 开发服务器运行在: http://localhost:3000
- 热重载: 修改代码后自动刷新
- TypeScript 类型检查: 实时进行
- ESLint: 集成到开发流程中

## 代码规范与约定

### ESLint 配置
- 使用 Next.js 推荐的 ESLint 配置
- 包含 Core Web Vitals 规则
- TypeScript 支持
- 自定义全局忽略规则

### TypeScript 配置
- 严格模式启用
- 路径别名: `@/*` 指向根目录
- JSX: react-jsx 转换
- 模块解析: bundler 模式

### 样式规范
- 使用 Tailwind CSS 4.0 新语法
- CSS 变量系统支持主题切换
- 响应式断点: sm, md, lg, xl
- 暗色模式: `dark:` 前缀

## 设计规范

### 苹果设计风格
保持符合苹果公司设计美学的UI风格：
- 简洁、轻量的界面
- 适当的留白
- 圆角元素
- 柔和的阴影效果
- 优雅的动画过渡

### 配色方案
```css
/* 宫崎骏风格的主色调 */
primary: {
  light: '#7AA095',
  main: '#4D7C6F',
  dark: '#2C5A4D',
}
/* 暖米色辅助色 */
secondary: {
  light: '#FAF5EB',
  main: '#F0E6D2',
  dark: '#E5D9C0',
}
```

## 特殊模式与约定

### 路径别名
- `@/*`: 指向项目根目录，用于绝对路径导入

### 组件模式
- 使用 React Server Components 作为默认
- 客户端组件需要使用 "use client" 指令
- TypeScript 严格模式，所有 props 需要类型定义

### 字体系统
- Geist Sans: 主要 sans-serif 字体
- Geist Mono: 等宽字体
- CSS 变量: `--font-geist-sans`, `--font-geist-mono`

## 依赖说明

### 核心依赖
- `next`: 16.0.0 - React 全栈框架
- `react`: 19.2.0 - UI 库
- `react-dom`: 19.2.0 - DOM 渲染

### 开发依赖
- `typescript`: TypeScript 编译器
- `@types/*`: TypeScript 类型定义
- `tailwindcss`: CSS 框架
- `@tailwindcss/postcss`: PostCSS 插件
- `eslint`: 代码检查工具
- `eslint-config-next`: Next.js ESLint 配置

## 注意事项

1. **Next.js 版本**: 使用最新的 16.0.0 版本，包含最新特性
2. **React 版本**: 使用 19.2.0，支持最新 React 特性
3. **Tailwind CSS 4.0**: 使用最新版本的 Tailwind，包含新语法和特性
4. **TypeScript 严格模式**: 所有代码必须符合严格类型检查
5. **App Router**: 使用文件系统路由，pages 目录已弃用

## 常见开发模式

### 创建新页面
在 `app/` 目录下创建新的 `page.tsx` 文件

### 创建布局
在相应目录下创建 `layout.tsx` 文件

### 添加组件
推荐在 `app/` 目录下创建 `components/` 子目录

### API 路由
在 `app/` 目录下创建 `api/` 目录，添加 `route.ts` 文件

### 样式修改
修改 `app/globals.css` 或使用 Tailwind CSS 类名