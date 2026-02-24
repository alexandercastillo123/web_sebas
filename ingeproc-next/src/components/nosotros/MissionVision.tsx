import Image from 'next/image';
import { Target, Eye, ShieldCheck } from 'lucide-react';

const cards = [
    {
        title: "Misión",
        icon: <Target size={40} />,
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/services3.jpg",
        description: "Nuestro objetivo principal es lograr que las empresas contratantes obtengan un servicio eficiente en sus diversos proyectos para los cuales somos contratados, proveer a nuestros clientes la tecnología innovadora que se encuentra presente en el mercado nacional e internacional. Somos una empresa seria y responsable de sus compromisos cuya principal fortaleza descansa en la capacidad de nuestro personal técnico quienes están en constante capacitación para una mejor respuesta profesional."
    },
    {
        title: "Visión",
        icon: <Eye size={40} />,
        image: "https://ingeproc.pe/wp-content/uploads/2019/02/news-8.jpg",
        description: "Ser una empresa en post de la vanguardia y el desarrollo, líderes en brindar soluciones integrales en el área de ingeniería eléctrica, metal mecánica, utilizando las mejores productos y marcas del mercado para una mejor confiabilidad en el desarrollo industrial."
    },
    {
        title: "Política de Calidad",
        icon: <ShieldCheck size={40} />,
        image: "https://ingeproc.pe/wp-content/uploads/2019/02/blog-1.png",
        description: "INGEPROC, tiene como principal objetivo lograr que las empresas contratantes obtengan un servicio eficiente y de calidad en sus diversos proyectos para lo cual estamos comprometidos en desarrollar una alta cultura organizacional empresarial y productiva, proveer a nuestros clientes la tecnología innovadora que se encuentra presente en el mercado nacional e internacional y en la capacitación constante de nuestro personal para brindar una mejor respuesta profesional."
    }
];

export default function MissionVision() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {cards.map((card, idx) => (
                        <div key={idx} className="group bg-white border border-gray-100 p-10 transition-all duration-500 hover:shadow-2xl flex flex-col h-full relative overflow-hidden">
                            {/* Decorative ID background */}
                            <div className="absolute -top-4 -right-2 text-7xl font-black text-gray-50 select-none group-hover:text-brand-red/5 transition-colors">
                                0{idx + 1}
                            </div>

                            <div className="relative z-10 mb-8 p-4 w-16 h-16 bg-gray-50 border border-gray-100 group-hover:bg-brand-red group-hover:text-white group-hover:border-brand-red transition-all duration-500 flex items-center justify-center text-secondary">
                                {card.icon}
                            </div>

                            <div className="relative z-10 flex-grow">
                                <h3 className="text-xl font-black text-secondary mb-6 uppercase tracking-tight group-hover:text-brand-red transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                    {card.description}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-50 group-hover:border-brand-red/10 flex items-center justify-between">
                                <span className="text-[10px] font-black tracking-widest text-gray-300 group-hover:text-secondary transition-colors uppercase">Especificación Técnica</span>
                                <div className="w-2 h-2 bg-gray-100 group-hover:bg-brand-red transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
