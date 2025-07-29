# Jevelon Technologies Website

A modern, sleek website for Jevelon Technologies - an IT service company providing web development, app development, cloud services, and software maintenance solutions.

## Features

- 🎨 Modern dark theme design
- ⚡ Built with React 18 + TypeScript + Vite
- 🎭 Smooth animations with Motion (Framer Motion)
- 🎯 Fully responsive design
- 🚀 Fast routing with React Router
- 🎨 Styled with Tailwind CSS v4
- 📱 Mobile-first approach
- ♿ Accessible components

## Pages

- **Home** - Hero section with services overview
- **Blog** - Company blog and articles
- **Case Studies** - Portfolio of completed projects
- **FAQ** - Frequently asked questions
- **Support** - Customer support and contact
- **Careers** - Job listings and company culture
- **Team** - Meet the team members
- **Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy, Disclaimer

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## Installation & Setup

### 1. Clone or Download the Project

If you have the project files, ensure all files are in your project directory with the structure shown below.

### 2. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The development server will start at `http://localhost:3000` and automatically open in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Complete Project Structure

```
├── .eslintrc.cjs               # ESLint configuration
├── .gitignore                  # Git ignore rules
├── App.tsx                     # Main app component
├── Attributions.md             # Project attributions
├── README.md                   # Project documentation
├── components/                 # Reusable React components
│   ├── About.tsx              # About section component
│   ├── Contact.tsx            # Contact form component
│   ├── Footer.tsx             # Footer component
│   ├── Header.tsx             # Header/navigation component
│   ├── Hero.tsx               # Hero section component
│   ├── Services.tsx           # Services showcase component
│   ├── blog/                  # Blog-specific components
│   │   ├── BlogCard.tsx       # Individual blog post card
│   │   └── FeaturedBlogCard.tsx # Featured blog post card
│   ├── caseStudies/           # Case studies components
│   │   └── CaseStudyCard.tsx  # Case study card component
│   ├── figma/                 # Figma integration components
│   │   └── ImageWithFallback.tsx # Image component with fallback
│   ├── shared/                # Shared/common components
│   │   └── PageHeader.tsx     # Reusable page header
│   └── ui/                    # UI library components (shadcn/ui)
│       ├── accordion.tsx      # Accordion component
│       ├── alert-dialog.tsx   # Alert dialog component
│       ├── alert.tsx          # Alert component
│       ├── aspect-ratio.tsx   # Aspect ratio component
│       ├── avatar.tsx         # Avatar component
│       ├── badge.tsx          # Badge component
│       ├── breadcrumb.tsx     # Breadcrumb navigation
│       ├── button.tsx         # Button component
│       ├── calendar.tsx       # Calendar component
│       ├── card.tsx           # Card component
│       ├── carousel.tsx       # Carousel component
│       ├── chart.tsx          # Chart component
│       ├── checkbox.tsx       # Checkbox component
│       ├── collapsible.tsx    # Collapsible component
│       ├── command.tsx        # Command palette component
│       ├── context-menu.tsx   # Context menu component
│       ├── dialog.tsx         # Dialog/modal component
│       ├── drawer.tsx         # Drawer component
│       ├── dropdown-menu.tsx  # Dropdown menu component
│       ├── form.tsx           # Form components
│       ├── hover-card.tsx     # Hover card component
│       ├── input-otp.tsx      # OTP input component
│       ├── input.tsx          # Input field component
│       ├── label.tsx          # Label component
│       ├── menubar.tsx        # Menubar component
│       ├── navigation-menu.tsx # Navigation menu component
│       ├── pagination.tsx     # Pagination component
│       ├── popover.tsx        # Popover component
│       ├── progress.tsx       # Progress bar component
│       ├── radio-group.tsx    # Radio group component
│       ├── resizable.tsx      # Resizable panels component
│       ├── scroll-area.tsx    # Custom scroll area component
│       ├── select.tsx         # Select dropdown component
│       ├── separator.tsx      # Separator/divider component
│       ├── sheet.tsx          # Sheet/side panel component
│       ├── sidebar.tsx        # Sidebar component
│       ├── skeleton.tsx       # Loading skeleton component
│       ├── slider.tsx         # Slider/range component
│       ├── sonner.tsx         # Toast notifications component
│       ├── switch.tsx         # Toggle switch component
│       ├── table.tsx          # Table component
│       ├── tabs.tsx           # Tabs component
│       ├── textarea.tsx       # Textarea component
│       ├── toggle-group.tsx   # Toggle group component
│       ├── toggle.tsx         # Toggle component
│       ├── tooltip.tsx        # Tooltip component
│       ├── use-mobile.ts      # Mobile detection hook
│       └── utils.ts           # UI utility functions
├── data/                      # Static data files
│   ├── blogData.ts           # Blog posts data
│   ├── caseStudiesData.ts    # Case studies data
│   ├── faqData.ts            # FAQ data
│   ├── supportData.ts        # Support page data
│   └── teamData.ts           # Team members data
├── guidelines/               # Project guidelines
│   └── Guidelines.md         # Development guidelines
├── index.html               # HTML entry point
├── main.tsx                 # React application entry point
├── package.json             # Dependencies and npm scripts
├── pages/                   # Page components
│   ├── BlogPage.tsx         # Blog listing page
│   ├── CareersPage.tsx      # Careers page
│   ├── CaseStudiesPage.tsx  # Case studies page
│   ├── CookiePolicyPage.tsx # Cookie policy page
│   ├── DisclaimerPage.tsx   # Disclaimer page
│   ├── FAQPage.tsx          # FAQ page
│   ├── HomePage.tsx         # Home page
│   ├── PrivacyPolicyPage.tsx # Privacy policy page
│   ├── SupportPage.tsx      # Support page
│   ├── TeamPage.tsx         # Team page
│   └── TermsOfServicePage.tsx # Terms of service page
├── postcss.config.js        # PostCSS configuration
├── public/                  # Static assets
│   └── favicon.svg          # Site favicon
├── styles/                  # Global styles and CSS
│   └── globals.css          # Global CSS with Tailwind and custom styles
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # TypeScript Node.js configuration
├── utils/                   # Utility functions
│   └── animations.ts        # Animation utilities
└── vite.config.ts           # Vite build tool configuration
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **Motion** - Animation library (formerly Framer Motion)
- **React Router** - Client-side routing
- **Lucide React** - Icon library
- **shadcn/ui** - UI component library

## Configuration Files

### Core Configuration
- **package.json** - Project dependencies and scripts
- **vite.config.ts** - Vite bundler configuration
- **tsconfig.json** - TypeScript compiler configuration
- **tsconfig.node.json** - TypeScript configuration for Node.js files

### Styling Configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **postcss.config.js** - PostCSS configuration for processing CSS
- **styles/globals.css** - Global styles with CSS variables and Tailwind directives

### Code Quality
- **.eslintrc.cjs** - ESLint configuration for code linting
- **.gitignore** - Files and directories to ignore in version control

### Guidelines
- **guidelines/Guidelines.md** - Project-specific development guidelines

## Customization

### Styling
- Global styles and CSS variables are in `/styles/globals.css`
- Color scheme and design tokens are defined using CSS custom properties
- Dark theme is enabled by default with comprehensive color variables
- Tailwind configuration is in `tailwind.config.ts`

### Content
- Page content can be modified in the respective page files in `/pages/`
- Static data is organized in `/data/` directory:
  - `blogData.ts` - Blog posts and articles
  - `caseStudiesData.ts` - Portfolio case studies
  - `faqData.ts` - Frequently asked questions
  - `supportData.ts` - Support and contact information
  - `teamData.ts` - Team member information
- Components are organized in `/components/` with subdirectories for specific features

### Adding New Pages
1. Create a new page component in `/pages/`
2. Add the route in `App.tsx`
3. Update navigation in `Header.tsx` and `Footer.tsx` if needed
4. Add any required data files in `/data/` directory

### Animation
- Animation utilities are in `/utils/animations.ts`
- Uses Motion (Framer Motion) for smooth animations
- Page transitions and component animations are configured throughout the app

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Deployment Options

This project can be deployed to:
- **Vercel** - `vercel --prod` or connect GitHub repository
- **Netlify** - Drag and drop the `dist` folder or connect GitHub repository
- **GitHub Pages** - Push the `dist` folder to gh-pages branch
- **Firebase Hosting** - `firebase deploy`
- **AWS S3 + CloudFront** - Upload `dist` folder to S3 bucket
- **Any static hosting service** that supports single-page applications

## Development Guidelines

Please refer to `/guidelines/Guidelines.md` for project-specific development guidelines and coding standards.

## Support

For support or questions about this project, please contact Jevelon Technologies.

## License

This project is licensed under the MIT License.