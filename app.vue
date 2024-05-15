<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "scroll-smooth",
  },
  bodyAttrs: {
    class:
      "bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
