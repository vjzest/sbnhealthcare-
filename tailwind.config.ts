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
                // Maps to your CSS variables for backward compatibility and ease
                primary: "#1FA6A0", // Professional Teal
                secondary: "#0B1F33", // Deep Enterprise Navy
                accent: "#D6A84A", // Muted Gold
                heading: "#0F172A",
                text: "#475569",
            },
        },
    },
    plugins: [],
};
export default config;
