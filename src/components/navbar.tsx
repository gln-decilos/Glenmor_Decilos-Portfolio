import { MenuIcon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "/#home", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#certificates", label: "Certificates" },
        { href: "/#projects", label: "Projects" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="site-nav sticky top-0 z-50 w-full">
                <div className="section-shell flex items-center justify-between py-3.5">
                    <Link to="/" className="group flex items-center gap-2 transition-opacity hover:opacity-80">
                        <span className="grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--accent-soft)] font-mono text-xs font-bold text-[var(--accent-strong)]">GD</span>
                        <span className="site-brand text-[0.95rem] font-bold">Glenmor Decilos</span>
                    </Link>

                    <div className="hidden items-center gap-6 md:flex">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">
                        <ThemeToggle />
                        <a href="/Glenmor-Decilos-CV.pdf" target="_blank" rel="noopener noreferrer" className="button-primary min-h-0 px-4 py-2 text-xs">
                            Hire me
                        </a>
                    </div>

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="grid size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] active:scale-95 md:hidden"
                        aria-label="Open menu"
                    >
                        <MenuIcon className="size-4" />
                    </button>
                </div>
            </nav>

            <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-7 bg-[var(--surface-strong)] px-6 transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="absolute left-6 top-5 flex items-center gap-2 text-[var(--ink)]">
                    <span className="grid size-8 place-items-center rounded-lg border border-[var(--line)] bg-[var(--accent-soft)] font-mono text-xs font-bold text-[var(--accent-strong)]">GD</span>
                    <span className="text-sm font-bold tracking-[-0.03em]">Glenmor Decilos</span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--ink)] transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]" aria-label="Close menu">
                    <XIcon className="size-4" />
                </button>
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-2xl font-bold tracking-[-0.05em] text-[var(--ink)] transition hover:text-[var(--accent-strong)]" onClick={() => setMenuOpen(false)}>
                        {link.label}
                    </a>
                ))}
                <div className="mt-3 flex items-center gap-3">
                    <ThemeToggle />
                    <a href="/Glenmor-Decilos-CV.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="button-primary">
                        View CV
                    </a>
                </div>
            </div>
        </>
    );
}
