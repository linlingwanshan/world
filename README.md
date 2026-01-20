# Global Industry Top 10 Portal

A Next.js-based portal website that links to the top 10 rankings from various industries. This website serves as a central hub with clear industry categorizations, efficient navigation, and responsive design.

## Features

- 🚀 Built with Next.js 15 and React 19
- 💅 Styled with Tailwind CSS for responsive design
- 📱 Mobile-first, responsive layout (mobile, tablet, desktop)
- 🎯 Static industry pages for Technology, Healthcare, Finance, and more
- 🧭 Responsive navigation bar with mobile menu
- 📊 Top 10 rankings for 6+ industries
- ⚡ Fast, server-rendered pages with static generation
- 🔗 Direct links to industry-leading websites

## Industries Covered

- **Technology**: Leading tech companies and platforms
- **Healthcare**: Top healthcare organizations and medical services
- **Finance**: Major financial institutions and fintech companies
- **E-commerce**: Online shopping and marketplace platforms
- **Social Media**: Leading social networking platforms
- **Streaming Services**: Video and audio streaming platforms

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/linlingwanshan/world.git
cd world
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
world/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── industry/[id]/      # Dynamic industry pages
│   │   ├── all-industries/     # All industries page
│   │   ├── layout.tsx          # Root layout with navigation
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── Navigation.tsx      # Responsive navigation bar
│   │   └── IndustryCard.tsx    # Industry card component
│   └── data/                   # Data files
│       └── industries.ts       # Industry and website data
├── public/                     # Static assets
└── package.json
```

## Customization

### Adding New Industries

Edit `src/data/industries.ts` to add new industries:

```typescript
{
  id: 'industry-id',
  name: 'Industry Name',
  description: 'Industry description',
  websites: [
    { name: 'Website Name', url: 'https://example.com', description: 'Description' },
    // Add up to 10 websites
  ]
}
```

### Modifying Styles

The project uses Tailwind CSS. Modify styles in:
- `src/app/globals.css` for global styles
- Component files for component-specific styles
- `tailwind.config.ts` for Tailwind configuration

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans & Geist Mono

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## License

All rights reserved © 2026 Global Industry Top 10 Portal
