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
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Nuestros Servicios</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2D5E] relative pb-6 inline-block">
                        ¿Qué ofrecemos?
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {overviewServices.map((service, index) => (
                        <div
                            key={index}
                            className="relative group h-[350px] overflow-hidden rounded-xl shadow-lg"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            >
                                <div className="absolute inset-0 bg-[#0D2D5E]/70 group-hover:bg-[#0D2D5E]/80 transition-all duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-8 flex flex-col justify-end text-white">
                                <div className="mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Settings size={28} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    <Link href={service.link}>{service.title}</Link>
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
