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
import { div, header } from "framer-motion/client";

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}>


      <div className={`w-full py-4 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-black'} border-b border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0 group">
            <div className="relative w-40 h-10 md:w-56 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="INGEPROC Logo"
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { name: "Inicio", href: "/" },
              { name: "Servicios", href: "/servicios", hasDropdown: true },
              { name: "Nosotros", href: "/nosotros" },
            ].map((item) => (
              <div key={item.name} className="relative group/nav">
                <Link
                  href={item.href}
                  className="px-5 py-2 text-white hover:text-brand-red font-black uppercase text-[11px] tracking-[0.2em] transition-all flex items-center gap-1.5 relative overflow-hidden"
                >
                  <span className="relative z-10">{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={12} className="transition-transform group-hover/nav:rotate-180" />}
                  <div className="absolute bottom-0 left-5 right-5 h-0.5 bg-brand-red scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-left" />
                </Link>

                {item.hasDropdown && (
                  <div className="absolute top-full right-0 w-72 bg-black border-t-2 border-brand-red shadow-2xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                    <div className="py-2">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-8 py-4 text-[10px] text-gray-300 hover:bg-white/5 hover:text-brand-red transition-all border-b border-white/5 last:border-0 font-black uppercase tracking-widest"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/contacto"
              className="ml-6 bg-brand-red text-white px-8 py-4 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-secondary transition-all shadow-[0_4px_20px_rgba(227,30,36,0.3)]"
            >
              Contáctanos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center border border-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black z-[100] transition-all duration-500 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible translate-x-4"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b border-white/5">
            <div className="relative w-40 h-10 transition-all">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="INGEPROC Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white w-12 h-12 border border-white/10 flex items-center justify-center"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-10 font-black text-white px-8 py-4">
            <h3 className="text-xs font-black text-brand-red tracking-widest uppercase mb-4">
              Navegación
            </h3>
            <div className="space-y-6 uppercase">
              <Link href="/" className="block text-4xl tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
              <div>
                <Link href="/servicios" className="block text-4xl text-brand-red tracking-tighter mb-4" onClick={() => setMobileMenuOpen(false)}>
                  Servicios
                </Link>
                <div className="grid grid-cols-1 gap-4 pl-4 border-l border-brand-red/20">
                  {services.map((s, idx) => (
                    <Link key={idx} href={s.href} className="text-xs text-gray-400 tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/nosotros" className="block text-4xl tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="block w-full bg-brand-red text-white p-5 text-center text-xl mt-12 shadow-2xl font-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTÁCTANOS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
