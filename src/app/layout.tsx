import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";

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
      <body style={{ background: "#FDF5DF" }}>
        <Header />
        <MantineProvider>{children}</MantineProvider>
        <Footer />
      </body>
    </html>
  );
}
