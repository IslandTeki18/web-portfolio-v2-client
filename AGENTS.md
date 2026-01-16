# AGENTS.md - Web Portfolio V2 Development Guide

## Tech Stack

### Core Technologies
- **React 18.2** - UI framework with modern createRoot API
- **TypeScript 4.9** - Type-safe JavaScript with strict mode enabled
- **Parcel 2.12** - Zero-config bundler for development and production
- **TailwindCSS 3.3** - Utility-first CSS framework with custom color palette
- **React Router DOM v6** - Client-side routing with createBrowserRouter

### Key Libraries
- **@headlessui/react** - Unstyled, accessible UI components (Dialog, etc.)
- **@heroicons/react** - Icon library
- **axios** - HTTP client (mentioned in docs)
- **react-helmet** - Document head manager for SEO
- **animate.css** - CSS animations

### State Management
- React Context API with useReducer pattern (see `AuthProvider.tsx`)
- No Redux or external state management libraries

## Directory Structure

```
src/
├── components/         # Shared UI components
│   ├── button/
│   ├── input/
│   ├── modal/
│   ├── navbar/
│   └── [component]/   # Each component has own folder with index.ts
├── features/          # Feature-based modules (primary organization)
│   ├── home/
│   ├── blog/
│   ├── projects/
│   ├── resume/
│   ├── about/
│   └── admin/
│       ├── components/  # Feature-specific components
│       ├── routes/      # Feature pages/routes
│       ├── api/         # Feature API calls
│       ├── hooks/       # Feature-specific hooks
│       ├── utils/       # Feature utilities
│       ├── types/       # Feature types/interfaces
│       └── index.ts     # Barrel export
├── hooks/             # Shared custom hooks (useFetch, useAuthContext)
├── providers/         # Context providers (AuthProvider)
├── routes/            # Route configuration (main.tsx, index.tsx)
├── types/             # Shared TypeScript types (projects.ts, blogs.ts)
├── utils/             # Shared utility functions (helperFunctions.ts)
├── config/            # Configuration (environment variables)
└── assets/            # Static assets (images, PDFs)
```

### Feature Module Pattern
Each feature follows consistent structure:
- `components/` - Feature-specific UI components
- `routes/` - Feature pages (exported to main routes)
- `api/` - API integration (optional)
- `hooks/` - Feature-specific hooks (optional)
- `utils/` - Feature utilities (optional)
- `types/` - Feature TypeScript definitions (optional)
- `assets/` - Feature-specific assets (optional)
- `index.ts` - Barrel export for public API

## Build Commands

### Development
```bash
npm start               # Start Parcel dev server at http://localhost:1234
                       # Hot reload enabled, proxies API to localhost:5001
```

### Production
```bash
npm run build          # Production build to dist/
npm run clean          # Remove .parcel-cache and dist/ folders
```

### Testing
⚠️ **No test framework configured**
- No test scripts in package.json
- No test files exist in codebase
- Jest types installed but not configured
- Add Jest/Vitest if testing required

### Running Single Tests
Not applicable - test framework needs setup first.

## Code Style Guidelines

### Import Organization
Follow this order:
1. React imports
2. Third-party library imports
3. Internal imports using path aliases (~src/)
4. Relative imports (if necessary)

```typescript
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { SectionWrapper, Button, Input } from "~src/components";
import { useFetch, useAuthContext } from "~src/hooks";
import { formatDate, classNames } from "~src/utils";
```

### TypeScript Configuration

**Strict Mode Enabled**
```json
{
  "noImplicitAny": true,
  "strictNullChecks": true,
  "noImplicitThis": true,
  "noImplicitReturns": true
}
```

**Type Definitions**
```typescript
// Use 'type' for props and objects
type ButtonProps = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "dark" | "primary" | "success" | "danger" | "secondary";
  className?: string;
};

// Use 'type' for data models
type Project = {
  _id?: string;
  title: string;
  description: string;
  projectType: "Personal" | "Client" | "Open Source";
  status: "Live" | "Under Construction" | "Not Live";
  images: string[];
  techStack: string[];
  createdAt?: Date | string;
};

// Use interfaces for extensible structures
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

// Omit utility for form data
type ProjectFormData = Omit<Project, "images"> & {
  images: any[];
};
```

### Component Patterns

