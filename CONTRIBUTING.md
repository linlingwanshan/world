# Contributing to Global Industry Top 10 Portal

Thank you for your interest in contributing to the Global Industry Top 10 Portal! This document provides guidelines and instructions for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:

- Be respectful and considerate in your communication
- Welcome newcomers and help them get started
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Git
- A GitHub account

### Setup Development Environment

1. **Fork the repository**
   - Visit https://github.com/linlingwanshan/world
   - Click the "Fork" button in the top right

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/world.git
   cd world
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/linlingwanshan/world.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

6. **Open browser**
   Navigate to http://localhost:3000

## 💡 How to Contribute

### Types of Contributions

#### 1. Adding New Industries

To add a new industry category:

**Steps:**
1. Edit `src/data/industries.ts`
2. Add a new industry object:
   ```typescript
   {
     id: 'industry-slug',
     name: 'Industry Name',
     description: 'Brief description of the industry',
     websites: [
       {
         name: 'Website Name',
         url: 'https://example.com',
         description: 'What this website does'
       },
       // Add 9 more websites (total of 10)
     ]
   }
   ```

**Guidelines:**
- Use lowercase, hyphenated IDs (e.g., `renewable-energy`)
- Include exactly 10 websites for consistency
- Order websites by relevance/importance
- Ensure all URLs are valid and accessible
- Provide clear, concise descriptions
- Avoid promotional language

#### 2. Updating Existing Rankings

To update website rankings or information:

**Steps:**
1. Locate the industry in `src/data/industries.ts`
2. Update the relevant website information
3. Explain your reasoning in the pull request

**Guidelines:**
- Provide sources for ranking changes
- Keep descriptions factual and neutral
- Verify all links are working
- Maintain consistency in description style

#### 3. Improving UI/UX

To enhance the user interface or experience:

**Steps:**
1. Identify the component or page to improve
2. Create mockups or screenshots of proposed changes
3. Implement changes following our design system
4. Test on multiple devices and browsers

**Guidelines:**
- Follow existing design patterns
- Maintain responsive design
- Ensure accessibility (WCAG 2.1 AA)
- Test on mobile, tablet, and desktop
- Add appropriate transitions/animations
- Update documentation if needed

#### 4. Adding Features

To add new functionality:

**Steps:**
1. Open an issue to discuss the feature first
2. Wait for approval from maintainers
3. Implement the feature
4. Add tests if applicable
5. Update documentation

**Guidelines:**
- Ensure feature aligns with project goals
- Keep implementation simple and maintainable
- Consider performance impact
- Follow TypeScript best practices
- Add JSDoc comments for complex logic

#### 5. Fixing Bugs

To fix a bug:

**Steps:**
1. Check if an issue exists (if not, create one)
2. Assign the issue to yourself
3. Fix the bug
4. Add test to prevent regression
5. Submit pull request

**Guidelines:**
- Include steps to reproduce in PR
- Explain the root cause
- Describe your solution
- Verify fix doesn't break other features

#### 6. Improving Documentation

To improve documentation:

**Types:**
- README updates
- Code comments
- Design documentation
- API documentation
- Examples and tutorials

**Guidelines:**
- Write clear, concise content
- Use proper markdown formatting
- Include code examples where helpful
- Keep language simple and accessible
- Proofread for typos and grammar

## 🔄 Development Workflow

### Branch Naming Convention

Use descriptive branch names:

```
feature/add-agriculture-industry
fix/navigation-mobile-menu
docs/update-readme
refactor/industry-card-component
```

### Making Changes

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing patterns
   - Add comments where needed

3. **Test your changes**
   ```bash
   npm run dev    # Test in development
   npm run build  # Verify build succeeds
   npm run lint   # Check for linting errors
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Agriculture industry category"
   ```

### Commit Message Guidelines

Use clear, descriptive commit messages:

**Format:**
```
Type: Brief description

Detailed explanation (if needed)

Fixes #issue_number (if applicable)
```

**Types:**
- `Add:` New feature or content
- `Fix:` Bug fix
- `Update:` Update existing feature/content
- `Refactor:` Code refactoring
- `Docs:` Documentation changes
- `Style:` Code style changes (formatting)
- `Test:` Adding or updating tests
- `Chore:` Maintenance tasks

**Examples:**
```
Add: Renewable energy industry category

Added 10 top renewable energy companies with descriptions

Fixes #42
```

```
Fix: Mobile navigation menu not closing

The menu state wasn't resetting properly on route change.
Added useEffect to close menu when pathname changes.

Fixes #38
```

