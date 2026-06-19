import { useState } from "react";
import {
    BadgeCheckIcon,
    Building2Icon,
    CalendarDaysIcon,
    ExternalLinkIcon,
    XIcon,
    ZoomInIcon,
} from "lucide-react";

type Certificate = {
    title: string;
    issuer: string;
    issued: string;
    description: string;
    image: string;
    accent: string;
    logo: string;
};

const certificates: Certificate[] = [
    {
        title: "Certificate of Appreciation",
        issuer: "Batangas State University TNEU-ARASOF Nasugbu Extension Service Office",
        issued: "June 2026",
        description:
            "Recognized for contribution and technical expertise in the development of LiveliHub.",
        image: "/certificates/livelihub-certificate.jpg",
        accent: "from-emerald-500 to-cyan-500",
        logo: "/logos/bsu-logo.png",
    },
    {
        title: "Certification of Completion – On-the-Job Training",
        issuer: "Department of Science and Technology–Advanced Science and Technology Institute (DOST-ASTI)",
        issued: "May 2026",
        description: "Completed the required On-the-Job Training program with DOST-ASTI.",
        image: "/certificates/dost-asti-certificate.jpg",
        accent: "from-sky-500 to-teal-500",
        logo: "/logos/dost-asti-logo.png",
    },
    {
        title: "Information Technology Specialist – Data Analytics",
        issuer: "Batangas State University The National Engineering University ARASOF – Nasugbu",
        issued: "May 2025",
        description: "Earned certification as an Information Technology Specialist in Data Analytics.",
        image: "/certificates/data-analytics-certificate.jpg",
        accent: "from-indigo-500 to-emerald-500",
        logo: "/logos/it-specialist-logo.png",
    },
];

function CertificateModal({ 
    certificate, 
    onClose 
}: { 
    certificate: Certificate | null; 
    onClose: () => void;
}) {
    if (!certificate) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div 
                className="relative max-w-4xl w-full bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full overflow-hidden">
                            <img 
                                src={certificate.logo} 
                                alt={`${certificate.issuer} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-lg font-bold leading-tight text-zinc-900 dark:text-zinc-50 truncate">
                                {certificate.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 truncate">
                                {certificate.issuer}
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                        aria-label="Close modal"
                    >
                        <XIcon className="size-5" />
                    </button>
                </div>

                {/* Image */}
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50">
                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-zinc-800 shadow-inner">
                        <img
                            src={certificate.image}
                            alt={`${certificate.title} certificate`}
                            className="w-full h-auto object-contain max-h-[70vh]"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <p className="text-sm text-zinc-700 dark:text-zinc-300">
                                {certificate.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <CalendarDaysIcon className="size-4" />
                                <span>Issued {certificate.issued}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full">
                            <ZoomInIcon className="size-3.5" />
                            <span>Click outside to close</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CertificateCard({ 
    certificate, 
    onView 
}: { 
    certificate: Certificate; 
    onView: (cert: Certificate) => void;
}) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/70 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-black/20 dark:hover:border-cyan-400/30 dark:hover:shadow-cyan-950/20">
            <button
                onClick={() => onView(certificate)}
                className="w-full text-left"
                aria-label={`View ${certificate.title}`}
            >
                <div className="relative block overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate`}
                        className="aspect-[1.41/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-xs font-semibold">View certificate</span>
                        <ExternalLinkIcon className="size-4" />
                    </div>
                </div>

                <div className="space-y-4 p-5">
                    <div className="flex items-start gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full overflow-hidden">
                            <img 
                                src={certificate.logo} 
                                alt={`${certificate.issuer} logo`}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-base font-bold leading-snug text-zinc-900 dark:text-zinc-50">
                                {certificate.title}
                            </h3>
                            <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                                {certificate.description}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-2 border-t border-zinc-100 pt-4 text-sm dark:border-zinc-800">
                        <div className="flex gap-2 text-zinc-600 dark:text-zinc-400">
                            <Building2Icon className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-cyan-300" />
                            <span>{certificate.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                            <CalendarDaysIcon className="size-4 shrink-0 text-emerald-600 dark:text-cyan-300" />
                            <span>Issued: {certificate.issued}</span>
                        </div>
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
            <section
                id="certificates"
                className="scroll-m-28 px-4 py-20 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mb-12 flex flex-col items-center gap-4 text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-2 text-sm font-medium text-emerald-700 backdrop-blur-sm dark:border-cyan-400/20 dark:bg-cyan-400/5 dark:text-cyan-200">
                            <BadgeCheckIcon className="size-4" />
                            Certificates
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl dark:text-zinc-50">
                                Certifications & Recognition
                            </h2>
                            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                                A selection of credentials and recognitions that highlight my training, technical contribution, and data analytics foundation.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {certificates.map((certificate) => (
                            <CertificateCard 
                                key={certificate.title} 
                                certificate={certificate}
                                onView={setSelectedCertificate}
                            />
                        ))}
                    </div>

                    
                </div>
            </section>

            {/* Modal */}
            <CertificateModal 
                certificate={selectedCertificate}
                onClose={() => setSelectedCertificate(null)}
            />
        </>
    );
}