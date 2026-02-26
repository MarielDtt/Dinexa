import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
};

export default function Button({
  children,
  onClick,
  disabled,
  className,
  href,
  target,
}: ButtonProps) {
  const baseClasses = [
    "inline-flex items-center justify-center gap-2.5",
    "text-center whitespace-nowrap leading-none min-h-12",
    "px-10 py-4",
    "bg-accent-orange text-text-inverse rounded",
    "hover:bg-accent-hover",
    "transition",
    "focus:outline-none focus:ring-2 focus:ring-accent-orange focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100",
    "active:scale-[0.98]",
    className ?? "",
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}