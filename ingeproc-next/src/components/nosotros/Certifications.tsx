import Image from 'next/image';
import { FileText, ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
    return (
        <section className="py-24 bg-secondary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content Column */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
                            <Award className="text-primary" size={20} />
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Calidad Garantizada</span>
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter">
                            Certificación <br />
                            <span className="text-primary italic">ISO 9001:2015</span>
                        </h2>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                            En <span className="text-white font-bold">INGEPROC</span>, la excelencia no es un accidente, es el resultado de procesos estandarizados y un compromiso inquebrantable con la calidad.
                        </p>

                        <div className="space-y-4 pt-4">
                            <p className="text-gray-400 font-medium">
                                Contamos con la certificación internacional que avala nuestros sistemas de gestión, garantizando resultados óptimos en cada proyecto de ingeniería.
                            </p>

                            <a
                                href="/assets/docs/certificado-iso-9001.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-primary text-secondary px-8 py-4 rounded-xl font-black uppercase text-lg hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl group"
                            >
                                <FileText size={24} />
                                <span>Ver Certificado Oficial</span>
                                <ExternalLink size={18} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </div>

                    {/* Images Column */}
                    <div className="lg:w-1/2">
                        <div className="relative group">
                            {/* Decorative Background for Images */}
                            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>

                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                                {/* Safety & Confidence Image */}
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px]">
                                    <Image
                                        src="/assets/img/engineering-safety.png"
                                        alt="Engineering Confidence and Safety"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <p className="text-white font-black uppercase text-xl tracking-tighter leading-tight">
                                            Seguridad y <br />Confianza Total
                                        </p>
                                    </div>
                                </div>

                                {/* Main ISO Logo - Made larger and more prominent */}
                                <div className="bg-white p-2 md:p-4 rounded-3xl shadow-2xl flex flex-col items-center justify-center transform md:translate-y-12 hover:-translate-y-0 transition-all duration-500">
                                    <div className="relative w-full aspect-square max-w-full"> {/* <-- Aquí quité el límite de 380px */}
                                        <Image
                                            src="/assets/img/iso-9001-globe.png"
                                            alt="ISO 9001 Certified Company"
                                            fill
                                            className="object-contain p-2" // Añadí un pequeño padding interno
                                        />
                                    </div>
                                    <div className="mt-2 text-center w-full">
                                        <p className="text-secondary font-black uppercase text-xs tracking-widest border-t border-gray-100 pt-3">
                                            Empresa Certificada
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
