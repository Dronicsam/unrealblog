import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import "shared/config/styles/global.scss";

export const metadata = {
  title: "Dronicsam`s blog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <title>{metadata.title}</title>
      </head>
      <body className="root">
        <Header />
        <MantineProvider>
          <div className="rootBody">{children}</div>
        </MantineProvider>
        <Footer />
      </body>
    </html>
  );
}
