import { NuxtLink, Icon } from "#components";
import { BlogNav } from "~~/mock";
export default defineComponent({
  name: "Nav",
  setup(props, ctx) {
    return () => (
      <div class="nav col-span-1 bg-gray-50">
        <div class="header pl-8 pr-8 pt-5 pb-5 text-slate-500 text-lg border-solid border-b border-indigo-100/70">
          <NuxtLink class="cursor-pointer">NaCoLiu's Blog</NuxtLink>
        </div>
        <div class="nav-group pl-5 pr-5 mb-4 mt-3">
          <div class="mt-2 nav-item text-sm  text-slate-500 dark:text-black  hover:text-white dark:hover:bg-white rounded-md cursor-pointer">
            {BlogNav.map((i) => {
              return (
                <div class="mt-2 nav-item text-sm text-slate-500 dark:text-black hover:bg-slate-500/70  hover:text-white dark:hover:bg-white rounded-md cursor-pointer">
                  <NuxtLink class="pt-2 pb-2 block" href={i.url}>
                    <Icon name="uil:telegram" size="25" class="ml-2 mr-2" />
                    {i.name}
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
