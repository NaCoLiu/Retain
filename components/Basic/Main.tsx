import { Icon } from '#components'
export default defineComponent({
  name: "Main",
  setup() {
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
            src="https://img0.baidu.com/it/u=180973251,3201597544&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
            alt=""
            class="blur-sm scale-105 grayscale w-max"
          />
          <div class="info absolute bottom-4 right-4">
            <div class="text-white flex items-center">
              <div class="mr-2">
                <div>NaCo</div>
                <div class="text-xs">相聚别离。</div>
              </div>
              <img
                src="https://avatars.githubusercontent.com/u/42311502?v=4"
                class="w-14 h-14 rounded-md"
              />
            </div>
          </div>
        </div>
        <div class="tag"></div>
      </div>
    );
  },
});
