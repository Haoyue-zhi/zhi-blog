<script setup lang="ts">
import { links } from "~/assets/data";

const activeSection = useActiveSection();
const timeOfLastClick = useTimeOfLastClick();
</script>

<template>
  <header class="z-[999] relative" data-aos="fade-down">
    <div
      class="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[30rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
    ></div>
    <nav
      class="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
    >
      <ul
        class="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
      >
        <li
          class="h-3/4 flex items-center justify-center relative break-keep"
          v-for="(link, index) in links"
        >
          <NuxtLink
            :to="link.hash"
            class="flex w-full items-center justify-center px-3 py-3 no-wrap hover:text-gray-950 dark:hover:text-gray-300 transition"
            :class="{
              'text-gray-950': activeSection === link.name,
              'dark:hover:text-gray-600': activeSection === link.name,
            }"
            @click="
              () => {
                activeSection = link.name;
                timeOfLastClick = Date.now();
              }
            "
          >
            {{ link.name }}
            <span
              v-if="activeSection === link.name"
              class="bg-gray-50 rounded-full absolute inset-0 -z-10"
              layoutId="activeSection"
            ></span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