**Functional Components**
```typescript
type Props = {
  title: string;
  onClose?: () => void;
};

export const MyComponent = (props: Props) => {
  const [state, setState] = useState<string>("");
  
  return (
    <div>{props.title}</div>
  );
};
```

**Custom Hooks with Generics**
```typescript
const useFetch = <T>(url: string): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    // Implementation
  }, [url]);
  
  return { data, loading, error };
};

export { useFetch };
```

### Naming Conventions
- **Components**: PascalCase (`Button.tsx`, `ContactFormSection.tsx`)
- **Component Files**: PascalCase matching component name
- **Utility Files**: camelCase (`helperFunctions.ts`, `authStorage.ts`)
- **Functions/Variables**: camelCase (`handleClick`, `isFormValid`, `userData`)
- **Types/Interfaces**: PascalCase (`User`, `ProjectFormData`, `FetchState`)
- **Constants**: SCREAMING_SNAKE_CASE (`PRODUCTION_URL`, `NODE_ENV`)
- **Folders**: camelCase (`contactFormSection/`, `projectCard/`)

### File Organization

**Barrel Exports (index.ts)**
Every component folder should have an index.ts:
```typescript
export * from "./Button";
export * from "./Input";
export * from "./Modal";
```

**Component File Structure**
```
button/
├── Button.tsx      # Component implementation
└── index.ts        # export * from "./Button";
```

### Formatting
- **Semicolons**: Required at end of statements
- **Quotes**: Double quotes for strings
- **Indentation**: 2 spaces (inferred from examples)
- ⚠️ No ESLint or Prettier configured - maintain consistency manually

## TailwindCSS Guidelines

### Custom Color Palette
- `primary-{100-1100}` - Primary brand colors (blue-gray tones)
- `secondary-{100-1100}` - Secondary colors (gray tones)
- `danger-{100-1100}` - Error/danger states (red tones)
- `success-{100-1100}` - Success states (green tones)
- `warning-{100-1100}` - Warning states (yellow tones)
- `info-{100-1100}` - Info states (teal tones)
- `dark`, `darker`, `bg-background` - Dark theme colors
- Custom width utilities: `w-1/10` through `w-9/10`

### Class Composition Pattern
```typescript
className={`${setButtonType(props.variant)} ${setTextColor(props.color)} ${props.className} px-3.5 py-2.5`}
```

### Content Configuration
```javascript
content: [
  "./src/components/**/*.tsx",
  "./src/features/**/components/**/*.tsx",
  "./src/features/**/routes/**/*.tsx",
]
```

## API Integration

**Environment Variables** (src/config/index.ts):
```typescript
export const PRODUCTION_URL = process.env.PRODUCTION_URL || "http://localhost:5000/api/";
export const NODE_ENV = process.env.NODE_ENV || "development";
export const DEVELOPMENT_URL = process.env.DEVELOPMENT_URL || "http://localhost:5000/api/";
```

**Fetch Pattern**:
```typescript
const URL = NODE_ENV === "development" ? DEVELOPMENT_URL : PRODUCTION_URL;
const response = await fetch(`${URL}${endpoint}`);
```

## Project-Specific Rules

### Architectural Principles
1. **Feature-First Organization** - Related code stays together in features/
2. **Barrel Exports** - Use index.ts for clean imports
3. **Type Safety** - No implicit any, explicit return types recommended
4. **Component Composition** - Small, focused components
5. **Path Aliases** - Always use ~src/ for internal imports

### Authentication Pattern
- Uses Context API with useReducer
- Auth state stored in localStorage via authStorage utils
- Protected routes wrap admin pages
- Access via `useAuthContext()` hook

## Important Notes

⚠️ **Missing Configurations**
- No ESLint configuration
- No Prettier configuration  
- No test framework setup
- No pre-commit hooks

🔧 **Parcel Configuration**
- Image optimization disabled: `"*.{jpg,jpeg,png}": []`
- PostCSS with TailwindCSS plugin
- Custom browserslist: `"> 0.5%, last 2 versions, not dead"`

📝 **Best Practices**
- Keep components small and focused
- Use TypeScript strict mode
- Prefer composition over inheritance
- Co-locate related files
- Export through barrel files
- Use semantic HTML and ARIA labels (@headlessui helps)
