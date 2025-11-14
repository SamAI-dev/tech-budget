# Tech Budget 💰

A beautiful, modern financial planning application built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 **Beautiful UI/UX** - Modern, responsive design with smooth animations
- 🔐 **Authentication** - Mock login system with demo credentials
- 📊 **Dashboard** - Comprehensive financial overview with stats and transactions
- 👤 **Profile Management** - User profile with settings and account actions
- 🚀 **Fast & Responsive** - Built with Next.js 16 and optimized for performance

## Screens

1. **Splash Screen** - Animated welcome screen with app branding
2. **Login Screen** - Secure login with demo credentials
3. **Landing Page** - Main dashboard with financial overview, stats, and recent transactions
4. **Profile Page** - User profile, settings, and account management

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

### Demo Credentials

The app includes mock authentication with the following demo accounts:

- **Email:** `demo@techbudget.com` | **Password:** `demo123`
- **Email:** `admin@techbudget.com` | **Password:** `admin123`
- **Email:** `user@techbudget.com` | **Password:** `user123`

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Geist Sans & Geist Mono

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── SplashScreen.tsx
│   ├── LoginScreen.tsx
│   ├── LandingPage.tsx
│   └── ProfilePage.tsx
├── contexts/            # React contexts
│   └── AuthContext.tsx  # Authentication state management
├── landing/             # Landing page route
│   └── page.tsx
├── profile/             # Profile page route
│   └── page.tsx
├── layout.tsx           # Root layout
├── page.tsx             # Home page (handles routing)
└── globals.css          # Global styles
```

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## License

MIT
