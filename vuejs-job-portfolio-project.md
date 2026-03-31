# Job Tracker - Vue Portfolio Project Roadmap

## Project Idea: Job Tracker (Job Application Tracker)

Build a web app where users can track job applications from "Saved" to "Interview" to "Offer/Rejected".

### Why this is strong for hiring
- Real-world business flow (CRUD + filters + auth + dashboard)
- Shows frontend architecture skills, not just UI
- Easy to demo in 2-3 minutes
- Lets you discuss state management, API integration, and testing clearly

## Core Features (MVP first)
- User authentication (login/register/logout)
- Create/edit/delete job applications
- Status pipeline: `Saved`, `Applied`, `Interview`, `Offer`, `Rejected`
- Search + filter by company, role, status
- Dashboard stats (total applications, interviews, offers)
- Notes and follow-up date per application

## Suggested Tech
- Vue 3 + Vite + TypeScript
- Vue Router
- Pinia
- Axios
- Tailwind CSS (or plain CSS modules)
- Vitest (unit tests)
- Optional: Firebase/Supabase or mock API (json-server)

## Milestones (Portfolio-ready roadmap)

### Milestone 1: Foundation (Day 1-2)
- Setup project with your professional folder structure
- Configure router, Pinia, Axios service layer
- Add lint/format scripts
- Build base layout (`AuthLayout`, `DashboardLayout`)

### Milestone 2: Auth Module (Day 3-4)
- `features/auth` with views/components/store/api
- Login/register forms with validation
- Route guards (protected dashboard pages)

### Milestone 3: Job Applications Module (Day 5-7)
- `features/jobs` with CRUD forms
- Table or Kanban view for applications
- Status badges, pagination, filters, search

### Milestone 4: Dashboard + UX polish (Day 8-9)
- Stats cards + charts (optional)
- Empty states, loading skeletons, error states
- Toast notifications for actions

### Milestone 5: Quality + Deployment (Day 10)
- Unit tests for key composables/stores
- Basic e2e happy path (optional bonus)
- Deploy on Vercel/Netlify
- Write README with screenshots + architecture notes

## Feature Folder Example (`src/features/jobs`)
- `api/` -> `jobs.api.ts`
- `store/` -> `jobs.store.ts`
- `composables/` -> `useJobFilters.ts`
- `components/` -> `JobCard.vue`, `JobForm.vue`, `StatusBadge.vue`
- `views/` -> `JobsListView.vue`, `JobDetailView.vue`
- `types/` -> `job.types.ts`
- `index.ts` -> clean exports

## What to say in interviews
- "I used a feature-first architecture for scalability."
- "I separated data fetching, state, and UI to keep components maintainable."
- "I added reusable base components and composables to reduce duplication."
- "I handled loading/error/empty states to improve UX quality."
