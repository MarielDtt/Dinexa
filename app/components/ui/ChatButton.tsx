"use client";

import { useEffect, useState } from "react";

type ChatButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function ChatButton({ onClick, className = "" }: ChatButtonProps) {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hideOnFooter, setHideOnFooter] = useState(false);

  useEffect(() => {
    const footerEl = document.getElementById("site-footer");
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideOnFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        // 👇 se oculta un poco ANTES de que el footer “toque” el botón
        rootMargin: "0px 0px -180px 0px",
      }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (!hasInteracted) setHasInteracted(true);
    onClick?.();
  };

  return (
    <>
      <div
        className={[
          "fixed z-[9999] bottom-6 right-6 lg:bottom-8 lg:right-8",
          "transition-opacity duration-200 ease-out",
          hideOnFooter ? "opacity-0 pointer-events-none" : "opacity-100",
        ].join(" ")}
      >
        <button
          type="button"
          onClick={handleClick}
          aria-label="Abrir chat"
          className={[
            "h-14 w-14 rounded-full flex items-center justify-center",
            "bg-accent-orange text-white",
            "shadow-[0_8px_20px_rgba(0,0,0,0.15)] ring-1 ring-white/20",
            "transition-[filter,box-shadow] duration-200 ease-out",
            "hover:brightness-95 hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]",
            "focus:outline-none focus-visible:ring-4 focus-visible:ring-accent-blue/30",
            !hasInteracted ? "animate-chatBreath" : "",
            className,
          ].join(" ")}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3C6.48 3 2 6.94 2 11.5c0 2.4 1.26 4.56 3.3 6.02L4 21l4.04-1.35c1.2.32 2.48.49 3.96.49 5.52 0 10-3.94 10-8.5S17.52 3 12 3zm0 15c-1.28 0-2.48-.17-3.56-.5l-.26-.08-2.4.8.73-2.14-.18-.2C4.87 14.7 4 13.17 4 11.5 4 8.46 7.58 6 12 6s8 2.46 8 5.5-3.58 5.5-8 5.5z" />
          </svg>
        </button>
      </div>

      <style jsx global>{`
        @keyframes chatBreath {
          0%,
          100% {
            scale: 1;
          }
          50% {
            scale: 1.04;
          }
        }
        .animate-chatBreath {
          animation: chatBreath 2.8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}