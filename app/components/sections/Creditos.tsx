"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FamilyRestroomOutlined,
  type SvgIconComponent,
} from "@mui/icons-material";

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ElderlyOutlinedIcon from "@mui/icons-material/ElderlyOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import LocalPoliceOutlinedIcon from "@mui/icons-material/LocalPoliceOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";

import { Paper } from "@mui/material";
import Button from "../ui/Button";

/* ================= Crisp: types + helper (sin any) ================= */

declare global {
  interface Window {
    $crisp?: CrispQueue;
  }
}

type CrispCommand =
  | ["do", "chat:open"]
  | ["do", "chat:show"]
  | ["do", "chat:hide"];

type CrispQueue = {
  push: (...args: CrispCommand[]) => number;
};

function openCrispChat() {
  const crisp = window.$crisp;
  if (!crisp) return;
  crisp.push(["do", "chat:open"]);
}

/* ================= Types ================= */

type LineaCredito = {
  id: number;
  title: string;
  subtitle: string;
  icon: SvgIconComponent;
  href: string;
  image: string;
  requirements: string[];
};

const lineasCredito: LineaCredito[] = [
  {
    id: 1,
    title: "Docentes",
    subtitle: "CABA - Provincia BS AS",
    icon: SchoolOutlinedIcon,
    href: "/creditos/docentes",
    image: "/docente.webp",
    requirements: [
      "Ser empleado planta permanente de Institución de GCBA",
      "Ser empleado planta permanente de Institución de PBA",
      "Edad: Mujeres hasta 58 años / Varones hasta 63 años",
    ],
  },
  {
    id: 2,
    title: "Jubilados",
    subtitle: "ANSES - IPS - CBU",
    icon: ElderlyOutlinedIcon,
    href: "/creditos/jubilados",
    image: "/jubilados.webp",
    requirements: [
      "Ser Jubilado o Pensionado (viudez) de ANSES",
      "Ser Jubilado o Pensionado (viudez) de IPS Provincia BS AS",
      "Edad: hasta 83 años",
    ],
  },
  {
    id: 3,
    title: "Pensionados",
    subtitle: "Graciable - Madres - PUAM",
    icon: GroupsOutlinedIcon,
    href: "/creditos/pensionados",
    image: "/pensionado.webp",
    requirements: [
      "Ser beneficiario de una pensión Graciable de ANSES",
      "Ser beneficiario de una pensión de Madres de 7 hijos",
      "Ser beneficiario de una Pensión Universal de Adulto Mayor (PUAM)",
      "Edad: hasta 83 años",
    ],
  },
  {
    id: 4,
    title: "Policía",
    subtitle: "CABA - Provincia BS AS",
    icon: LocalPoliceOutlinedIcon,
    href: "/creditos/policia",
    image: "/policia2.webp",
    requirements: [
      "Ser empleado planta permanente de Policía de GCBA",
      "Ser empleado planta permanente de Policía de PBA",
      "Edad: Mujeres hasta 58 años / Varones hasta 63 años",
    ],
  },
  {
    id: 5,
    title: "Fuerzas de Seguridad",
    subtitle: "Activos - Retirados",
    icon: MilitaryTechOutlinedIcon,
    href: "/creditos/fuerzas",
    image: "/fuerzas2.webp",
    requirements: [
      "Consultar organismos vigentes",
      "Para Activos: no superar 30 años de servicios",
    ],
  },
  {
    id: 6,
    title: "APN",
    subtitle: "Activos Nacionales",
    icon: AccountBalanceOutlinedIcon,
    href: "/creditos/apn",
    image: "/apn.webp",
    requirements: [
      "Ser empleado de un organismo nacional",
      "Ser empleado planta permanente",
      "Edad: Mujeres hasta 58 años / Varones hasta 63 años",
    ],
  },
  {
    id: 7,
    title: "AUH",
    subtitle: "Asignación Universal por Hijo",
    icon: FamilyRestroomOutlined,
    href: "/creditos/auh",
    image: "/auh.webp",
    requirements: [
      "Ser beneficiario de la Asignación Universal por Hijo (AUH) de ANSES",
      "Cobrar haberes por banco mediante CBU",
      "Sin historial crediticio negativo",
    ],
  },
];

export default function Creditos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLine, setSelectedLine] = useState<LineaCredito | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (item: LineaCredito) => {
    // Desktop: NO modal/overlay
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches
    )
      return;

    setIsClosing(false);
    setSelectedLine(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);

    window.setTimeout(() => {
      setIsModalOpen(false);
      setSelectedLine(null);
      setIsClosing(false);
    }, 320); // coincide con duration-300
  };

  // Bloquear scroll del body con modal abierto
  useEffect(() => {
    if (!isModalOpen) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [isModalOpen]);

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
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(item);
                  }}
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
                    aria-hidden="true"
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

      {/* MODAL (solo mobile) */}
      <CreditLineModal
        open={isModalOpen}
        closing={isClosing}
        line={selectedLine}
        onClose={closeModal}
      />

      {/* SCROLLBAR HIDE (slider desktop horizontal) */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Scrollbar naranja para el modal (vertical) */
        .modal-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background: rgba(249, 116, 4, 0.6);
          border-radius: 999px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        /* Scrollbar naranja para requisitos en desktop (vertical) */
        .card-req-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .card-req-scroll::-webkit-scrollbar-thumb {
          background: rgba(249, 116, 4, 0.55);
          border-radius: 999px;
        }
        .card-req-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </section>
  );
}

