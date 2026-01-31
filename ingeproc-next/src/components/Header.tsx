"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const services = [
  { name: 'Mantenimiento Preventivo', href: '/servicios/mantenimiento-preventivo' },
  { name: 'Mantenimiento Correctivo', href: '/servicios/mantenimiento-correctivo' },
  { name: 'Fabricación de Tableros', href: '/servicios/fabricacion-de-tableros' },
  { name: 'Suministro de Equipos', href: '/servicios/suministro-de-equipos' },
  { name: 'Mediciones Eléctricas', href: '/servicios/mediciones-electricas' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://ingeproc.pe/assets/img/logo/logo.png"
                alt="Ingeproc Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-secondary transition-colors">Inicio</Link>
            
            <div className="relative group">
              <button className="flex items-center text-white hover:text-secondary transition-colors">
                Servicios <ChevronDown className="ml-1 h-5 w-5" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                <div className="py-1">
                  {services.map((service) => (
                    <Link key={service.name} href={service.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/proyectos" className="text-white hover:text-secondary transition-colors">Proyectos</Link>
            <Link href="/nosotros" className="text-white hover:text-secondary transition-colors">Nosotros</Link>
            <Link href="/contacto" className="text-white hover:text-secondary transition-colors">Contacto</Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/95">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Inicio</Link>
            {/* TODO: Add mobile dropdown for services */}
            <Link href="/proyectos" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Proyectos</Link>
            <Link href="/nosotros" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Nosotros</Link>
            <Link href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary">Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
