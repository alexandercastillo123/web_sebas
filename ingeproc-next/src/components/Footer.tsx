import Link from 'next/link';
import Image from 'next/image';
import { Mail, PhoneCall, MapPin, Clock, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">

          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col items-start gap-8">
            <Link href="/" className="relative transition-transform duration-300 hover:scale-105">
              <Image
                src="https://ingeproc.pe/wp-content/uploads/2022/08/ingeproc_logo_final_sin_trueno.png"
                alt="INGEPROC Logo"
                width={200}
                height={55}
                style={{ height: 'auto' }}
                className="object-contain"
                unoptimized
              />
            </Link>
            <div className="space-y-2">
              <h3 className="text-gray-300 font-bold uppercase tracking-widest text-[13px] leading-tight">
                CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C
              </h3>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] transition-all group border border-white/5">
                <Facebook size={18} className="text-gray-400 group-hover:text-white" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#E31E24] transition-all group border border-white/5">
                <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Column 2: Working Hours */}
          <div className="flex flex-col gap-8">
            <div className="relative">
              <h3 className="text-xl font-black uppercase tracking-widest mb-2">HORARIO LABORAL</h3>
              <div className="w-16 h-1 bg-[#ffb200]" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-[#ffb200]/10 border border-white/5">
                  <Mail size={18} className="text-[#ffb200] opacity-80" />
                </div>
                <span className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-default">ventas@ingeproc.pe</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-[#ffb200]/10 border border-white/5">
                  <PhoneCall size={18} className="text-[#ffb200] opacity-80" />
                </div>
                <span className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-default">+51 947-258-015</span>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-[#ffb200]/10 border border-white/5 mt-1">
                  <MapPin size={18} className="text-[#ffb200] opacity-80" />
                </div>
                <span className="text-gray-400 text-sm font-medium leading-relaxed max-w-[200px] hover:text-white transition-colors cursor-default">
                  Av. Mariscal Oscar R. Benavides 206 – Interior 2035
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover:bg-[#ffb200]/10 border border-white/5">
                  <Clock size={18} className="text-[#ffb200] opacity-80" />
                </div>
                <span className="text-gray-400 text-sm font-medium hover:text-white transition-colors cursor-default">09:00 am - 06:00 pm</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quote/Description */}
          <div className="lg:pl-10">
            <div className="relative p-8 rounded-2xl bg-white/5 border-l-4 border-[#ffb200] shadow-2xl backdrop-blur-sm">
              <p className="text-gray-300 italic text-[14px] leading-relaxed font-medium">
                "Ingeproc con la razón social CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C es una empresa con amplia experiencia dedicada a brindar asesoría en acondicionamiento, instalación y mantenimiento de sistemas eléctricos de manera predictiva, preventiva y correctiva."
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 font-medium tracking-wider">
            © {new Date().getFullYear()} Ingeproc. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="/" className="text-[11px] text-gray-500 hover:text-[#ffb200] font-bold transition-colors uppercase tracking-widest">Inicio</Link>
            <Link href="/nosotros" className="text-[11px] text-gray-500 hover:text-[#ffb200] font-bold transition-colors uppercase tracking-widest">Nosotros</Link>
            <Link href="/contacto" className="text-[11px] text-gray-500 hover:text-[#ffb200] font-bold transition-colors uppercase tracking-widest">Contacto</Link>
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31E24]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ffb200]/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
