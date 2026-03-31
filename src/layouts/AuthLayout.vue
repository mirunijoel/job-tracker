<template>
  <main class="centered">
    <section class="card">
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
.centered {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.card {
  width: min(420px, 92vw);
  background: white;
  border-radius: 10px;
  padding: 1rem;
}
</style>
