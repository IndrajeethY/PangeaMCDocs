import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <img
              src="https://mcpangea.com/assets/logo-CmBtdJut.png"
              alt="PangeaMC"
              className="h-6 w-6"
            />
            <span className="font-bold">PangeaMC Docs</span>
          </div>
        ),
        url: "/",
      }}
      sidebar={{
        defaultOpenLevel: 1,
      }}
      links={[
        {
          text: "Discord",
          url: "https://dsc.gg/pangeamc",
        },
        {
          text: "Store",
          url: "https://mcpangea.com",
        },
        {
          text: "Vote",
          url: "https://mcpangea.com/vote",
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
