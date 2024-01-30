import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });
const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 antialiased">
        <main className={cn(inter.className)}>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
