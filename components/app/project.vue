<script setup lang="ts">
import { projectsData } from "~/assets/data";

const projectsRef = ref();
useSectionInView(projectsRef, "我的项目", 0.4);
</script>

<template>
  <div ref="projectsRef" class="scroll-mt-28 mb-28" id="projects">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">我的项目</h2>
    <AppProjectItem
      v-for="(project, index) in projectsData"
      :key="index"
      :project="project"
    />
  </div>
</template>
