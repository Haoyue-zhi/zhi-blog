<script setup lang="ts">
useState("activeSection", () => "首页");
</script>

<template>
  <div class="relative">
    <div
      class="bg-top bg-no-repeat h-[502px] w-full fixed -z-10"
      style="background-image: url('bg.svg')"
    ></div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
