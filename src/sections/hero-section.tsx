import { ArrowRightIcon } from "lucide-react";
import Reveal from "../components/reveal";

export default function HeroSection() {
    return (
        <section id="home" className="scroll-m-28 pt-32 pb-20 sm:pb-24">
            <div className="section-shell relative flex flex-col items-center justify-center text-center">
                <Reveal>
                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
                        <div className="group relative flex size-32 shrink-0 items-center justify-center md:size-55">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20 blur-2xl transition-opacity group-hover:opacity-70" />
                            <img
                                src="/pixel-avatar.png"
                                alt="Pixel avatar of Glenmor A. Decilos"
                                className="relative size-full object-contain transition-transform duration-300 group-hover:scale-105"
                                style={{ imageRendering: "pixelated" }}
                            />
                        </div>

                        <div className="max-w-4xl text-center md:text-left">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/70 px-4 py-1.5 text-sm font-medium text-violet-700 backdrop-blur-sm dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75 dark:bg-violet-300" />
                                    <span className="relative inline-flex size-2 rounded-full bg-violet-600 dark:bg-violet-200" />
                                </span>
                                Holla, they call me Glen.
                            </div>

                            <h1 className="text-5xl font-bold leading-[0.96] tracking-[-0.065em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
    I{" "}
    <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-purple-200">
        design
    </span>{" "}
    and{" "}
    <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-purple-200">
        develop
    </span>
    <span className="block">solutions for the Web</span>
</h1>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={120}>
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                        <a
                            href="#projects"
                            className="group relative flex h-12 items-center overflow-hidden rounded-full bg-gradient-to-r from-zinc-950 to-zinc-800 px-8 text-white shadow-lg shadow-zinc-950/20 transition-all duration-300 hover:scale-105 hover:from-violet-700 hover:to-indigo-600 hover:shadow-xl hover:shadow-violet-500/20 dark:from-violet-400 dark:to-indigo-400 dark:text-zinc-950"
                        >
                            <span className="relative z-10 flex items-center text-sm font-semibold">
                                View my work
                                <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="flex h-12 items-center rounded-full border border-zinc-300 bg-white/60 px-7 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-violet-300 hover:bg-violet-50 hover:shadow-md dark:border-zinc-700 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-violet-400/40 dark:hover:bg-violet-400/10"
                        >
                            Let&apos;s work together
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
