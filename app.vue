<template>
  <div class="main">
    <RouterView></RouterView>
    <DynamicIsland />
  </div>
</template> 
<script lang="ts" setup>

import { useTheme } from "./stores/theme";
const themeStore = useTheme();

onMounted(() => {
  themeStore.onInit();
})

</script>
