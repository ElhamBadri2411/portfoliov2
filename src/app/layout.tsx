import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider"
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const spacemono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elham Badri",
  description: "Elham's personal site",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          spacemono.className,
          "lg:container mx-auto lg:px-40 xl:px-64 md:text-base text-sm"
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
