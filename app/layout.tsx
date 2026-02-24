import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";
import Navbar from "./components/layout/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "./components/layout/Footer";


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
          </ThemeRegistry>
        </div>
      </body>

    </html>
  );
}
