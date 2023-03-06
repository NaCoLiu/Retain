import { defineStore } from "pinia";
type ThemeState = "light" | "dark";

export const useTheme = defineStore("theme", {
  state: () => ({
    state: "dark",
  }),

  actions: {
    onInit() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        this.change("dark");
      } else {
        this.change("light");
      }
    },
    change(state: ThemeState) {
      this.state = state;
      localStorage.theme = state;
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add(state);
    },
    toggle() {
      this.change(this.state !== "dark" ? "dark" : "light");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot));
}
