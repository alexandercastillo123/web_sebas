import Link from 'next/link';
import Image from 'next/image';
import { Cpu, Droplets, Zap } from 'lucide-react';

const projects = [
    {
        title: 'Programación de TTA',
        description: 'Puesta en marcha del tablero de transferencia automática en edificio Alpina para garantizar energía continua.',
        image: 'https://ingeproc.pe/wp-content/uploads/2019/01/modulo_transferencia_automatica_2244918171.jpg',
        icon: Zap,
        href: '/proyectos/programacion-tta',
    },
    {
        title: 'Sistema de Presión Constante',
        description: 'Automatización del sistema de presión constante en el cuarto de bombas en edificio San Isidro.',
        image: 'https://ingeproc.pe/wp-content/uploads/2019/01/programacion_logo_2178922797.jpg',
        icon: Cpu,
        href: '/proyectos/automatizacion-presion-constante',
    },
    {
        title: 'Mantenimiento Predictivo',
        description: 'Análisis técnico preventivo en planta de procesamiento de alimentos para identificar fallas incipientes.',
        image: 'https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg',
        icon: Droplets,
        href: '/proyectos/mantenimiento-predictivo-industrial',
    },
    {
        title: 'Certificación de Pozo a Tierra',
        description: 'Protocolos de pruebas y certificación para INDECI asegurando la seguridad eléctrica.',
        image: 'https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093-300x300.jpg',
        icon: Zap,
        href: '/proyectos/mediciones-de-pozo-tierra',
    },
];

export default function Works() {
    return (
        <section id="proyectos" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute -left-20 top-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1 bg-primary/10 text-secondary font-bold uppercase tracking-widest text-xs mb-4 rounded border-l-4 border-primary">
                        Nuestro Portafolio
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-secondary uppercase tracking-tight">Nuestros Trabajos</h2>
                    <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                        Conoce algunos de nuestros proyectos más destacados y la calidad técnica que nos diferencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100">
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="p-4 bg-primary text-secondary rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <project.icon size={24} />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center space-x-2 text-primary text-sm font-bold mb-3">
                                    <span className="w-6 h-[2px] bg-primary"></span>
                                    <span className="uppercase tracking-wider">Proyecto Destacado</span>
                                </div>
                                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.href}
                                    className="inline-flex items-center text-secondary font-black group-hover:translate-x-2 transition-transform duration-300"
                                >
                                    VER DETALLES
                                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
