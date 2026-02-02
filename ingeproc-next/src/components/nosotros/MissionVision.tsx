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
                        <div key={idx} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                            <div className="h-64 relative overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors" />
                                <div className="absolute top-6 left-6 text-primary drop-shadow-lg">
                                    {card.icon}
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                                    <span className="w-10 h-1 bg-primary mr-3" />
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
