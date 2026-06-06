import { Link } from "react-router-dom";
import { 
    GithubIcon, 
    LinkedinIcon, 
    MailIcon, 
    MapPinIcon,
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact", href: "/#contact" },
    ];

    const socialLinks = [
        { name: "GitHub", icon: GithubIcon, href: "https://github.com/yourusername" },
        { name: "LinkedIn", icon: LinkedinIcon, href: "https://linkedin.com/in/yourusername" },
        { name: "Email", icon: MailIcon, href: "mailto:glenmor@gmail.com" },
    ];

    return (
        <footer className="border-t border-zinc-200 bg-white transition-colors dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 lg:py-20">
                {/* Main Footer Grid */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
                    {/* Brand Column - 5 columns */}
                    <div className="space-y-4 lg:col-span-5">
                        <div className="flex items-center gap-3">
                           
                            <div>
                                <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                                    Glenmor Decilos
                                </span>
                                <p className="text-xs text-zinc-500 dark:text-zinc-500">UI/UX Designer & Developer</p>
                            </div>
                        </div>
                        <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            Creating purposeful digital experiences through thoughtful design and clean, functional development.
                        </p>
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg p-2 text-zinc-500 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column - 3 columns */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sm text-zinc-600 transition-colors hover:text-green-600 dark:text-zinc-400 dark:hover:text-cyan-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column - 4 columns */}
                    <div className="lg:col-span-4">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                <MailIcon className="size-3.5 shrink-0 text-zinc-500 dark:text-zinc-500" />
                                <span>glenmor.decilos@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                <MapPinIcon className="size-3.5 shrink-0 text-zinc-500 dark:text-zinc-500" />
                                <span>Nasugbu, Batangas, Philippines</span>
                            </li>
                            <li className="mt-3 flex items-center gap-2">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
                                </span>
                                <span className="text-xs font-medium text-green-700 dark:text-cyan-300">
                                    Available for opportunities
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-zinc-100 dark:border-zinc-800" />

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
                    <p className="text-xs text-zinc-500 dark:text-zinc-500">
                        © {currentYear} Glenmor A. Decilos. All rights reserved.
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}