import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "light";

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const nextTheme = theme === "dark" ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Switch to ${nextTheme} mode`}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
            {theme === "dark" ? <SunIcon className="size-4 text-cyan-300" /> : <MoonIcon className="size-4 text-green-600" />}
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
    );
}
