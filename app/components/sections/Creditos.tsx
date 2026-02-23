"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ElderlyOutlinedIcon from "@mui/icons-material/ElderlyOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Paper } from "@mui/material";

const lineasCredito = [
  { id: 1, title: "Docentes", subtitle: "CABA – Provincia BS AS", icon: SchoolOutlinedIcon, href: "/creditos/docentes", image: "/docente.webp" },
  { id: 2, title: "Jubilados", subtitle: "ANSES – IPS – CBU", icon: ElderlyOutlinedIcon, href: "/creditos/jubilados", image: "/jubilados.webp" },
  { id: 3, title: "Pensionados", subtitle: "Graciables – Madres - PUAM", icon: GroupsOutlinedIcon, href: "/creditos/pensionados", image: "/pensionado.webp" },
  { id: 4, title: "Policía", subtitle: "CABA – Provincia BS AS", icon: LocalPoliceOutlinedIcon, href: "/creditos/policia", image: "/policia2.webp" },
  { id: 5, title: "Fuerzas de Seguridad", subtitle: "Activos – Retirados", icon: MilitaryTechOutlinedIcon, href: "/creditos/fuerzas", image: "/fuerzas2.webp" },
  { id: 6, title: "APN", subtitle: "Activos Nacionales", icon: AccountBalanceOutlinedIcon, href: "/creditos/apn", image: "/apn.webp" },
];

export default function Creditos() {
  return (
    <section className="w-full bg-background-default">
      <div className="mx-auto w-full max-w-[390px] px-4 pt-12 pb-4 flex flex-col gap-6 lg:max-w-[1200px] lg:px-6 lg:pt-16 lg:pb-16">
        
        <h1 className="text-heading-2 text-text-primary text-center lg:text-left lg:text-display">
          Líneas de crédito <span className="text-accent-blue">disponibles</span>
        </h1>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-4 w-full">
            {lineasCredito.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="flex items-center p-4 gap-8 w-full border border-border-soft bg-card-surface active:scale-[0.98] transition-transform"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="text-accent-orange" sx={{ fontSize: 48 }} />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-body-bold text-text-primary">
                      {item.title}
                    </span>
                    <span className="text-small-md text-text-secondary">
                      {item.subtitle}
                    </span>
                  </div>

                  <ArrowForwardIosIcon
                    className="ml-auto text-accent-orange"
                    sx={{ fontSize: 18 }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:block">
          <DesktopSlider items={lineasCredito} />
        </div>
      </div>

      {/* SCROLLBAR HIDE */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

function DesktopSlider({ items }: { items: typeof lineasCredito }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;

    setCanLeft(x > 2);
    setCanRight(x < max - 2);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateArrows());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, []);

  const scrollByCard = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-slide-card='true']");
    const cardWidth = firstCard ? firstCard.offsetWidth : 360;
    const gap = 32;
    const amount = cardWidth + gap;

    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Flechas */}
      {canLeft && (
        <button
          type="button"
          onClick={() => scrollByCard("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-border-soft bg-card-surface shadow-md flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ChevronLeftIcon className="text-text-primary" />
        </button>
      )}

      {canRight && (
        <button
          type="button"
          onClick={() => scrollByCard("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-border-soft bg-card-surface shadow-md flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ChevronRightIcon className="text-text-primary" />
        </button>
      )}

      {/* Slider */}
      <div
        ref={scrollerRef}
        className="flex w-full gap-8 overflow-x-auto pb-2 scrollbar-hide pr-14"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            data-slide-card="true"
            className="min-w-[calc((100%-64px)/3)] active:scale-[0.98] transition-transform"
          >
            <Paper
              variant="outlined"
              className="h-full bg-card-surface border border-border-soft rounded-none overflow-hidden hover:shadow-hero transition-shadow"
            >
              <div className="relative h-[180px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-[center_35%]"
                  sizes="(min-width: 1024px) 33vw"
                  priority={item.id === 1}
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-heading-1 text-text-primary">
                      {item.title}
                    </span>
                    <span className="text-body text-text-secondary mt-2">
                      {item.subtitle}
                    </span>
                  </div>

                  <ArrowForwardIosIcon
                    className="text-accent-orange"
                    sx={{ fontSize: 18 }}
                  />
                </div>
              </div>
            </Paper>
          </a>
        ))}
      </div>

      <p className="mt-2 text-small-sm text-text-secondary">
        Usá las flechas para ver más opciones.
      </p>
    </div>
  );
}