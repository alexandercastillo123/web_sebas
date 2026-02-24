import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Column */}
                    <div className="lg:w-1/2 relative group">
                        <div className="relative z-10 overflow-hidden rounded-2xl">
                            <Image
                                src="https://ingeproc.pe/wp-content/uploads/2020/10/img-01-1.jpg"
                                alt="Working at Ingeproc"
                                width={800}
                                height={600}
                                className="w-full h-auto shadow-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        {/* Technical element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-brand-red -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-brand-red font-black uppercase tracking-tighter text-[10px] mb-6 border border-brand-red/20">
                            <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                            NOSOTROS
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-black text-secondary leading-none uppercase tracking-tighter">
                            Expertos en Ingeniería y <span className="text-brand-red">Mantenimiento Eléctrico</span>
                        </h2>

                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            Somos una empresa con amplia experiencia dedicada a brindar asesoría en acondicionamiento,
                            instalación y mantenimiento de sistemas eléctricos de manera predictiva, preventiva y correctiva.
                        </p>

                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                            Contamos con personal calificado para llevar adelante los distintos proyectos que su empresa requiera,
                            buscamos optimizar el tiempo de respuesta y la calidad del servicio.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                            <div className="space-y-2">
                                <p className="text-brand-red text-5xl font-black tracking-tighter">12+</p>
                                <p className="text-secondary font-black text-[10px] uppercase tracking-widest">Años de experiencia</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-brand-red text-5xl font-black tracking-tighter">135+</p>
                                <p className="text-secondary font-black text-[10px] uppercase tracking-widest">Proyectos exitosos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
