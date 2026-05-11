import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | PangeaMC Docs",
    default: "PangeaMC Docs",
  },
  description:
    "Official documentation for PangeaMC — an RPG Minecraft SMP Survival Server. Guides, commands, and more.",
  openGraph: {
    title: "PangeaMC Docs",
    description:
      "Official documentation for PangeaMC — RPG Minecraft SMP Survival Server",
    images: ["https://files.indrajeeth.in/pangeamclogo.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <RootProvider
          theme={{
            defaultTheme: "dark",
            attribute: "class",
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
