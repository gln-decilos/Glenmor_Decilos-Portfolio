import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
    return (
        <section id="home" className="pt-32 pb-20 transition-colors dark:bg-zinc-950">
            <div className="relative flex flex-col items-center justify-center px-4 text-center transition-colors md:px-16 lg:px-24 xl:px-40 dark:text-zinc-100">
                <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
                    <div className="group relative flex size-32 shrink-0 items-center justify-center md:size-55">
                        {/* Glow effect behind avatar */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 blur-2xl transition-opacity group-hover:opacity-70"></div>
                        <img
                            src="/pixel-avatar.png"
                            alt="Pixel avatar of Glenmor A. Decilos"
                            className="relative size-full object-contain transition-transform duration-300 group-hover:scale-105"
                            style={{ imageRendering: "pixelated" }}
                        />
                    </div>

                    <div className="max-w-4xl text-center md:text-left">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/50 px-4 py-1.5 text-sm font-medium text-green-700 backdrop-blur-sm dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-200">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 dark:bg-cyan-400"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-green-600 dark:bg-cyan-300"></span>
                            </span>
                            Holla, they call me Glen.
                        </div>

                        <h1 className="font-callido text-5xl font-bold leading-tight tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl md:leading-[1.05] lg:text-7xl dark:text-zinc-50">
                            I{" "}
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
                                design
                            </span>{" "}
                            and{" "}
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent dark:from-cyan-300 dark:to-violet-300">
                                develop
                            </span>
                            <span className="block">solutions for the Web</span>
                        </h1>
                    </div>
                </div>

                {/* CTA Buttons - improved styling */}
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
                    <a
                        href="#projects"
                        className="group relative flex h-12 items-center overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-emerald-600 px-8 text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30 dark:from-cyan-500 dark:to-teal-500"
                    >
                        <span className="relative z-10 flex items-center text-sm font-semibold">
                            View my work
                            <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </a>
                    <a
                        href="#contact"
                        className="flex h-12 items-center rounded-full border border-zinc-300 px-7 text-sm font-medium text-zinc-700 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-md dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
                    >
                        Let's work together
                    </a>
                </div>

                
            </div>
        </section>
    );
}