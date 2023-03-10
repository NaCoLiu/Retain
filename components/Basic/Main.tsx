import { Icon } from "#components";
import { useCategorie } from "~~/stores/blog/categories";
import { usePost } from "~~/stores/blog/posts";
import { useUserInfo } from "~~/stores/blog/userinfo";
export default defineComponent({
  name: "Main",
  setup() {
    const categorie = useCategorie();
    const user = useUserInfo();
    const post = usePost();
    onMounted(async () => {
      await Promise.all([user.onInit(), categorie.onInit(), post.onInit()]);
    });
    return () => (
      <div class="bg-white col-span-2">
        <div class="header pl-5 pt-2 pb-2 mt-2.5 mb-2.5">
          <div class="search inline-flex items-center bg-gray-100 rounded-full overflow-hidden">
            <div class="text-xs text-gray-500 pl-4 pt-2 pb-2 pr-1">聚合</div>
            <div class="text-xs text-gray-400 mr-1">|</div>
            <input
              type="text"
              placeholder="search"
              class="border-none  text-gray-700 text-xs bg-gray-100 w-36 h-max outline-none"
            />
            <Icon
              name="ic:twotone-search"
              class="mr-3 text-gray-700 cursor-pointer"
            />
          </div>
        </div>
        <div class="banner h-52 flex justify-center items-center relative overflow-hidden">
          <img
            src="https://www.z4a.net/images/2023/03/08/5dad28bf1791e8403156f42c7ab821f.jpg"
            alt="banner-bg"
            class="blur-sm object-contain scale-105"
          />
          <div class="info absolute bottom-4 right-4">
            <div class="text-white flex items-center">
              <div class="mr-2">
                <div class="text-right">{user.userinfo?.name}</div>
                <div class="text-xs">{user.userinfo?.description}</div>
              </div>
              {user.userinfo ? (
                <img
                  src={user.userinfo?.avatar_urls[96]}
                  class="w-14 h-14 rounded-md bg-slate-400"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div class="p-5 flex gap-x-2 gap-y-2 border-b border-gray-100">
          <span class="text-xs bg-slate-500 text-white pl-2 pr-2 pt-1 pb-1 rounded-md cursor-pointer">
            全部
          </span>

          {categorie.categories.map((i) => {
            return (
              <span class="text-xs bg-slate-200 text-gray-600 pl-2 pr-2 pt-1 pb-1 rounded-md cursor-pointer">
                {i.name}
              </span>
            );
          })}
        </div>
        <div class="post">
          {post.postList.map((e) => {
            return (
              <div class="p-8">
                <div class="flex flex-col">
                  {e.userinfo ? (
                    <div class="flex">
                      <img
                        src={e.userinfo?.avatar_urls[96]}
                        class="w-14 h-14 rounded-md"
                      />
                      <div class="pl-5 flex flex-col flex-1">
                        <div class="flex justify-between ">
                          <div class="text-slate-500 cursor-pointer text-base font-bold">
                            {e.title.rendered}
                          </div>
                          <div class="text-xs text-gray-500">{formatTime(e.date)}</div>
                        </div>
                        <div class="text-gray-500 text-xs flex-grow">
                          {e.userinfo?.name}
                        </div>
                        <p
                          class=" text-slate-500 mt-3 mb-3 text-sm overflow-hidden line-clamp-5"
                          v-html={e.content.rendered}
                        />

                        <div class="text-xs text-slate-500 rounded-sm flex p-3 justify-between items-center bg-slate-200 font-bold">
                          <div class="cursor-pointer">查看全文</div>
                          <div class="cursor-pointer flex items-center">
                          {e.taginfo ? (
                                <div class="tag  text-xs pr-3">
                                  <Icon name="carbon:tag" /> {e.taginfo?.name}
                                </div>
                              ) : null}
                            <Icon name="mdi:comment-text-multiple" class="mr-2" />{" "}
                            {e.comments?.length ? e.comments?.length : 0}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
});
