import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Zap } from 'lucide-react';

const expandedServices = [
    {
        title: "Mantenimiento Preventivo",
        summary: "Tableros eléctricos Son tableros que contienen dispositivos de protección y maniobra que permiten proteger y operar los circuitos en que está dividida la instalación...",
        link: "/servicios/mantenimiento-preventivo",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mantenimiento_preventivo-370x270.jpg",
    },
    {
        title: "Mantenimiento Correctivo",
        summary: "Tableros eléctricos Modificacion, reubicacion, ampliacion Central de alarma contra incendio Desmontaje y montaje Reconexion, identificacion de falla...",
        link: "/servicios/mantenimiento-correctivo",
        image: "https://ingeproc.pe/wp-content/uploads/2023/03/Ban_somos_especialistas_2243970267-370x270.jpg",
    },
    {
        title: "Fabricación e integración de tableros",
        summary: "Tableros eléctricos de distribución. Adosados Empotrados Autosoportados Tableros eléctricos de control. CCM Banco de condensadores...",
        link: "/servicios/fabricacion-e-integracion-de-tableros",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/integracion_tableros_475844704-370x270.jpg",
    },
    {
        title: "Suministro equipos eléctricos y mecánicos",
        summary: "Tableros eléctricos nacional e importado Adosados Empotrados Autosoportados Equipos de ventilación forzada Extractor e inyector de aire...",
        link: "/servicios/suministro-equipos-electricos-y-mecanicos",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/schneider_banner_jpg-370x270.jpg",
    },
    {
        title: "Mediciones Eléctricas",
        summary: "Calidad de energía. Aislamiento Pruebas de resistividad. Resistividad del suelo. Relación de transformación. Rigidez dieléctrica...",
        link: "/servicios/mediciones-electricas",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_2240497995-370x270.jpg",
    },
];

export default function ServicesGridExpanded() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expandedServices.map((service, index) => (
                        <div key={index} className="group relative bg-[#f8f9fa] overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="relative h-[250px] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#0D2D5E]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8 text-center">
                                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white text-sm mb-6 leading-relaxed">
                                            {service.summary}
                                        </p>
                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center text-primary font-bold uppercase tracking-wider text-xs hover:text-white transition-colors"
                                        >
                                            LEER MÁS <ChevronRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-center border-b-4 border-transparent group-hover:border-primary transition-all duration-300">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Zap size={24} fill="currentColor" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    <Link href={service.link}>{service.title}</Link>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
