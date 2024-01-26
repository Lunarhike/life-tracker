import "@/styles/globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { NavbarContainer } from "@/components/layout/NavbarContainer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.linkedIn,
    },
  ],
  creator: siteConfig.author,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased font-body",
          inter.variable,
          jetbrains.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <NavbarContainer />
            {children}
            {/* <Footer /> */}
          </main>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
