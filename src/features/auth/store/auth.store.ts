import { defineStore } from "pinia";

type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
};

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => ({
    isAuthenticated: false,
    token: null
  }),
  actions: {
    login(token: string) {
      this.token = token;
      this.isAuthenticated = true;
    },
    logout() {
      this.token = null;
      this.isAuthenticated = false;
    }
  }
});
