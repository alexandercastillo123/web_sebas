import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { name: 'Mantenimiento Preventivo', href: '/servicios/mantenimiento-preventivo' },
  { name: 'Mantenimiento Correctivo', href: '/servicios/mantenimiento-correctivo' },
  { name: 'Fabricación de Tableros', href: '/servicios/fabricacion-de-tableros' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg inline-block shadow-lg">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="Ingeproc Logo"
                width={250}
                height={80}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed uppercase font-black tracking-tight max-w-xs">
              CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C
            </p>
            <div className="flex space-x-4">
              {/* Simple Social Icons */}
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 cursor-pointer border border-white/10 group">
                <span className="text-lg font-black group-hover:scale-110 transition-transform">f</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300 cursor-pointer border border-white/10 group">
                <span className="text-lg font-black group-hover:scale-110 transition-transform">in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Hours & Contact */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-black mb-8 relative pb-4 uppercase tracking-tighter">
              Horario laboral
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary" />
            </h3>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <Mail size={18} className="flex-shrink-0" />
                </div>
                <span className="text-sm font-medium mt-1">ventas@ingeproc.pe</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <PhoneCall size={18} className="flex-shrink-0" />
                </div>
                <span className="text-sm font-medium mt-1">+51 947-258-015</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <MapPin size={18} className="flex-shrink-0" />
                </div>
                <span className="text-sm font-medium mt-1">Av. Mariscal Oscar R. Benavides 206 – Interior 2035</span>
              </li>
              <li className="flex items-start space-x-4 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary group-hover:text-secondary transition-colors">
                  <Clock size={18} className="flex-shrink-0" />
                </div>
                <span className="text-sm font-medium mt-1">09:00 am - 06:00 pm</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Description */}
          <div className="flex items-center">
            <div className="bg-white/5 p-8 rounded-2xl border-l-4 border-primary shadow-2xl backdrop-blur-sm">
              <p className="text-sm text-gray-300 leading-relaxed italic font-medium">
                "Ingeproc con la razón social CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C es una empresa con amplia experiencia dedicada a brindar asesoría en acondicionamiento, instalación y mantenimiento de sistemas eléctricos de manera predictiva, preventiva y correctiva."
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Ingeproc. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            <Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
            <Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Clock, Mail, MapPin, PhoneCall } from 'lucide-react';
