"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "dinexa_security_popup_closed";

export default function SecurityPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const closed = sessionStorage.getItem(STORAGE_KEY);
      if (!closed) {
        setTimeout(() => setIsVisible(true), 0);
      }
    } catch {
      setTimeout(() => setIsVisible(true), 0);
    }
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-[60px] z-40 w-full px-4 mt-4">
      <div className="mx-auto w-full max-w-[371px]">
        <div className="flex flex-col gap-[10px] bg-Alert-Warning p-4 shadow-soft">

          <div className="flex items-start justify-between gap-3">
            <p className="text-small-md text-text-inverse leading-snug">
              <span className="font-bold">DINEXA</span> nunca le solicitará pagos anticipados,
              transferencias ni depósitos para gestionar o aprobar préstamos.
              Tampoco solicita códigos, contraseñas ni claves bancarias.
              Cualquier pedido de este tipo no proviene de{" "}
              <span className="font-bold">DINEXA</span> y constituye un intento
              de fraude. Comuníquese únicamente a través de los canales oficiales
              publicados en este sitio web.
            </p>

            <button
              onClick={handleClose}
              aria-label="Cerrar aviso"
              className="shrink-0 h-8 w-8 flex items-center justify-center rounded-full hover:bg-black/10 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#F8F9FA"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}