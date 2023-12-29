import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const title = "Gabriel Vallés - Desarrollador y Programador Web";
const description =
  "Gabriel Hernández Vallés es un programador y desarrollador web que crea aplicaciones y experiencias digitales para la web.";


export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
