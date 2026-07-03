import { ArrowUpRightIcon, MailIcon, SendIcon } from "lucide-react";
import Reveal from "../components/reveal";

type SocialLink = {
    name: string;
    handle: string;
    href: string;
    icon: "email" | "github" | "linkedin" | "facebook" | "instagram";
};

const socialLinks: SocialLink[] = [
    {
        name: "Email",
        handle: "gln.decilos@gmail.com",
        href: "mailto:gln.decilos@gmail.com",
        icon: "email",
    },
    {
        name: "GitHub",
        handle: "gln-decilos",
        href: "https://github.com/gln-decilos",
        icon: "github",
    },
    {
        name: "LinkedIn",
        handle: "Glenmor Decilos",
        href: "https://www.linkedin.com/in/glenmor-decilos-b2977b404/",
        icon: "linkedin",
    },
    {
        name: "Facebook",
        handle: "Glenmor Decilos",
        href: "https://www.facebook.com/glenzimore",
        icon: "facebook",
    },
    {
        name: "Instagram",
        handle: "glenmor.decilos",
        href: "https://www.instagram.com/glennzimore/",
        icon: "instagram",
    },
];

function PlatformIcon({
    type,
    className = "",
}: {
    type: SocialLink["icon"];
    className?: string;
}) {
    if (type === "email") {
        return <MailIcon className={className} />;
    }

    if (type === "github") {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={className}
                fill="currentColor"
            >
                <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.14c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.48.12-3.08 0 0 .98-.31 3.2 1.19a11.08 11.08 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.6.24 2.78.12 3.08.75.82 1.2 1.85 1.2 3.12 0 4.46-2.72 5.45-5.3 5.73.42.36.79 1.07.79 2.16v3.16c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
        );
    }

    if (type === "linkedin") {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={className}
                fill="currentColor"
            >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
        );
    }

    if (type === "facebook") {
        return (
            <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={className}
                fill="currentColor"
            >
                <path d="M24 12.07C24 5.43 18.63.06 12 .06S0 5.43 0 12.07c0 6 4.39 10.97 10.13 11.87v-8.4H7.08v-3.47h3.05V9.42c0-3.02 1.79-4.69 4.54-4.69 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.88v2.25h3.35l-.54 3.47h-2.81v8.4A12.01 12.01 0 0 0 24 12.07Z" />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="currentColor"
        >
            <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.72 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.35a4.65 4.65 0 1 1 0 9.3 4.65 4.65 0 0 1 0-9.3Zm0 2a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3Z" />
        </svg>
    );
}

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative isolate scroll-m-28 overflow-hidden bg-[#08050d] py-24 text-white sm:py-32"
        >
            <div aria-hidden="true" className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[#08050d]" />

                <div className="absolute -left-44 -top-44 size-[38rem] rounded-full bg-[#4c1d63]/60 blur-[130px]" />

                <div className="absolute left-[30%] top-[8%] size-[42rem] rounded-full bg-[#673a83]/40 blur-[150px]" />

                <div className="absolute -right-44 top-[12%] size-[38rem] rounded-full bg-[#7a235d]/40 blur-[145px]" />

                <div className="absolute bottom-[-20rem] left-[12%] size-[50rem] rounded-full bg-[#241136]/75 blur-[175px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(5,2,9,0.18)_50%,rgba(0,0,0,0.92)_100%)]" />
            </div>

            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-white/[0.015] backdrop-blur-[2px]"
            />

            <div className="section-shell relative z-10">
                <Reveal>
                    <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-16">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.045] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md">
                                <SendIcon className="size-3.5 text-violet-200" />
                                Contact
                            </div>

                            <h2 className="mt-6 max-w-xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl">
                                Let&apos;s build something{" "}
                                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-200 bg-clip-text text-transparent">
                                    meaningful together.
                                </span>
                            </h2>

                            <p className="mt-6 max-w-md text-[0.96rem] leading-7 text-white/70 sm:text-lg">
                                For collaborations, freelance work, or project
                                ideas, these are the places I actually check.
                            </p>

                            <a
                                href="mailto:gln.decilos@gmail.com"
                                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200 transition hover:gap-3 hover:text-violet-100"
                            >
                                Send an email
                                <ArrowUpRightIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        </div>

                        <div className="border-y border-white/15">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target={
                                        social.href.startsWith("mailto:")
                                            ? undefined
                                            : "_blank"
                                    }
                                    rel={
                                        social.href.startsWith("mailto:")
                                            ? undefined
                                            : "noreferrer"
                                    }
                                    className="group flex items-center justify-between gap-4 border-b border-white/15 py-5 transition sm:py-6"
                                >
                                    <span className="flex min-w-0 items-center gap-3.5">
                                        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.055] text-violet-200 transition duration-300 group-hover:scale-110 group-hover:border-violet-200/45 group-hover:bg-violet-300 group-hover:text-[#160a24]">
                                            <PlatformIcon
                                                type={social.icon}
                                                className="size-[1.1rem]"
                                            />
                                        </span>

                                        <span className="min-w-0">
                                            <span className="block text-base font-bold tracking-[-0.025em] text-white">
                                                {social.name}
                                            </span>

                                            <span className="mt-0.5 block truncate text-sm text-white/52">
                                                {social.handle}
                                            </span>
                                        </span>
                                    </span>

                                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/45 transition duration-300 group-hover:translate-x-1 group-hover:border-violet-200/35 group-hover:bg-violet-300 group-hover:text-[#160a24]">
                                        <ArrowUpRightIcon className="size-4" />
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}