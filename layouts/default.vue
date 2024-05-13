<script setup lang="ts">
const useActiveSection = useState("activeSection", () => "首页");
</script>

<template>
  <div class="relative">
    <div
      class="bg-[url('/zhi-blog/bg.svg')] bg-top bg-no-repeat h-[502px] w-full fixed -z-10"
    ></div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
