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
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0 animate-pulse"></div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-md border-l-4 border-primary">
                            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Presentación</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                            Expertos en Ingeniería y Mantenimiento Eléctrico
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Somos una empresa con amplia experiencia dedicada a brindar asesoría en acondicionamiento,
                            instalación y mantenimiento de sistemas eléctricos de manera predictiva, preventiva y correctiva.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Contamos con personal calificado para llevar adelante los distintos proyectos que su empresa requiera,
                            buscamos optimizar el tiempo de respuesta y la calidad del servicio.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            <div className="space-y-2">
                                <p className="text-primary text-4xl font-black">12+</p>
                                <p className="text-secondary font-bold text-sm uppercase">Años de experiencia</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-primary text-4xl font-black">135+</p>
                                <p className="text-secondary font-bold text-sm uppercase">Proyectos exitosos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
