import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    ArrowUpRightIcon,
    SparklesIcon,
} from "lucide-react";
import { projects, type Project } from "../data/projects";

const projectsPerPage = 3;

function ProjectItem({ project }: { project: Project }) {
    return (
        <Link
            to={`/projects/${project.slug}`}
            className="group block h-full overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md hover:shadow-green-100/60 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-950/20"
            title={`View project details`}
        >
            <article className="grid h-full md:grid-cols-[180px_1fr]">
                <div className="relative h-40 w-full overflow-hidden bg-zinc-100 md:h-[180px] dark:bg-zinc-800">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/85 px-3 py-1 text-[10px] font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-700 dark:bg-zinc-950/70 dark:text-zinc-200">
                        {project.category}
                    </div>
                </div>

                <div className="flex min-h-[180px] flex-col gap-3 p-5">
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="line-clamp-2 text-base font-bold leading-tight text-zinc-900 md:text-[1.05rem] dark:text-zinc-50">
                            {project.title}
                        </h3>
                        <span 
                            className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:border-green-200 group-hover:bg-green-50 group-hover:text-green-700 dark:border-zinc-700 dark:text-zinc-400 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/10 dark:group-hover:text-cyan-300"
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
                                className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-700 transition-colors group-hover:bg-green-50 group-hover:text-green-700 dark:bg-zinc-800 dark:text-zinc-300 dark:group-hover:bg-cyan-400/10 dark:group-hover:text-cyan-300"
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
        <section id="projects" className="scroll-m-28 px-4 py-20 pt-10 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-4 py-2 text-sm font-medium text-green-700 backdrop-blur-sm dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-200">
                        <SparklesIcon className="size-4" />
                        Featured Work
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl dark:text-zinc-50">
                            Selected Works
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
                            A collection of work where design and development meet to create meaningful digital experiences.
                        </p>
                    </div>
                </div>

                <div className="space-y-5">
                    {visibleProjects.map((project) => (
                        <ProjectItem key={project.slug} project={project} />
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
                                                ? "w-6 bg-green-500 dark:bg-cyan-400"
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