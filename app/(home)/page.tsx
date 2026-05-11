import Link from "next/link";

const features = [
  {
    icon: "📚",
    title: "Your First Day",
    description: "Step-by-step walkthrough — from spawning in to building your first base.",
    href: "/docs/guides/starter",
    color: "from-emerald-500/10 to-transparent",
    borderHover: "hover:border-emerald-500/30",
  },
  {
    icon: "🛡️",
    title: "Protecting Your Builds",
    description: "How to claim land, manage permissions, and keep your stuff safe.",
    href: "/docs/guides/claims",
    color: "from-blue-500/10 to-transparent",
    borderHover: "hover:border-blue-500/30",
  },
  {
    icon: "⚔️",
    title: "Skills & Progression",
    description: "Your character grows with everything you do — mining, fighting, farming, and more.",
    href: "/docs/guides/auraskills",
    color: "from-red-500/10 to-transparent",
    borderHover: "hover:border-red-500/30",
  },
  {
    icon: "✨",
    title: "Enchantments",
    description: "80+ custom enchantments like Veinminer, Treefeller, Vampire, and Explosive Arrows.",
    href: "/docs/guides/enchants",
    color: "from-purple-500/10 to-transparent",
    borderHover: "hover:border-purple-500/30",
  },
  {
    icon: "📜",
    title: "Server Rules",
    description: "PvP, fair play, trading, and account policies.",
    href: "/docs/rules",
    color: "from-amber-500/10 to-transparent",
    borderHover: "hover:border-amber-500/30",
  },
  {
    icon: "❓",
    title: "FAQ & Extras",
    description: "Guilds, skins, bounties, voting, Discord linking, and account recovery.",
    href: "/docs/faq",
    color: "from-cyan-500/10 to-transparent",
    borderHover: "hover:border-cyan-500/30",
  },
];

