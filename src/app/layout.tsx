import "@mantine/core/styles.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { Footer } from "widgets/Footer";
import { Header } from "widgets/Header";
import styles from "shared/config/styles/global.module.scss";

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
      <body className={styles.root}>
        <Header />
        <MantineProvider>
          <div className={styles.rootBody}>{children}</div>
        </MantineProvider>
        <Footer />
      </body>
    </html>
  );
}
