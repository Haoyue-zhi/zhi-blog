<script setup lang="ts">
import { skillsData } from "~/assets/data";

const skillsRef = ref();
useSectionInView(skillsRef, "我的技能");
</script>

<template>
  <section
    ref="skillsRef"
    class="max-w-[53rem] scroll-mt-28 text-center mb-28"
    id="skills"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">我的技能</h2>
    <ul class="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
      <li
        class="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
        v-for="(skill, index) in skillsData"
        :key="index"
        data-aos="fade-up"
        :data-aos-delay="50 * index"
      >
        {{ skill }}
      </li>
    </ul>
  </section>
</template>
