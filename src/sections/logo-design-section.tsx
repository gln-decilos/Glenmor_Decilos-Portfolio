type LogoDesign = {
    image: string;
    alt: string;
};

const logoDesigns: LogoDesign[] = [
    { image: "/logo-designs/koda-logo.png", alt: "Koda logo design" },
    { image: "/logo-designs/readbee-logo.png", alt: "ReadBee logo design" },
    { image: "/logo-designs/moneypulse-logo.png", alt: "MoneyPulse logo design" },
    { image: "/logo-designs/pawcheck-logo.png", alt: "PawCheck logo design" },
    { image: "/logo-designs/livelihub-logo.png", alt: "LiveliHub logo design" },
    { image: "/logo-designs/eforesy-logo.png", alt: "Eforesy logo design" },
];

function LogoGroup({ isDuplicate = false }: { isDuplicate?: boolean }) {
    return (
        <div
            className="flex shrink-0 items-stretch"
            aria-hidden={isDuplicate}
        >
            {logoDesigns.map((logo) => (
                <div
                    key={`${logo.image}-${isDuplicate ? "duplicate" : "original"}`}
                    className="flex h-[4.75rem] w-[8.5rem] shrink-0 items-center justify-center px-5 transition duration-300 hover:bg-[#F5F7E8] sm:h-20 sm:w-40 sm:px-7"
                >
                    <img
                        src={logo.image}
                        alt={isDuplicate ? "" : logo.alt}
                        className="max-h-10 max-w-full object-contain transition duration-300 hover:scale-[1.05] sm:max-h-11"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}

export default function LogoDesignSection() {
    return (
        <section
            id="logo-designs"
            className="relative isolate overflow-hidden bg-[#141711] px-4 pb-10 pt-10 text-[#EFEDE6] md:px-16 md:pb-12 md:pt-12 lg:px-24 xl:px-40"
        >
            {/* Plum background atmosphere */}
            <div aria-hidden="true" className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-[#141711]" />

                <div className="absolute -left-44 top-[-18rem] size-[34rem] rounded-full bg-[#3E620C]/45 blur-[130px]" />

                <div className="absolute right-[-14rem] top-[-14rem] size-[32rem] rounded-full bg-[#9B8E2F]/30 blur-[135px]" />

                <div className="absolute bottom-[-18rem] left-[28%] size-[42rem] rounded-full bg-[#202716]/65 blur-[155px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(3,5,2,0.12)_50%,rgba(0,0,0,0.85)_100%)]" />
            </div>

            {/* Subtle glass texture */}
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[#EFEDE6]/[0.012] backdrop-blur-[2px]"
            />

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="mb-6 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#DDE7B7]/85">
                        Visual Marks
                    </p>

                    <h2 className="mt-3 text-2xl font-bold tracking-[-0.045em] text-[#EFEDE6] sm:text-3xl">
                        Logo concepts and{" "}
                        <span className="dark-section-accent-heading">
                            identity pieces.
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#EFEDE6]/62">
                        Logo concepts and identity pieces I’ve created while
                        exploring brand personality, style, and visual direction.
                    </p>
                </div>

                <div className="relative mx-auto w-full overflow-hidden border-y border-white/15">
                    {/* Continuous white logo strip */}
                    <div className="marquee-inner flex w-max transform-gpu bg-[#EFEDE6] py-2 will-change-transform">
                        <LogoGroup />
                        <LogoGroup isDuplicate />
                    </div>

                    {/* Fade the moving strip at the edges */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-[#141711] via-[#141711]/65 to-transparent sm:w-24" />

                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-[#141711] via-[#141711]/65 to-transparent sm:w-24" />
                </div>
            </div>
        </section>
    );
}