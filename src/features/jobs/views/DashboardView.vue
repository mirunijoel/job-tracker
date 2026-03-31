<template>
  <section>
    <h2>Dashboard</h2>
    <p>Total applications: {{ jobsStore.totalApplications }}</p>
    <p>Interviews: {{ jobsStore.interviewCount }}</p>
    <p>Offers: {{ jobsStore.offerCount }}</p>
  </section>
</template>

<script setup lang="ts">
import { useJobsStore } from "../store/jobs.store";

const jobsStore = useJobsStore();
</script>
