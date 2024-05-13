import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    base: false,
    logs: false,
  },
} satisfies Config;
