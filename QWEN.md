# Lombard Project - QWEN.md

## Project Overview

This is a Next.js-based web application for a Lombard business (pawn shop/ransom service) called "ransom". The project is built with Next.js 14 and uses TypeScript, Material-UI (MUI) for styling, Redux Toolkit for state management, and Sass for additional styling. The application appears to be focused on equipment buyback services, particularly metalworking machinery and tools.

The project name in package.json is "ransom" which suggests it's a pawn shop or buyback service where customers can sell or pawn their equipment, vehicles, instruments, phones, and real estate.

### Key Technologies
- Next.js 14 (App Router)
- React 18
- TypeScript
- Material-UI (MUI) v5
- Redux Toolkit & React-Redux
- Sass
- React Hook Form
- IMask for input masking
- Emotion for styling
- NodeMailer for email functionality

### Project Architecture
- **Frontend**: Next.js application with App Router
- **Styling**: MUI components with custom SASS styling
- **State Management**: Redux Toolkit with React-Redux
- **Forms**: React Hook Form with validation
- **Configuration**: JSON-based configuration system
- **Internationalization**: Russian language focus (based on layout.tsx lang="ru")

## Building and Running

### Development Environment
```bash
# Install dependencies
npm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

The application will be available at http://localhost:3000

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Linting
```bash
# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── cars/           # Cars buyback page
│   ├── equipment/      # Equipment buyback page (main)
│   ├── instruments/    # Instruments buyback page
│   ├── phones/         # Phones buyback page
│   ├── realty/         # Real estate buyback page
│   ├── layout.tsx      # Main layout component
│   └── page.tsx        # Home page (equipment)
├── assets/             # Static assets (images, fonts, etc.)
├── components/         # Reusable React components
│   ├── layout/         # Layout components (Header, Footer)
│   └── pages/          # Page-specific components
├── pages/              # Legacy Next.js pages (if any)
├── store/              # Redux store configuration
├── utils/              # Utility functions
│   └── config/         # Configuration utilities
```

## Key Features

1. **Multi-category Buyback Service**: The application supports multiple categories of buyback services (equipment, cars, instruments, phones, realty)

2. **Configurable Content**: Content is loaded from config/config.json allowing easy customization of text, form fields, and page content without code changes

3. **Contact Forms**: Each category has contact forms with validation and phone number masking

4. **Telegram Integration**: Configured to send notifications to Telegram bot/chat

5. **Email Integration**: SMTP configuration for sending emails

6. **Responsive Design**: Built with MUI for responsive layouts

## Configuration

The application uses a JSON-based configuration system located at `config/config.json`. This file contains:
- Contact information
- Page titles and descriptions
- Form field definitions
- FAQ sections
- How-we-work sections
- Category-specific content

Environment variables are defined in `.env.example` and include:
- Telegram bot token and chat ID
- SMTP configuration for email

## Development Conventions

1. **Component Organization**: Components are organized by feature in the `components/` directory
2. **State Management**: Redux Toolkit is used for global state management
3. **Styling**: MUI components are used with custom SASS for additional styling
4. **Forms**: React Hook Form is used for form handling and validation
5. **Internationalization**: The application is set up for Russian language (lang="ru")
6. **Accessibility**: MUI components provide built-in accessibility features
7. **Type Safety**: TypeScript is used throughout the application

## Custom Server

The project includes a custom server configuration in `server.js` that allows for custom routing and handling of specific paths (/a and /b) while falling back to Next.js default handling for other routes.

## Important Notes

- The application appears to be focused on equipment buyback services, particularly metalworking machinery
- The main landing page is the equipment buyback page
- Configuration is centralized in config.json for easy content updates
- The project includes integration with Telegram and email for notifications
- Phone number masking is implemented using react-imask