import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./theme/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "background-default": "#F9F5F1",
                "background-subtle": "#C2BFBB",
                "card-surface": "#FAF9F7",
                "border-soft": "#B7B3AC",

                "text-primary": "#062B3D",
                "text-secondary": "#5E5B57",
                "text-inverse": "#FFFFFF",

                "accent-orange": "#F97404",
                "accent-hover": "#E86703",
            }
        },

        fontFamily: {
            sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        },
    },
    plugins: [],
};

export default config;