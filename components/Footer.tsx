export default defineComponent({
  name: "Footer",
  setup() {
    return () => (
      <div class="p-10 text-gray-400 text-sm text-center" style="letter-spacing: -1px;">
        Copyright &copy; 1998 - 2023 NaCoLiu. All Rights Reserved. <br/>Power By Nuxt & Typecho create.
      </div>
    );
  },
});
