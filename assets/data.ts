export const links = [
  {
    name: "首页",
    hash: "#home",
  },
  {
    name: "关于我",
    hash: "#about",
  },
  {
    name: "我的项目",
    hash: "#projects",
  },
  {
    name: "我的技能",
    hash: "#skills",
  },
  {
    name: "我的经历",
    hash: "#experience",
  },
] as const;

export const headerLanguageMap = {
  Home: "首页",
  About: "关于我",
  Projects: "我的项目",
  Skills: "我的技能",
  Experience: "我的经历",
};

export const experiencesDataZn = [
  {
    title: "计算机与信息技术硕士",
    location: "英国圣安德鲁斯大学(qs前100 英国前3)",
    description:
      "获得了计算机与信息技术硕士学位，在人机交互、计算机通信系统和信息安全等领域深入学习。培养了计算思维、以用户为中心的设计和数据可视化方面的强大能力，为在科技驱动的环境中有效应用做好了准备。",
    date: "2023年9月 - 2024年8月",
  },
  {
    title: "前端实习生",
    location: "蔚来汽车（中国武汉）",
    description:
      "使用Vue3、TypeScript和百度地图API开发蔚来第三代换电站列表和详情页。在任务向导页面实施基于角色的访问控制，增强系统安全性。在Jira管理的环境中有效协作，利用Jenkins进行部署流程。",
    date: "2022年8月 - 2022年12月",
  },
  {
    title: "前端开发",
    location: "武汉大学大数据研究院",
    description:
      "使用umi（React框架）和Ant Design Pro开发和维护Finknow，一个金融知识图谱查询和分析平台。利用基于G6的React图分析工具包graphin开发了股权网络穿透图，增强了数据可视化功能。",
    date: "2022年5月 - 2022年7月",
  },
  {
    title: "数字出版学士",
    location: "武汉大学",
    description:
      "以3.81/4.0的GPA毕业，获得数字出版学士学位，掌握了数字媒体和出版技术的基础知识。",
    date: "2019年9月 - 2023年6月",
  },
];

// export type ProjectTags = typeof projectsData[number]["tags"];

// export const projectsData = [
//     {
//         title: "Typing Speed",
//         title_zh: '打字测验⌨️',
//         description:
//             "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
//         desc_zh: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
//         tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
//         imageUrl: typingSpeedImage,
//         projectUrl: 'https://github.com/Codefreyy/typing-speed-game',
//         demoUrl: 'https://joy-typing-speed-game.vercel.app/',
//         detailRoute: '/projects/typing-speed',
//     },
//     {
//         title: "Game Hub",
//         title_zh: '游戏枢纽站🎮',
//         description: "A responsive game grid application that offers search and filter functionality, and features infinite scrolling using React Query. It also includes robust form validation with Zod and efficient state management with Zustand.",
//         desc_zh: "响应式游戏网格，支持搜索和过滤，使用react query实现无限滚动，使用Zod进行表单验证，Zustand进行状态管理。",
//         tags: ["React", "TypeScript", "Zod", "React Query", "Chakra UI"],
//         imageUrl: gameHubImage,
//         projectUrl: 'https://github.com/Codefreyy/New-Game-hub',
//         demoUrl: 'https://new-game-hub.vercel.app/',
//         detailRoute: '/projects/typing-speed'

//     },
//     {
//         title: "2048 Game",
//         title_zh: "2048",
//         description:
//             "Cloned the classic 2048 game using object-oriented programming and vanilla JavaScript.",
//         desc_zh: "使用面向对象编程思维和原生JavaScript实现了经典的2048游戏。",
//         tags: ["JavaScript", "HTML", "CSS3"],
//         imageUrl: rubicGameImage,
//         projectUrl: 'https://github.com/Codefreyy/VanillaJS-Game-2048',
//         demoUrl: 'https://vanilla-js-game-2048.vercel.app/',
//         detailRoute: '/projects/typing-speed'

//     },
// ]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Nuxt",
  "Vue2",
  "Vue3",
  "Node",
  "Express",
  "Koa 2",
  "Git",
  "Github",
  "Tailwind",
  "Chakra UI",
  "MongoDB",
  "Nginx",
  "Docker",
];
