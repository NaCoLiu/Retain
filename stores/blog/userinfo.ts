import { fetchUserInfo } from "~~/server/blog";

export const useUserInfo = defineStore("userInfo", {
  state: () => ({
    userinfo: ref() as Ref<UserInfoType>,
  }),
  actions: {
    async onInit() {
      try {
        const result = await fetchUserInfo(1);
        if (result) this.userinfo = result;
      } catch {
      } finally {
      }
    },
  },
});
