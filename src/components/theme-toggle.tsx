import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const getInitialTheme = (): Theme => {
    if (typeof window === "undefined") return "dark";

    const savedTheme = window.localStorage.getItem("theme");

    // Keep the user's selected theme on future visits.
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    // First-time visitors always open in dark mode.
    return "dark";
};

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        root.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            aria-label={`Switch to ${nextTheme} mode`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--ink)] shadow-sm transition duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] active:scale-95"
        >
            {theme === "dark" ? (
                <SunIcon className="size-4 text-[var(--accent)]" />
            ) : (
                <MoonIcon className="size-4 text-[var(--accent-strong)]" />
            )}

            <span>{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
    );
}