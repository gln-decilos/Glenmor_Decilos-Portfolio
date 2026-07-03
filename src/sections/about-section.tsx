import { ArrowUpRightIcon, UserRoundIcon } from "lucide-react";
import Reveal from "../components/reveal";

export default function AboutSection() {
    return (
        <section id="about" className="scroll-m-28 py-20 sm:py-28">
            <div className="section-shell">
                <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
    <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#3a2450] bg-[#21102f] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet-200 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/[0.045] dark:text-violet-200">
            <UserRoundIcon className="size-3.5 text-violet-200" />
            About me
        </div>

        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
            A practical thinker with a{" "}
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-purple-200">
                creative eye.
            </span>
        </h2>
    </div>

    <p className="max-w-md text-[0.96rem] leading-7 text-zinc-600 sm:text-right dark:text-white/70">
        A UI/UX designer and web developer focused on creating clean,
        functional, and user-centered digital experiences.
    </p>
</Reveal>

                <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                    <Reveal>
                        <div className="surface-card relative mx-auto max-w-sm p-2.5 sm:p-3">
                            <div className="relative overflow-hidden rounded-[1rem]">
                                <img
                                    src="/glen-portrait-2.jpg"
                                    alt="Glenmor A. Decilos"
                                    className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-[1.025]"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-5 pb-5 pt-16">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Glenmor A. Decilos</p>
                                    <p className="mt-1 text-sm font-semibold text-white">UI/UX Designer &amp; Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="surface-card p-7 sm:p-9 lg:p-10">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">A little background</p>
                            <h3 className="mt-3 text-2xl font-bold tracking-[-0.045em] text-zinc-950 dark:text-zinc-50 sm:text-3xl">Designing with clarity, building with purpose.</h3>
                            <div className="mt-6 space-y-4 text-[0.96rem] leading-7 text-zinc-600 dark:text-zinc-300">
                                <p>Hi, I&apos;m Glenmor. I&apos;m a BS Information Technology graduate majoring in Business Analytics from Batangas State University ARASOF-Nasugbu.</p>
                                <p>I enjoy turning ideas into functional digital solutions through thoughtful design and reliable development. I focus on building interfaces that are clear, useful, and easy to use.</p>
                                <p>Through academic projects and team collaborations, I developed strong leadership skills, a diligent work ethic, and a deadline-driven approach to every project I handle.</p>
                            </div>
                            <a href="#contact" className="button-primary mt-8 group">
                                Let&apos;s connect
                                <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
