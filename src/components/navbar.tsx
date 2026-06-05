import { MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="z-50 flex items-center justify-between w-full py-4 px-4 md:px-16 lg:px-24 xl:px-40 text-sm text-slate-800 transition-colors dark:text-zinc-100">
                <Link to="/">
                    <img
                        src='/logo.svg'
                        alt="Logo"
                        width={130}
                        height={36}
                        className="h-10 w-auto dark:brightness-0 dark:invert"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800 dark:text-zinc-200">
                    {navLinks.map((link) => (
                        <Link key={link.href} to={link.href} className="hover:text-green-600 transition dark:hover:text-cyan-300">{link.label}</Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <ThemeToggle />
                    <a href="#contact" className="px-7 py-2 bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-full text-white dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:text-zinc-950">
                        Let's work together
                    </a>
                    
                </div>

                <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition dark:text-zinc-100" aria-label="Open menu">
                    <MenuIcon />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-100 bg-black/70 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                {navLinks.map((link) => (
                    <Link key={link.href} to={link.href} className="text-white hover:text-cyan-300 transition" onClick={() => setMenuOpen(false)}>{link.label}</Link>
                ))}
                <ThemeToggle />
                <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex dark:bg-cyan-500 dark:text-zinc-950 dark:hover:bg-cyan-400" aria-label="Close menu">
                    X
                </button>
            </div>
        </>
    );
}