## 📏 Coding Standards

### TypeScript

- **Use TypeScript types**: Define interfaces for all data structures
- **Avoid `any`**: Use specific types or `unknown`
- **Export types**: Export interfaces for reusability

```typescript
// Good
interface Website {
  name: string;
  url: string;
  description?: string;
}

// Avoid
const website: any = { ... };
```

### React Components

- **Functional Components**: Use function components with hooks
- **TypeScript Props**: Define prop interfaces
- **Naming**: PascalCase for components, camelCase for functions

```typescript
// Good
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Button({ onClick, children, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

### Styling

- **Tailwind CSS**: Use utility classes
- **Consistent spacing**: Use spacing scale (4, 6, 8, 12)
- **Responsive design**: Mobile-first approach
- **Dark mode ready**: Consider dark mode in color choices

```tsx
// Good
<div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
  Content
</div>

// Avoid inline styles
<div style={{ padding: '16px', background: 'white' }}>
  Content
</div>
```

### File Organization

- **One component per file**: Keep files focused
- **Index exports**: Use index.ts for barrel exports
- **Consistent naming**: Match file name to component name

```
components/
├── Button.tsx
├── Card.tsx
└── Navigation.tsx
```

### Code Quality

- **DRY Principle**: Don't Repeat Yourself
- **Single Responsibility**: One function, one purpose
- **Meaningful Names**: Use descriptive variable/function names
- **Comment Complex Logic**: Explain "why", not "what"

```typescript
// Good: Self-documenting
function getTopIndustries(industries: Industry[], limit: number): Industry[] {
  return industries.slice(0, limit);
}

// Avoid: Unclear
function getTI(data: any[], n: number): any[] {
  return data.slice(0, n);
}
```

## 📤 Submitting Changes

### Before Submitting

**Checklist:**
- [ ] Code follows project style guidelines
- [ ] Changes have been tested locally
- [ ] Build completes without errors (`npm run build`)
- [ ] Linter passes without errors (`npm run lint`)
- [ ] Documentation has been updated (if needed)
- [ ] Commit messages are clear and descriptive
- [ ] Branch is up to date with main

### Creating a Pull Request

1. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open a pull request**
   - Go to your fork on GitHub
   - Click "Pull Request"
   - Select your branch
   - Fill out the PR template

3. **PR Description Template**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] New industry/content
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Code refactoring

   ## Checklist
   - [ ] Tested locally
   - [ ] Build passes
   - [ ] Lint passes
   - [ ] Documentation updated

   ## Screenshots (if applicable)
   Add screenshots for UI changes

   ## Related Issues
   Fixes #issue_number
   ```

4. **Respond to feedback**
   - Address review comments
   - Make requested changes
   - Push updates to your branch

### Pull Request Review Process

1. **Automated checks**: CI/CD will run tests
2. **Code review**: Maintainer will review your code
3. **Feedback**: Address any requested changes
4. **Approval**: PR will be approved when ready
5. **Merge**: Maintainer will merge your PR

## 🐛 Reporting Issues

### Before Creating an Issue

- Search existing issues to avoid duplicates
- Verify the issue in the latest version
- Collect relevant information

### Issue Templates

#### Bug Report

```markdown
**Describe the bug**
Clear description of what the bug is

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen

**Screenshots**
Add screenshots if applicable

**Environment**
- Browser: [e.g., Chrome 120]
- Device: [e.g., iPhone 14]
- OS: [e.g., iOS 17]

**Additional context**
Any other information
```

#### Feature Request

```markdown
**Is your feature request related to a problem?**
Description of the problem

**Describe the solution you'd like**
Clear description of what you want

**Describe alternatives you've considered**
Other solutions you've thought about

**Additional context**
Mockups, examples, or other info
```

## 🎯 Development Tips

### Hot Tips

- Use `npm run dev` for live reloading
- Check browser console for errors
- Test on different screen sizes
- Use React DevTools for debugging
- Keep PRs focused and small

### Common Issues

**Issue**: Build fails
**Solution**: Clear `.next` folder and rebuild
```bash
rm -rf .next
npm run build
```

**Issue**: Port 3000 in use
**Solution**: Kill the process or use different port
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

## 📞 Getting Help

- **Documentation**: Read the README and design_doc.md
- **Issues**: Search existing issues
- **Discussions**: Use GitHub Discussions for questions
- **Code Review**: Ask questions in PR comments

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Questions?** Open an issue or discussion on GitHub.

**Happy Contributing!** 🚀
