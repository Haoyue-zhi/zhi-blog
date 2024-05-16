import type { Ref } from "vue";

export const useSectionInView = (
  el: Ref<HTMLElement>,
  name: string,
  threshold: number = 0.75
) => {
  const target = el;
  const targetIsVisible = ref(false);

  const activeSection = useActiveSection();
  const timeOfLastClick = useTimeOfLastClick();

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting;
      if (isIntersecting && Date.now() - timeOfLastClick.value > 1000) {
        activeSection.value = name;
      }
    },
    {
      threshold,
    }
  );

  return { targetIsVisible };
};
