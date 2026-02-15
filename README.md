# Interactive Task Dashboard

A React + TypeScript dashboard for managing daily tasks with a clean component architecture, theme switching, and live task metrics.

## Features

- Add tasks dynamically
- Mark tasks as completed/incomplete
- Delete tasks from the list
- Dark/Light theme toggle with persistence
- Task summary counters for total, completed, and pending tasks
- Responsive layout for desktop and mobile

## Tech Stack

- React (functional components)
- TypeScript
- Vite
- CSS (custom properties + responsive styling)

## Project Structure

- `src/App.tsx`: Root dashboard logic and state management
- `src/components/TaskForm.tsx`: Task creation form
- `src/components/TaskList.tsx`: Task list renderer
- `src/components/TaskItem.tsx`: Single task row with toggle/delete actions
- `src/components/TaskSummary.tsx`: Summary cards
- `src/components/ThemeToggle.tsx`: Theme switch control
- `src/style.css`: Global styles and theme variables

## Local Setup

1. Install dependencies:
   `npm install`
2. Start development server:
   `npm run dev`
3. Build for production:
   `npm run build`
4. Preview production build:
   `npm run preview`

## State Management Overview

- `tasks` state stores task objects with `id`, `title`, and `completed` flags.
- `theme` state controls visual mode and is synced to `localStorage`.
- `useMemo` calculates task summary counts efficiently.
- `useEffect` applies the selected theme to the document root.

## Notes

- The UI is intentionally componentized for maintainability and future feature expansion.
- Theme preferences persist across sessions.
