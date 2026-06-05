type LogoDesign = {
    image: string;
    alt: string;
};

const logoDesigns: LogoDesign[] = [
    { image: "/logo-designs/readbee-logo.png", alt: "ReadBee logo design" },
    { image: "/logo-designs/moneypulse-logo.png", alt: "MoneyPulse logo design" },
    { image: "/logo-designs/pawcheck-logo.png", alt: "PawCheck logo design" },
    { image: "/logo-designs/livelihub-logo.png", alt: "LiveliHub logo design" },
    { image: "/logo-designs/eforesy-logo.png", alt: "Eforesy logo design" },
];

function LogoGroup({ isDuplicate = false }: { isDuplicate?: boolean }) {
    return (
        <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={isDuplicate}>
            {logoDesigns.map((logo) => (
                <img
                    key={`${logo.image}-${isDuplicate ? "duplicate" : "original"}`}
                    src={logo.image}
                    alt={isDuplicate ? "" : logo.alt}
                    className="h-14 w-28 shrink-0 object-contain transition duration-300 hover:scale-[1.03] md:h-16 md:w-32"
                    loading="lazy"
                />
            ))}
        </div>
    );
}

export default function LogoDesignSection() {
    return (
        <section id="logo-designs" className="px-4 pb-9 pt-9 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl">
                <div className="mb-5 text-center">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                        Visual Marks
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-400">
                        Logo concepts and identity pieces I’ve created while exploring brand personality, style, and visual direction.                    </p>
                </div>

                <div className="relative mx-auto w-full overflow-hidden">
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent dark:from-zinc-950" />
                    <div className="marquee-inner flex w-max transform-gpu py-3 will-change-transform">
                        <LogoGroup />
                        <LogoGroup isDuplicate />
                    </div>
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent dark:from-zinc-950" />
                </div>
            </div>
        </section>
    );
}
