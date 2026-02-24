"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesContent } from "@/constants/services";
import { ChevronRight, Phone, Mail, Clock } from "lucide-react";

export default function ServiceSidebar() {
    const pathname = usePathname();
    const services = Object.values(servicesContent);

    return (
        <div className="space-y-8">
            {/* Services List Menu */}
            <div className="bg-white border border-gray-100 p-8 shadow-sm">
                <h3 className="text-xs font-black text-brand-red uppercase tracking-[0.3em] mb-8 border-b border-gray-50 pb-4">
                    Índice de Servicios
                </h3>
                <ul className="space-y-3">
                    {services.map((service) => (
                        <li key={service.slug}>
                            <Link
                                href={`/servicios/${service.slug}`}
                                className={`flex items-center justify-between p-4 transition-all group border ${pathname === `/servicios/${service.slug}`
                                    ? "bg-secondary text-white border-secondary font-black"
                                    : "bg-gray-50/50 hover:bg-white text-gray-500 font-bold border-transparent hover:border-brand-red/20"
                                    }`}
                            >
                                <span className="text-[11px] uppercase tracking-widest">{service.name}</span>
                                <ChevronRight
                                    size={14}
                                    className={`transition-transform group-hover:translate-x-1 ${pathname === `/servicios/${service.slug}`
                                        ? "text-brand-red"
                                        : "text-gray-300"
                                        }`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Support Box */}
            <div className="bg-black text-white p-10 relative overflow-hidden">
                {/* Structural background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #E31E24 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                <div className="relative z-10">
                    <div className="w-10 h-1 bg-brand-red mb-6" />
                    <h3 className="text-xl font-black uppercase tracking-tighter mb-4 lh-tight">
                        Asistencia <br /><span className="text-brand-red">Técnica Inmediata</span>
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-10 font-medium">
                        Disponibilidad operativa 24/7 para emergencias en plantas industriales y subestaciones.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Phone size={18} className="text-brand-red" />
                            <p className="font-mono text-sm tracking-tighter">947-258-015</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail size={18} className="text-brand-red" />
                            <p className="font-mono text-xs text-gray-400">ventas@ingeproc.pe</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Button */}
            <Link
                href="/contacto"
                className="block bg-brand-red text-white text-center py-5 font-black uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_10px_30px_rgba(227,30,36,0.3)] border border-brand-red hover:border-black"
            >
                SOLICITAR ESPECIFICACIONES
            </Link>
        </div>
    );
}
