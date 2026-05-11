import type { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[hsl(24,10%,7%)]">
      {/* Custom nav for homepage */}
      <nav className="sticky top-0 z-50 border-b border-[hsl(25,8%,14%)] bg-[hsl(24,10%,7%,0.85)] backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="https://mcpangea.com/assets/logo-CmBtdJut.png"
              alt="PangeaMC"
              className="h-7 w-7"
            />
            <span className="text-sm font-bold text-[hsl(35,10%,85%)]">
              Pangea<span className="text-[hsl(40,90%,52%)]">MC</span>
            </span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              href="/docs"
              className="text-sm font-medium text-[hsl(30,6%,55%)] transition-colors hover:text-[hsl(40,80%,58%)]"
            >
              Docs
            </Link>
            <a
              href="https://dsc.gg/pangeamc"
              className="text-sm font-medium text-[hsl(30,6%,55%)] transition-colors hover:text-[hsl(40,80%,58%)]"
            >
              Discord
            </a>
            <a
              href="https://mcpangea.com"
              className="text-sm font-medium text-[hsl(30,6%,55%)] transition-colors hover:text-[hsl(40,80%,58%)]"
            >
              Website
            </a>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
