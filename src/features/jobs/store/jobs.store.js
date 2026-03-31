import { defineStore } from "pinia";
export const useJobsStore = defineStore("jobs", {
    state: () => ({
        jobs: []
    }),
    getters: {
        totalApplications: (state) => state.jobs.length,
        interviewCount: (state) => state.jobs.filter((job) => job.status === "Interview").length,
        offerCount: (state) => state.jobs.filter((job) => job.status === "Offer").length
    },
    actions: {
        setJobs(jobs) {
            this.jobs = jobs;
        }
    }
});
