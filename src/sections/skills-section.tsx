import {
    AtomIcon,
    BoxesIcon,
    BracesIcon,
    Code2Icon,
    DatabaseIcon,
    FigmaIcon,
    FileCode2Icon,
    GithubIcon,
    LayersIcon,
    LayoutDashboardIcon,
    MousePointerClickIcon,
    PaletteIcon,
    PenToolIcon,
    ServerIcon,
    Table2Icon,
    WindIcon,
} from "lucide-react";
import type { ReactNode } from "react";

type Skill = {
    name: string;
    icon: ReactNode;
    color: string;
};

export default function SkillsSection() {
    const skills: Skill[] = [
        {
            name: "UI/UX Design",
            icon: <LayoutDashboardIcon className="size-4" />,
            color: "text-green-700 bg-green-50 border-green-100 dark:text-cyan-300 dark:bg-cyan-400/10 dark:border-cyan-400/15",
        },
        {
            name: "Figma",
            icon: <FigmaIcon className="size-4" />,
            color: "text-fuchsia-700 bg-fuchsia-50 border-fuchsia-100 dark:text-fuchsia-300 dark:bg-fuchsia-400/10 dark:border-fuchsia-400/15",
        },
        {
            name: "Wireframing",
            icon: <PenToolIcon className="size-4" />,
            color: "text-sky-700 bg-sky-50 border-sky-100 dark:text-sky-300 dark:bg-sky-400/10 dark:border-sky-400/15",
        },
        {
            name: "Prototyping",
            icon: <MousePointerClickIcon className="size-4" />,
            color: "text-violet-700 bg-violet-50 border-violet-100 dark:text-violet-300 dark:bg-violet-400/10 dark:border-violet-400/15",
        },
        {
            name: "HTML",
            icon: <FileCode2Icon className="size-4" />,
            color: "text-orange-700 bg-orange-50 border-orange-100 dark:text-orange-300 dark:bg-orange-400/10 dark:border-orange-400/15",
        },
        {
            name: "CSS",
            icon: <PaletteIcon className="size-4" />,
            color: "text-blue-700 bg-blue-50 border-blue-100 dark:text-blue-300 dark:bg-blue-400/10 dark:border-blue-400/15",
        },
        {
            name: "JavaScript",
            icon: <BracesIcon className="size-4" />,
            color: "text-yellow-700 bg-yellow-50 border-yellow-100 dark:text-yellow-300 dark:bg-yellow-400/10 dark:border-yellow-400/15",
        },
        {
            name: "PHP",
            icon: <Code2Icon className="size-4" />,
            color: "text-indigo-700 bg-indigo-50 border-indigo-100 dark:text-indigo-300 dark:bg-indigo-400/10 dark:border-indigo-400/15",
        },
        {
            name: "Bootstrap",
            icon: <BoxesIcon className="size-4" />,
            color: "text-purple-700 bg-purple-50 border-purple-100 dark:text-purple-300 dark:bg-purple-400/10 dark:border-purple-400/15",
        },
        {
            name: "Canva",
            icon: <LayersIcon className="size-4" />,
            color: "text-cyan-700 bg-cyan-50 border-cyan-100 dark:text-cyan-300 dark:bg-cyan-400/10 dark:border-cyan-400/15",
        },
        {
            name: "GitHub",
            icon: <GithubIcon className="size-4" />,
            color: "text-zinc-800 bg-zinc-50 border-zinc-200 dark:text-zinc-200 dark:bg-zinc-800/70 dark:border-zinc-700",
        },
        {
            name: "Laravel",
            icon: <ServerIcon className="size-4" />,
            color: "text-red-700 bg-red-50 border-red-100 dark:text-red-300 dark:bg-red-400/10 dark:border-red-400/15",
        },
        {
            name: "React",
            icon: <AtomIcon className="size-4" />,
            color: "text-sky-700 bg-sky-50 border-sky-100 dark:text-sky-300 dark:bg-sky-400/10 dark:border-sky-400/15",
        },
        {
            name: "Python",
            icon: <Code2Icon className="size-4" />,
            color: "text-amber-700 bg-amber-50 border-amber-100 dark:text-amber-300 dark:bg-amber-400/10 dark:border-amber-400/15",
        },
        {
            name: "Tailwind",
            icon: <WindIcon className="size-4" />,
            color: "text-teal-700 bg-teal-50 border-teal-100 dark:text-teal-300 dark:bg-teal-400/10 dark:border-teal-400/15",
        },
        {
            name: "MySQL",
            icon: <DatabaseIcon className="size-4" />,
            color: "text-blue-800 bg-blue-50 border-blue-100 dark:text-blue-300 dark:bg-blue-400/10 dark:border-blue-400/15",
        },
        {
            name: "Postgres",
            icon: <Table2Icon className="size-4" />,
            color: "text-slate-700 bg-slate-50 border-slate-200 dark:text-slate-300 dark:bg-slate-400/10 dark:border-slate-400/15",
        },
    ];

    return (
        <section id="skills" className="scroll-m-28 px-4 py-16 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8 flex flex-col items-center gap-3 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm backdrop-blur-sm dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-200">
                        <Code2Icon className="size-4" />
                        Skills
                    </div>
                    <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl dark:text-zinc-50">
                        My design and development toolkit
                    </h2>
                    <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
                        A focused set of tools and technologies I use to design clean interfaces, build responsive websites, and turn ideas into polished digital experiences.
                    </p>
                </div>

                <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-5 shadow-xl shadow-zinc-200/50 backdrop-blur transition-colors dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-black/30 sm:p-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${skill.color}`}
                            >
                                <span className="flex size-8 items-center justify-center rounded-full bg-white/80 shadow-sm transition-colors dark:bg-zinc-950/60">
                                    {skill.icon}
                                </span>
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
