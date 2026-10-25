import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpRightIcon,
    FolderKanbanIcon,
} from "lucide-react";
import { projects } from "../data/projects";
import Reveal from "../components/reveal";

export default function ProjectsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const project = projects[activeIndex];
    const getProject = (offset: number) =>
        projects[(activeIndex + offset + projects.length) % projects.length];

    if (!project) return null;

    const goToPrevious = () =>
        setActiveIndex((index) => (index - 1 + projects.length) % projects.length);

    const goToNext = () =>
        setActiveIndex((index) => (index + 1) % projects.length);

    const image = project.image ?? "";
    const tags = project.tags ?? [];
    const detailHref = `/projects/${project.slug}`;
    const category = project.category ?? "Project";
    const year = project.year ?? "";
    const nextProject = projects.length > 1 ? getProject(1) : null;

    const total = String(projects.length).padStart(2, "0");
    const current = String(activeIndex + 1).padStart(2, "0");

    return (
        <section
            id="projects"
            className="scroll-m-28 py-14 sm:py-20 lg:py-28"
        >
            <div className="section-shell">
                {/* ── Header ───────────────────────────────────────────── */}
                <Reveal>
                    <div className="mb-8 flex min-w-0 flex-col justify-between gap-5 sm:mb-10 sm:gap-6 md:flex-row md:items-end lg:mb-12">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#39452A] bg-[#26301A] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#DDE7B7] shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-[#EFEDE6]/[0.045] dark:text-[#DDE7B7]">
                                <FolderKanbanIcon className="h-3.5 w-3.5" />
                                Selected work
                            </span>

                            <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 [overflow-wrap:anywhere] sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl dark:text-[#EFEDE6]">
                                A Collection of<span className="accent-heading"> Projects</span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-6 text-zinc-600 sm:text-[0.96rem] sm:leading-7 md:text-right dark:text-[#EFEDE6]/70">
                            A curated selection of products, experiments and client
                            work — each one focused on clarity, performance and
                            craft.
                        </p>
                    </div>
                </Reveal>

                <div className="mb-4 flex items-center justify-end gap-3 sm:mb-5 sm:gap-4">
                    <span className="font-mono text-sm tabular-nums text-zinc-500 dark:text-[#EFEDE6]/55">
                        <span className="font-semibold text-zinc-950 dark:text-[#EFEDE6]">{current}</span>
                        <span className="mx-1">/</span>{total}
                    </span>
                    <div className="flex items-center gap-2">
                        <button type="button" onClick={goToPrevious} aria-label="Previous project" className="grid size-10 place-items-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-zinc-950 hover:text-[#EFEDE6] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-[#EFEDE6] dark:hover:text-zinc-950">
                            <ArrowLeftIcon className="h-4 w-4" />
                        </button>
                        <button type="button" onClick={goToNext} aria-label="Next project" className="grid size-10 place-items-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-zinc-950 hover:text-[#EFEDE6] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-[#EFEDE6] dark:hover:text-zinc-950">
                            <ArrowRightIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* ── Main stage ───────────────────────────────────────── */}
                <Reveal delay={100}>
                    <div className="grid min-w-0 grid-cols-1 items-start gap-7 sm:gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-10">
                        {/* Project details */}
                        <div className="flex min-w-0 flex-col lg:col-span-5">
                            <div aria-live="polite">
                                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                                    <span>{category}</span>
                                    {year && (
                                        <>
                                            <span
                                                aria-hidden="true"
                                                className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"
                                            />
                                            <span>{year}</span>
                                        </>
                                    )}
                                </div>

                                <h3 className="mt-3 text-2xl font-semibold tracking-tight [overflow-wrap:anywhere] sm:mt-4 sm:text-3xl dark:text-white">
                                    {project.title}
                                </h3>

                                {project.description && (
                                    <p className="mt-3 text-sm leading-6 text-neutral-600 sm:mt-4 sm:text-base sm:leading-relaxed dark:text-neutral-400">
                                        {project.description}
                                    </p>
                                )}

                                {tags.length > 0 && (
                                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                                    <Link
                                        to={detailHref}
                                        className="group/cta inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white sm:px-6 transition duration-200 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950"
                                    >
                                        View case study
                                        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                                    </Link>

                                    
                                </div>
                            </div>

                            
                        </div>
                        {/* Project preview */}
                        <div className="flex min-w-0 flex-col lg:col-span-7">
                            <Link
                                to={detailHref}
                                className="group relative block min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-neutral-100 ring-1 ring-neutral-900/5 transition duration-300 hover:ring-neutral-900/15 dark:bg-neutral-900 dark:ring-white/10 dark:hover:ring-white/20"
                            >
                                <div className="aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9]">
                                    {image ? (
                                        <img
                                            key={image}
                                            src={image}
                                            alt={project.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-[1.04]"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
                                            No preview available
                                        </div>
                                    )}
                                </div>

                                {/* Gradient scrim */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                                {/* Index badge */}
                                <div className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-3 sm:text-xs">
                                    {current} / {total}
                                </div>

                                {/* Hover affordance */}
                                <div className="absolute right-3 top-3 flex h-9 w-9 sm:right-5 sm:top-5 sm:h-11 sm:w-11 translate-y-1 items-center justify-center rounded-full bg-white/95 text-neutral-900 opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <ArrowUpRightIcon className="h-4 w-4" />
                                </div>

                                {/* Bottom meta */}
                                {tags.length > 0 && (
                                    <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5 sm:inset-x-5 sm:bottom-5 sm:gap-2">
                                        {tags.slice(0, 4).map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full bg-white/12 px-2 py-1 text-[10px] sm:px-2.5 sm:text-[11px] font-medium text-white ring-1 ring-inset ring-white/25 backdrop-blur-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Link>

                            {/* ── Thumbnail rail ───────────────────────────────────── */}
                            {projects.length > 1 && (
                                <Reveal delay={160}>
                                    <div className="-mx-1 mt-4 max-w-full overflow-x-auto px-1 pt-1 pb-3 sm:mt-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                        <div className="flex w-max gap-2.5 sm:gap-3">
                                            {projects.map((item, index) => {
                                                const isActive = index === activeIndex;
                                                const thumb = item.image ?? "";

                                                return (
                                                    <button
                                                        key={item.slug}
                                                        type="button"
                                                        onClick={() => setActiveIndex(index)}
                                                        aria-label={`Show ${item.title}`}
                                                        aria-current={isActive ? "true" : undefined}
                                                        className={`group relative shrink-0 overflow-hidden rounded-xl border-2 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 dark:focus-visible:ring-white dark:focus-visible:ring-offset-neutral-950 ${
                                                            isActive
                                                                ? "border-neutral-900 dark:border-white"
                                                                : "border-transparent opacity-60 hover:opacity-100"
                                                        }`}
                                                    >
                                                        <div className="h-16 w-24 sm:h-20 sm:w-28">
                                                            {thumb ? (
                                                                <img
                                                                    src={thumb}
                                                                    alt=""
                                                                    loading="lazy"
                                                                    className="h-full w-full object-cover"
                                                                />
                                                            ) : (
                                                                <div className="h-full w-full bg-neutral-200 dark:bg-neutral-800" />
                                                            )}
                                                        </div>

                                                        {isActive && (
                                                            <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Reveal>
                            )}


                        </div>

                    </div>
                </Reveal>

            </div>
        </section>
    );
}
