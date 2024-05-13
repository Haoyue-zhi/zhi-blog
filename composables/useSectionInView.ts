import type { Ref } from "vue";

export const useSectionInView = (el: Ref<HTMLElement>, name: string) => {
  const target = el;
  const targetIsVisible = ref(false);

  const useActiveSection = useState("activeSection");

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting;
      if (isIntersecting) {
        useActiveSection.value = name;
      }
    },
    {
      threshold: 0.5,
    }
  );

  return { targetIsVisible };
};
