import { defineStore } from "pinia";
export const useAuthStore = defineStore("auth", {
    state: () => ({
        isAuthenticated: false,
        token: null
    }),
    actions: {
        login(token) {
            this.token = token;
            this.isAuthenticated = true;
        },
        logout() {
            this.token = null;
            this.isAuthenticated = false;
        }
    }
});
