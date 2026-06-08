import {
  UserRoundIcon,
  ArrowUpRightIcon,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-m-28 px-4 py-20 transition-colors md:px-16 lg:px-24 xl:px-40 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-200">
            <UserRoundIcon className="size-4" />
            About Me
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Get to know me
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            A UI/UX designer and web developer focused on creating clean,
            functional, and user-centered digital experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 p-2.5 shadow-lg shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30">
              <img
                src="/glen-portrait-2.jpg"
                alt="Glenmor A. Decilos"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mx-auto max-w-lg text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-cyan-300">
              Glenmor A. Decilos
            </p>

            <h3 className="mt-2 text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50">
              UI/UX Designer & Web Developer
            </h3>

            <div className="mt-5 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300 md:text-base">
              <p>
                Hi, I&apos;m Glenmor. I&apos;m a BS Information Technology
                graduate majoring in Business Analytics from Batangas State
                University ARASOF-Nasugbu.
              </p>

              <p>
                I enjoy turning ideas into functional digital solutions through
                thoughtful design and reliable development. I focus on building
                interfaces that are clear, useful, and easy to use.
              </p>

              <p>
                Through academic projects and team collaborations, I developed
                strong leadership skills, a diligent work ethic, and a
                deadline-driven approach to every project I handle.
              </p>
            </div>

            <div className="mt-7">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-zinc-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-cyan-500 dark:text-zinc-950 dark:shadow-cyan-500/20 dark:hover:bg-cyan-400"
              >
                Let&apos;s connect
                <ArrowUpRightIcon className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}