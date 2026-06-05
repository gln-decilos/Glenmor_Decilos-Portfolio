import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeftIcon,
    ArrowUpRightIcon,
    CalendarDaysIcon,
    CheckCircle2Icon,
    FolderKanbanIcon,
    SparklesIcon,
    UserRoundIcon,
    ClockIcon,
    LightbulbIcon,
    RocketIcon,
    GithubIcon,
    ExternalLinkIcon,
    PaletteIcon,
    MonitorSmartphoneIcon,
    LayoutListIcon,
    XIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
            </h2>
            <div className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                {children}
            </div>
        </section>
    );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
                    <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">{value}</p>
                </div>
                <div className="rounded-lg bg-zinc-100 p-2 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {icon}
                </div>
            </div>
        </div>
    );
}

function TechBadge({ tech }: { tech: string }) {
    return (
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
            {tech}
        </span>
    );
}

function ImageModal({
    images,
    currentIndex,
    onClose,
    onNext,
    onPrev,
}: {
    images: { src: string; alt: string }[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div
            className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 md:right-6 md:top-6"
            >
                <XIcon className="size-5" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                }}
                className="absolute left-4 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 disabled:opacity-30 md:left-6"
                disabled={currentIndex === 0}
            >
                <ChevronLeftIcon className="size-6" />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                }}
                className="absolute right-4 z-10 cursor-pointer rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20 disabled:opacity-30 md:right-6"
                disabled={currentIndex === images.length - 1}
            >
                <ChevronRightIcon className="size-6" />
            </button>

            <div
                className="max-h-[90vh] max-w-[90vw] cursor-default overflow-hidden rounded-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-h-[85vh] max-w-[85vw] object-contain"
                />
                <p className="mt-3 text-center text-sm text-white/80">
                    {images[currentIndex].alt}
                </p>
                <p className="mt-1 text-center text-xs text-white/50">
                    {currentIndex + 1} of {images.length}
                </p>
            </div>
        </div>
    );
}

