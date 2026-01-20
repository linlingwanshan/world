# 设计文档 (Design Document)

> **项目名称**: Global Industry Top 10 Portal  
> **版本**: 1.0  
> **最后更新**: 2026-01-20  
> **维护团队**: linlingwanshan/world

---

## 目录 (Table of Contents)

1. [项目概述 (Project Overview)](#项目概述-project-overview)
2. [总体目标 (Overall Goals)](#总体目标-overall-goals)
3. [项目范围 (Project Scope)](#项目范围-project-scope)
4. [设计原理 (Design Principles)](#设计原理-design-principles)
5. [技术架构 (Technical Architecture)](#技术架构-technical-architecture)
6. [数据模型 (Data Model)](#数据模型-data-model)
7. [UI/UX 设计 (UI/UX Design)](#uiux-设计-uiux-design)
8. [开发规范 (Development Guidelines)](#开发规范-development-guidelines)
9. [部署与运维 (Deployment & Operations)](#部署与运维-deployment--operations)
10. [可扩展性 (Extensibility)](#可扩展性-extensibility)
11. [未来增强 (Future Enhancements)](#未来增强-future-enhancements)

---

## 项目概述 (Project Overview)

### 项目简介 (Introduction)

Global Industry Top 10 Portal 是一个基于 Next.js 的现代化门户网站，旨在为用户提供各行业领先企业和平台的集中访问入口。本项目通过清晰的行业分类、高效的导航系统和响应式设计，帮助用户快速找到各行业的顶级资源。

### 核心价值 (Core Value)

- **集中化访问**: 为用户提供一站式的行业领先资源访问门户
- **信息聚合**: 整合多个行业的 Top 10 排名信息
- **用户友好**: 简洁直观的界面设计，适配多种设备
- **快速导航**: 高效的分类和搜索系统，快速定位目标资源

---

## 总体目标 (Overall Goals)

### 业务目标 (Business Goals)

1. **资源整合**: 建立覆盖多个关键行业的顶级资源目录
2. **用户增长**: 吸引对行业信息感兴趣的专业用户和普通访客
3. **内容质量**: 确保提供准确、及时、权威的行业信息
4. **品牌建设**: 打造专业可信的行业资源门户品牌形象

### 技术目标 (Technical Goals)

1. **高性能**: 利用静态生成和服务端渲染，实现快速页面加载
2. **可维护性**: 采用模块化架构，便于团队协作和长期维护
3. **可扩展性**: 支持快速添加新行业和功能模块
4. **响应式设计**: 在移动端、平板和桌面端提供一致的用户体验
5. **SEO 优化**: 优化搜索引擎收录，提高网站可见度

### 用户目标 (User Goals)

1. **快速访问**: 用户能在 3 次点击内访问目标网站
2. **清晰导航**: 直观的分类系统，易于理解和使用
3. **跨设备体验**: 在任何设备上都能获得良好的使用体验
4. **信息透明**: 提供每个网站的简要描述，帮助用户做出选择

---

## 项目范围 (Project Scope)

### 功能范围 (Functional Scope)

#### 已实现功能 (Implemented Features)

- ✅ 主页展示：展示所有行业类别的卡片式导航
- ✅ 行业详情页：展示每个行业的 Top 10 网站列表
- ✅ 全行业列表页：提供所有行业的完整概览
- ✅ 响应式导航栏：支持移动端菜单展开/收起
- ✅ 静态页面生成：利用 Next.js SSG 优化性能
- ✅ 外部链接跳转：安全地跳转到目标网站

#### 当前支持的行业 (Supported Industries)

1. 科技 (Technology)
2. 医疗健康 (Healthcare)
3. 金融 (Finance)
4. 电子商务 (E-commerce)
5. 社交媒体 (Social Media)
6. 流媒体服务 (Streaming Services)

### 技术范围 (Technical Scope)

- **前端框架**: Next.js 15+ with App Router
- **UI 框架**: React 19+
- **样式方案**: Tailwind CSS 4+
- **语言**: TypeScript
- **部署平台**: [待补充]
- **版本控制**: Git + GitHub

### 非功能性需求 (Non-Functional Requirements)

- **性能**: 首屏加载时间 < 2 秒
- **可用性**: 99.9% 的服务可用率
- **兼容性**: 支持主流浏览器最近两个版本
- **安全性**: HTTPS 加密，安全的外部链接跳转
- **可访问性**: 遵循 WCAG 2.1 AA 标准

---

## 设计原理 (Design Principles)

### 核心原则 (Core Principles)

1. **简洁至上 (Simplicity First)**
   - 界面简洁清晰，避免信息过载
   - 减少不必要的装饰和复杂交互
   - 专注于核心功能的实现

2. **性能优先 (Performance First)**
   - 优先使用静态生成 (SSG) 而非服务端渲染 (SSR)
   - 最小化 JavaScript 包体积
   - 优化图片和资源加载

3. **移动优先 (Mobile First)**
   - 从移动端设计开始，逐步增强到桌面端
   - 确保触摸友好的交互元素
   - 优化移动端的加载速度

4. **可维护性 (Maintainability)**
   - 模块化的代码结构
   - 清晰的命名约定
   - 完善的类型定义

5. **可扩展性 (Extensibility)**
   - 数据驱动的架构设计
   - 易于添加新行业和网站
   - 预留未来功能扩展接口

### 设计模式 (Design Patterns)

1. **组件化开发**: 将 UI 拆分为可复用的 React 组件
2. **数据与视图分离**: 数据定义独立于组件实现
3. **约定优于配置**: 遵循 Next.js 的文件系统路由约定
4. **渐进式增强**: 基础功能优先，逐步添加高级特性

---

## 技术架构 (Technical Architecture)

### 整体架构 (Overall Architecture)

```
┌─────────────────────────────────────────────────┐
│                   用户浏览器                      │
│              (Desktop/Tablet/Mobile)            │
└────────────────────┬────────────────────────────┘
                     │
                     │ HTTPS
                     ▼
┌─────────────────────────────────────────────────┐
│              CDN / 静态托管服务                   │
│          (Next.js Static Export)                │
└────────────────────┬────────────────────────────┘
                     │
                     │ 静态资源
                     ▼
┌─────────────────────────────────────────────────┐
│            Next.js 应用层                        │
│  ┌──────────────┐  ┌──────────────┐            │
│  │   App Router │  │  Components  │            │
│  │   (路由管理)  │  │  (UI 组件)    │            │
│  └──────────────┘  └──────────────┘            │
│  ┌──────────────┐  ┌──────────────┐            │
│  │  Data Layer  │  │   Styles     │            │
│  │  (数据层)     │  │ (Tailwind)   │            │
│  └──────────────┘  └──────────────┘            │
└─────────────────────────────────────────────────┘
```

### 目录结构 (Directory Structure)

```
world/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # 根布局（包含导航）
│   │   ├── page.tsx                  # 主页
│   │   ├── all-industries/           # 所有行业列表页
│   │   │   └── page.tsx
│   │   └── industry/[id]/            # 动态行业详情页
│   │       └── page.tsx
│   ├── components/                   # React 组件
│   │   ├── Navigation.tsx            # 导航栏组件
│   │   └── IndustryCard.tsx          # 行业卡片组件
│   └── data/                         # 数据定义
│       └── industries.ts             # 行业和网站数据
├── public/                           # 静态资源
├── .gitignore                        # Git 忽略配置
├── package.json                      # 项目依赖
├── tsconfig.json                     # TypeScript 配置
├── next.config.ts                    # Next.js 配置
├── tailwind.config.ts                # Tailwind 配置
├── postcss.config.mjs                # PostCSS 配置
├── eslint.config.mjs                 # ESLint 配置
├── README.md                         # 项目说明
└── design_doc.md                     # 设计文档（本文档）
```

### 技术栈详情 (Technology Stack Details)

#### 前端核心 (Frontend Core)

- **Next.js 16.1.3**: React 框架，提供路由、SSG、SSR 等功能
- **React 19.2.3**: UI 组件库
- **TypeScript 5.x**: 类型安全的 JavaScript 超集

#### 样式和 UI (Styling & UI)

- **Tailwind CSS 4.x**: 实用优先的 CSS 框架
- **PostCSS**: CSS 处理工具链
- **响应式设计**: 移动端、平板、桌面三种断点

#### 开发工具 (Development Tools)

- **ESLint 9.x**: 代码质量检查工具
- **Next.js ESLint Config**: Next.js 官方 ESLint 规则

#### 字体 (Fonts)

- **Geist Sans**: 无衬线字体
- **Geist Mono**: 等宽字体

---

## 数据模型 (Data Model)

### 核心数据结构 (Core Data Structures)

#### Website Interface

```typescript
interface Website {
  name: string;          // 网站名称
  url: string;           // 网站 URL（必须是完整的 https:// 链接）
  description?: string;  // 网站描述（可选）
}
```

#### Industry Interface

```typescript
interface Industry {
  id: string;           // 行业唯一标识符（用于 URL）
  name: string;         // 行业显示名称
  description: string;  // 行业描述
  websites: Website[];  // 该行业的网站列表（通常为 10 个）
}
```

### 数据示例 (Data Example)

```typescript
{
  id: 'technology',
  name: 'Technology',
  description: 'Leading technology companies and platforms',
  websites: [
    {
      name: 'Microsoft',
      url: 'https://www.microsoft.com',
      description: 'Cloud computing and software solutions'
    },
    // ... 更多网站
  ]
}
```

### 数据管理规范 (Data Management Guidelines)

1. **ID 命名规范**: 使用小写字母和连字符，如 `e-commerce`
2. **网站数量**: 每个行业建议包含 10 个网站
3. **URL 格式**: 必须是完整的 HTTPS URL
4. **描述长度**: 建议在 20-50 个字符之间
5. **排序规则**: 按影响力或市场份额排序
6. **更新频率**: 建议每季度审查和更新一次

---

## UI/UX 设计 (UI/UX Design)

### 设计系统 (Design System)

#### 色彩方案 (Color Scheme)

基于 Tailwind CSS 的默认配置，主要使用：
- **主色调**: 蓝色系 (blue-500, blue-600 等)
- **背景色**: 白色、灰色系 (gray-50, gray-100 等)
- **文本色**: 黑色、灰色 (gray-900, gray-700 等)
- **强调色**: 悬停和交互状态

#### 间距系统 (Spacing System)

遵循 Tailwind 的间距标准：
- **页面边距**: px-4 (移动端), px-6 (平板), px-8 (桌面)
- **组件间距**: space-y-4, gap-6 等
- **内边距**: p-4, p-6 等

#### 响应式断点 (Responsive Breakpoints)

```
- Mobile:  < 640px  (默认)
- Tablet:  640px - 1024px  (sm:, md:)
- Desktop: > 1024px  (lg:, xl:, 2xl:)
```

### 页面设计 (Page Design)

#### 主页 (Home Page)

- **布局**: 网格布局展示行业卡片
- **卡片**: 显示行业名称、描述和网站数量
- **交互**: 悬停效果、点击跳转到行业详情页

#### 行业详情页 (Industry Detail Page)

- **头部**: 行业名称和描述
- **列表**: 垂直排列的网站卡片
- **卡片内容**: 排名、网站名称、描述、访问链接
- **导航**: 返回主页或所有行业页面的链接

#### 全行业列表页 (All Industries Page)

- **布局**: 完整的行业卡片网格
- **功能**: 与主页类似，但可能包含更多信息

### 导航设计 (Navigation Design)

- **桌面端**: 水平导航栏，包含 Logo 和主要链接
- **移动端**: 汉堡菜单，点击展开全屏菜单
- **交互**: 平滑的过渡动画

---

## 开发规范 (Development Guidelines)

### 代码规范 (Coding Standards)

#### 命名约定 (Naming Conventions)

- **组件**: PascalCase (如 `IndustryCard.tsx`)
- **函数**: camelCase (如 `getIndustryById`)
- **常量**: UPPER_SNAKE_CASE (如 `MAX_WEBSITES`)
- **类型/接口**: PascalCase (如 `Industry`, `Website`)
- **文件名**: kebab-case 或 PascalCase

#### TypeScript 使用

- 所有文件使用 `.ts` 或 `.tsx` 扩展名
- 显式定义函数参数和返回值类型
- 使用 interface 定义数据结构
- 避免使用 `any` 类型

#### React 组件规范

```typescript
// 组件示例
interface ComponentProps {
  title: string;
  optional?: number;
}

export default function Component({ title, optional }: ComponentProps) {
  return <div>{title}</div>;
}
```

### 版本控制 (Version Control)

- **分支策略**: [待补充 - 如 Git Flow 或 GitHub Flow]
- **提交信息**: 使用清晰的描述性提交信息
- **PR 审查**: [待补充 - 代码审查流程]

### 测试策略 (Testing Strategy)

[待补充]

- **单元测试**: 组件和工具函数测试
- **集成测试**: 页面流程测试
- **E2E 测试**: 关键用户路径测试

---

## 部署与运维 (Deployment & Operations)

### 构建流程 (Build Process)

```bash
# 安装依赖
npm install

# 开发环境运行
npm run dev

# 生产环境构建
npm run build

# 生产环境启动
npm start

# 代码检查
npm run lint
```

### 部署方式 (Deployment Methods)

#### 选项 1: Vercel (推荐)

- 自动构建和部署
- 全球 CDN 分发
- 自动 HTTPS 和域名配置

#### 选项 2: 静态导出

```bash
# 在 next.config.ts 中配置
output: 'export'

# 构建静态文件
npm run build

# 输出目录: out/
```

#### 选项 3: 自托管

- 使用 Node.js 服务器
- 配置反向代理 (Nginx/Apache)
- 配置 SSL 证书

### 监控和日志 (Monitoring & Logging)

[待补充]

- **性能监控**: 页面加载时间、Core Web Vitals
- **错误追踪**: 前端错误捕获和上报
- **访问分析**: 用户行为和流量统计

### 维护计划 (Maintenance Plan)

- **依赖更新**: 每月检查并更新依赖包
- **数据更新**: 每季度审查和更新行业数据
- **性能优化**: 根据监控数据持续优化
- **安全审计**: 定期进行安全漏洞扫描

---

## 可扩展性 (Extensibility)

### 添加新行业 (Adding New Industries)

只需在 `src/data/industries.ts` 中添加新的行业对象：

```typescript
{
  id: 'new-industry',
  name: '新行业',
  description: '新行业的描述',
  websites: [
    // 添加 10 个网站
  ]
}
```

Next.js 会自动生成新的路由和页面。

### 添加新功能 (Adding New Features)

#### 搜索功能

- 在导航栏添加搜索框组件
- 实现客户端搜索逻辑
- 支持按行业名称和网站名称搜索

#### 收藏功能

- 使用 localStorage 存储用户收藏
- 添加收藏按钮到网站卡片
- 创建收藏列表页面

#### 多语言支持

- 集成 next-intl 或 next-i18next
- 准备翻译文件
- 添加语言切换器

#### 深色模式

- 使用 next-themes
- 定义深色主题色彩
- 添加主题切换按钮

### 数据源扩展 (Data Source Extension)

当前使用静态数据文件，未来可以扩展为：

- **CMS 集成**: 使用 Contentful, Sanity 等无头 CMS
- **数据库**: 连接 PostgreSQL, MongoDB 等数据库
- **API 集成**: 从外部 API 获取行业数据
- **后台管理**: 开发管理界面，动态管理数据

---

## 未来增强 (Future Enhancements)

### 短期目标 (Short-term Goals)

- [ ] 添加更多行业类别（教育、娱乐、旅游等）
- [ ] 实现搜索功能
- [ ] 添加网站 Logo 图标显示
- [ ] 优化 SEO 元数据
- [ ] 添加页面过渡动画

### 中期目标 (Mid-term Goals)

- [ ] 用户账户系统
- [ ] 个性化推荐
- [ ] 收藏和书签功能
- [ ] 社交分享功能
- [ ] 深色模式支持
- [ ] 多语言支持（中文、英文等）

### 长期目标 (Long-term Goals)

- [ ] 数据动态管理后台
- [ ] 用户评论和评分系统
- [ ] 行业趋势分析和报告
- [ ] 移动应用开发
- [ ] API 开放平台
- [ ] 智能推荐算法

---

## 附录 (Appendix)

### 术语表 (Glossary)

- **SSG**: Static Site Generation - 静态站点生成
- **SSR**: Server-Side Rendering - 服务端渲染
- **CDN**: Content Delivery Network - 内容分发网络
- **SEO**: Search Engine Optimization - 搜索引擎优化
- **PWA**: Progressive Web App - 渐进式 Web 应用

### 参考资料 (References)

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

### 更新日志 (Changelog)

- **2026-01-20**: 创建初始版本设计文档
- [待补充]: 后续更新记录

---

## 文档维护 (Document Maintenance)

### 维护责任 (Maintenance Responsibility)

- **文档所有者**: 项目负责人
- **更新频率**: 每次重大功能更新时同步更新文档
- **审查周期**: 每季度进行一次全面审查

### 贡献指南 (Contribution Guidelines)

1. 在修改前先阅读完整文档
2. 保持文档结构的一致性
3. 使用清晰的中英文双语标题
4. 添加代码示例时确保可运行
5. 更新"更新日志"部分

### 反馈与改进 (Feedback & Improvement)

如有任何关于本设计文档的建议或问题，请：
- 在 GitHub Issues 中提出
- 通过 Pull Request 提交改进
- 联系项目维护团队

---

**文档结束 (End of Document)**