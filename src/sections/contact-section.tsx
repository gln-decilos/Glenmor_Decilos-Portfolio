type SocialLink = {
    name: string;
    handle: string;
    href: string;
    icon: "email" | "github" | "linkedin" | "facebook" | "instagram";
    accent: string;
};

const socialLinks: SocialLink[] = [
    {
        name: "Email",
        handle: "gln.decilos@gmail.com",
        href: "mailto:gln.decilos@gmail.com",
        icon: "email",
        accent: "text-green-600 dark:text-cyan-300",
    },
    {
        name: "GitHub",
        handle: "gln-decilos",
        href: "https://github.com/gln-decilos",
        icon: "github",
        accent: "text-zinc-700 dark:text-zinc-100",
    },
    {
        name: "LinkedIn",
        handle: "Glenmor Decilos",
        href: "https://www.linkedin.com/in/glenmor-decilos-b2977b404/",
        icon: "linkedin",
        accent: "text-[#0A66C2]",
    },
    {
        name: "Facebook",
        handle: "Glenmor Decilos",
        href: "https://www.facebook.com/glenzimore",
        icon: "facebook",
        accent: "text-[#1877F2]",
    },
    {
        name: "Instagram",
        handle: "glenmor.decilos",
        href: "https://www.instagram.com/glennzimore/",
        icon: "instagram",
        accent: "text-[#E4405F]",
    },
];

function PlatformIcon({ type, className = "" }: { type: SocialLink["icon"]; className?: string }) {
    if (type === "email") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="14" x="3" y="5" rx="2" />
                <path d="m3 7 9 6 9-6" />
            </svg>
        );
    }

    if (type === "github") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
                <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.14c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.57-.29-5.28-1.29-5.28-5.74 0-1.27.45-2.3 1.2-3.12-.12-.3-.52-1.48.12-3.08 0 0 .98-.31 3.2 1.19a11.08 11.08 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.6.24 2.78.12 3.08.75.82 1.2 1.85 1.2 3.12 0 4.46-2.72 5.45-5.3 5.73.42.36.79 1.07.79 2.16v3.16c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
            </svg>
        );
    }

    if (type === "linkedin") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
            </svg>
        );
    }

    if (type === "facebook") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
                <path d="M24 12.07C24 5.43 18.63.06 12 .06S0 5.43 0 12.07c0 6 4.39 10.97 10.13 11.87v-8.4H7.08v-3.47h3.05V9.42c0-3.02 1.79-4.69 4.54-4.69 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.88v2.25h3.35l-.54 3.47h-2.81v8.4A12.01 12.01 0 0 0 24 12.07Z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
            <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.72 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7.35a4.65 4.65 0 1 1 0 9.3 4.65 4.65 0 0 1 0-9.3Zm0 2a2.65 2.65 0 1 0 0 5.3 2.65 2.65 0 0 0 0-5.3Z" />
        </svg>
    );
}

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative isolate w-full scroll-m-24 overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50/70 py-24 text-zinc-900 transition-colors dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 dark:text-zinc-50"
        >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(20,184,166,0.12),transparent_28%)] dark:bg-[radial-gradient(circle_at_16%_18%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_86%_78%,rgba(16,185,129,0.10),transparent_28%)]" />
            <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-60 [background-image:linear-gradient(rgba(22,163,74,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(22,163,74,.08)_1px,transparent_1px)] [background-size:42px_42px] dark:opacity-25 dark:[background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]" />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white/70 to-transparent dark:from-zinc-950/60" />

            <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-16 lg:px-24 xl:px-0">
                <div className="self-center">
                    <p className="text-sm font-medium uppercase tracking-[0.35em] text-green-700/80 dark:text-cyan-300/80">
                        Contact
                    </p>
                    <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-tight md:text-5xl">
                        Let&apos;s work together.
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 md:text-lg dark:text-zinc-400">
                        For collaborations, freelance work, or project ideas, these are the places I actually check.
                    </p>
                </div>

                <div className="border-y border-zinc-900/10 dark:border-white/10">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                            className="group flex items-center justify-between gap-6 border-b border-zinc-900/10 py-5 last:border-b-0 dark:border-white/10"
                        >
                            <span className="flex min-w-0 items-center gap-4">
                                <span className={`shrink-0 ${social.accent}`}>
                                    <PlatformIcon type={social.icon} className="size-7" />
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-lg font-medium text-zinc-900 dark:text-white">{social.name}</span>
                                    <span className="mt-0.5 block truncate text-sm text-zinc-500 dark:text-white/60">{social.handle}</span>
                                </span>
                            </span>
                            <span className="shrink-0 text-sm text-zinc-400 transition duration-200 group-hover:translate-x-1 group-hover:text-green-700 dark:text-white/40 dark:group-hover:text-cyan-200">
                                Visit
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
