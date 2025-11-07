# Next.js Dashboard

A modern dashboard application built with Next.js, featuring a nested sidebar navigation system.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Nested Navigation** - Two-level sidebar system
- **Server-side API Routes** - Built-in API endpoints
- **Responsive Layout** - Works on all screen sizes

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
next-dashboard/
├── app/
│   ├── api/              # Server-side API routes
│   ├── projects/         # Project pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── layout/
│       ├── MainLayout.tsx      # Main layout wrapper
│       ├── MainNavigation.tsx  # Left navigation bar
│       └── Sidebar.tsx         # Contextual sidebar
├── public/               # Static assets
└── package.json
```

## Navigation Structure

The dashboard has a two-level navigation system:

1. **Main Navigation (Far Left)**: Primary sections like Projects, Wiki, PI, Settings
2. **Contextual Sidebar**: Shows relevant navigation items based on the selected section
3. **Main Content Area**: Displays the active page content

## API Routes

Example API endpoint available at `/api/hello`:

- **GET** - Returns a hello message
- **POST** - Accepts JSON data and returns it

## Customization

### Adding New Navigation Items

Edit `components/layout/Sidebar.tsx` to add or modify menu items:

```typescript
const projectsMenu: MenuItem[] = [
  {
    id: 'new-item',
    label: 'New Item',
    icon: <Icon size={16} />,
    href: '/new-item',
    children: [] // Optional nested items
  },
]
```

### Adding New Pages

Create new pages in the `app/` directory following Next.js App Router conventions.

### Adding API Routes

Create new API routes in `app/api/` directory. Each route is a TypeScript file that exports HTTP method handlers.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
