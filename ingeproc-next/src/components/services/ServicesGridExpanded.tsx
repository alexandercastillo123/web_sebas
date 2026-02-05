import Image from 'next/image';
import Link from 'next/link';
import { servicesContent } from "@/constants/services";
import { ChevronRight, Zap } from 'lucide-react';

const services = Object.values(servicesContent);

export default function ServicesGridExpanded() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-[#f8f9fa] overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="relative h-[250px] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-[#0D2D5E]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8 text-center">
                                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white text-sm mb-6 leading-relaxed">
                                            {service.shortDescription}
                                        </p>
                                        <Link
                                            href={`/servicios/${service.slug}`}
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
                                    <Link href={`/servicios/${service.slug}`}>{service.name}</Link>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