const stats = [
  { label: "Game Mode", value: "Survival RPG" },
  { label: "Version", value: "1.21.8" },
  { label: "Uptime", value: "24/7" },
  { label: "World Size", value: "15k x 15k" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url(https://mcpangea.com/assets/pangea-world-bg-D1twRMw_.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(24,10%,7%)] via-[hsl(24,10%,7%,0.6)] to-[hsl(24,10%,7%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(40,90%,52%,0.03)] via-transparent to-[hsl(40,90%,52%,0.03)]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-28">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-[hsl(40,90%,52%,0.15)] blur-2xl" />
                <img
                  src="https://mcpangea.com/assets/logo-CmBtdJut.png"
                  alt="PangeaMC Logo"
                  className="relative h-24 w-24 drop-shadow-[0_0_30px_hsl(40,90%,52%,0.35)]"
                />
              </div>
            </div>

            <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Pangea
              <span className="bg-gradient-to-r from-[hsl(45,95%,60%)] to-[hsl(35,90%,50%)] bg-clip-text text-transparent">
                MC
              </span>
              {" "}Docs
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-[hsl(30,6%,55%)]">
              Everything you need to start playing on PangeaMC — guides, commands, enchantments, and more.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/docs/guides/starter"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[hsl(40,90%,48%)] to-[hsl(35,85%,45%)] px-7 py-3.5 font-semibold text-[hsl(24,10%,7%)] shadow-lg shadow-[hsl(40,90%,45%,0.2)] transition-all hover:shadow-xl hover:shadow-[hsl(40,90%,45%,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[hsl(40,90%,55%)] to-[hsl(35,85%,50%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <svg className="relative h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="relative">Get Started</span>
              </Link>

              <div className="flex items-center gap-3 rounded-lg border border-[hsl(25,8%,20%)] bg-[hsl(25,10%,10%,0.8)] px-5 py-3.5 font-mono text-sm backdrop-blur">
                <span className="text-[hsl(40,85%,60%)]">play.mcpangea.com</span>
              </div>
            </div>

            <div className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-1 gap-y-3">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center">
                  <div className="rounded-md border border-[hsl(25,8%,16%)] bg-[hsl(25,10%,9%,0.6)] px-4 py-2 backdrop-blur">
                    <span className="text-xs text-[hsl(30,6%,45%)]">{s.label}</span>
                    <span className="ml-2 text-sm font-medium text-[hsl(35,10%,80%)]">{s.value}</span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="mx-1 h-4 w-px bg-[hsl(25,8%,18%)]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="border-t border-[hsl(25,8%,14%)] bg-[hsl(24,10%,6%)]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-14 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[hsl(40,80%,52%)]">
              Documentation
            </p>
            <h2 className="text-3xl font-bold text-[hsl(35,10%,88%)] sm:text-4xl">
              Server Guides
            </h2>
            <p className="mt-3 text-[hsl(30,6%,48%)]">
              Start with &ldquo;Your First Day&rdquo; and go from there
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className={`group relative overflow-hidden rounded-xl border border-[hsl(25,8%,16%)] bg-[hsl(25,10%,9%)] p-6 transition-all duration-300 ${f.borderHover} hover:bg-[hsl(25,10%,10%)] hover:shadow-lg hover:shadow-black/20`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-4 text-3xl transition-transform duration-300 group-hover:scale-110">
                    {f.icon}
                  </div>
                  <h3 className="mb-2 font-semibold text-[hsl(35,10%,88%)] transition-colors group-hover:text-white">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[hsl(30,6%,48%)]">
                    {f.description}
                  </p>
                  <div className="mt-4 flex items-center text-xs font-medium text-[hsl(40,80%,52%)] opacity-0 transition-all group-hover:opacity-100">
                    Read guide
                    <svg className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick connect */}
      <section className="border-t border-[hsl(25,8%,14%)]">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <div className="relative overflow-hidden rounded-2xl border border-[hsl(25,8%,16%)] bg-gradient-to-br from-[hsl(25,10%,10%)] to-[hsl(24,10%,8%)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(40,90%,52%,0.03)] to-transparent" />
            <div className="relative flex flex-col items-center gap-6 px-8 py-12 text-center sm:px-16">
              <h3 className="text-2xl font-bold text-[hsl(35,10%,88%)]">
                Ready to play?
              </h3>
              <p className="max-w-md text-[hsl(30,6%,48%)]">
                Join our community and start your RPG survival adventure today.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://dsc.gg/pangeamc"
                  className="inline-flex items-center gap-2 rounded-lg bg-[hsl(235,86%,65%)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[hsl(235,86%,60%)]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"/>
                  </svg>
                  Join Discord
                </a>
                <a
                  href="https://mcpangea.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-[hsl(25,8%,20%)] bg-[hsl(25,10%,12%)] px-5 py-2.5 text-sm font-medium text-[hsl(35,10%,80%)] transition-all hover:border-[hsl(40,80%,45%,0.3)] hover:text-white"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[hsl(25,8%,12%)] bg-[hsl(24,10%,5%)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-10 text-center">
          <div className="flex items-center gap-2.5">
            <img
              src="https://mcpangea.com/assets/logo-CmBtdJut.png"
              alt="PangeaMC"
              className="h-5 w-5 opacity-80"
            />
            <span className="text-sm font-semibold text-[hsl(35,10%,70%)]">PangeaMC</span>
          </div>
          <div className="flex gap-6 text-xs text-[hsl(30,6%,40%)]">
            <a href="https://dsc.gg/pangeamc" className="transition-colors hover:text-[hsl(40,80%,55%)]">Discord</a>
            <a href="https://mcpangea.com" className="transition-colors hover:text-[hsl(40,80%,55%)]">Website</a>
            <a href="https://mcpangea.com/vote" className="transition-colors hover:text-[hsl(40,80%,55%)]">Vote</a>
          </div>
          <p className="text-xs text-[hsl(30,6%,30%)]">
            &copy; 2026 PangeaMC. Not affiliated with Mojang Studios.
          </p>
        </div>
      </footer>
    </main>
  );
}
