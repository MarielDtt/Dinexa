"use client";

import React from "react";
import Button from "./Button";

type SuccessModalProps = {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
};

export default function SuccessModal({
  open,
  title = "Gracias por confiar en Dinexa",
  message = "Recibimos tu solicitud correctamente. A la brevedad un asesor se estará comunicando con vos.",
  onClose,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-[420px] bg-text-inverse rounded border border-border-soft p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-heading-2 text-text-primary text-center">
          {title}
        </h3>

        <p className="mt-3 text-body text-text-secondary text-center">
          {message}
        </p>

        <div className="mt-6 flex justify-center">
          <Button onClick={onClose} className="w-full max-w-[240px]">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}