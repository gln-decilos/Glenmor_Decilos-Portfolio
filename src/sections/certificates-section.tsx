import { useEffect, useState } from "react";
import { ArrowUpRightIcon, BadgeCheckIcon, Building2Icon, CalendarDaysIcon, XIcon } from "lucide-react";
import Reveal from "../components/reveal";

type Certificate = {
    title: string;
    issuer: string;
    issued: string;
    description: string;
    image: string;
    logo: string;
};

const certificates: Certificate[] = [
    {
        title: "Certificate of Appreciation",
        issuer: "Batangas State University TNEU-ARASOF Nasugbu Extension Service Office",
        issued: "June 2026",
        description: "Recognized for contribution and technical expertise in the development of LiveliHub.",
        image: "/certificates/livelihub-certificate.jpg",
        logo: "/logos/bsu-logo.png",
    },
    {
        title: "UX/UI Design Specialization: From Research to Accessibility",
        issuer: "Domestika",
        issued: "June 22, 2026",
        description: "Completed a UX/UI specialization focused on research, product design decisions, and accessibility.",
        image: "/certificates/domestika-certificate.jpg",
        logo: "/logos/domestika-logo.jpg",
    },
    {
        title: "Certification of Completion – On-the-Job Training",
        issuer: "Department of Science and Technology–Advanced Science and Technology Institute (DOST-ASTI)",
        issued: "May 2026",
        description: "Completed the required On-the-Job Training program with DOST-ASTI.",
        image: "/certificates/dost-asti-certificate.jpg",
        logo: "/logos/dost-asti-logo.png",
    },
    {
        title: "Information Technology Specialist – Data Analytics",
        issuer: "Batangas State University The National Engineering University ARASOF – Nasugbu",
        issued: "May 2025",
        description: "Earned certification as an Information Technology Specialist in Data Analytics.",
        image: "/certificates/data-analytics-certificate.jpg",
        logo: "/logos/it-specialist-logo.png",
    },
];

function CertificateModal({ certificate, onClose }: { certificate: Certificate; onClose: () => void }) {
    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md" onClick={onClose} role="presentation">
            <div className="w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/12 bg-[var(--canvas)] shadow-2xl" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={certificate.title}>
                <div className="flex items-start justify-between gap-4 border-b border-black/8 p-5 dark:border-white/10 sm:p-6">
                    <div className="flex min-w-0 items-center gap-3">
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#EFEDE6] p-1.5">
                            <img src={certificate.logo} alt={`${certificate.issuer} logo`} className="h-full w-full object-contain" />
                        </span>
                        <div className="min-w-0">
                            <h3 className="text-base font-bold tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 sm:text-lg">{certificate.title}</h3>
                            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{certificate.issuer}</p>
                        </div>
                    </div>
                    <button type="button" onClick={onClose} className="grid size-10 shrink-0 place-items-center rounded-full border border-black/10 text-zinc-700 transition hover:bg-zinc-950 hover:text-[#EFEDE6] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-[#EFEDE6] dark:hover:text-zinc-950" aria-label="Close certificate preview">
                        <XIcon className="size-4" />
                    </button>
                </div>
                <div className="bg-black/[0.025] p-4 dark:bg-[#EFEDE6]/[0.025] sm:p-6">
                    <img src={certificate.image} alt={`${certificate.title} certificate`} className="max-h-[68vh] w-full rounded-xl border border-black/8 bg-[#EFEDE6] object-contain shadow-sm dark:border-white/10" />
                </div>
                <div className="flex flex-col gap-3 border-t border-black/8 p-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-white/10">
                    <p className="max-w-2xl leading-6 text-zinc-600 dark:text-zinc-300">{certificate.description}</p>
                    <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-zinc-500 dark:text-zinc-400">
                        <CalendarDaysIcon className="size-3.5" /> Issued {certificate.issued}
                    </span>
                </div>
            </div>
        </div>
    );
}

function CertificateCard({ certificate, onView }: { certificate: Certificate; onView: (certificate: Certificate) => void }) {
    return (
        <article className="surface-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/8">
            <button type="button" onClick={() => onView(certificate)} className="flex h-full w-full flex-col text-left" aria-label={`View ${certificate.title}`}>
                <div className="relative aspect-[1.43] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img src={certificate.image} alt={`${certificate.title} certificate`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <span className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full bg-[var(--accent)] text-zinc-950 opacity-0 transition duration-300 group-hover:opacity-100">
                        <ArrowUpRightIcon className="size-4" />
                    </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Logo placed above title - left aligned */}
                    <div className="mb-3">
                        <span className="grid size-12 place-items-center rounded-xl border border-black/8 bg-[#EFEDE6] p-1.5 dark:border-white/10">
                            <img src={certificate.logo} alt={`${certificate.issuer} logo`} className="h-full w-full object-contain" />
                        </span>
                    </div>
                    
                    <div className="flex flex-1 flex-col">
                        <h3 className="text-base font-bold leading-5 tracking-[-0.025em] text-zinc-950 dark:text-zinc-50 line-clamp-2">
                            {certificate.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400 line-clamp-2">
                            {certificate.description}
                        </p>
                    </div>
                    
                    <div className="mt-auto pt-5 space-y-2 border-t border-black/7 text-xs leading-5 text-zinc-500 dark:border-white/10 dark:text-zinc-400">
                        <p className="flex items-center gap-2">
                            <Building2Icon className="size-3.5 shrink-0 text-zinc-700 dark:text-zinc-200" />
                            <span className="line-clamp-1">{certificate.issuer}</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <CalendarDaysIcon className="size-3.5 shrink-0 text-zinc-700 dark:text-zinc-200" />
                            Issued {certificate.issued}
                        </p>
                    </div>
                </div>
            </button>
        </article>
    );
}

export default function CertificatesSection() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    return (
        <>
            <section id="certificates" className="scroll-m-28 py-20 sm:py-28">
                <div className="section-shell">
                    <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 sm:flex-row sm:items-end">
    <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[#39452A] bg-[#26301A] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#DDE7B7] shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-[#EFEDE6]/[0.045] dark:text-[#DDE7B7]">
            <BadgeCheckIcon className="size-3.5 text-[#DDE7B7]" />
            Credentials
        </div>

        <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-[0.98] tracking-[-0.065em] text-zinc-950 sm:text-5xl lg:text-6xl dark:text-[#EFEDE6]">
            Learning, applied and{" "}
            <span className="accent-heading">
                recognized.
            </span>
        </h2>
    </div>

    <p className="max-w-md text-[0.96rem] leading-7 text-zinc-600 sm:text-right dark:text-[#EFEDE6]/70">
        A selection of certifications and recognitions that reflect my
        continued learning and contribution to meaningful projects.
    </p>
</Reveal>
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {certificates.map((certificate, index) => (
                            <Reveal key={certificate.title} delay={index * 80}>
                                <CertificateCard certificate={certificate} onView={setSelectedCertificate} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
            {selectedCertificate && (
                <CertificateModal 
                    certificate={selectedCertificate} 
                    onClose={() => setSelectedCertificate(null)} 
                />
            )}
        </>
    );
}