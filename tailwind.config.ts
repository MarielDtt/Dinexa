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
                "text-inverse": "#F8F9FA",

                "accent-orange": "#F97404",
                "accent-hover": "#E86703",
                "accent-blue": '#26A4FF',

                "Alert-Warning": "#C62828",
            },
            fontSize: {
                'display-1': ['56px', { lineHeight: '60px', fontWeight: '700' }],
                'display': ['36px', { lineHeight: '44px', fontWeight: '700' }],
                'heading-1': ['28px', { lineHeight: '36px', fontWeight: '600' }],
                'heading-2': ['22px', { lineHeight: '32px', fontWeight: '600' }],
                'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
                'body-lg': ['18px', { lineHeight: '28.8px', fontWeight: '400' }],
                'body-bold': ['16px', { lineHeight: '26px', fontWeight: '700' }],
                'small-md': ['14px', { lineHeight: '22px', fontWeight: '400' }],
                'small-sm': ['12px', { lineHeight: '20px', fontWeight: '400' }],
            },
            boxShadow: {
                'hero': '0 4px 4px rgba(0,0,0,0.25)',
                "soft": "0 4px 4px 0 rgba(0, 0, 0, 0.10)",
            }
        },

        fontFamily: {
            sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        },
    },
    plugins: [],
};

export default config;