import { MenuIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "/#home", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#projects", label: "Projects" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
                    {/* Brand Logo */}
                    <Link to="/" className="group flex items-center gap-2 transition-opacity hover:opacity-80">
                      
                        <span className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                            Glenmor Decilos
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-zinc-600 transition-colors hover:text-green-600 dark:text-zinc-400 dark:hover:text-cyan-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden items-center gap-3 md:flex">
                        <ThemeToggle />
                        <a
                            href="/#contact"
                            className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-5 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-md active:scale-95 dark:from-cyan-500 dark:to-teal-500"
                        >
                            Contact me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="rounded-lg p-2 text-zinc-700 transition-colors hover:bg-zinc-100 active:scale-95 dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
                        aria-label="Open menu"
                    >
                        <MenuIcon className="size-5" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/95 backdrop-blur-lg transition-transform duration-300 md:hidden ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
                    aria-label="Close menu"
                >
                    ✕
                </button>

                {/* Brand in Mobile Menu */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-emerald-600">
                        <SparklesIcon className="size-4 text-white" />
                    </div>
                    <span className="text-base font-semibold text-white">gln.decilos</span>
                </div>

                {/* Mobile Navigation Links */}
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-white transition-colors hover:text-cyan-300"
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.label}
                    </a>
                ))}

                {/* Mobile Theme Toggle & Contact */}
                <div className="mt-6 flex items-center gap-4">
                    <ThemeToggle />
                    <a
                        href="/#contact"
                        onClick={() => setMenuOpen(false)}
                        className="rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-2 text-sm font-medium text-white transition hover:scale-105 active:scale-95"
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </>
    );
}