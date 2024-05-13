<script setup lang="ts">
const useActiveSection = useState("activeSection");
const projectsRef = ref();
useSectionInView(projectsRef, "我的项目");
</script>

<template>
  <div ref="projectsRef" class="scroll-mt-28 mb-28" id="projects">
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">我的项目</h2>
  </div>
</template>
