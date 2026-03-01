"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import MenuOverlay from "./MenuOverlay";
import Button from "../ui/Button";

const sections = [
  "inicio",
  "linea",
  "entidades",
  "pasos",
  "quienes-somos",
  "contacto",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, threshold: 0.6 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleCloseMenu = () => setIsMenuOpen(false);

  // 👉 NUEVO: abre Crisp
  const handleOpenChat = () => {
    if (typeof window === "undefined") return;
    window.$crisp?.push(["do", "chat:open"]);
  };

  return (
    <nav className="relative sticky top-0 z-50 w-full bg-background-default">
      {/* CONTAINER */}
      <div className="w-full px-4 pt-2 pb-4 flex items-center justify-between lg:max-w-[1200px] lg:mx-auto lg:px-8">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/Dinexa.webp"
            alt="Dinexa Logo"
            width={94}
            height={36}
            priority
          />
        </div>

        {/* LINKS (desktop) */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6">
          <a
            href="#inicio"
            className={`text-body border-b-2 ${
              activeSection === "inicio"
                ? "text-accent-orange border-accent-orange"
                : "text-text-primary border-transparent hover:text-accent-hover"
            }`}
          >
            Inicio
          </a>

          <a
            href="#linea"
            className={`text-body border-b-2 ${
              activeSection === "linea"
                ? "text-accent-orange border-accent-orange"
                : "text-text-primary border-transparent hover:text-accent-hover"
            }`}
          >
            Líneas de crédito
          </a>

          <a
            href="#entidades"
            className={`text-body border-b-2 ${
              activeSection === "entidades"
                ? "text-accent-orange border-accent-orange"
                : "text-text-primary border-transparent hover:text-accent-hover"
            }`}
          >
            Entidades
          </a>

          <a
            href="#pasos"
            className={`text-body border-b-2 ${
              activeSection === "pasos"
                ? "text-accent-orange border-accent-orange"
                : "text-text-primary border-transparent hover:text-accent-hover"
            }`}
          >
            Tres simples pasos
          </a>

          <a
            href="#quienes-somos"
            className={`text-body border-b-2 ${
              activeSection === "quienes-somos"
                ? "text-accent-orange border-accent-orange"
                : "text-text-primary border-transparent hover:text-accent-hover"
            }`}
          >
            ¿Quiénes somos?
          </a>

          <a
            href="#contacto"
            className={`text-body border-b-2 ${
              activeSection === "contacto"
                ? "text-accent-orange border-accent-orange"
                : "text-text-primary border-transparent hover:text-accent-hover"
            }`}
          >
            Contacto
          </a>
        </div>

        {/* BOTÓN (desktop) */}
        <div className="hidden lg:block">
          <Button
            onClick={handleOpenChat}
            className="w-[160px] h-12 !px-6 text-body"
          >
            Contactar
          </Button>
        </div>

        {/* HAMBURGUESA (mobile) */}
        <button
          className="w-9 h-9 flex items-center justify-center bg-card-surface border border-accent-orange rounded-full lg:hidden"
          aria-label="Abrir menú"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src="/menu-icon.svg" alt="Menú" width={16.67} height={10} />
        </button>

        {/* OVERLAY (mobile) */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 z-50 lg:hidden">
            <MenuOverlay onClose={handleCloseMenu} />
          </div>
        )}
      </div>

      {/* bottom inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#d6ddeb]" />
    </nav>
  );
}