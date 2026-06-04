import { UserRoundIcon, Code2Icon, PaletteIcon, SparklesIcon } from "lucide-react";

export default function AboutSection() {
    return (
        <section id="about" className="scroll-m-28 px-4 pt-10 pb-20 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center gap-3 text-center lg:items-start lg:text-left">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-4 py-2 text-sm font-medium text-green-700 backdrop-blur-sm shadow-sm dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-200">
                        <UserRoundIcon className="size-4" />
                        About Me
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-3xl">
                        Get to know me
                    </h2>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                    {/* Left Column - Card that matches right side height */}
                    <div className="lg:w-2/5">
                        <div className="sticky top-28 h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-200/40 transition-all duration-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
                            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
                                <img
                                    src="/about-portrait.png"
                                    alt="Glenmor A. Decilos"
                                    className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="mt-4 space-y-2 text-center">
                                <p className="text-base font-bold text-zinc-900 dark:text-zinc-50">Glenmor A. Decilos</p>
                                <p className="text-xs font-medium text-green-600 dark:text-cyan-300">UI/UX Designer &amp; Web Developer</p>
                                
                                {/* Stats */}
                               
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content (this sets the height) */}
                    <div className="lg:w-3/5">
                        <div className="space-y-5">
                            <div className="space-y-4 text-sm leading-6 text-zinc-600 dark:text-zinc-300 md:text-base">
                                <p className="text-base font-medium text-zinc-800 dark:text-zinc-100">
                                    Hi, I'm Glenmor 👋
                                </p>
                                <p>
                                    I'm a BS Information Technology graduate, majoring in Business Analytics, from Batangas State University ARASOF-Nasugbu.
                                </p>
                                <p>
                                    I love turning ideas into functional, user-centered digital solutions through thoughtful design and solid development. Every project is an opportunity to solve real problems.
                                </p>
                                <p>
                                    Through academic projects and team collaborations, I've developed strong leadership skills, a diligent work ethic, and a reliable approach to meeting deadlines.
                                </p>
                            </div>

                            {/* Skill badges */}
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs text-green-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                                    <PaletteIcon className="size-3" />
                                    <span>UI/UX Design</span>
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                                    <Code2Icon className="size-3" />
                                    <span>Web Development</span>
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-700 dark:bg-purple-400/10 dark:text-purple-300">
                                    <SparklesIcon className="size-3" />
                                    <span>Problem Solver</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="pt-2">
                                <button className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-lg dark:from-cyan-500 dark:to-teal-500">
                                    Let's connect
                                    <svg className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}