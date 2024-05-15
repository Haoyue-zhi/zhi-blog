<script setup lang="ts">
const aboutRef = ref();
useSectionInView(aboutRef, "关于我");
</script>

<template>
  <section
    ref="aboutRef"
    class="max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
    id="about"
    data-aos="zoom-in-up"
    data-aos-delay="175"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">关于我</h2>

    <p>
      在本科阶段，我学习了计算机基础、数据库原理与实践、Vue等课程，并在大三时深入接触前端开发。在编程的挑战中，我乐在其中，与团队合作开发项目、解决复杂问题的过程带来了巨大的满足感。我擅长使用
      Vue3、Vite 和 Nuxt.js 等技术，对 JavaScript, TypeScript 和 HTML/CSS
      也有很深的理解 💻。平时，我喜欢学习新技能并做一些有趣的项目
      🛠️。如果不在电脑前，我喜欢做饭、看电影
      🍳🎥💪，规律的睡眠和饮食是我精力充沛的秘诀 🌟。
    </p>
  </section>
</template>
