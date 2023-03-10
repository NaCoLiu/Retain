export const fetchBasicInfo = async () => {
  const result = await useFetch("/api/");
  return result;
};

export const fetchCategories = async () => {
  const result = await useAsyncData<CategoriesListType[]>(
    async () => await $fetch("/api/wp/v2/categories")
  );
  if (result.data.value) return result.data.value;
};

export const fetchMenus = async () => {
  const result = await useAsyncData<MenusType[]>(
    async () => await $fetch("/api/menus/v1/menus")
  );
  if (result.data.value) return result.data.value;
};

export const fetchMenusBySlug = async (_slug: string) => {
  const result = await useAsyncData<MenusItemType>(
    async () => await $fetch(`/api/menus/v1/menus/${_slug}`)
  );
  if (result.data.value) return result.data.value;
};

export const fetchUserInfo = async (_id: number) => {
  const result = await useAsyncData<UserInfoType>(
    async () => await $fetch(`/api/wp/v2/users/${_id}`)
  );
  if (result.data.value) return result.data.value;
};

export const fetchPostList = async () => {
  const result = await useAsyncData<PostType[]>(
    async () => await $fetch(`/api/wp/v2/posts`)
  );

  if (result.data.value) {
    return result.data.value;
  }
};

export const fetchTagById = async (_id: number) => {
  const result = await useAsyncData<TagType>(
    async () => await $fetch(`/api/wp/v2/tags/${_id}`)
  );
  if (result.data.value) return result.data.value;
};

export const fetchCommentsByPostId = async (id: number) => {
  const result = await useAsyncData<CommentsType[]>(
    async () =>
      await $fetch("/api/wp/v2/comments", {
        method: "GET",
        params: {
          post: id,
        },
      })
  );

  if (result.data.value) return result.data.value;
};
