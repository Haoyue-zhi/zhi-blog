export const useActiveSection = () =>
  useState<string>("activeSection", () => "首页");

export const useTimeOfLastClick = () =>
  useState<number>("timeOfLastClick", () => 0);
