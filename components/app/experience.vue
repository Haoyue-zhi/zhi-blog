<script setup lang="ts">
import { experiencesDataZn } from "~/assets/data";

const experienceRef = ref();
useSectionInView(experienceRef, "我的经历");
</script>

<template>
  <section ref="experienceRef" class="sm:mb-40 relative mb-20" id="experience">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">我的经历</h2>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
    >
      <li
        v-for="(item, index) in experiencesDataZn"
        :key="index"
        :data-aos="index % 2 ? 'fade-left' : 'fade-right'"
      >
        <hr v-if="index % 2" />
        <div class="timeline-middle">
          <Icon name="mdi:checkbox-marked-circle" />
        </div>
        <div
          class="mb-10"
          :class="index % 2 ? 'timeline-end' : 'timeline-start md:text-end'"
        >
          <time class="font-mono italic">{{ item.date }}</time>
          <div class="flex flex-col gap-2">
            <h3 class="font-bold capitalize">{{ item.title }}</h3>
            <p class="font-normal !mt-0">{{ item.location }}</p>
            <p class="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {{ item.description }}
            </p>
          </div>
        </div>
        <hr />
      </li>
    </ul>
  </section>
</template>
