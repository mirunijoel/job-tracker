# Job Tracker

Job Tracker is a Vue 3 portfolio project that helps job seekers manage the full job application lifecycle in one place.
The app replaces scattered spreadsheets and notes with a focused workflow: track opportunities, update stages, manage follow-ups, and measure progress on a dashboard.

## What This Project Is About
- Solving a real and common problem with a practical product workflow
- Demonstrating production-style frontend architecture to recruiters
- Applying scalable Vue patterns: feature modules, routing, state, and API layers
- Building a project that is easy to demo, discuss, and extend

## Core User Flow
1. User signs in
2. User creates a job application record (company, role, notes, follow-up date)
3. User updates the status as the process moves forward
4. User filters and searches applications to focus on priorities
5. User checks dashboard metrics (total applications, interviews, offers)

## Features
- Authentication (register, login, logout)
- Create, read, update, and delete job applications
- Status tracking pipeline: `Saved`, `Applied`, `Interview`, `Offer`, `Rejected`
- Search and filter by company, role, and status
- Dashboard metrics for progress visibility
- Notes and follow-up date tracking
- Loading, error, and empty states

## Tech Stack
- Vue 3 + Vite + TypeScript
- Vue Router
- Pinia
- Axios
- Vitest + Vue Test Utils

## Why This Project Stands Out
- **Real-world use case:** directly relevant for students and job seekers
- **Scalable structure:** feature-first organization for maintainability
- **Interview-friendly:** easy to explain architecture and trade-offs
- **Production mindset:** clear handling of loading, error, and empty states

## Project Structure
```txt
src/
├─ app/
│  ├─ router/
│  └─ store/
├─ components/
├─ features/
│  ├─ auth/
│  └─ jobs/
├─ layouts/
├─ services/
├─ styles/
├─ utils/
├─ App.vue
└─ main.ts
```

## Demo Script (2-3 Minutes)
1. Show login/registration screen
2. Create a new job application
3. Update status from `Saved` to `Interview`
4. Filter by status and search by company
5. Open dashboard and explain key metrics

## Recruiter Talking Points
- I designed this project using a feature-first Vue architecture for scalability.
- I separated concerns across UI, state, and API layers to keep code maintainable.
- I used Pinia for predictable app state and Vue Router for clear navigation flow.
- I prioritized UX quality by planning loading, error, and empty states.

## Screenshots
- Add `Login` page screenshot
- Add `Jobs list` page screenshot
- Add `Create/Edit form` screenshot
- Add `Dashboard` screenshot

## Roadmap
- Drag-and-drop Kanban board for status updates
- Reminder notifications for follow-up dates
- Analytics charts for monthly application performance
- Full end-to-end tests for critical flows

## Getting Started
```bash
git clone https://github.com/mirunijoel/job-tracker.git
cd job-tracker
npm install
npm run dev
```

## Repository
- GitHub: `https://github.com/mirunijoel/job-tracker`
