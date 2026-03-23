# Marvel Gallery

A modern Marvel character gallery application built with **React 19**, **TypeScript**, and **Vite**. This project demonstrates production-ready React patterns including type-safe components, state management, and responsive design.

## ✨ Features

- **Character Gallery**: Browse Marvel characters with smooth animations
- **Advanced Search**: Filter characters by name in real-time
- **Favorites System**: Mark and filter favorite characters
- **Character Details**: View detailed information and comic appearances for each character
- **Type-Safe**: 100% TypeScript with strict mode enabled
- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Framer Motion for elegant transitions

## 🛠 Tech Stack

- **React 19.0** - UI library
- **TypeScript** - Static type checking
- **Vite 6** - Build tool & dev server
- **React Router 7** - Client-side routing
- **Framer Motion 12** - Animation library
- **ESLint 9** - Code linting
- **CSS3** - Styling with component-scoped styles

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── CharacterCard.tsx
│   ├── CharacterCard.css
│   ├── CharacterDetail.tsx
│   ├── CharacterList.tsx
│   └── Navbar.tsx
├── pages/              # Page components
│   └── Home.tsx
├── icons/              # SVG icon components
├── assets/             # Static assets & data
│   └── fakeCharacters.ts
├── types.ts            # Shared TypeScript interfaces
├── App.tsx             # Root component
└── main.tsx            # Application entry point
```

## 🔌 Type System

All components are fully typed with interfaces defined in `types.ts`:

```typescript
interface Character {
  id: string;
  name: string;
  description?: string;
  path: string;
  favourite?: boolean;
  comics?: Comic[];
}

interface Comic {
  id: string;
  title: string;
  date: string;
  path: string;
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (npm or yarn)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brunoviews/marvel-gallery
cd marvel-gallery
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open browser at `http://localhost:5173`

## 📦 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

## 🎯 Component Highlights

### CharacterCard

- Displays character preview with image, name, and like button
- Hover effects with smooth animations
- Link integration for navigation to details

### CharacterDetail

- Full character profile with description
- Comic book list with sorting by date
- Like/unlike functionality

### Home Page

- Real-time character search
- Filter by favorites
- Dynamic results counter
- Animated character grid with Framer Motion

## 🔄 Data Flow

The app uses **React hooks** for state management:

```
App (global state)
├── likedCharacters: string[]
├─ showOnlyLiked: boolean
└── Passed down via props to:
    ├── Home → CharacterList → CharacterCard
    └── CharacterDetail
```

## 🔐 Type Safety

- **Strict TypeScript** mode enabled (`tsconfig.json`)
- **FC<Props>** typed components
- **Explicit event types** (MouseEvent, ChangeEvent, etc.)
- **No `any` types** throughout codebase

## 📱 Responsive Design

- Mobile-first CSS approach
- Optimized layouts for all screen sizes
- Touch-friendly interactive elements
- Smooth animations on all devices

## 🎨 Styling

- Component-scoped CSS files
- Consistent color scheme featuring Marvel Red (#EC1D24)
- Font: Roboto Condensed for consistent typography
- CSS Grid and Flexbox for layouts

## 🧪 Future Improvements

- [ ] Add Context API for global state (remove prop drilling)
- [ ] Implement custom hooks for data fetching (useCharacters, useLike)
- [ ] Create dedicated viewModels per component
- [ ] Add React Query for server state management
- [ ] Add unit tests with Vitest
- [ ] Implement error boundaries
- [ ] Add loading skeletons

## 📚 Learning Notes

This project was refactored from a JavaScript/CSS portfolio piece to demonstrate:

1. **TypeScript Migration** - Converting to strict type checking
2. **Component Architecture** - Separating concerns and creating reusable components
3. **Props Typing** - Clear interfaces for component contracts
4. **React Patterns** - Hooks, state management, routing
5. **Production Best Practices** - ESLint, build optimization, responsive design

## 📄 License

This project is open source and available under the MIT License.
