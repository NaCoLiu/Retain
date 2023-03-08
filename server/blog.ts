export const fetchBasicInfo = async () => {
  const result = await useFetch("/api/");
  return result;
};

export const fetchCategories = async () => {
  const result = await useAsyncData<CategoriesListType[]>(() =>
    $fetch("/api/wp/v2/categories")
  );
  if (result.data.value) return result.data.value;
};

export const fetchMenus = async () => {
  const result = await useAsyncData<MenusType[]>(() =>
    $fetch("/api/menus/v1/menus")
  );
  if (result.data.value) return result.data.value;
};

export const fetchMenusBySlug = async (_slug: string) => {
  const result = await useAsyncData<MenusItemType>(() =>
    $fetch(`/api/menus/v1/menus/${_slug}`)
  );
  if (result.data.value) return result.data.value;
};
