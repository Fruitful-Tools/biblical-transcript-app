# Modern Web Stack - Next.js 15 + React 19

A cutting-edge web development stack featuring the latest versions of Next.js, React, and modern tooling.

## 🚀 Tech Stack

- **[Next.js 15](https://nextjs.org/docs)** - React framework with App Router and static export
- **[React 19](https://react.dev/reference/react)** - Frontend library with latest features
- **[Tailwind CSS 4](https://tailwindcss.com/docs/installation/framework-guides/nextjs)** - Utility-first CSS framework (beta)
- **[shadcn/ui](https://ui.shadcn.com/docs/installation/next)** - Component library patterns
- **[Turbopack](https://nextjs.org/docs/app/api-reference/turbopack)** - Fast development bundler
- **[TypeScript](https://www.typescriptlang.org/docs/)** - Type safety and developer experience

## 🎯 Features

- ⚡ **Ultra-fast development** with Turbopack bundler
- 🎨 **Modern styling** with Tailwind CSS 4 beta features
- 🧩 **Beautiful components** with shadcn/ui and Radix UI
- 📘 **Full type safety** with TypeScript
- 🚀 **Optimized performance** with Next.js 15 App Router
- ⚛️ **Latest React features** including concurrent rendering

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the project
git clone <your-repo>
cd biblical-transcription-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
biblical-transcription-app/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Global styles with Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   └── ui/              # shadcn/ui components
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration for Tailwind
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Adding Components

Add new shadcn/ui components:

```bash
# Add a specific component
npx shadcn@latest add button

# Add multiple components
npx shadcn@latest add card badge alert

# Browse available components
npx shadcn@latest add
```

## 🔧 Configuration

### Tailwind CSS 4

This project uses Tailwind CSS 4 (beta) with the new CSS-first configuration approach. The configuration is in `src/app/globals.css` using `@theme` directives.

### shadcn/ui

Components are configured in `components.json` and automatically use:
- **Style**: New York style
- **Color scheme**: Stone base colors
- **CSS variables**: Enabled for theming
- **Icons**: Lucide React

### Next.js 15

Configured with:
- **App Router**: Modern routing system
- **Turbopack**: Fast development bundler
- **TypeScript**: Full type safety
- **ESLint**: Code quality

## 🌙 Dark Mode

Dark mode is automatically supported through Tailwind CSS classes and shadcn/ui's theming system. Toggle between light and dark themes using the `.dark` class.

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.