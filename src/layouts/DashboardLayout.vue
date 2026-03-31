<template>
  <div class="shell">
    <header class="topbar">
      <h1>Job Tracker</h1>
      <nav>
        <RouterLink to="/">Dashboard</RouterLink>
        <RouterLink to="/jobs">Jobs</RouterLink>
      </nav>
    </header>
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #111827;
  color: white;
}

nav {
  display: flex;
  gap: 1rem;
}

.content {
  padding: 1rem;
}
</style>
