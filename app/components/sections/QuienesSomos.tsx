"use client";

import { useEffect, useRef, useState } from "react";

type QuienesSomosItem = {
  badge: string;
  title: string;
  text: React.ReactNode;
};

const items: QuienesSomosItem[] = [
  {
    badge: "Historia",
    title: "Cómo comenzamos",
    text: (
      <>
        Nacimos con la idea de{" "}
        <span className="text-accent-blue font-semibold">acompañar</span> a las
        personas en la búsqueda de su{" "}
        <span className="text-accent-blue font-semibold">crédito</span>,
        ofreciendo asesoramiento claro y cercano desde el primer contacto.
      </>
    ),
  },
  {
    badge: "Misión",
    title: "Nuestra misión",
    text: (
      <>
        Nuestra misión es{" "}
        <span className="text-accent-blue font-semibold">orientar</span> a cada
        persona para que encuentre la mejor opción de{" "}
        <span className="text-accent-blue font-semibold">crédito</span>,
        brindando información clara y acompañamiento durante todo el proceso.
      </>
    ),
  },
  {
    badge: "Visión",
    title: "Nuestra visión",
    text: (
      <>
        Aspiramos a ser un referente en{" "}
        <span className="text-accent-blue font-semibold">asesoramiento</span>{" "}
        financiero, construyendo vínculos de{" "}
        <span className="text-accent-blue font-semibold">confianza</span> entre
        las personas y las entidades con las que trabajamos.
      </>
    ),
  },
  {
    badge: "Valores",
    title: "Nuestros valores",
    text: (
      <>
        Trabajamos con{" "}
        <span className="text-accent-blue font-semibold">transparencia</span>,
        acompañamiento y{" "}
        <span className="text-accent-blue font-semibold">cercanía</span>,
        priorizando siempre un trato claro y humano.
      </>
    ),
  },
];

export default function QuienesSomos() {
  // ✅ Ref AHORA apunta al contenedor que scrollea (overflow-x-auto)
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [showFade, setShowFade] = useState(true);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const hasOverflow = el.scrollWidth > el.clientWidth + 1;

      const isAtStart = el.scrollLeft <= 4;
      const isAtEnd = el.scrollLeft >= maxScrollLeft - 4;

      // Mobile fade (igual UX)
      setShowFade(hasOverflow && !isAtEnd);

      // Desktop arrows (limitadas)
      setCanLeft(hasOverflow && !isAtStart);
      setCanRight(hasOverflow && !isAtEnd);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByCards = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const step = (isDesktop ? 480 : 286) + 16; // 1 card + gap

    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-background-default px-4 py-10 lg:py-16">
      <div className="w-full lg:max-w-[1000px] lg:mx-auto flex flex-col gap-6">
        <h2 className="text-text-primary text-heading-1">
          Quiénes <span className="text-accent-blue">somos</span>
        </h2>

        <div className="relative">
          {/* Flecha izquierda (solo desktop, más sutil y más cerca) */}
          <button
            type="button"
            onClick={() => scrollByCards("left")}
            disabled={!canLeft}
            className="hidden lg:flex absolute left-[-12px] top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 items-center justify-center rounded-full
                       border border-border-soft bg-card-surface
                       text-text-primary/80 hover:text-text-primary hover:border-text-secondary/50
                       disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Anterior"
          >
            <span className="text-[20px] leading-none select-none">‹</span>
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={() => scrollByCards("right")}
            disabled={!canRight}
            className="hidden lg:flex absolute right-[-12px] top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 items-center justify-center rounded-full
                       border border-border-soft bg-card-surface
                       text-text-primary/80 hover:text-text-primary hover:border-text-secondary/50
                       disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Siguiente"
          >
            <span className="text-[20px] leading-none select-none">›</span>
          </button>

          {/* Track wrapper (solo para overlay/fade) */}
          <div className="relative overflow-hidden">
            {/* ✅ ESTE es el que scrollea */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pr-4 pb-2 no-scrollbar"
              aria-label="Carrusel Quiénes somos"
            >
              {items.map((it) => (
                <article
                  key={it.badge}
                  className="w-[286px] h-[286px] flex-shrink-0 snap-start
                             p-6 flex flex-col items-start gap-2
                             border border-border-soft bg-card-surface
                             lg:w-[480px] lg:h-auto lg:p-8"
                >
                  <div className="w-full flex justify-end">
                    <span className="px-3 py-1 text-small-sm font-semibold
                                     border border-accent-orange text-accent-orange bg-background-default">
                      {it.badge}
                    </span>
                  </div>

                  <h3 className="text-text-primary text-heading-2">{it.title}</h3>

                  <p className="text-text-secondary text-body">{it.text}</p>
                </article>
              ))}
            </div>

            {/* Fade naranja SOLO mobile */}
            {showFade && (
              <div
                className="lg:hidden pointer-events-none absolute top-0 right-0 h-[286px] w-[56px]
                           bg-gradient-to-l from-accent-orange/25 to-transparent"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}