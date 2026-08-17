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
            className="group block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F7E8]0 focus-visible:ring-offset-4 dark:focus-visible:ring-[#C8DB8A] dark:focus-visible:ring-offset-zinc-950"
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
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F5F7E8] px-3 py-1 text-xs font-medium text-[#385702] dark:bg-[#86A52A]/10 dark:text-[#C8DB8A]">
                            <SparklesIcon className="size-3" />
                            {project.category}
                        </div>

                        <h3 className="max-w-lg text-2xl font-bold leading-[1.05] tracking-[-0.045em] text-zinc-950 sm:text-3xl dark:text-[#EFEDE6]">
                            {project.title}
                        </h3>
                    </div>

                    {/* Frosted-glass project description */}
                    <div
                        className={`relative mt-5 overflow-hidden rounded-[1.35rem] border border-white/65 bg-[#EFEDE6]/[0.42] p-5 shadow-[0_20px_50px_rgba(65,82,20,0.14)] backdrop-blur-2xl backdrop-saturate-150 transition duration-300 group-hover:border-[#C8DB8A]/65 group-hover:bg-[#EFEDE6]/[0.5] group-hover:shadow-[0_24px_55px_rgba(70,92,20,0.20)] dark:border-white/14 dark:bg-[rgba(15,20,10,0.72)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.34)] dark:group-hover:border-[#C8DB8A]/35 dark:group-hover:bg-[rgba(20,28,12,0.78)] ${
                            isReversed
                                ? "md:-ml-14 lg:-ml-20"
                                : "md:-mr-14 lg:-mr-20"
                        }`}
                    >
                        {/* Glass reflection */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#EFEDE6]/85 dark:bg-[#EFEDE6]/25"
                        />

                        {/* Glass sheen */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.18] via-transparent to-[#EAF0CF]/[0.04] dark:from-white/[0.05] dark:to-[#86A52A]/[0.06]"
                        />

                        <div className="relative z-10">
                            <p className="text-sm leading-6 text-zinc-700 dark:text-[#EFEDE6]/75">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/55 bg-[#EFEDE6]/[0.32] px-2.5 py-1 text-[10px] font-semibold text-zinc-700 transition-colors group-hover:border-[#C8DB8A]/60 group-hover:bg-[#F5F7E8]/55 group-hover:text-[#385702] dark:border-white/12 dark:bg-[#EFEDE6]/[0.055] dark:text-[#EFEDE6]/70 dark:group-hover:border-[#C8DB8A]/25 dark:group-hover:bg-[#86A52A]/10 dark:group-hover:text-[#DDE7B7]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Main project action */}
                            <div className="mt-6 flex items-center justify-between border-t border-zinc-900/[0.08] pt-4 dark:border-white/10">
                                <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#385702] dark:text-[#DDE7B7]">
                                    View case study
                                </span>

                                <span className="grid size-9 place-items-center rounded-full border border-[#C8DB8A]/70 bg-[#EAF0CF] text-[#EFEDE6] shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#466D02] dark:border-[#DDE7B7]/30 dark:bg-[#C8DB8A] dark:text-[#1B2116]">
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
                    {/* Olive depth behind preview */}
                    <div
                        aria-hidden="true"
                        className={`absolute -inset-4 rounded-[1.8rem] bg-gradient-to-br from-[#EAF0CF]/25 via-[#558203]/12 to-transparent blur-2xl transition duration-500 group-hover:from-[#EAF0CF]/35 group-hover:via-[#558203]/20 dark:from-[#EAF0CF]/30 dark:via-[#558203]/18 ${
                            isReversed
                                ? "translate-x-3 translate-y-3"
                                : "-translate-x-3 translate-y-3"
                        }`}
                    />

                    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-[0_18px_35px_rgba(65,82,20,0.14)] transition duration-500 group-hover:-translate-y-1 group-hover:border-[#DDE7B7] group-hover:shadow-[0_26px_50px_rgba(70,92,20,0.20)] dark:border-white/10 dark:bg-[#EFEDE6]/[0.04] dark:shadow-[0_18px_35px_rgba(0,0,0,0.32)] dark:group-hover:border-[#C8DB8A]/30">
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
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#39452A] bg-[#26301A] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#DDE7B7] shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-[#EFEDE6]/[0.045] dark:text-[#DDE7B7]">
                            <SparklesIcon className="size-3.5 text-[#DDE7B7]" />
                            Featured Work
                        </div>

                        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-[#EFEDE6]">
                            Selected{" "}
                            <span className="accent-heading">
                                Works.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-[0.96rem] leading-7 text-zinc-600 sm:text-right dark:text-[#EFEDE6]/70">
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
                        <p className="text-sm text-zinc-500 dark:text-[#EFEDE6]/50">
                            Showing{" "}
                            <span className="font-semibold text-zinc-800 dark:text-[#EFEDE6]/85">
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
                                className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-[#C8DB8A] hover:bg-[#F5F7E8] hover:text-[#385702] disabled:cursor-not-allowed disabled:opacity-35 dark:border-white/10 dark:text-[#EFEDE6]/65 dark:hover:border-[#C8DB8A]/35 dark:hover:bg-[#86A52A]/10 dark:hover:text-[#DDE7B7]"
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
                                                    ? "w-7 bg-[#466D02] dark:bg-[#C8DB8A]"
                                                    : "w-2 bg-zinc-300 hover:bg-[#C8DB8A] dark:bg-[#EFEDE6]/20 dark:hover:bg-[#C8DB8A]/60"
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
                                className="grid size-10 place-items-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-[#C8DB8A] hover:bg-[#F5F7E8] hover:text-[#385702] disabled:cursor-not-allowed disabled:opacity-35 dark:border-white/10 dark:text-[#EFEDE6]/65 dark:hover:border-[#C8DB8A]/35 dark:hover:bg-[#86A52A]/10 dark:hover:text-[#DDE7B7]"
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