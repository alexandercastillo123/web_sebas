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
  {
    name: "Mantenimiento Preventivo",
    href: "/servicios/mantenimiento-preventivo",
  },
  {
    name: "Mantenimiento Correctivo",
    href: "/servicios/mantenimiento-correctivo",
  },
  {
    name: "Fabricación e Integración de Tableros",
    href: "/servicios/fabricacion-de-tableros",
  },
  {
    name: "Suministro Equipos Eléctricos y Mecánicos",
    href: "/servicios/suministro-de-equipos",
  },
  { name: "Infraestructura", href: "/servicios/infraestructura" },
  { name: "Mediciones Eléctricas", href: "/servicios/mediciones-electricas" },
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
    <header className="w-full z-50">
      {/* Header Top */}
      <div className="hidden lg:block bg-[#222222] text-white py-2 text-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={14} className="text-primary" />
              <span>Av. Mariscal Oscar R. Benavides 206 – Interior 2035</span>
            </div>
            <div className="flex items-center space-x-2 border-l border-white/20 pl-6">
              <Mail size={14} className="text-primary" />
              <a href="mailto:ventas@ingeproc.pe" className="hover:text-primary transition-colors">
                ventas@ingeproc.pe
              </a>
            </div>
          </div>
          <div>
            <span className="text-gray-400 italic"></span>
          </div>
        </div>
      </div>

      {/* Header Upper */}
      <div className="bg-white py-4 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="Ingeproc Logo"
                width={250}
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full text-primary">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">09:00 am - 06:00 pm</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Horario de atención</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full text-primary">
                <PhoneCall size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">+51 947-258-015</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Llámanos ahora</p>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary p-2"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Header Lower (Navigation) */}
      <div
        className={`hidden lg:block transition-all duration-300 ${scrolled
          ? "fixed top-0 left-0 w-full bg-secondary shadow-xl py-0"
          : "bg-secondary py-0"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <nav className="flex">
            <Link
              href="/"
              className="px-6 py-4 text-white font-medium hover:bg-primary hover:text-secondary transition-all"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="px-6 py-4 text-white font-medium hover:bg-primary hover:text-secondary transition-all"
            >
              Nosotros
            </Link>
            <div className="relative group">
              <Link href="/servicios" className="flex items-center px-6 py-4 text-white font-medium hover:bg-primary hover:text-secondary transition-all">
                Servicios <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 w-80 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 border-t-4 border-primary">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-6 py-3 text-[15px] text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 last:border-0 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contacto"
              className="px-6 py-4 text-white font-medium hover:bg-primary hover:text-secondary transition-all"
            >
              Contacto
            </Link>
          </nav>


        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-white pt-20">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-4 text-secondary p-2"
          >
            <X size={32} />
          </button>
          <nav className="px-4 py-8 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-bold text-secondary border-b border-gray-100 pb-2"
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-bold text-secondary border-b border-gray-100 pb-2"
            >
              Nosotros
            </Link>
            <div className="border-b border-gray-100 pb-2">
              <Link
                href="/servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-secondary mb-2 block"
              >
                Servicios
              </Link>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg text-gray-600 border-b border-gray-50 pb-1"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-2xl font-bold text-secondary border-b border-gray-100 pb-2"
            >
              Contacto
            </Link>
          </nav>
        </div >
      )
      }
    </header >
  );
}
