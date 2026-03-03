"use client";

import { useState } from "react";

export default function SecurityNotice() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Sticky mini notice */}
      <div className="sticky top-[60px] z-40 w-full mt-4">
        <div className="mx-auto w-full px-4 max-w-[371px] lg:max-w-[1200px] lg:px-8">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full text-left rounded-lg border border-border-soft bg-card-surface px-4 py-3 shadow-soft hover:bg-background-default transition"
            aria-label="Ver aviso de seguridad"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-small-md text-text-primary">
                <span className="font-bold">Aviso de seguridad:</span> Dinexa S.F
                nunca solicita anticipos ni claves.
              </p>
              <span className="text-small-md text-accent-blue font-semibold whitespace-nowrap">
                Ver más
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Card institucional */}
          <div className="relative w-full max-w-[520px] bg-card-surface shadow-soft rounded-xl overflow-hidden border border-border-soft">
            <div className="flex items-start justify-between gap-3 p-4 border-b border-border-soft">
              <p className="text-body-bold text-text-primary">
                Aviso importante
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Cerrar modal"
                className="shrink-0 h-9 w-9 flex items-center justify-center rounded-full hover:bg-background-subtle transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="#062B3D"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 py-4">
              <p className="text-small-md text-text-secondary  leading-snug">
                <span className="font-bold text-text-primary">DINEXA S.F</span>{" "}
                nunca le solicitará pagos anticipados, transferencias ni depósitos
                para gestionar o aprobar préstamos. Tampoco solicita códigos,
                contraseñas ni claves bancarias. Cualquier pedido de este tipo no
                proviene de DINEXA S.F y constituye un intento de fraude.
                Comuníquese únicamente a través de los canales oficiales publicados
                en este sitio web.
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="mt-6 w-full rounded-lg bg-text-primary text-text-inverse text-body-bold py-3 hover:opacity-90 transition"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}