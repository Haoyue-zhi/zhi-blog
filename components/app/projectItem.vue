<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  demoUrl: string;
  detailRoute: string;
}
const props = defineProps<{
  project: Project;
}>();

const { title, description, tags, imageUrl, projectUrl, demoUrl, detailRoute } =
  props.project;
</script>

<template>
  <div
    class="group mb-4 sm:mb-8 last:mb-0"
    data-aos="new-animation"
    data-aos-mirror="true"
  >
    <section
      class="bg-gray-100 max-w-[45rem] hidden sm:block border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative h-96 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10"
    >
      <div
        class="group pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col items-start gap-3 h-full sm:group-even:ml-[18rem]"
      >
        <div class="flex flex-col gap-3 items-start">
          <h3
            class="text-2xl font-semibold group-hover:text-pink dark:group-hover:text-yellow hover:underline"
          >
            {{ title }}
          </h3>

          <div class="flex gap-3 text-sm text-gray-500 dark:text-gray-300">
            <NuxtLink
              v-if="projectUrl"
              :to="projectUrl"
              target="_blank"
              class="w-full flex items-center gap-1 hover:underline underline-offset-2"
            >
              <span class="break-keep">Code</span>

              <Icon name="mdi:github-box" size="17" />
            </NuxtLink>
            <NuxtLink
              v-if="demoUrl"
              :to="demoUrl"
              target="_blank"
              class="w-full flex items-center gap-1 hover:underline underline-offset-2"
            >
              <span class="break-keep min-w-[4.5rem]">Live demo</span>
              <Icon name="mdi:launch" size="17" />
            </NuxtLink>
          </div>
        </div>

        <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {{ description }}
        </p>
        <ul class="flex flex-wrap mt-auto gap-2">
          <li
            v-for="(tag, index) in tags"
            class="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            :key="index"
          >
            {{ tag }}
          </li>
        </ul>
      </div>

      <NuxtImg
        :src="imageUrl"
        alt="Project I worked on"
        quality="95"
        class="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
      />
    </section>

    <section
      class="card shadow-xl sm:hidden dark:text-white dark:bg-white/10 max-w-[45rem]"
    >
      <figure class="bg-base-100">
        <NuxtImg
          :src="imageUrl"
          alt="Project I worked on"
          quality="95"
          class="h-[200px] object-cover"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ title }}</h2>
        <ul class="flex flex-wrap mt-auto gap-2">
          <li
            v-for="(tag, index) in tags"
            class="badge badge-ghost"
            :key="index"
          >
            {{ tag }}
          </li>
        </ul>
        <p>{{ description }}</p>
        <div class="card-actions justify-end">
          <NuxtLink
            v-if="projectUrl"
            :to="projectUrl"
            target="_blank"
            class="flex items-center gap-1 hover:underline underline-offset-2"
          >
            <span class="break-keep">Code</span>

            <Icon name="mdi:github-box" size="17" />
          </NuxtLink>
          <NuxtLink
            v-if="demoUrl"
            :to="demoUrl"
            target="_blank"
            class="flex items-center gap-1 hover:underline underline-offset-2"
          >
            <span class="break-keep min-w-[4.5rem]">Live demo</span>
            <Icon name="mdi:launch" size="17" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
[data-aos="new-animation"] {
  scale: 0.8;
  opacity: 0.6;
  transition-property: transform, scale, opacity;

  &.aos-animate {
    scale: 1;
    opacity: 1;
  }
}
</style>
