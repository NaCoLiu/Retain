import { NuxtLink, Icon } from "#components";
import { useMenu } from "~~/stores/blog/menus";

export default defineComponent({
  name: "Nav",
  setup(props, ctx) {
    const menu = useMenu();
    onMounted(async () => {
      await menu.onInit();
    });
    const route = useRoute();
    return () => (
      <div class="nav col-span-1 bg-gray-50">
        <div class="header pl-8 pr-8 pt-5 pb-5 text-slate-500 text-lg border-solid border-b border-indigo-100/70">
          <NuxtLink class="cursor-pointer">NaCoLiu's Blog</NuxtLink>
        </div>
        <div class="nav-group pl-5 pr-5 mb-4 mt-3">
          <div class="mt-2 nav-item text-sm  text-slate-500 dark:text-black  dark:hover:bg-white rounded-md cursor-pointer">
            {menu.menuDetails?.items.map((i) => {
              return (
                <div
                  class={{
                    checked: route.path === i.url ? true : false,
                    
                    "mt-2 nav-item text-sm text-slate-500 dark:text-black hover:bg-slate-300/30  dark:hover:bg-white rounded-md cursor-pointer":
                      true,
                  }}
                >
                  <NuxtLink class="pt-2 pb-2  font-bold flex items-center" href={i.url}>
                    <Icon name={i.attr_title} size="25" class="ml-2 mr-4" />
                    {i.title}
                  </NuxtLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
});
