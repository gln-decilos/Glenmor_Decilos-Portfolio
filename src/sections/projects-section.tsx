import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpRightIcon,
    SparklesIcon,
} from "lucide-react";
import { projects, type Project } from "../data/projects";
import Reveal from "../components/reveal";

const projectsPerPage = 3;

function ProjectItem({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const isReversed = index % 2 === 1;

    return (
        <Link
            to={`/projects/${project.slug}`}
            className="group block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-4 dark:focus-visible:ring-violet-300 dark:focus-visible:ring-offset-zinc-950"
            title={`View ${project.title}`}
        >
            <article className="relative grid gap-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16">
                {/* Project text */}
                <div
                    className={`relative z-20 ${
                        isReversed ? "md:order-2" : "md:order-1"
                    }`}
                >
                    <div
                        className={`${
                            isReversed
                                ? "md:pl-8 lg:pl-12"
                                : "md:pr-8 lg:pr-12"
                        }`}
                    >
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                            <SparklesIcon className="size-3" />
                            {project.category}
                        </div>

                        <h3 className="max-w-lg text-2xl font-bold leading-[1.05] tracking-[-0.045em] text-zinc-950 sm:text-3xl dark:text-white">
                            {project.title}
                        </h3>
                    </div>

                    {/* Frosted-glass project description */}
                    <div
                        className={`relative mt-5 overflow-hidden rounded-[1.35rem] border border-white/65 bg-white/[0.42] p-5 shadow-[0_20px_50px_rgba(70,35,100,0.14)] backdrop-blur-2xl backdrop-saturate-150 transition duration-300 group-hover:border-violet-300/65 group-hover:bg-white/[0.5] group-hover:shadow-[0_24px_55px_rgba(85,50,135,0.20)] dark:border-white/14 dark:bg-[rgba(20,11,32,0.46)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.34)] dark:group-hover:border-violet-300/35 dark:group-hover:bg-[rgba(28,16,43,0.56)] ${
                            isReversed
                                ? "md:-ml-14 lg:-ml-20"
                                : "md:-mr-14 lg:-mr-20"
                        }`}
                    >
                        {/* Glass reflection */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/85 dark:bg-white/25"
                        />

                        {/* Glass sheen */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.18] via-transparent to-violet-500/[0.04] dark:from-white/[0.05] dark:to-violet-400/[0.06]"
                        />

                        <div className="relative z-10">
                            <p className="text-sm leading-6 text-zinc-700 dark:text-white/75">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/55 bg-white/[0.32] px-2.5 py-1 text-[10px] font-semibold text-zinc-700 transition-colors group-hover:border-violet-300/60 group-hover:bg-violet-50/55 group-hover:text-violet-700 dark:border-white/12 dark:bg-white/[0.055] dark:text-white/70 dark:group-hover:border-violet-300/25 dark:group-hover:bg-violet-400/10 dark:group-hover:text-violet-200"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Main project action */}
                            <div className="mt-6 flex items-center justify-between border-t border-zinc-900/[0.08] pt-4 dark:border-white/10">
                                <span className="text-xs font-bold uppercase tracking-[0.12em] text-violet-700 dark:text-violet-200">
                                    View case study
                                </span>

                                <span className="grid size-9 place-items-center rounded-full border border-violet-300/70 bg-violet-500 text-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-violet-600 dark:border-violet-200/30 dark:bg-violet-300 dark:text-[#160a24]">
                                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project image */}
                <div
                    className={`relative ${
                        isReversed ? "md:order-1" : "md:order-2"
                    }`}
                >
                    {/* Violet-purple depth behind preview */}
                    <div
                        aria-hidden="true"
                        className={`absolute -inset-4 rounded-[1.8rem] bg-gradient-to-br from-violet-500/25 via-purple-500/12 to-transparent blur-2xl transition duration-500 group-hover:from-violet-500/35 group-hover:via-purple-500/20 dark:from-violet-500/30 dark:via-purple-500/18 ${
                            isReversed
                                ? "translate-x-3 translate-y-3"
                                : "-translate-x-3 translate-y-3"
                        }`}
                    />

                    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-[0_18px_35px_rgba(60,25,90,0.14)] transition duration-500 group-hover:-translate-y-1 group-hover:border-violet-200 group-hover:shadow-[0_26px_50px_rgba(85,45,135,0.20)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_18px_35px_rgba(0,0,0,0.32)] dark:group-hover:border-violet-300/30">
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default function ProjectsSection() {
    const [currentPage, setCurrentPage] = useState(0);
    const pageCount = Math.ceil(projects.length / projectsPerPage);

    const visibleProjects = useMemo(() => {
        const start = currentPage * projectsPerPage;

        return projects.slice(start, start + projectsPerPage);
    }, [currentPage]);

    const goToPreviousPage = () => {
        setCurrentPage((page) => Math.max(page - 1, 0));
    };

    const goToNextPage = () => {
        setCurrentPage((page) => Math.min(page + 1, pageCount - 1));
    };

    return (
        <section id="projects" className="scroll-m-28 py-20 sm:py-28">
            <div className="section-shell">
                <Reveal className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#3a2450] bg-[#21102f] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-violet-200 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/[0.045] dark:text-violet-200">
                            <SparklesIcon className="size-3.5 text-violet-200" />
                            Featured Work
                        </div>

                        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
                            Selected{" "}
                            <span className="bg-gradient-to-r from-violet-600 via-violet-500 to-purple-500 bg-clip-text text-transparent dark:from-violet-300 dark:via-violet-200 dark:to-purple-200">
                                Works.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-[0.96rem] leading-7 text-zinc-600 sm:text-right dark:text-white/70">
                        A collection of work where design and development meet
                        to create meaningful digital experiences.
                    </p>
                </Reveal>

                <div className="space-y-16 sm:space-y-20 lg:space-y-24">
                    {visibleProjects.map((project, index) => (
                        <Reveal key={project.slug} delay={index * 80}>
                            <ProjectItem
                                project={project}
                                index={currentPage * projectsPerPage + index}
                            />
                        </Reveal>
                    ))}
                </div>

                {pageCount > 1 && (
                    <div className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-8 dark:border-white/10">
                        <p className="text-sm text-zinc-500 dark:text-white/50">
                            Showing{" "}
                            <span className="font-semibold text-zinc-800 dark:text-white/85">
                                {currentPage * projectsPerPage + 1}–
                                {Math.min(
                                    (currentPage + 1) * projectsPerPage,
                                    projects.length,
                                )}
                            </span>{" "}
                            of {projects.length}
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={goToPreviousPage}
                                disabled={currentPage === 0}
                                className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-35 dark:border-white/10 dark:text-white/65 dark:hover:border-violet-300/35 dark:hover:bg-violet-400/10 dark:hover:text-violet-200"
                                aria-label="Previous projects"
                            >
                                <ArrowLeftIcon className="size-4" />
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: pageCount }).map(
                                    (_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() =>
                                                setCurrentPage(index)
                                            }
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                currentPage === index
                                                    ? "w-7 bg-violet-600 dark:bg-violet-300"
                                                    : "w-2 bg-zinc-300 hover:bg-violet-300 dark:bg-white/20 dark:hover:bg-violet-300/60"
                                            }`}
                                            aria-label={`Go to page ${
                                                index + 1
                                            }`}
                                        />
                                    ),
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={goToNextPage}
                                disabled={currentPage === pageCount - 1}
                                className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-35 dark:border-white/10 dark:text-white/65 dark:hover:border-violet-300/35 dark:hover:bg-violet-400/10 dark:hover:text-violet-200"
                                aria-label="Next projects"
                            >
                                <ArrowRightIcon className="size-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}