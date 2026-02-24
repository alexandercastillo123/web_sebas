import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Preloader from "@/components/Preloader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ingeproc - Soluciones Eléctricas y Automatización Industrial",
  description: "Especialistas en mantenimiento, proyectos de ingeniería, y construcción de infraestructura eléctrica en Perú. Ofrecemos soluciones seguras y eficientes.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-white text-gray-800 antialiased`}>
        <Preloader />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
