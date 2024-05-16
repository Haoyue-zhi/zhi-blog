<script setup lang="ts">
import { experiencesDataZn } from "~/assets/data";

const experienceRef = ref();
useSectionInView(experienceRef, "我的经历", 0.1);
</script>

<template>
  <section class="sm:mb-40 relative mb-20 scroll-mt-20" id="experience">
    <h2
      ref="experienceRef"
      class="text-3xl font-medium capitalize mb-8 text-center"
    >
      我的经历
    </h2>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical px-10"
    >
      <li
        v-for="(item, index) in experiencesDataZn"
        :key="index"
        :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
      >
        <hr v-if="index != 0" />
        <div
          class="hidden md:block"
          :class="index % 2 ? 'timeline-start' : 'timeline-end'"
        >
          {{ item.date }}
        </div>
        <div class="timeline-middle">
          <Icon name="mdi:checkbox-marked-circle" />
        </div>
        <div
          class="mb-10 timeline-box"
          :class="index % 2 ? 'timeline-end' : 'timeline-start md:text-end'"
        >
          <div class="flex flex-col gap-2">
            <time class="font-mono italic block md:hidden">
              {{ item.date }}</time
            >
            <h3 class="font-bold capitalize">{{ item.title }}</h3>
            <p class="font-normal !mt-0">{{ item.location }}</p>
            <p class="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {{ item.description }}
            </p>
          </div>
        </div>
        <hr v-if="index != experiencesDataZn.length - 1" />
      </li>
    </ul>
  </section>
</template>
