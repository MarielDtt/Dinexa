"use client";

import Button from "../ui/Button";
import Image from "next/image";

const WHATSAPP_NUMBER = "+5491161076870";


const WHATSAPP_MESSAGE =
  "Desde Comunicate con nosotros me gustaria tener mas informacion.";

function openWhatsApp() {
  if (typeof window === "undefined") return;

  const text = encodeURIComponent(WHATSAPP_MESSAGE);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

export default function Hero() {
  return (
    <section className="w-full bg-background-default shadow-[0_4px_4px_rgba(0,0,0,0.25)] lg:shadow-none">
      <div
        className="min-h-[60vh] px-4 py-10 flex flex-col justify-center gap-4
                  lg:max-w-[1200px] lg:mx-auto lg:min-h-[70vh]
                  lg:grid lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-8 lg:py-8"
      >
        {/* Columna izquierda */}
        <div className="flex flex-col gap-4 lg:py-8">
          <h1 className="text-display text-text-primary lg:text-display-1">
            Te acompañamos <br />
            a encontrar el <br />
            <span className="text-accent-blue">crédito que necesitás</span>
          </h1>

          <div className="hidden lg:block">
            <Image
              src="/subrayado.webp"
              alt=""
              width={455}
              height={40}
              className="lg:w-[455px]"
            />
          </div>

          <p className="text-body-lg text-text-secondary lg:text-heading-2">
            Asesoramiento personalizado y gestión simple durante todo el proceso.
          </p>

          {/* ✅ CTA WhatsApp */}
          <div className="w-full flex justify-center lg:justify-start">
            <Button onClick={openWhatsApp}>
              Comunicate con nosotros
            </Button>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="hidden lg:flex justify-end items-start relative">
          <Image
            src="/decoracion.png"
            alt=""
            width={900}
            height={900}
            className="absolute top-1/2 -right-10 -translate-y-1/2 w-[1800px] z-0 pointer-events-none"
          />

          <div className="relative w-[480px] h-[620px] overflow-hidden z-10">
            <Image
              src="/Hero.webp"
              alt="Asesora financiera"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}