<script setup lang="ts">
import Typed from "typed.js";

const introRef = ref();
useSectionInView(introRef, "首页");

const initTyped = () => {
  new Typed("#introduce", {
    strings: ["Frontend Developer", "Full Stack Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
};

onMounted(() => {
  initTyped();
});
</script>

<template>
  <section
    ref="introRef"
    class="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
    id="home"
  >
    <div class="flex items-center justify-center">
      <div class="relative">
        <div data-aos="zoom-in">
          <NuxtImg
            src="/avatar.jpg"
            alt="avatar"
            width="250"
            height="250"
            quality="95"
            class="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
        <span
          class="absolute text-4xl bottom-0 right-0 hover:rotate-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          👋
        </span>
      </div>
    </div>

    <h1
      class="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      data-aos="fade-up"
    >
      <span class="text-sm tracking-wider"> 你好，我是 </span>
      <div
        class="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          张文皓月
        </h1>

        <div class="text-center">
          <span class="text-sm tracking-wider"> I&apos;m a </span>
          <h2
            class="text-center text-2xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"
          >
            <span id="introduce"> </span>
          </h2>
        </div>
      </div>
      <p>我享受搭建项目的乐趣！</p>
    </h1>

    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <a
        href="/zhi-blog/front-end.pdf"
        download="张文皓月.pdf"
        class="group text-sm px-4 py-2 bg-white sm:text-lg sm:px-7 sm:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
      >
        下载简历
        <Icon name="mdi:download" />
      </a>
      <a
        class="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="https://github.com/Haoyue-zhi"
        target="_blank"
      >
        <Icon name="mdi:github-box" />
      </a>
    </div>
  </section>
</template>
