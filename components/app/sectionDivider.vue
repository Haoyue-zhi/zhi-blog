<template>
  <div
    class="text-gray-500 w-8 h-8 mt-12 mb-20 hidden sm:block"
    v-motion
    :initial="{
      opacity: 0,
      scale: 0,
    }"
    :enter="{
      opacity: 1,
      scale: 1,
    }"
    :delay="300"
    :duration="1200"
  >
    <NuxtLink to="#about">
      <Icon name="mdi:chevron-down" class="transition" size="25" />
    </NuxtLink>
  </div>
</template>