function DesktopSlider({ items }: { items: typeof lineasCredito }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const [openId, setOpenId] = useState<number | null>(null);

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

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="relative">
      {canLeft && (
        <button
          type="button"
          aria-label="Ver opciones anteriores"
          onClick={() => scrollByCard("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-border-soft bg-card-surface shadow-md flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ChevronLeftIcon className="text-text-primary" aria-hidden="true" />
        </button>
      )}

      {canRight && (
        <button
          type="button"
          aria-label="Ver más opciones"
          onClick={() => scrollByCard("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full border border-border-soft bg-card-surface shadow-md flex items-center justify-center hover:scale-105 transition-transform"
        >
          <ChevronRightIcon className="text-text-primary" aria-hidden="true" />
        </button>
      )}

      <div
        ref={scrollerRef}
        className="flex w-full gap-8 overflow-x-auto pb-2 scrollbar-hide pr-14"
        style={{ scrollBehavior: "smooth" }}
      >
        {items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              data-slide-card="true"
              className="min-w-[calc((100%-64px)/3)]"
            >
              <Paper
                variant="outlined"
                className="h-[430px] bg-card-surface border border-border-soft rounded-none overflow-hidden hover:shadow-hero transition-shadow"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") toggle(item.id);
                  }}
                  className="h-full outline-none"
                >
                  {!isOpen && (
                    <div className="relative h-[180px] w-full transition-all duration-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-[center_35%]"
                        sizes="(min-width: 1024px) 33vw"
                        priority={item.id === 1}
                      />
                    </div>
                  )}

                  <div
                    className={[
                      "p-8 flex flex-col",
                      isOpen ? "h-[430px]" : "h-[250px]",
                    ].join(" ")}
                  >
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
                        className="text-accent-orange transition-transform"
                        sx={{
                          fontSize: 18,
                          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-4">
                      <span className="text-small-sm text-accent-orange">
                        {isOpen ? "Ocultar requisitos" : "Ver requisitos"}
                      </span>
                    </div>

                    {isOpen && (
                      <div className="mt-4 border-t border-border-soft pt-4 flex flex-col flex-1 min-h-0">
                        <p className="text-body-bold text-text-primary">
                          REQUISITOS
                        </p>

                        <div className="mt-3 flex-1 min-h-0 overflow-y-auto pr-2 card-req-scroll">
                          <ul className="space-y-3">
                            {item.requirements.map((req, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-body text-text-secondary"
                              >
                                <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-accent-orange shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* CTA Chat (solo cuando está abierta) */}
                    {isOpen && (
                      <div className="mt-6">
                        <Button onClick={openCrispChat} className="w-full">
                          Iniciar chat
                        </Button>
                      </div>
                    )}

                    <div className="mt-auto" />
                  </div>
                </div>
              </Paper>
            </div>
          );
        })}
      </div>

      <p className="mt-2 text-small-sm text-text-secondary">
        Usá las flechas para ver más opciones.
      </p>
    </div>
  );
}

/* ================= MOBILE MODAL ANIMADO ================= */

function CreditLineModal({
  open,
  closing,
  line,
  onClose,
}: {
  open: boolean;
  closing: boolean;
  line: LineaCredito | null;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const computeHint = () => {
    const el = scrollRef.current;
    if (!el) return;
    const remaining = el.scrollHeight - (el.scrollTop + el.clientHeight);
    setShowHint(remaining > 2);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const id = window.requestAnimationFrame(() => computeHint());
    return () => window.cancelAnimationFrame(id);
  }, [open, line?.id]);

  useEffect(() => {
    if (!open) return;

    const id = window.requestAnimationFrame(() => {
      setAnimateIn(true);
    });

    return () => {
      window.cancelAnimationFrame(id);
      setAnimateIn(false);
    };
  }, [open, line?.id]);

  if (!line) return null;
  if (!open && !closing) return null;

  const isVisible = open && animateIn && !closing;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-start justify-center pt-16 px-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className={[
          "absolute inset-0 bg-text-primary/60 backdrop-blur-[2px]",
          "transition-opacity duration-300 ease-out",
          isVisible ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      <div
        className={[
          "relative w-[355px] h-[410px] rounded-[8px] bg-text-primary overflow-hidden",
          "transition-all duration-300 ease-out will-change-transform",
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-[0.96]",
        ].join(" ")}
      >
        <div className="px-6 pt-6 pb-4 relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="absolute right-4 top-4 text-accent-orange hover:opacity-80 transition-opacity"
          >
            <CloseIcon aria-hidden="true" />
          </button>

          <h2 className="text-heading-1 text-text-inverse">{line.title}</h2>
          <p className="text-body text-text-inverse mt-2">{line.subtitle}</p>
        </div>

        <div className="relative px-6">
          <div
            ref={scrollRef}
            onScroll={computeHint}
            className="h-[250px] overflow-y-auto pr-2 modal-scroll"
          >
            <p className="text-body-bold text-text-inverse mt-4">REQUISITOS</p>

            <ul className="mt-4 space-y-4 pb-16">
              {line.requirements.map((req, idx) => (
                <li key={idx} className="flex gap-3 text-body text-text-inverse">
                  <span className="mt-[0.55rem] h-2 w-2 rounded-full bg-accent-orange shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>

            {showHint && (
              <div className="pb-2">
                <p className="text-small-sm text-text-inverse/70 text-center">
                  Deslizá para ver más ↓
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-4 flex justify-center bg-text-primary">
          <Button onClick={openCrispChat} className="w-full max-w-[240px]">
            Iniciar chat
          </Button>
        </div>
      </div>
    </div>
  );
}