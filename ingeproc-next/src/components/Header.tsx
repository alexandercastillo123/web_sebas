"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  Mail,
  PhoneCall,
  Clock,
  Search,
} from "lucide-react";

const services = [
  { name: "Mantenimiento Predictivo", href: "/servicios/mantenimiento-predictivo" },
  { name: "Mantenimiento Preventivo", href: "/servicios/mantenimiento-preventivo" },
  { name: "Mantenimiento Correctivo", href: "/servicios/mantenimiento-correctivo" },
  { name: "Planos Eléctricos", href: "/servicios/planos-electricos" },
  { name: "Mediciones Eléctricas", href: "/servicios/mediciones-electricas" },
  { name: "Metal Mecánica", href: "/servicios/metal-mecanica" },
  { name: "Automatización", href: "/servicios/automatizacion" },
  { name: "Suministro Eléctrico", href: "/servicios/suministro-electrico" },
  { name: "Obras Civiles", href: "/servicios/obras-civiles" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 fixed top-0 left-0 transition-all duration-300 shadow-md">
      <div
        className={`w-full transition-all duration-300 bg-secondary ${scrolled ? "py-2" : "py-4 md:py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0 group">
            <div className="relative w-40 h-10 md:w-56 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="INGEPROC Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-5 py-2 text-white hover:text-primary font-black uppercase text-sm tracking-widest transition-colors"
            >
              Inicio
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/servicios"
                className="flex items-center space-x-1 px-5 py-2 text-white hover:text-primary font-black uppercase text-sm tracking-widest transition-colors"
              >
                <span>Servicios</span>
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Link>

              <div className="absolute top-full right-0 w-80 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 border-t-4 border-primary">
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-6 py-3 text-sm text-secondary hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0 font-bold"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/nosotros"
              className="px-5 py-2 text-white hover:text-primary font-black uppercase text-sm tracking-widest transition-colors"
            >
              Nosotros
            </Link>

            <Link
              href="/contacto"
              className="ml-4 bg-primary text-secondary px-8 py-3 rounded-md font-black uppercase text-sm tracking-widest hover:bg-white transition-all transform hover:-translate-y-0.5 shadow-lg"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-secondary z-[100] transition-transform duration-500 overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 relative">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-4 text-white p-2"
          >
            <X size={32} />
          </button>

          <Link
            href="/"
            className="text-2xl font-black text-white py-4 border-b border-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            INICIO
          </Link>

          <div className="py-4 border-b border-white/10">
            <h3 className="text-xs font-black text-primary tracking-widest uppercase mb-4">
              Nuestros Servicios
            </h3>
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="block text-lg text-white/80 hover:text-white font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/nosotros"
            className="text-2xl font-black text-white py-4 border-b border-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            NOSOTROS
          </Link>

          <Link
            href="/contacto"
            className="mt-8 bg-primary text-secondary text-center py-5 rounded-lg font-black text-xl shadow-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTÁCTANOS
          </Link>
        </div>
      </div>
    </header>
  );
}
