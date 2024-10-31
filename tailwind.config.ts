import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        seToHigher: "380px",
      },
      fontFamily: {
        Mahoor: ['Mahoor', 'sans-serif'], // Add your custom font here
        MahoorFD: ['MahoorFD', 'sans-serif'], // Add your custom font here
        iranSansB: ['iranSansB', 'sans-serif'], // Add your custom font here
        KahrobaB: ['KahrobaB', 'sans-serif'] // Add your custom font here
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor:"#257180",
        secondaryColor:"#F2E5BF",
        accentColor:"#FD8B51",
        dengerColor:"#CB6040",
      },
    },
  },
  plugins: [],
};
export default config;
