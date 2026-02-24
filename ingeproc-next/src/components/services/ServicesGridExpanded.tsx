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
                                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8 text-center">
                                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-white text-sm mb-6 leading-relaxed">
                                            {service.shortDescription}
                                        </p>
                                        <Link
                                            href={`/servicios/${service.slug}`}
                                            className="inline-flex items-center text-brand-red font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors"
                                        >
                                            DETALLES TÉCNICOS <ChevronRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 text-center border-b-4 border-transparent group-hover:border-brand-red transition-all duration-300">
                                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                                    <Zap size={22} fill="currentColor" />
                                </div>
                                <h3 className="text-xl font-black text-secondary mb-2 group-hover:text-brand-red transition-colors uppercase tracking-tight">
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
