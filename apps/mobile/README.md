# deplo.ai Mobile — apps/mobile

A React Native + Expo mobile application for the deplo.ai developer control center.

## Tech Stack

- **React Native 0.88** / **React 19**
- **Expo SDK 58**
- **Expo Router 5** (file-based navigation)
- **TypeScript 6** (strict mode)

## Getting Started

```bash
# From this directory (apps/mobile)
npm install

# Start the Expo development server
npm start

# Or open directly on a platform:
npm run ios       # iOS simulator
npm run android   # Android emulator
npm run web       # Browser
```

## Folder Structure

```
apps/mobile/
├── app/                  # Expo Router screens (file-based routes)
│   ├── _layout.tsx       # Root navigation layout
│   └── index.tsx         # Home screen (/ route)
├── assets/
│   ├── images/           # Static images
│   └── fonts/            # Custom fonts (future)
├── components/           # Reusable UI components (future)
├── constants/            # App-wide constants (Colors, etc.)
├── hooks/                # Custom React hooks (future)
├── services/             # API service layer (future)
├── types/                # Shared TypeScript types
├── utils/                # Helper/utility functions
├── app.json              # Expo configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
└── .prettierrc           # Prettier formatting rules
```

## Scripts

| Script              | Description                        |
|---------------------|------------------------------------|
| `npm start`         | Start Expo development server      |
| `npm run ios`       | Launch on iOS simulator            |
| `npm run android`   | Launch on Android emulator         |
| `npm run web`       | Launch in browser                  |
| `npm run lint`      | Run ESLint                         |
| `npm run lint:fix`  | Auto-fix ESLint issues             |
| `npm run format`    | Format all files with Prettier     |
| `npm run typecheck` | Check TypeScript without building  |
