'use client';
import Image from "next/image";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="relative w-full bg-background-default flex items-center justify-between pt-2 pb-4 px-4">
                {/* logo */}
                <div className="flex items-center">
                    <Image
                        src="/Dinexa.webp"
                        alt="Dinexa Logo"
                        width={94}
                        height={36}
                        priority
                    />
                </div>

                {/* hamburger / menu toggle */}
                <button
                    className="w-9 h-9 flex items-center justify-center
                   bg-card-surface
                   border border-accent-orange
                   rounded-full"
                    aria-label="Abrir menú"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Image
                        src="/menu-icon.svg"
                        alt="Menú"
                        width={16.67}
                        height={10}
                    />
                </button>

                {/* bottom inner shadow */}
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#d6ddeb]" />
            </nav>
            {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
        </>
    );
}