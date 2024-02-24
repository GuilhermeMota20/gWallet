import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "gWallet",
  description: "Controle, gerencie, compartilhe e alcance seus objetivos otimizando seu tempo com calculos e controle de suas financas particulares ou compartilhadas. ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={`w-full h-screen select-none scroll-smooth ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
