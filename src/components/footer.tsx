import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ];
    const socialLinks = [
        { name: "GitHub", icon: GithubIcon, href: "https://github.com/gln-decilos" },
        { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/glenmor-decilos-b2977b404/" },
        { name: "Email", icon: MailIcon, href: "mailto:gln.decilos@gmail.com" },
    ];

    return (
        <footer className="border-t border-[var(--line)] bg-[var(--canvas-soft)]/72">
            <div className="section-shell py-14 lg:py-18">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
                    <div className="space-y-4 lg:col-span-5">
                        <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl border border-[var(--line)] bg-[var(--accent-soft)] font-mono text-xs font-bold text-[var(--accent-strong)]">GD</span><div><span className="text-lg font-bold tracking-[-0.04em] text-[var(--ink)]">Glenmor Decilos</span><p className="text-xs text-[var(--muted)]">UI/UX Designer &amp; Developer</p></div></div>
                        <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)]">Creating purposeful digital experiences through thoughtful design and clean, functional development.</p>
                        <div className="flex items-center gap-2">{socialLinks.map((social) => (<a key={social.name} href={social.href} target={social.href.startsWith("mailto:") ? undefined : "_blank"} rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"} className="grid size-9 place-items-center rounded-lg border border-transparent text-[var(--muted)] transition hover:border-[var(--line)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-strong)]" aria-label={social.name}><social.icon className="size-4" /></a>))}</div>
                    </div>
                    <div className="lg:col-span-3"><h3 className="mb-4 font-mono text-[0.67rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Navigation</h3><ul className="space-y-2.5">{navLinks.map((link) => (<li key={link.name}><Link to={link.href} className="text-sm text-[var(--muted)] transition hover:text-[var(--accent-strong)]">{link.name}</Link></li>))}</ul></div>
                    <div className="lg:col-span-4"><h3 className="mb-4 font-mono text-[0.67rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">Contact</h3><ul className="space-y-3"><li className="flex items-center gap-3 text-sm text-[var(--muted)]"><MailIcon className="size-3.5 shrink-0 text-[var(--accent)]" /><span>gln.decilos@gmail.com</span></li><li className="flex items-center gap-3 text-sm text-[var(--muted)]"><MapPinIcon className="size-3.5 shrink-0 text-[var(--accent)]" /><span>Nasugbu, Batangas, Philippines</span></li><li className="mt-4 flex items-center gap-2"><span className="relative flex size-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-65" /><span className="relative inline-flex size-2 rounded-full bg-violet-400" /></span><span className="text-xs font-medium text-[var(--accent)]">Available for opportunities</span></li></ul></div>
                </div>
                <div className="my-8 border-t border-[var(--line)]" />
                <p className="text-xs text-[var(--muted)]">© {currentYear} Glenmor A. Decilos. All rights reserved.</p>
            </div>
        </footer>
    );
}
