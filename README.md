# CryptoDeven - Crypto Clarity for Absolute Beginners

A modern, clean crypto education website built with Next.js and styled with a Peralex-inspired design aesthetic. This single-page application provides beginner-friendly crypto education with a professional SaaS look and feel.

## 🎨 Design Features

- **Modern SaaS Aesthetic**: Clean, professional design inspired by Peralex template
- **Responsive Layout**: Fully responsive across all device sizes
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Glass Morphism**: Modern backdrop blur effects in navigation
- **Color-Coded Sections**: Intuitive visual hierarchy with indigo/blue color scheme
- **Interactive Cards**: Hover animations with subtle transforms and shadows

## 🚀 Key Sections

### Hero Section
- Gradient text effects and notification badges
- Dual call-to-action buttons
- Trust indicators with checkmarks
- Clean, minimal design focused on conversion

### Why Crypto Section
- Statistics cards showing Bitcoin's 10% adoption milestone
- Modern card layouts with icons and hover animations
- Market cap and user growth data

### 5-Step Bitcoin Journey
- Step-by-step guide cards with time estimates
- Icon-based visual hierarchy
- Clear progression from beginner to Bitcoin owner

### Learning Resources
- **PDFs**: Bitcoin whitepaper, myth buster guide, adoption reports
- **Videos**: Educational content and expert interviews
- **Books**: Curated reading list with Amazon links
- Color-coded categories (Indigo, Green, Purple)

### Thought Leader Gallery
- 7 crypto thought leaders with colorful avatars
- Social media integration
- Inspirational quotes section

### About Deven
- Professional biography highlighting 30-year career
- Clean card design with call-to-action

## 🛠 Tech Stack

- **Framework**: Next.js 14.2.3
- **Styling**: Tailwind CSS with custom utilities
- **Fonts**: Inter font family for modern typography
- **Animations**: Custom scroll-triggered animations
- **Icons**: Custom SVG icons throughout

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/devenspear/cryptodeven.com.git
cd cryptodeven.1.1
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

4. Open [http://localhost:4000](http://localhost:4000) in your browser

The page auto-updates as you edit files in the `src/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind utilities
│   ├── layout.tsx           # Root layout with header/footer
│   └── page.tsx             # Main page component
├── components/
│   ├── animation/
│   │   └── AnimateOnScroll.tsx
│   ├── layout/
│   │   ├── Header.tsx       # Navigation with glass morphism
│   │   └── Footer.tsx       # Site footer
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── WhyCryptoDeven.tsx
│   │   ├── GetStarted.tsx   # 5-step guide
│   │   ├── Resources.tsx    # Learning materials
│   │   ├── ThoughtLeaders.tsx
│   │   └── Contact.tsx      # About Deven section
│   └── ui/
│       └── GradientText.tsx
└── context/
    └── ThemeContext.tsx
```

## 🎯 Features

- **Modern Card Layouts**: Consistent card design with shadows and hover effects
- **Gradient Text**: Eye-catching gradient text for key phrases
- **Smooth Transitions**: 200ms transitions throughout the site
- **Mobile-First**: Responsive design that works on all devices
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized images and lazy loading
- **SEO Ready**: Proper meta tags and semantic structure

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically deploy your site

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 Content Management

All content is managed through React components in the `src/components/sections/` directory. Key content areas:

- **Hero messaging**: `Hero.tsx`
- **Statistics**: `WhyCryptoDeven.tsx`
- **Step-by-step guide**: `GetStarted.tsx`
- **Resource links**: `Resources.tsx`
- **Thought leader profiles**: `ThoughtLeaders.tsx`
- **About content**: `Contact.tsx`

## 🎨 Customization

### Colors
The site uses a clean color palette defined in `globals.css`:
- Primary: Indigo (#6366f1)
- Secondary: Blue (#3b82f6)
- Accent colors: Green, Purple, Orange for categorization

### Typography
- Primary font: Inter
- Heading weights: 600 (semibold)
- Body text: 400 (regular)
- Letter spacing: -0.025em for headings

### Animations
- Scroll-triggered animations using `AnimateOnScroll` component
- Hover effects with transform and shadow changes
- 200ms transition duration for consistency

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

Deven Spear - hello@cryptodeven.com

Project Link: [https://github.com/devenspear/cryptodeven.com](https://github.com/devenspear/cryptodeven.com)
