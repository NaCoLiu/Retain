import { fetchCategories } from "~~/server/blog";

export const useCategorie = defineStore("categorie", {
  state: () => ({
    categories: ref([]) as Ref<CategoriesListType[]>,
  }),
  actions: {
    async onInit() {
      try {
        const result = await fetchCategories();
        if (result) this.categories = result;
        
      } catch {

      } finally {
      }
    },
  },
});
