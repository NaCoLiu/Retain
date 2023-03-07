<template>
    <div class="w-screen h-screen justify-center items-center flex flex-col dark:bg-black">
        
        <div class="p-10 text-4xl font-bold tracking-wider text-center dark:text-white">
            Hi, I am NaCo! (<a href="https://github.com/nacoliu" class="dark:text-slate-500 text-blue-400 tracking-normal"
                target="_blank">@NaCoLiu.</a>)
        </div>
        <div class="grid grid-flow-col gap-6 grid-rows-3 md:grid-rows-2 xl:grid-rows-1 sm:grid-rows-3">
            <div class=" bg-slate-100 text-blue-400 dark:text-black hover:text-blue-500/70  hover:bg-slate-100/50 dark:hover:bg-white rounded-md pl-5 pr-5 pt-2 pb-2 cursor-pointer justify-center items-center flex flex-row transition-all duration-300 "
                v-for="(i, k) in nav" :key="k" @click="openUrl(i.url, i.isblank)">
                <Icon :name="i.icon" v-if="i.icon" class="mr-2" /> {{ i.name }}
            </div>
        </div>
        <Footer />
    </div>
</template> 
<script lang="ts" setup>
import { nav } from "../mock";
import { useTheme } from "../stores/theme";
const themeStore = useTheme();

onMounted(() => {
    themeStore.onInit();
})

</script>
  