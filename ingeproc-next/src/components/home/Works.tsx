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
        <section id="proyectos" className="py-24 bg-white relative overflow-hidden">
            {/* Technical grid background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-brand-red font-black uppercase tracking-tighter text-[10px] mb-6 border border-brand-red/20">
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                            HISTORIAL DE PROYECTOS
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-secondary uppercase tracking-tighter leading-none">
                            Portafolio de <br />
                            <span className="text-brand-red">Ingeniería</span>
                        </h2>
                    </div>
                    <div className="h-full border-l border-gray-200 pl-8 hidden md:block">
                        <p className="text-secondary/60 text-[10px] font-black tracking-[0.3em] uppercase mb-2">Estado del Sistema</p>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-secondary font-mono text-sm tracking-tighter">CERTIFICADO ISO 9001</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-brand-red/20">
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden transition-all duration-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="bg-secondary/90 backdrop-blur-md text-white text-[10px] font-mono px-2 py-1 border border-white/10">
                                        REF: PR-0{index + 10}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col h-[280px]">
                                <div className="p-3 w-12 h-12 bg-gray-50 border border-gray-100 mb-6 flex items-center justify-center text-secondary group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-500">
                                    <project.icon size={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-black text-secondary mb-3 uppercase tracking-tight group-hover:text-brand-red transition-colors line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-4">
                                    {project.description}
                                </p>
                                <Link
                                    href={project.href}
                                    className="inline-flex items-center text-[10px] font-black tracking-widest text-secondary hover:text-brand-red transition-colors group/link"
                                >
                                    VER ESPECIFICACIONES
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
