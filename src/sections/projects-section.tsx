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

function ProjectItem({ project }: { project: Project }) {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className="group block h-full overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/70 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-black/20 dark:hover:border-violet-400/30 dark:hover:shadow-violet-950/20"
            title="View project details"
        >
            <article className="grid h-full md:grid-cols-[180px_1fr]">
                <div className="relative h-40 w-full overflow-hidden bg-zinc-100 md:h-[180px] dark:bg-zinc-800">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-xs font-semibold">View project details</span>
                        <ArrowUpRightIcon className="size-4" />
                    </div>
                    <div className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/85 px-3 py-1 text-[10px] font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-200">
                        {project.category}
                    </div>
                </div>

                <div className="flex min-h-[180px] flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="line-clamp-2 text-base font-bold leading-tight tracking-[-0.025em] text-zinc-900 md:text-[1.05rem] dark:text-zinc-50">
                            {project.title}
                        </h3>
                        <span
                            className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-700 dark:border-zinc-700 dark:text-zinc-400 dark:group-hover:border-violet-400/30 dark:group-hover:bg-violet-400/10 dark:group-hover:text-violet-300"
                            title="Click to view project details"
                        >
                            <ArrowUpRightIcon className="size-4" />
                        </span>
                    </div>
                    <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-700 transition-colors group-hover:bg-violet-50 group-hover:text-violet-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-violet-400/10 dark:group-hover:text-violet-300"
                                title={`Technology: ${tag}`}
                            >
                                {tag}
                            </span>
                        ))}
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
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-400 bg-clip-text text-transparent dark:from-violet-300 dark:via-fuchsia-300 dark:to-purple-200">
                Works.
            </span>
        </h2>
    </div>

    <p className="max-w-md text-[0.96rem] leading-7 text-zinc-600 sm:text-right dark:text-white/70">
        A collection of work where design and development meet to create
        meaningful digital experiences.
    </p>
</Reveal>

                <div className="space-y-5">
                    {visibleProjects.map((project, index) => (
                        <Reveal key={project.slug} delay={index * 70}>
                            <ProjectItem project={project} />
                        </Reveal>
                    ))}
                </div>

                {pageCount > 1 && (
                    <div className="mt-10 flex items-center justify-between border-t border-zinc-100 pt-8 dark:border-zinc-800">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Showing{" "}
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">
                                {currentPage * projectsPerPage + 1}–{Math.min((currentPage + 1) * projectsPerPage, projects.length)}
                            </span>{" "}
                            of {projects.length}
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                onClick={goToPreviousPage}
                                disabled={currentPage === 0}
                                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                aria-label="Previous"
                                title="Previous page"
                            >
                                <ArrowLeftIcon className="size-4" />
                            </button>

                            <div className="flex items-center gap-2">
                                {Array.from({ length: pageCount }).map((_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => setCurrentPage(index)}
                                        className={`h-2 rounded-full transition-all ${
                                            currentPage === index
                                                ? "w-6 bg-violet-600 dark:bg-violet-400"
                                                : "w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700"
                                        }`}
                                        aria-label={`Page ${index + 1}`}
                                        title={`Go to page ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={goToNextPage}
                                disabled={currentPage === pageCount - 1}
                                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                aria-label="Next"
                                title="Next page"
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
