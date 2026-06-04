import { useMemo, useState } from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    SparklesIcon,
} from "lucide-react";

type Project = {
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
};

const projects: Project[] = [
    {
        title: "ReadBee: Teacher-Assisted Reading Assessment Tool w/ Voiced-Based Reading Rate Monitoring and Comprehension Analysis",
        category: "Academic Project",
        description: "Voice-based reading assessment with real-time rate monitoring and comprehension analysis. Helps educators track student progress with detailed analytics.",
        tags: ["PHP", "React", "Tailwind", "Laravel", "Supabase"],
        image: "/projects/readbee.png",
    },
    {
        title: "LiveliHub: A Web-Based Facility Management and Activity Portfolio System for the Taal Building – Livelihood Training Center",
        category: "Academic Project",
        description: "Centralized platform for event scheduling and facility management at Taal Building – Livelihood Training Center.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
        image: "/projects/livelihub.png",
    },
    {
        title: "WRESS: Web-Based Requirements Engineering Support System",
        category: "Academic Project",
        description: "Centralized platform for requirements engineering activities across multiple organizations and projects.",
        tags: ["React", "Tailwind", "Python", "PostgreSQL"],
        image: "/projects/wress.png",
    },
    {
        title: "MoneyPulse: Online Banking System",
        category: "Personal Project",
        description: "Comprehensive banking system with real-time transaction processing, financial analytics, and secure authentication.",
        tags: ["HTML", "CSS", "PHP", "Laravel", "JavaScript", "MySQL"],
        image: "/projects/moneypulse.png",
    },
    {
        title: "PawCheck: Pet Health Management",
        category: "Personal Project",
        description: "Pet health management system with QR code integration for tracking records, appointments, and pet information.",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "CodeIgniter", "MySQL"],
        image: "/projects/pawcheck.png",
    },
    {
        title: "Divertex Call Center Information and Management System",
        category: "Academic Project",
        description: "Web-based system for managing call center operations, agent performance monitoring, and customer interaction tracking.",
        tags: ["Laravel", "PHP", "MySQL"],
        image: "/projects/divertex.png",
    },
];

const projectsPerPage = 3;

function ProjectItem({ project }: { project: Project }) {
    return (
        <article className="group h-full overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-300 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700">
            <div className="grid h-full md:grid-cols-[180px_1fr]">
                <div className="relative h-40 w-full overflow-hidden bg-zinc-100 md:h-[180px] dark:bg-zinc-800">
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                </div>

                <div className="flex min-h-[180px] flex-col gap-3 p-5">
                    <h3 className="line-clamp-2 text-base font-bold leading-tight text-zinc-900 md:text-[1.05rem] dark:text-zinc-50">
                        {project.title}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
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
        <section id="projects" className="scroll-m-28 px-4 py-20 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950">
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
                        <ProjectItem key={project.title} project={project} />
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
                                    />
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={goToNextPage}
                                disabled={currentPage === pageCount - 1}
                                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:bg-zinc-100 disabled:opacity-40 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                aria-label="Next"
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
