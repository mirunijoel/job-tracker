# JobTrackr Build Checklist

Use this as a daily tracker while building your Vue portfolio project.

## Day 1 - Project Setup
- [ ] Initialize Vue 3 + Vite + TypeScript project
- [ ] Setup folder structure (`app`, `features`, `components`, `services`, `utils`)
- [ ] Install core deps: `vue-router`, `pinia`, `axios`
- [ ] Setup linting/formatting (ESLint + Prettier)
- [ ] Create first commit: "chore: initialize project structure"

## Day 2 - App Skeleton
- [ ] Setup router with basic routes
- [ ] Create `AuthLayout` and `DashboardLayout`
- [ ] Add navigation shell (header/sidebar)
- [ ] Setup `services/http` Axios client
- [ ] Add global styles/theme tokens

## Day 3 - Auth Feature (Part 1)
- [ ] Create `features/auth` module structure
- [ ] Build Login view UI
- [ ] Build Register view UI
- [ ] Add form validation (required fields, email format)
- [ ] Create auth API service functions

## Day 4 - Auth Feature (Part 2)
- [ ] Add Pinia auth store
- [ ] Persist session/token safely
- [ ] Add route guards for protected routes
- [ ] Implement logout flow
- [ ] Handle auth loading/error states

## Day 5 - Jobs Feature (Part 1)
- [ ] Create `features/jobs` module structure
- [ ] Define job types/interfaces
- [ ] Build "Create Job Application" form
- [ ] Implement create/read API/store actions
- [ ] Add status options (`Saved`, `Applied`, `Interview`, `Offer`, `Rejected`)

## Day 6 - Jobs Feature (Part 2)
- [ ] Build jobs list view (cards or table)
- [ ] Implement update/edit flow
- [ ] Implement delete flow with confirmation
- [ ] Add reusable `StatusBadge` component
- [ ] Add empty state when no applications exist

## Day 7 - Search, Filter, and UX
- [ ] Add search by company/role
- [ ] Add filter by status
- [ ] Add sort (newest/oldest/follow-up date)
- [ ] Add pagination or infinite scroll
- [ ] Add loading skeletons and error fallbacks

## Day 8 - Dashboard
- [ ] Create dashboard stats cards
- [ ] Show total applications count
- [ ] Show interview and offer counts
- [ ] Add "upcoming follow-ups" section
- [ ] Optional: add simple chart (status distribution)

## Day 9 - Polish
- [ ] Add toast notifications (create/update/delete success/failure)
- [ ] Improve accessibility (labels, keyboard focus, aria basics)
- [ ] Improve responsive layout for mobile/tablet
- [ ] Refactor duplicated logic into composables
- [ ] Clean imports with barrel files (`index.ts`)

## Day 10 - Testing + Deploy
- [ ] Add unit tests for store/composables (Vitest)
- [ ] Add at least 1 component test (Vue Test Utils)
- [ ] Optional: add a basic e2e flow
- [ ] Prepare production build
- [ ] Deploy to Vercel or Netlify
- [ ] Add project screenshots/GIF to README
- [ ] Add architecture section in README

## Final Portfolio Checklist
- [ ] Live demo link works
- [ ] GitHub repo has clean commits and README
- [ ] No console errors in production
- [ ] All core CRUD flows work
- [ ] Auth + route guards work
- [ ] Loading/error/empty states handled
- [ ] Interview talking points prepared

## Interview Talking Points (Practice)
- [ ] Explain folder architecture (feature-first)
- [ ] Explain state strategy (Pinia + composables)
- [ ] Explain API layer separation and benefits
- [ ] Explain one challenge and your solution
- [ ] Explain what you would improve next (scalability/performance/tests)
