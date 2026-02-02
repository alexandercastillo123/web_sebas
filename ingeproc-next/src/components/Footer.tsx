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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Info */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg inline-block">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="Ingeproc Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed uppercase font-bold">
              CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C
            </p>
            <div className="flex space-x-4">
              {/* Simple Social Icons */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all cursor-pointer">
                <span className="text-lg">f</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-secondary transition-all cursor-pointer">
                <span className="text-lg">in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Hours & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative pb-4">
              Horario laboral
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary" />
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">ventas@ingeproc.pe</span>
              </li>
              <li className="flex items-start space-x-3">
                <PhoneCall size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">+51 947-258-015</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">Av. Mariscal Oscar R. Benavides 206 – Interior 2035</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">09:00 am - 06:00 pm</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Latest News (Placeholders) */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative pb-4">
              Últimas Noticias
              <span className="absolute bottom-0 left-0 w-10 h-1 bg-primary" />
            </h3>
            <div className="space-y-6">
              <div className="flex space-x-4 items-center">
                <div className="w-16 h-16 bg-white/10 rounded overflow-hidden flex-shrink-0">
                  <Image src="https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093-70x70.jpg" alt="News" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold hover:text-primary transition-colors cursor-pointer leading-tight">Mediciones eléctricas</h4>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase">Agosto 22, 2022</p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="w-16 h-16 bg-white/10 rounded overflow-hidden flex-shrink-0">
                  <Image src="https://ingeproc.pe/wp-content/uploads/2019/01/blog3-70x70.jpg" alt="News" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <h4 className="text-xs font-bold hover:text-primary transition-colors cursor-pointer leading-tight">Mantenimiento preventivo</h4>
                  <p className="text-[10px] text-gray-500 mt-1 uppercase">Agosto 21, 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Description */}
          <div>
            <div className="mt-8">
              <p className="text-sm text-gray-400 leading-relaxed italic border-l-2 border-primary pl-4">
                Ingeproc con la razón social CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C es una empresa con amplia experiencia dedicada a brindar asesoría en acondicionamiento, instalación y mantenimiento de sistemas eléctricos de manera predictiva, preventiva y correctiva.
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
