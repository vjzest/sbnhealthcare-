import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#1FA6A0",
                secondary: "#0B1F33",
                accent: "#D6A84A",
                heading: "#0F172A",
                text: "#475569",
            },
            keyframes: {
                'marquee-left': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-right': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            animation: {
                'marquee-left': 'marquee-left 25s linear infinite',
                'marquee-right': 'marquee-right 25s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
