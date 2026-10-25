import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon, FolderKanbanIcon } from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "../components/reveal";

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const project = projects[activeIndex];
    const getProject = (offset: number) => projects[(activeIndex + offset + projects.length) % projects.length];

    if (!project) return null;

    const goToPrevious = () => {
        setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
    };

    const goToNext = () => {
        setActiveIndex((index) => (index + 1) % projects.length);
    };

    return (
        <section id="projects" className="scroll-m-28 py-20 sm:py-28">
            <style>{`
                @keyframes workGalleryFade {
                    from { opacity: .45; transform: scale(.985); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
            <div className="section-shell">
                <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#39452A] bg-[#26301A] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#DDE7B7] shadow-sm dark:border-white/15 dark:bg-[#EFEDE6]/[0.045]">
                            <FolderKanbanIcon className="size-3.5" />
                            Selected Projects
                        </div>
                        <h2 className="mt-6 text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-[#EFEDE6]">
                            A Collection of <span className="accent-heading"> <br></br>Projects.</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-[0.96rem] leading-7 text-zinc-600 sm:text-right dark:text-[#EFEDE6]/70">
                        Each project reflects a thoughtful balance of visual design, practical functionality, and purposeful problem-solving.
                    </p>
                </Reveal>

                <div className="relative mx-auto max-w-6xl">
                    <div
                        className="relative mx-auto h-[clamp(10rem,31vw,22rem)] w-full max-w-5xl select-none overflow-visible px-2 sm:px-8"
                        onTouchStart={(event) => {
                            (event.currentTarget as HTMLDivElement).dataset.touchStartX = String(event.touches[0]?.clientX ?? 0);
                        }}
                        onTouchEnd={(event) => {
                            const startX = Number((event.currentTarget as HTMLDivElement).dataset.touchStartX ?? 0);
                            const endX = event.changedTouches[0]?.clientX ?? startX;
                            const delta = endX - startX;
                            if (Math.abs(delta) > 35) delta < 0 ? goToNext() : goToPrevious();
                        }}
                    >
                        {/* Two layers behind the featured cover on each side. */}
                        {[-2, -1, 1, 2].map((offset) => {
                            const item = getProject(offset);
                            const depth = Math.abs(offset);
                            const isLeft = offset < 0;
                            const x = depth === 1 ? 31 : 45;
                            const scale = depth === 1 ? 0.78 : 0.64;
                            const horizontalOffset = isLeft ? `-${x}%` : `${x}%`;
                            return (
                                <button
                                    key={item.slug}
                                    type="button"
                                    onClick={() => setActiveIndex((activeIndex + offset + projects.length) % projects.length)}
                                    aria-label={`Select project: ${item.title}`}
                                    style={{
                                        transform: `translate(calc(-50% + ${horizontalOffset}), -50%) scale(${scale})`,
                                        ...(depth === 2 ? {
                                            maskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                                            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)",
                                        } : {}),
                                    }}
                                    className={`absolute left-1/2 top-1/2 block w-[56%] overflow-hidden rounded-xl border border-zinc-300/70 bg-zinc-200 shadow-[0_18px_38px_rgba(20,25,12,0.28)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[52%] sm:rounded-2xl dark:border-white/15 dark:bg-zinc-800 ${depth === 1 ? "z-[6]" : "z-[3]"}`}
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img src={item.image} alt={`${item.title} project cover`} draggable={false} className="h-full w-full object-cover" />
                                        {/* The covers fade into the background with a soft edge-to-edge veil. */}
                                        <div
                                            className="absolute inset-0 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                            style={{
                                                background: depth === 1
                                                    ? "linear-gradient(110deg, rgba(9,9,11,.42) 0%, rgba(9,9,11,.18) 52%, rgba(9,9,11,.38) 100%)"
                                                    : "linear-gradient(110deg, rgba(9,9,11,.72) 0%, rgba(9,9,11,.48) 52%, rgba(9,9,11,.68) 100%)",
                                            }}
                                        />
                                    </div>
                                </button>
                            );
                        })}

                        <Link
                            to={`/projects/${project.slug}`}
                            title={`View ${project.title}`}
                            className="group absolute left-1/2 top-1/2 z-20 block w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-zinc-200/90 bg-zinc-100 shadow-[0_22px_58px_rgba(40,50,20,0.30)] outline-none transition-[box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_28px_70px_rgba(40,50,20,0.36)] focus-visible:ring-2 focus-visible:ring-[#86A52A] sm:w-[54%] sm:rounded-2xl dark:border-white/15 dark:bg-zinc-900 dark:shadow-[0_22px_58px_rgba(0,0,0,0.58)]"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img key={project.slug} src={project.image} alt={`${project.title} project cover`} draggable={false} style={{ animation: "workGalleryFade 650ms cubic-bezier(0.22,1,0.36,1) both" }} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                                <span className="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:bg-black/45 sm:bottom-4 sm:right-4 sm:size-10">
                                    <ArrowUpRightIcon className="size-4 sm:size-5" />
                                </span>
                            </div>
                        </Link>
                    </div>

                    <div className="mx-auto max-w-2xl px-4 pb-2 pt-4 text-center sm:pt-6" aria-live="polite">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#638522] dark:text-[#C8DB8A]">{project.category}</p>
                        <h3 className="text-xl font-bold tracking-[-0.045em] text-zinc-950 sm:text-2xl lg:text-3xl dark:text-[#EFEDE6]">{project.title}</h3>
                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7 dark:text-[#EFEDE6]/70">{project.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
