import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "./components/layout/Navbar";
import { Poppins } from "next/font/google";
import Footer from "./components/layout/Footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Dinexa SF",
  description: "Dinexa soluciones financieras",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased ${poppins.variable} font-sans`}>
        <div className="min-h-screen bg-background-default text-text-primary">
          <ThemeRegistry>
            <Navbar />
            {children}
            <Footer />

            <Script
              id="crisp-chat"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.$crisp = window.$crisp || [];
                  window.CRISP_WEBSITE_ID = "f9d5cff0-6256-4460-9618-f803a41fbde2";
                  (function() {
                    var d = document;
                    var s = d.createElement("script");
                    s.src = "https://client.crisp.chat/l.js";
                    s.async = 1;
                    d.getElementsByTagName("head")[0].appendChild(s);
                  })();
                `,
              }}
            />
          </ThemeRegistry>
        </div>
      </body>
    </html>
  );
}