export default function ProjectDetailPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = getProjectBySlug(slug);
    const [activeSection, setActiveSection] = useState("overview");
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentImageSet, setCurrentImageSet] = useState<{ src: string; alt: string }[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("overview");
    }, [slug]);

    const openModal = (images: { src: string; alt: string }[], index: number) => {
        setCurrentImageSet(images);
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImageSet([]);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (currentImageIndex < currentImageSet.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    if (!project) {
        return (
            <main className="min-h-screen bg-white px-4 py-24 dark:bg-zinc-950">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="rounded-full bg-zinc-100 p-3 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 mx-auto w-fit">
                        <FolderKanbanIcon className="size-6" />
                    </div>
                    <h1 className="mt-4 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Project not found</h1>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">The project you're looking for doesn't exist or has been moved.</p>
                    <Link to="/#projects" className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
                        <ArrowLeftIcon className="size-4" />
                        Back to projects
                    </Link>
                </div>
            </main>
        );
    }

    const relatedProjects = projects.filter((item) => item.slug !== project.slug);
    const projectExtras = project as typeof project & {
        photoSectionTitle?: string;
        photoDescription?: string;
    };
    const screenshotImages =
        project.galleryImages?.filter((img) => String(img.type) !== "capstone" && String(img.type) !== "photo") ?? [];
    const projectPhotoImages =
        project.galleryImages?.filter((img) => String(img.type) === "capstone" || String(img.type) === "photo") ?? [];
    const projectPhotoTitle = projectExtras.photoSectionTitle || "Capstone Photos";
    const projectPhotoDescription = projectExtras.photoDescription || project.capstoneDescription;
    const hasProjectLinks = Boolean(project.githubUrl || project.liveUrl || project.figmaUrl);

    // Section navigation items
    const navItems = [
        { id: "overview", label: "Overview", icon: LayoutListIcon },
        { id: "approach", label: "Approach", icon: LightbulbIcon },
        { id: "features", label: "Features", icon: CheckCircle2Icon },
        { id: "outcome", label: "Outcome", icon: RocketIcon },
    ];

    if (screenshotImages.length) {
        navItems.push({ id: "screenshots", label: "Screenshots", icon: MonitorSmartphoneIcon });
    }

    if (projectPhotoImages.length) {
        navItems.push({ id: "project-photos", label: projectPhotoTitle, icon: MonitorSmartphoneIcon });
    }

    return (
        <main className="bg-white transition-colors dark:bg-zinc-950">
            {modalOpen && currentImageSet.length > 0 && (
                <ImageModal
                    images={currentImageSet}
                    currentIndex={currentImageIndex}
                    onClose={closeModal}
                    onNext={nextImage}
                    onPrev={prevImage}
                />
            )}

            {/* Hero Section */}
            <div className="border-b border-zinc-200 bg-gradient-to-b from-zinc-50 to-white dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-950">
                <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16 lg:py-20">
                    {/* Back Button */}
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="group mb-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                    >
                        <ArrowLeftIcon className="size-4 transition-transform group-hover:-translate-x-1" />
                        Back to projects
                    </button>

                    {/* Category */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                        <FolderKanbanIcon className="size-3" />
                        {project.category}
                    </div>

                    {/* Title and Image Side by Side */}
                    <div className="flex items-start gap-5">
                        <div className="shrink-0 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className="h-16 w-16 object-cover md:h-20 md:w-20"
                            />
                        </div>
                        <h1 className="flex-1 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl md:text-3xl lg:text-4xl dark:text-zinc-100">
                            {project.title}
                        </h1>
                    </div>

                    {/* Summary */}
                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.summary}
                    </p>

                    {/* Stats Grid */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        <StatCard label="Role" value={project.role} icon={<UserRoundIcon className="size-4" />} />
                        <StatCard label="Timeline" value={project.year} icon={<CalendarDaysIcon className="size-4" />} />
                        <StatCard label="Status" value={project.status} icon={<ClockIcon className="size-4" />} />
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <TechBadge key={tag} tech={tag} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
                <div className="mx-auto max-w-5xl overflow-x-auto px-4 md:px-8">
                    <div className="flex gap-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveSection(item.id);
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className={`flex cursor-pointer items-center gap-1.5 px-3 py-3 text-sm font-medium transition-all whitespace-nowrap md:px-4 ${
                                    activeSection === item.id
                                        ? "border-b-2 border-green-500 text-green-700 dark:border-cyan-400 dark:text-cyan-300"
                                        : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                                }`}
                            >
                                <item.icon className="size-3.5" />
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-5xl px-4 py-12 md:px-8 md:py-16">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Left: Main Content */}
                    <div className="space-y-10 lg:col-span-2">
                        {/* Overview */}
                        <section id="overview" className="scroll-m-20">
                            <SectionBlock title="Overview">
                                <div className="space-y-4">
                                    {project.overview.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </SectionBlock>
                        </section>

                        {/* Approach */}
                        <section id="approach" className="scroll-m-20">
                            <SectionBlock title="Approach">
                                <div className="space-y-4">
                                    {project.approach.map((item, idx) => (
                                        <div key={idx} className="flex gap-4">
                                            <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-semibold text-green-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                                                {idx + 1}
                                            </div>
                                            <p className="flex-1 text-zinc-700 dark:text-zinc-300">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </SectionBlock>
                        </section>

                        {/* Features */}
                        <section id="features" className="scroll-m-20">
                            <SectionBlock title="Key Features">
                                <div className="grid gap-2.5 sm:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-2.5 rounded-lg border border-zinc-200 p-3 dark:border-zinc-800">
                                            <CheckCircle2Icon className="mt-0.5 size-4 shrink-0 text-green-600 dark:text-cyan-400" />
                                            <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </SectionBlock>
                        </section>

                        {/* Outcome */}
                        <section id="outcome" className="scroll-m-20">
                            <SectionBlock title="Outcome">
                                <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-5 dark:from-cyan-500/5 dark:to-teal-500/5">
                                    <div className="flex gap-3">
                                        <RocketIcon className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-cyan-400" />
                                        <p className="text-zinc-700 dark:text-zinc-300">{project.outcome}</p>
                                    </div>
                                </div>
                            </SectionBlock>
                        </section>

                        {/* Screenshots Section */}
                        {screenshotImages.length > 0 && (
                            <section id="screenshots" className="scroll-m-20">
                                <SectionBlock title="Screenshots">
                                    <div className="space-y-4">
                                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                            {project.screenshotDescription ||
                                                "Here are some screenshots of the website project interface."}
                                        </p>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {screenshotImages.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => openModal(screenshotImages, idx)}
                                                    className="group cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                                                >
                                                    <div className="aspect-video bg-zinc-100 dark:bg-zinc-800">
                                                        <img
                                                            src={img.src}
                                                            alt={img.alt}
                                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <p className="border-t border-zinc-200 px-3 py-2 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                                                        {img.alt}
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </SectionBlock>
                            </section>
                        )}

                        {/* Project Photos Section */}
                        {projectPhotoImages.length > 0 && (
                            <section id="project-photos" className="scroll-m-20">
                                <SectionBlock title={projectPhotoTitle}>
                                    <div className="space-y-4">
                                        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                            {projectPhotoDescription ||
                                                "Some photos captured during the project presentation, demonstration, and related activities."}
                                        </p>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            {projectPhotoImages.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => openModal(screenshotImages, idx)}
                                                    className="group cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                                                >
                                                    <div className="aspect-video bg-zinc-100 dark:bg-zinc-800">
                                                        <img
                                                            src={img.src}
                                                            alt={img.alt}
                                                            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                        />
                                                    </div>
                                                    <p className="border-t border-zinc-200 px-3 py-2 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                                                        {img.alt}
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </SectionBlock>
                            </section>
                        )}
                    </div>

                    {/* Right: Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-5">
                            {/* Project Info */}
                            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    Project Info
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <p className="text-xs text-zinc-400 dark:text-zinc-500">Client / Context</p>
                                        <p className="mt-0.5 font-medium text-zinc-800 dark:text-zinc-200">
                                            {project.clientContext || "Department of Education (DepEd) - 1st District of Nasugbu, Batangas"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 dark:text-zinc-500">Type</p>
                                        <p className="mt-0.5 font-medium text-zinc-800 dark:text-zinc-200">
                                            {project.projectType || "Capstone Project · Tech Transfer"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 dark:text-zinc-500">My Role</p>
                                        <p className="mt-0.5 font-medium text-zinc-800 dark:text-zinc-200">{project.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Links */}
                            {hasProjectLinks && (
                                <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                        Links
                                    </h3>
                                    <div className="space-y-2">
                                        {project.githubUrl && (
                                            <a 
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <GithubIcon className="size-4" />
                                                    Source Code
                                                </span>
                                                <ExternalLinkIcon className="size-3.5 opacity-0 transition group-hover:opacity-100" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a 
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <ExternalLinkIcon className="size-4" />
                                                    Live Demo
                                                </span>
                                                <ExternalLinkIcon className="size-3.5 opacity-0 transition group-hover:opacity-100" />
                                            </a>
                                        )}
                                        {project.figmaUrl && (
                                            <a 
                                                href={project.figmaUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex w-full cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-sm text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                                            >
                                                <span className="flex items-center gap-2">
                                                    <PaletteIcon className="size-4" />
                                                    Figma Design
                                                </span>
                                                <ExternalLinkIcon className="size-3.5 opacity-0 transition group-hover:opacity-100" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Tech Stack Summary */}
                            <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Projects Section */}
            {relatedProjects.length > 0 && (
                <div className="border-t border-zinc-200 bg-zinc-50/50 py-12 dark:border-zinc-800 dark:bg-zinc-900/30">
                    <div className="mx-auto max-w-5xl px-4 md:px-8">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <SparklesIcon className="size-4 text-green-600 dark:text-cyan-400" />
                                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">More Projects</h2>
                            </div>
                            <Link
                                to="/#projects"
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="cursor-pointer text-sm font-medium text-green-600 transition hover:text-green-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                            >
                                View all →
                            </Link>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {relatedProjects.map((item) => (
                                <Link
                                    key={item.slug}
                                    to={`/projects/${item.slug}`}
                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                    className="group cursor-pointer rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                                >
                                    <p className="text-xs font-medium text-green-600 dark:text-cyan-400">{item.category}</p>
                                    <h3 className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.shortTitle}</h3>
                                    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">{item.summary}</p>
                                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-600 transition group-hover:gap-1.5 dark:text-cyan-400">
                                        Read more
                                        <ArrowUpRightIcon className="size-3" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
