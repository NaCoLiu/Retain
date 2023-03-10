import {
  fetchCommentsByPostId,
  fetchPostList,
  fetchTagById,
  fetchUserInfo,
} from "~~/server/blog";

export const usePost = defineStore("post", {
  state: () => ({
    postList: ref([]) as Ref<PostType[]>,
  }),
  actions: {
    async onInit() {
      try {
        const result = await fetchPostList();
        if (result) this.postList = result;
      } catch {
      } finally {
      }
      this.postList.map(async (e) => {
        e.userinfo = await fetchUserInfo(e.author);
        e.comments = await fetchCommentsByPostId(e.id);
        if (e.tags.length > 0) e.taginfo = await fetchTagById(e.tags[0]);
      });
    },
  },
});
