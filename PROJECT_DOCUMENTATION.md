# 项目文档 / Project Documentation

## 1. 项目概述 / Project Overview

### 中文
**全球行业 Top 10 门户网站** 是一个基于 Next.js 构建的现代化门户网站，旨在为用户提供全球各行业领先企业和平台的汇总导航。该项目通过清晰的行业分类和精心整理的 Top 10 榜单，帮助用户快速找到各个领域的权威资源和领先企业。

**项目目标：**
- 🎯 为用户提供一站式的行业领导者资源汇总
- 🌍 涵盖多个重要行业，包括科技、医疗、金融、电商、社交媒体和流媒体服务等
- 📊 精选每个行业的 Top 10 企业和平台
- 💡 提供简洁、高效的用户体验和响应式设计

**适用场景：**
- 行业研究人员需要快速了解各领域的领导企业
- 投资者寻找行业头部企业的官方网站
- 学生和求职者了解行业格局和重点企业
- 创业者和企业家分析市场竞争格局
- 普通用户寻找可信赖的行业服务提供商

### English
**Global Industry Top 10 Portal** is a modern portal website built with Next.js, designed to provide users with a comprehensive navigation to leading enterprises and platforms across various industries worldwide. Through clear industry categorization and carefully curated Top 10 lists, this project helps users quickly find authoritative resources and leading companies in different sectors.

**Project Goals:**
- 🎯 Provide a one-stop resource hub for industry leaders
- 🌍 Cover multiple important industries including Technology, Healthcare, Finance, E-commerce, Social Media, and Streaming Services
- 📊 Feature Top 10 companies and platforms in each industry
- 💡 Deliver a clean, efficient user experience with responsive design

**Use Cases:**
- Industry researchers quickly understanding leading enterprises in various fields
- Investors finding official websites of industry-leading companies
- Students and job seekers understanding industry landscape and key companies
- Entrepreneurs and business owners analyzing market competition
- General users seeking trusted industry service providers

---

## 2. 使用说明 / Usage Instructions

### 安装步骤 / Installation Steps

#### 前提条件 / Prerequisites
- Node.js 18.17 或更高版本 / Node.js 18.17 or later
- npm, yarn, pnpm 或 bun 包管理器 / npm, yarn, pnpm, or bun package manager

#### 步骤 / Steps

**1. 克隆仓库 / Clone the repository:**
```bash
git clone https://github.com/linlingwanshan/world.git
cd world
```

**2. 安装依赖 / Install dependencies:**
```bash
npm install
# 或 / or
yarn install
# 或 / or
pnpm install
```

**3. 启动开发服务器 / Run development server:**
```bash
npm run dev
# 或 / or
yarn dev
# 或 / or
pnpm dev
```

