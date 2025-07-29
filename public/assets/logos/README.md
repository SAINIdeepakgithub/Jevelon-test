# Technology Logos

This folder contains SVG logos for various technologies used in the service pages.

## How to Add Your Own Logos

1. **Download SVG logos** from official websites or icon libraries like:
   - [Simple Icons](https://simpleicons.org/) - Free SVG icons for popular brands
   - [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
   - Official technology websites (React, Vue, Angular, etc.)

2. **Save the SVG files** in this folder with descriptive names:
   - `react.svg`
   - `vue.svg`
   - `angular.svg`
   - `typescript.svg`
   - `tailwind.svg`
   - `nodejs.svg`
   - `python.svg`
   - `java.svg`
   - `mongodb.svg`
   - `postgresql.svg`
   - etc.

3. **File naming convention**: Use lowercase with hyphens for spaces:
   - `react-native.svg`
   - `google-ads.svg`
   - `facebook-ads.svg`

4. **SVG optimization**: Make sure your SVG files are optimized and use `currentColor` for the fill attribute to inherit the theme colors.

## Current Logo Structure

The logos are organized by service type:

### Frontend Development (Blue theme)
- react.svg
- vue.svg
- angular.svg
- typescript.svg
- tailwind.svg
- sass.svg
- nextjs.svg
- framer.svg

### Backend Development (Green theme)
- nodejs.svg
- python.svg
- java.svg
- express.svg
- django.svg
- postgresql.svg
- mongodb.svg
- redis.svg

### Web Development (Purple theme)
- react.svg
- nodejs.svg
- nextjs.svg
- typescript.svg
- tailwind.svg
- postgresql.svg
- vercel.svg
- aws.svg

### Mobile App Development (Orange theme)
- react-native.svg
- flutter.svg
- swift.svg
- kotlin.svg
- firebase.svg
- aws-amplify.svg
- app-store.svg
- google-play.svg

### Digital Marketing (Pink theme)
- google-ads.svg
- facebook-ads.svg
- instagram.svg
- linkedin.svg
- google-analytics.svg
- mailchimp.svg
- hubspot.svg
- canva.svg

## Usage in Components

The logos are used with the `TechnologyLogo` component:

```tsx
<TechnologyLogo
  name="React"
  logoPath="/assets/logos/react.svg"
  fallbackIcon={<FallbackIcon />}
/>
```

This component automatically handles:
- Loading the SVG logo
- Fallback to a generic icon if the logo fails to load
- Proper alt text for accessibility
- Lazy loading for performance