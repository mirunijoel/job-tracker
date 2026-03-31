# Job Tracker

A professional Vue 3 portfolio project for tracking job applications across stages like Saved, Applied, Interview, Offer, and Rejected.

## Live Demo
- Demo URL: `https://your-demo-link.com`

## Repository
- GitHub URL: `https://github.com/mirunijoel/job-tracker`

## Overview
Job Tracker helps users manage their job hunt in one place by tracking applications, statuses, follow-up dates, and notes.  
This project focuses on clean architecture, maintainability, and production-style frontend practices.

## Features
- User authentication (register, login, logout)
- Create, view, edit, and delete job applications
- Status pipeline: `Saved`, `Applied`, `Interview`, `Offer`, `Rejected`
- Search and filter by role, company, and status
- Dashboard metrics (applications, interviews, offers)
- Notes and follow-up tracking
- Loading, error, and empty states

## Tech Stack
- Vue 3
- Vite
- TypeScript
- Vue Router
- Pinia
- Axios
- Vitest + Vue Test Utils
- (Optional) Cypress/Playwright

## Project Structure
```txt
src/
├─ app/
│  ├─ router/
│  └─ store/
├─ assets/
├─ components/
│  ├─ base/
│  └─ common/
├─ features/
│  ├─ auth/
│  │  ├─ api/
│  │  ├─ components/
│  │  ├─ composables/
│  │  ├─ store/
│  │  ├─ views/
│  │  └─ types/
│  └─ jobs/
│     ├─ api/
│     ├─ components/
│     ├─ composables/
│     ├─ store/
│     ├─ views/
│     └─ types/
├─ composables/
├─ services/
├─ utils/
├─ styles/
├─ layouts/
├─ App.vue
└─ main.ts
```

## Architecture Notes
- Feature-first organization for scalability
- Separation of concerns:
  - `api`: server communication
  - `store`: app state
  - `views/components`: UI
  - `composables`: reusable logic
- Reusable base components to reduce duplication

## Getting Started

### 1. Clone
```bash
git clone https://github.com/mirunijoel/job-tracker.git
cd job-tracker
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment
Create a `.env` file:
```env
VITE_API_BASE_URL=http://localhost:3000
```

### 4. Run locally
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run lint` - Run linter

## Testing
- Unit tests for stores and composables
- Component tests for key UI pieces
- (Optional) e2e tests for critical user flows

## Screenshots
Add screenshots/GIFs here:
- Login page
- Jobs list page
- Create/edit form
- Dashboard view

## Challenges and Learnings
Describe what you learned while building:
- Example: managing shared state across filtered lists
- Example: organizing modules with feature-first architecture
- Example: handling async loading/error states consistently

## Future Improvements
- Drag-and-drop Kanban board for status movement
- Email reminders for follow-up dates
- Analytics charts per month/status
- Role-based views (admin/user)

## Author
- Name: `Your Name`
- LinkedIn: `https://linkedin.com/in/your-profile`
- Portfolio: `https://your-portfolio.com`