**4. 访问应用 / Access the application:**
打开浏览器访问 / Open your browser and navigate to: [http://localhost:3000](http://localhost:3000)

### 生产环境构建 / Production Build

```bash
# 构建项目 / Build the project
npm run build

# 启动生产服务器 / Start production server
npm start
```

### 添加新行业 / Adding New Industries

编辑 `src/data/industries.ts` 文件，按以下格式添加新行业：
Edit the `src/data/industries.ts` file and add new industries in the following format:

```typescript
{
  id: 'industry-id',           // 行业唯一标识 / Unique industry identifier
  name: 'Industry Name',       // 行业名称 / Industry name
  description: 'Description',  // 行业描述 / Industry description
  websites: [
    { 
      name: 'Website Name',          // 网站名称 / Website name
      url: 'https://example.com',    // 网站链接 / Website URL
      description: 'Description'     // 网站描述 / Website description
    },
    // 最多添加 10 个网站 / Add up to 10 websites
  ]
}
```

### 代码检查和格式化 / Linting

```bash
npm run lint
```

---

## 3. 技术架构 / Technical Architecture

### 技术栈 / Technology Stack

- **框架 / Framework**: Next.js 16 (App Router)
- **前端库 / Frontend Library**: React 19
- **语言 / Language**: TypeScript 5
- **样式 / Styling**: Tailwind CSS 4
- **字体 / Fonts**: Geist Sans & Geist Mono

### 架构图 / Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     浏览器 / Browser                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                  Next.js 应用 / Next.js App                   │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              路由层 / Routing Layer                     │  │
│  │  ┌──────────┐  ┌────────────┐  ┌──────────────────┐  │  │
│  │  │  Home    │  │  Industry  │  │  All Industries  │  │  │
│  │  │  Page    │  │  [id] Page │  │     Page         │  │  │
│  │  └──────────┘  └────────────┘  └──────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
│                              │                               │
│                              ▼                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │            组件层 / Component Layer                     │  │
│  │  ┌─────────────┐  ┌─────────────┐                     │  │
│  │  │ Navigation  │  │ IndustryCard│                     │  │
│  │  │  Component  │  │  Component  │                     │  │
│  │  └─────────────┘  └─────────────┘                     │  │
│  └───────────────────────────────────────────────────────┘  │
│                              │                               │
│                              ▼                               │
│  ┌───────────────────────────────────────────────────────┐  │
│  │             数据层 / Data Layer                         │  │
│  │  ┌───────────────────────────────────────────┐        │  │
│  │  │       industries.ts                       │        │  │
│  │  │  - Industry 接口定义 / Interface          │        │  │
│  │  │  - Website 接口定义 / Interface           │        │  │
│  │  │  - 行业数据 / Industry Data               │        │  │
│  │  └───────────────────────────────────────────┘        │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│              样式系统 / Styling System                        │
│         Tailwind CSS + PostCSS + CSS Modules                │
└─────────────────────────────────────────────────────────────┘
```

### 项目结构 / Project Structure

```
world/
├── src/
│   ├── app/                          # Next.js 应用目录 / App directory
│   │   ├── industry/[id]/            # 动态行业页面 / Dynamic industry pages
│   │   │   └── page.tsx              # 行业详情页 / Industry detail page
│   │   ├── all-industries/           # 所有行业页面 / All industries page
│   │   │   └── page.tsx              # 行业列表页 / Industry list page
│   │   ├── layout.tsx                # 根布局（含导航）/ Root layout with nav
│   │   ├── page.tsx                  # 首页 / Home page
│   │   └── globals.css               # 全局样式 / Global styles
│   ├── components/                   # React 组件 / React components
│   │   ├── Navigation.tsx            # 响应式导航栏 / Responsive navigation
│   │   └── IndustryCard.tsx          # 行业卡片组件 / Industry card component
│   └── data/                         # 数据文件 / Data files
│       └── industries.ts             # 行业和网站数据 / Industry & website data
├── public/                           # 静态资源 / Static assets
├── package.json                      # 项目配置 / Project configuration
├── tsconfig.json                     # TypeScript 配置 / TypeScript config
├── tailwind.config.ts                # Tailwind 配置 / Tailwind config
├── next.config.ts                    # Next.js 配置 / Next.js config
└── eslint.config.mjs                 # ESLint 配置 / ESLint config
```

### 核心模块说明 / Core Module Description

#### 1. 路由系统 / Routing System
- **首页（/）**: 展示项目介绍和行业概览 / Project intro and industry overview
- **行业详情页（/industry/[id]）**: 显示特定行业的 Top 10 网站列表 / Top 10 websites for specific industry
- **所有行业页（/all-industries）**: 展示所有可用行业的网格视图 / Grid view of all available industries

#### 2. 组件系统 / Component System
- **Navigation**: 响应式导航栏，支持移动端菜单 / Responsive navbar with mobile menu
- **IndustryCard**: 可重用的行业卡片组件，用于展示行业信息 / Reusable industry card for displaying info

#### 3. 数据管理 / Data Management
- 采用静态数据结构，存储在 TypeScript 文件中 / Static data structure in TypeScript files
- 类型安全的接口定义 / Type-safe interface definitions
- 易于扩展和维护 / Easy to extend and maintain

#### 4. 样式系统 / Styling System
- Tailwind CSS 实用类优先方法 / Utility-first approach with Tailwind CSS
- 响应式设计，支持移动端、平板和桌面 / Responsive design for mobile, tablet, desktop
- 暗色模式支持（可选） / Dark mode support (optional)

---

## 4. 未来开发计划 / Future Development Plans

### 短期计划（1-3 个月）/ Short-term Plans (1-3 months)

- [ ] **搜索功能 / Search Functionality**
  - 实现全局搜索，支持按行业名称和网站名称搜索
  - Implement global search for industries and websites

- [ ] **排序和筛选 / Sorting and Filtering**
  - 添加自定义排序选项（按名称、热度等）
  - Add custom sorting options (by name, popularity, etc.)

- [ ] **用户收藏功能 / Bookmark Feature**
  - 允许用户收藏喜欢的行业和网站
  - Allow users to bookmark favorite industries and websites

- [ ] **国际化（i18n）/ Internationalization**
  - 支持多语言切换（中文、英文等）
  - Support multiple languages (Chinese, English, etc.)

### 中期计划（3-6 个月）/ Mid-term Plans (3-6 months)

- [ ] **数据库集成 / Database Integration**
  - 将静态数据迁移到数据库（如 PostgreSQL）
  - Migrate static data to database (e.g., PostgreSQL)
  - 实现数据的动态管理和更新
  - Enable dynamic data management and updates

- [ ] **管理后台 / Admin Dashboard**
  - 开发管理界面，方便添加、编辑、删除行业和网站
  - Develop admin interface for managing industries and websites

- [ ] **用户认证系统 / User Authentication**
  - 实现用户注册、登录功能
  - Implement user registration and login
  - 支持社交账号登录（Google, GitHub 等）
  - Support social login (Google, GitHub, etc.)

- [ ] **评分和评论系统 / Rating and Review System**
  - 允许用户对网站进行评分和评论
  - Allow users to rate and review websites

- [ ] **数据分析和统计 / Analytics and Statistics**
  - 添加访问统计和热门排行功能
  - Add visit statistics and trending rankings

### 长期计划（6-12 个月）/ Long-term Plans (6-12 months)

- [ ] **AI 推荐系统 / AI Recommendation System**
  - 基于用户行为的智能推荐
  - Intelligent recommendations based on user behavior

- [ ] **移动应用 / Mobile App**
  - 开发 iOS 和 Android 原生应用
  - Develop native iOS and Android apps

- [ ] **API 服务 / API Service**
  - 提供公开 API，供第三方应用使用
  - Provide public API for third-party applications

- [ ] **数据可视化 / Data Visualization**
  - 添加行业趋势图表和可视化分析
  - Add industry trend charts and visual analysis

- [ ] **更多行业覆盖 / More Industry Coverage**
  - 扩展到 20+ 个行业分类
  - Expand to 20+ industry categories
  - 每个行业增加更多网站选项
  - Add more website options per industry

---

## 5. 贡献指南 / Contribution Guide

### 欢迎贡献！/ Welcome Contributors!

我们欢迎并感谢所有形式的贡献，包括但不限于：
We welcome and appreciate all forms of contributions, including but not limited to:

- 🐛 报告 Bug / Bug reports
- 💡 提出新功能建议 / Feature suggestions
- 📝 改进文档 / Documentation improvements
- 🔧 提交代码修复或新功能 / Code fixes and new features
- 🌍 翻译和本地化 / Translations and localization

### 贡献流程 / Contribution Process

#### 1. Fork 项目 / Fork the Project

点击页面右上角的 "Fork" 按钮，将项目 Fork 到你的 GitHub 账户。
Click the "Fork" button in the top right corner to fork the project to your GitHub account.

#### 2. 克隆仓库 / Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/world.git
cd world
```

#### 3. 创建分支 / Create a Branch

```bash
git checkout -b feature/your-feature-name
# 或 / or
git checkout -b fix/your-bug-fix
```

分支命名规范 / Branch naming convention:
- `feature/xxx`: 新功能 / New features
- `fix/xxx`: Bug 修复 / Bug fixes
- `docs/xxx`: 文档更新 / Documentation updates
- `refactor/xxx`: 代码重构 / Code refactoring

#### 4. 安装依赖 / Install Dependencies

```bash
npm install
```

#### 5. 进行开发 / Make Changes

- 编写代码 / Write your code
- 遵循项目的代码风格 / Follow project code style
- 添加必要的注释 / Add necessary comments
- 确保代码通过 lint 检查 / Ensure code passes lint checks

```bash
npm run lint
```

#### 6. 测试你的修改 / Test Your Changes

```bash
# 启动开发服务器 / Start development server
npm run dev

# 构建测试 / Build test
npm run build
```

在浏览器中测试所有功能是否正常工作。
Test all functionality in the browser to ensure it works correctly.

#### 7. 提交代码 / Commit Changes

```bash
git add .
git commit -m "feat: add your feature description"
# 或 / or
git commit -m "fix: fix your bug description"
```

提交信息规范 / Commit message convention:
- `feat`: 新功能 / New feature
- `fix`: Bug 修复 / Bug fix
- `docs`: 文档更新 / Documentation
- `style`: 代码格式（不影响功能）/ Code formatting
- `refactor`: 重构 / Refactoring
- `test`: 测试相关 / Testing
- `chore`: 构建或辅助工具变动 / Build or tool changes

#### 8. 推送到 GitHub / Push to GitHub

```bash
git push origin feature/your-feature-name
```

#### 9. 创建 Pull Request / Create Pull Request

1. 访问你 Fork 的仓库页面 / Visit your forked repository
2. 点击 "Compare & pull request" 按钮 / Click "Compare & pull request"
3. 填写 PR 描述，说明你的修改内容 / Fill in PR description explaining your changes
4. 提交 Pull Request / Submit Pull Request

### Pull Request 指南 / Pull Request Guidelines

#### PR 标题格式 / PR Title Format
```
[类型/Type] 简短描述 / Brief description
```

示例 / Examples:
- `[Feature] Add search functionality`
- `[Fix] Resolve navigation menu issue on mobile`
- `[Docs] Update installation instructions`

#### PR 描述模板 / PR Description Template

```markdown
## 修改说明 / Description
<!-- 简要说明此 PR 的目的和修改内容 / Brief explanation of PR purpose and changes -->

## 修改类型 / Type of Change
- [ ] 新功能 / New feature
- [ ] Bug 修复 / Bug fix
- [ ] 文档更新 / Documentation update
- [ ] 代码重构 / Code refactoring
- [ ] 性能优化 / Performance improvement

## 测试 / Testing
<!-- 描述你如何测试这些修改 / Describe how you tested these changes -->

## 截图 / Screenshots
<!-- 如有 UI 变化，请提供截图 / Provide screenshots if UI changed -->

## 相关 Issue / Related Issues
<!-- 引用相关的 Issue 编号 / Reference related issue numbers -->
Closes #issue_number
```

### 代码规范 / Code Standards

#### TypeScript 规范 / TypeScript Standards
- 使用 TypeScript 编写所有代码 / Write all code in TypeScript
- 为所有函数和组件添加类型注解 / Add type annotations for all functions and components
- 避免使用 `any` 类型 / Avoid using `any` type
- 使用接口（interface）定义数据结构 / Use interfaces to define data structures

#### React 组件规范 / React Component Standards
- 使用函数组件和 Hooks / Use functional components and Hooks
- 组件名称使用 PascalCase / Use PascalCase for component names
- Props 使用 TypeScript 接口定义 / Define Props using TypeScript interfaces
- 保持组件小而专注 / Keep components small and focused

#### 样式规范 / Styling Standards
- 优先使用 Tailwind CSS 实用类 / Prefer Tailwind CSS utility classes
- 保持响应式设计 / Maintain responsive design
- 遵循移动优先原则 / Follow mobile-first principle

#### 文件命名规范 / File Naming Standards
- 组件文件：PascalCase（如 `Navigation.tsx`）/ Component files: PascalCase
- 工具文件：camelCase（如 `utils.ts`）/ Utility files: camelCase
- 配置文件：kebab-case（如 `eslint.config.mjs`）/ Config files: kebab-case

### 问题报告 / Issue Reporting

#### Bug 报告模板 / Bug Report Template

```markdown
## Bug 描述 / Bug Description
<!-- 清楚简洁地描述 Bug / Clear and concise description of the bug -->

## 复现步骤 / Steps to Reproduce
1. 进入 '...' / Go to '...'
2. 点击 '...' / Click on '...'
3. 滚动到 '...' / Scroll to '...'
4. 看到错误 / See error

## 期望行为 / Expected Behavior
<!-- 描述你期望发生什么 / Describe what you expected to happen -->

## 实际行为 / Actual Behavior
<!-- 描述实际发生了什么 / Describe what actually happened -->

## 截图 / Screenshots
<!-- 如适用，添加截图 / Add screenshots if applicable -->

## 环境信息 / Environment
- 操作系统 / OS: [e.g., Windows 11, macOS 14, Ubuntu 22.04]
- 浏览器 / Browser: [e.g., Chrome 120, Firefox 121, Safari 17]
- Node.js 版本 / Node.js Version: [e.g., 18.17.0]
```

#### 功能请求模板 / Feature Request Template

```markdown
## 功能描述 / Feature Description
<!-- 清楚简洁地描述你想要的功能 / Clear description of the feature you want -->

## 使用场景 / Use Case
<!-- 描述此功能解决的问题或改进的场景 / Describe the problem or scenario this feature addresses -->

## 建议的解决方案 / Proposed Solution
<!-- 描述你希望如何实现此功能 / Describe how you'd like this feature to be implemented -->

## 替代方案 / Alternatives
<!-- 描述你考虑过的其他替代方案 / Describe alternative solutions you've considered -->

## 其他信息 / Additional Context
<!-- 添加任何其他相关信息 / Add any other relevant information -->
```

### 社区行为准则 / Code of Conduct

我们致力于为所有人提供一个友好、安全和欢迎的环境。请遵守以下准则：
We are committed to providing a friendly, safe, and welcoming environment for all. Please follow these guidelines:

- ✅ 尊重所有参与者 / Respect all participants
- ✅ 欢迎不同观点和经验 / Welcome different viewpoints and experiences
- ✅ 提供和接受建设性的批评 / Give and accept constructive criticism
- ✅ 关注对社区最有利的事情 / Focus on what is best for the community
- ❌ 禁止骚扰、攻击性言论或其他不当行为 / No harassment, offensive language, or inappropriate behavior

### 获取帮助 / Getting Help

如果你在贡献过程中遇到问题，可以通过以下方式获取帮助：
If you encounter issues during contribution, get help through:

- 📖 查看现有文档和 README / Check existing documentation and README
- 💬 在 GitHub Issues 中提问 / Ask questions in GitHub Issues
- 📧 联系维护者 / Contact maintainers
- 🔍 搜索已关闭的 Issues / Search closed Issues for similar problems

### 致谢 / Acknowledgments

感谢所有为本项目做出贡献的开发者！你们的努力让这个项目变得更好。
Thanks to all developers who contribute to this project! Your efforts make this project better.

---

## 联系方式 / Contact

- **项目地址 / Repository**: [https://github.com/linlingwanshan/world](https://github.com/linlingwanshan/world)
- **问题反馈 / Issues**: [GitHub Issues](https://github.com/linlingwanshan/world/issues)
- **讨论区 / Discussions**: [GitHub Discussions](https://github.com/linlingwanshan/world/discussions)

---

## 许可证 / License

All rights reserved © 2026 Global Industry Top 10 Portal

---

## 更新日志 / Changelog

### v0.1.0 (2026-01)
- ✨ 初始版本发布 / Initial release
- ✨ 支持 6 个行业分类 / Support for 6 industry categories
- ✨ 每个行业 10 个精选网站 / 10 curated websites per industry
- ✨ 响应式设计，支持移动端 / Responsive design with mobile support
- ✨ 基于 Next.js 16 和 React 19 构建 / Built with Next.js 16 and React 19

---

**最后更新 / Last Updated**: 2026-01-21
