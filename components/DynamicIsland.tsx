import { useTheme } from "~~/stores/theme";

export default defineComponent({
  name: "DynamicIsland",
  setup() {
    const themeStore = useTheme();
    const changeTheme = () => {
      themeStore.toggle();
    };
    return () => (
      <div
        class="dynamicIsland cursor-pointer fixed top-10 text-xs bg-black dark:bg-white rounded-full text-white dark:text-black pl-10 pr-10 pt-2 pb-2"
        onClick={changeTheme}
      >
        <div class="content flex flex-row justify-center">
          Welcome. <div class="hover pl-2">Pry into life.</div>
        </div>
      </div>
    );
  },
});
