import { Theme } from "@radix-ui/themes";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Dosis } from "next/font/google";
import styles from "./layout.module.scss";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@radix-ui/themes/styles.css";

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  width: "device-width"
};

export const metadata: Metadata = {
  description: "TBD",
  title: "TBD",
  viewport: viewport
};

const font = Dosis({
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(styles.body, font.className)}>
        <Theme className={styles.entryPoint} hasBackground={false}>
          {children}
          <Analytics />
          <SpeedInsights />
        </Theme>
      </body>
    </html>
  );
}
