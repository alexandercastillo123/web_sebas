"use client";

import Image from "next/image";
import { ServiceContent } from "@/constants/services";
import { CheckCircle } from "lucide-react";

interface ServiceDetailsProps {
    service: ServiceContent;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
    return (
        <div className="space-y-8 animate-fade-in">
            {/* Featured Image */}
            <div className="relative h-[300px] lg:h-[450px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute top-0 left-0 bg-primary text-secondary px-6 py-3 font-bold text-lg rounded-br-lg shadow-lg">
                    Servicio Especializado
                </div>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6 relative inline-block">
                    {service.name}
                    <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></span>
                </h2>

                <p className="text-xl font-medium text-secondary/80 leading-relaxed bg-gray-50 border-l-4 border-primary p-6 rounded-r">
                    {service.shortDescription}
                </p>

                <div className="mt-8 space-y-6">
                    <p className="leading-relaxed">
                        {service.fullDescription}
                    </p>
                </div>
            </div>

            {/* Features/Benefits Grid */}
            <div className="bg-white p-8 rounded-lg shadow-inner border border-gray-100">
                <h3 className="text-2xl font-bold text-secondary mb-6 border-b pb-4">Alcance del Servicio</h3>

                {service.detailedContent ? (
                    <div className="space-y-8">
                        {service.detailedContent.map((section, idx) => (
                            <div key={idx} className="space-y-4">
                                <h4 className="text-lg font-bold text-primary flex items-center">
                                    <span className="w-8 h-[2px] bg-primary mr-3"></span>
                                    {section.label}
                                </h4>
                                {section.items && (
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6 pl-11">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start space-x-2 text-gray-600">
                                                <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3 group">
                                <div className="bg-primary/10 p-1 rounded-full group-hover:bg-primary transition-colors">
                                    <CheckCircle size={20} className="text-primary group-hover:text-secondary transition-colors" />
                                </div>
                                <span className="font-medium text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Extra Image/Callout placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-[200px] rounded overflow-hidden group">
                    <Image
                        src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/02/10-1.jpg"
                        alt="Detalle 1"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <div className="relative h-[200px] rounded overflow-hidden group">
                    <Image
                        src="https://expert-themes.com/newwp/emarat/wp-content/uploads/2019/02/6.jpg"
                        alt="Detalle 2"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>

            {/* Blockquote from HTML */}
            <blockquote className="border-l-4 border-primary bg-secondary/5 p-8 italic text-lg text-secondary/90 rounded-r relative shadow-sm">
                <span className="absolute top-0 right-4 text-6xl text-primary/20 font-serif leading-none">“</span>
                Atraemos a los mejores talentos y utilizamos equipos de vanguardia para asegurar que su sistema eléctrico esté en manos expertas, brindando tranquilidad y continuidad operacional a su negocio.
            </blockquote>
        </div>
    );
}
