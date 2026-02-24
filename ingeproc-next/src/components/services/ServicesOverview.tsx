import Link from 'next/link';
import { Settings } from 'lucide-react';

const overviewServices = [
    {
        title: "Mantenimiento Preventivo",
        desc: "Tableros eléctricos que contienen dispositivos de protección y maniobra...",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mantenimiento_preventivo.jpg",
        link: "/servicios/mantenimiento-preventivo"
    },
    {
        title: "Mantenimiento Correctivo",
        desc: "Modificacion, reubicacion, ampliacion de tableros y alarmas...",
        image: "https://ingeproc.pe/wp-content/uploads/2023/03/Ban_somos_especialistas_2243970267-scaled.jpg",
        link: "/servicios/mantenimiento-correctivo"
    },
    {
        title: "Fabricación de Tableros",
        desc: "Tableros de distribución, control, CCM y bancos de condensadores...",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/integracion_tableros_475844704-scaled.jpg",
        link: "/servicios/fabricacion-e-integracion-de-tableros"
    },
];

export default function ServicesOverview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-brand-red font-black uppercase tracking-tighter text-[10px] mb-6 border border-brand-red/20">
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                            RESUMEN OPERATIVO
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-secondary uppercase tracking-tighter leading-none">
                            Nuestras <br />
                            <span className="text-brand-red">Capacidades</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {overviewServices.map((service, index) => (
                        <div
                            key={index}
                            className="relative group h-[450px] overflow-hidden border border-gray-100 bg-black"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-700 opacity-80 group-hover:opacity-60"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-10 flex flex-col justify-end text-white">
                                <div className="mb-6">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-500">
                                        <Settings size={24} strokeWidth={1.5} />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-brand-red transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    {service.desc}
                                </p>

                                <Link href={service.link} className="inline-flex items-center text-[10px] font-black tracking-[0.3em] uppercase text-white/50 hover:text-brand-red transition-colors group/link">
                                    EXPLORAR SERVICIO
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
