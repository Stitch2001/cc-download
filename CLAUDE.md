# 项目概述

这是一个基于 Next.js 16.0.0 的现代 Web 应用项目，使用 App Router 架构和 Tailwind CSS 4.0。项目名称为 "nextjs"，版本 0.1.0，目前处于初始开发阶段。主要功能包括软件安装指南、Claude Code 教学等。

## 项目发展历史

### v0.1.0 (当前版本)
- **初始项目搭建**: 创建基础 Next.js 项目结构
- **导航系统**: 实现固定导航栏，支持多页面切换
- **软件安装页面**: 完整的 Claude Code 软件安装指南，包含 VSCode、Node.js、Git 的下载和安装教程
- **视频教程集成**: 嵌入 Bilibili 视频教程，支持展开/收起功能
- **命令行工具**: 终端风格卡片，支持一键复制命令
- **API 配置指导**: 详细的 API 配置说明和第三方服务推荐
- **响应式设计**: 移动端适配，支持触摸交互
- **主题系统**: 宫崎骏风格的配色方案，支持暗色模式
- **小游戏模块**: 新增"制作小游戏"导航按钮（功能开发中）

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
│   ├── components/        # React 组件
│   │   ├── Navbar.tsx     # 导航栏组件
│   │   ├── DownloadCard.tsx # 下载卡片组件
│   │   ├── Footer.tsx     # 页脚组件
│   │   └── ComingSoon.tsx # 敬请期待页面组件
│   ├── globals.css        # 全局样式文件
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页组件
│   └── favicon.ico        # 网站图标
├── public/                # 静态资源
│   ├── images/           # 图片资源
│   │   ├── vscode.png    # VSCode 图标
│   │   ├── javascript.png # JavaScript/Node.js 图标
│   │   ├── claude-ai-icon.png # Claude AI 图标
│   │   └── xianyu.png    # 闲鱼图标
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

## 功能模块详解

### 导航系统 (Navbar)
- **固定顶部导航**: 滚动时智能隐藏/显示
- **多页面切换**: 软件安装、制作小游戏、个人主页搭建、小程序搭建
- **响应式菜单**: 桌面端水平布局，移动端汉堡菜单
- **页面状态管理**: 使用 CustomEvent 进行页面间通信
- **视觉反馈**: 当前页面高亮显示，hover 效果

### 软件安装页面 (Software Installation)
- **分步指南**: 六步完整安装流程
- **下载卡片**: 包含软件图标、版本信息、下载链接
- **视频教程**: 集成 Bilibili 视频，支持展开/收起
- **终端模拟**: 命令行风格卡片，支持一键复制
- **插件说明**: VSCode 插件安装指导
- **API 配置**: 详细配置步骤和第三方服务推荐

### ComingSoon 页面
- **统一占位**: 为未开发功能提供统一界面
- **视觉设计**: 简洁的"敬请期待"界面

## 核心组件说明

### DownloadCard 组件
- **跨平台下载**: 自动检测操作系统，提供对应下载链接
- **版本显示**: 显示软件版本信息
- **教程按钮**: 可展开/收起的视频教程
- **响应式设计**: 适配不同屏幕尺寸

### 组件通信机制
- **CustomEvent**: 页面间导航使用自定义事件
- **状态提升**: 导航状态在主页面管理
- **Props 传递**: 类型安全的属性传递

## 样式系统

### 主题配色
- **宫崎骏风格**: 自然、温和的色彩搭配
- **CSS 变量**: 支持动态主题切换
- **暗色模式**: 自动适配系统主题偏好

### 组件样式特点
- **Tailwind CSS 4.0**: 使用最新语法特性
- **响应式设计**: 移动优先的设计理念
- **微交互**: hover、scale、transition 等细节动画
- **苹果风格**: 简洁、优雅的设计语言

## 常见开发模式

### 创建新页面
在 `app/` 目录下创建新的 `page.tsx` 文件

### 创建布局
在相应目录下创建 `layout.tsx` 文件

### 添加组件
推荐在 `app/` 目录下创建 `components/` 子目录

### 导航更新
1. 在 `navItems` 数组中添加新页面配置
2. 更新 TypeScript 类型定义
3. 在主页面添加对应的渲染逻辑

### API 路由
在 `app/` 目录下创建 `api/` 目录，添加 `route.ts` 文件

### 样式修改
修改 `app/globals.css` 或使用 Tailwind CSS 类名

## 最新更新记录

### 2025-10-23
- **新增小游戏模块**: 在导航栏添加"制作小游戏"按钮
- **按钮优化**: 防止文字换行，调整内边距和样式
- **类型系统更新**: 更新相关 TypeScript 类型定义
- **文档完善**: 更新项目文档，记录所有变更