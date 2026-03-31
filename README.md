# Job Tracker

Job Tracker is a Vue 3 portfolio project that helps job seekers organize their full application journey in one place.
Instead of tracking opportunities in scattered notes or spreadsheets, users can manage each application from `Saved` to `Applied`, `Interview`, `Offer`, or `Rejected`, with notes and follow-up dates attached to every entry.

## What This Project Is About
- Solving a real, common problem: managing many job applications clearly
- Demonstrating production-style frontend architecture for hiring managers
- Practicing scalable Vue patterns: feature modules, router, state, and API layers
- Building a project that is easy to demo, explain, and extend

## Core User Flow
1. User signs in
2. User creates a new job application record
3. User updates status as the process moves forward
4. User filters/searches applications to focus on priorities
5. User checks dashboard stats (total, interviews, offers)

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

## Getting Started
```bash
git clone https://github.com/mirunijoel/job-tracker.git
cd job-tracker
npm install
npm run dev
```
