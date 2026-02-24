import Image from 'next/image';
import { FileText, ExternalLink, Award } from 'lucide-react';

export default function Certifications() {
    return (
        <section className="py-24 bg-secondary text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content Column */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-brand-red font-bold uppercase tracking-tighter text-[10px] mb-6 border border-white/10">
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                            ESTÁNDAR DE CALIDAD INTERNACIONAL
                        </div>

                        <h2 className="text-5xl lg:text-7xl font-black leading-none uppercase tracking-tighter mb-6">
                            Gestión de <br />
                            <span className="text-brand-red">Excelencia</span>
                        </h2>

                        <p className="text-xl text-gray-400 leading-relaxed font-medium max-w-xl">
                            En <span className="text-white">INGEPROC</span>, la excelencia operativa es el resultado de procesos estandarizados bajo la norma <span className="text-brand-red">ISO 9001:2015</span>.
                        </p>

                        <div className="space-y-4 pt-4">
                            <a
                                href="/assets/docs/certificado-iso-9001.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-4 bg-brand-red text-white px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all shadow-[0_15px_40px_rgba(227,30,36,0.4)]"
                            >
                                <FileText size={20} />
                                <span>DESCARGAR PROTOCOLO ISO 9001</span>
                            </a>
                        </div>
                    </div>

                    {/* Images Column */}
                    <div className="lg:w-1/2">
                        <div className="relative group">
                            {/* Decorative Background for Images */}
                            <div className="absolute inset-0 bg-brand-red/10 rounded-[3rem] -rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>

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
