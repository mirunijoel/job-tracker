import { defineStore } from "pinia";
import type { JobApplication } from "../types/job.types";

type JobsState = {
  jobs: JobApplication[];
};

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
    jobs: []
  }),
  getters: {
    totalApplications: (state) => state.jobs.length,
    interviewCount: (state) => state.jobs.filter((job) => job.status === "Interview").length,
    offerCount: (state) => state.jobs.filter((job) => job.status === "Offer").length
  },
  actions: {
    setJobs(jobs: JobApplication[]) {
      this.jobs = jobs;
    }
  }
});
