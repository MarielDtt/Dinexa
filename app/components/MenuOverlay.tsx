import Image from "next/image";

type MenuOverlayProps = { onClose: () => void };

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <div className="fixed inset-0 bg-black/40 z-[60]" onClick={onClose}>
      <div
        className="w-[320px] ml-auto mr-4 mt-12 p-4 rounded-lg border border-border-soft bg-text-primary/90 flex flex-col items-center justify-between h-[418px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between w-full">
          <Image src="/DinexaOrange2.webp" alt="Dinexa" width={116} height={40} />
          <button onClick={onClose} className="text-accent-orange text-2xl leading-none" aria-label="Cerrar menú">
            ×
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 flex-1 justify-center">
          <a href="#inicio" className="text-text-inverse text-heading-2">Inicio</a>
          <a href="#linea" className="text-text-inverse text-heading-2">Líneas de crédito</a>
          <a href="#entidades" className="text-text-inverse text-heading-2">Entidades</a>
          <a href="#pasos" className="text-text-inverse text-heading-2">Tres simples pasos</a>
          <a href="#quienes-somos" className="text-text-inverse text-heading-2">¿Quiénes somos?</a>
          <a href="#contacto" className="text-text-inverse text-heading-2">Contactos</a>
        </div>
      </div>
    </div>
  );
}