import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Tally5 } from "lucide-react";
import { Footer } from "@/components/footer";
import { ModeSwitcher } from "@/components/mode-switcher";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Scorecard",
  description: "Web app to track scores for card games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="border-b">
            <nav className="flex h-16 items-center px-4 container">
              <div className="flex items-center font-semibold gap-2 select-none touch-none">
                <Tally5 className="w-4 h-4" /> Scorecard
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <ModeSwitcher />
              </div>
            </nav>
          </div>

          <main className="flex-1 pt-6 container px-2 pb-6">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
