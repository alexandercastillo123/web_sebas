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
            <div className="bg-white shadow-lg border-t-4 border-primary p-6">
                <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-4">
                    Nuestros Servicios
                </h3>
                <ul className="space-y-2">
                    {services.map((service) => (
                        <li key={service.slug}>
                            <Link
                                href={`/servicios/${service.slug}`}
                                className={`flex items-center justify-between p-3 rounded transition-all group ${pathname === `/servicios/${service.slug}`
                                        ? "bg-primary text-secondary font-bold"
                                        : "hover:bg-gray-50 text-gray-700 font-medium"
                                    }`}
                            >
                                <span>{service.name}</span>
                                <ChevronRight
                                    size={16}
                                    className={`transition-transform group-hover:translate-x-1 ${pathname === `/servicios/${service.slug}`
                                            ? "text-secondary"
                                            : "text-primary"
                                        }`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Support Box */}
            <div className="bg-secondary text-white p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary/20 w-24 h-24 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">¿Necesitas Ayuda?</h3>
                    <p className="text-gray-300 mb-6">
                        Ponte en contacto con nuestros especialistas para una asesoría técnica personalizada.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <Phone size={20} className="text-primary mt-1" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Teléfono</p>
                                <p className="font-bold">+51 947-258-015</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail size={20} className="text-primary mt-1" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Email</p>
                                <p className="font-bold">ventas@ingeproc.pe</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Clock size={20} className="text-primary mt-1" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase">Horario</p>
                                <p className="font-bold">Lun - Sáb: 9am - 6pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Button */}
            <Link
                href="/contacto"
                className="block bg-primary text-secondary text-center py-4 font-bold rounded shadow-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
            >
                SOLICITAR COTIZACIÓN
            </Link>
        </div>
    );
}
