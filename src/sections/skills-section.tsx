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
import Reveal from "../components/reveal";

type Skill = {
    name: string;
    icon: ReactNode;
    iconClass: string;
    iconSurface: string;
};

export default function SkillsSection() {
    const skills: Skill[] = [
        {
            name: "UI/UX Design",
            icon: <LayoutDashboardIcon className="size-4" />,
            iconClass: "text-[#DDE7B7]",
            iconSurface: "bg-[#86A52A]/15",
        },
        {
            name: "Figma",
            icon: <FigmaIcon className="size-4" />,
            iconClass: "text-[#F24E1E]",
            iconSurface: "bg-[#F24E1E]/15",
        },
        {
            name: "Wireframing",
            icon: <PenToolIcon className="size-4" />,
            iconClass: "text-[#FFF8B9]",
            iconSurface: "bg-[#558203]/18",
        },
        {
            name: "Prototyping",
            icon: <MousePointerClickIcon className="size-4" />,
            iconClass: "text-[#DDE7B7]",
            iconSurface: "bg-[#86A52A]/15",
        },
        {
            name: "HTML",
            icon: <FileCode2Icon className="size-4" />,
            iconClass: "text-[#FF745D]",
            iconSurface: "bg-[#E34F26]/15",
        },
        {
            name: "CSS",
            icon: <PaletteIcon className="size-4" />,
            iconClass: "text-[#FFF8B9]",
            iconSurface: "bg-[#558203]/18",
        },
        {
            name: "JavaScript",
            icon: <BracesIcon className="size-4" />,
            iconClass: "text-[#F7DF1E]",
            iconSurface: "bg-[#F7DF1E]/15",
        },
        {
            name: "PHP",
            icon: <Code2Icon className="size-4" />,
            iconClass: "text-[#A9ACD8]",
            iconSurface: "bg-[#777BB4]/15",
        },
        {
            name: "Bootstrap",
            icon: <BoxesIcon className="size-4" />,
            iconClass: "text-[#B794E9]",
            iconSurface: "bg-[#7952B3]/15",
        },
        {
            name: "Canva",
            icon: <LayersIcon className="size-4" />,
            iconClass: "text-[#37D8DF]",
            iconSurface: "bg-[#00C4CC]/15",
        },
        {
            name: "GitHub",
            icon: <GithubIcon className="size-4" />,
            iconClass: "text-zinc-100",
            iconSurface: "bg-[#EFEDE6]/10",
        },
        {
            name: "Laravel",
            icon: <ServerIcon className="size-4" />,
            iconClass: "text-[#FF6B61]",
            iconSurface: "bg-[#FF2D20]/15",
        },
        {
            name: "React",
            icon: <AtomIcon className="size-4" />,
            iconClass: "text-[#61DAFB]",
            iconSurface: "bg-[#61DAFB]/15",
        },
        {
            name: "Python",
            icon: <Code2Icon className="size-4" />,
            iconClass: "text-[#FFF8B9]",
            iconSurface: "bg-[#558203]/18",
        },
        {
            name: "Tailwind",
            icon: <WindIcon className="size-4" />,
            iconClass: "text-[#DDE7B7]",
            iconSurface: "bg-[#558203]/18",
        },
        {
            name: "MySQL",
            icon: <DatabaseIcon className="size-4" />,
            iconClass: "text-[#DDE7B7]",
            iconSurface: "bg-[#558203]/18",
        },
        {
            name: "Postgres",
            icon: <Table2Icon className="size-4" />,
            iconClass: "text-[#DDE7B7]",
            iconSurface: "bg-[#558203]/18",
        },
    ];

    return (
        <section
            id="skills"
            className="relative isolate scroll-m-28 overflow-hidden bg-[#10130D] py-24 text-[#EFEDE6] sm:py-32"
        >
            <div aria-hidden="true" className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[#10130D]" />

                <div className="absolute -left-44 -top-44 size-[38rem] rounded-full bg-[#558203]/45 blur-[130px]" />

                <div className="absolute left-1/2 top-[12%] size-[44rem] -translate-x-1/2 rounded-full bg-[#86A52A]/28 blur-[150px]" />

                <div className="absolute -right-44 top-[18%] size-[36rem] rounded-full bg-[#FFF8B9]/14 blur-[145px]" />

                <div className="absolute bottom-[-20rem] left-[18%] size-[48rem] rounded-full bg-[#070A06]/85 blur-[170px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(3,5,2,0.12)_50%,rgba(0,0,0,0.96)_100%)]" />
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[#FFF8B9]/[0.018] backdrop-blur-[2px]"
            />

            <div className="section-shell relative z-10">
                <Reveal className="mb-14 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#EFEDE6]/[0.045] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#EFEDE6]/85 backdrop-blur-md">
                            <Code2Icon className="size-3.5 text-[#DDE7B7]" />
                            Skills
                        </div>

                        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-[#EFEDE6] sm:text-5xl lg:text-6xl">
                            Tools I use to create{" "}
                            <span className="bg-gradient-to-r from-[#DDE7B7] via-[#FFF8B9] to-[#C8DB8A] bg-clip-text text-transparent">
                                better digital experiences.
                            </span>
                        </h2>
                    </div>

                    <p className="max-w-md text-[0.96rem] leading-7 text-[#EFEDE6]/70 sm:text-right">
                        A focused toolkit for designing clean interfaces,
                        building responsive websites, and translating ideas into
                        polished, practical digital products.
                    </p>
                </Reveal>

                <Reveal delay={100}>
                    <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 sm:gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="group inline-flex min-w-[10.5rem] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-black/15 px-5 py-3 text-sm font-semibold text-[#EFEDE6] shadow-[0_10px_28px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#C8DB8A]/55 hover:bg-[#EFEDE6]/[0.08] hover:shadow-[0_18px_34px_rgba(0,0,0,0.35)]"
                            >
                                <span
                                    className={`grid size-8 place-items-center rounded-full ${skill.iconSurface} ${skill.iconClass} transition-transform duration-300 group-hover:scale-110`}
                                >
                                    {skill.icon}
                                </span>

                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}