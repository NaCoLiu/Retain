import { fetchMenus, fetchMenusBySlug } from "~~/server/blog";

export const useMenu = defineStore("menus", {
  state: () => ({
    menu: ref([]) as Ref<MenusType[]>,
    menuDetails: ref() as Ref<MenusItemType>,
  }),
  actions: {
    async onInit() {
      try {
        const menuResult = await fetchMenus();
        if (menuResult) this.menu = menuResult;
        const menuDetailsResult = await fetchMenusBySlug(this.menu[0].slug);
        if (menuDetailsResult) this.menuDetails = menuDetailsResult;
      } catch {
      } finally {
      }
    },
  },
});
