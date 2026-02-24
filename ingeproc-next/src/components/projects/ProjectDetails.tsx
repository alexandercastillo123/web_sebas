import { ProjectContent } from "@/constants/projects";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailsProps {
    project: ProjectContent;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <section className="bg-white py-12 lg:py-20 relative border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Upper Section: Image & Info */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20">

                    {/* Image Column */}
                    <div className="lg:w-7/12">
                        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-sm">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="lg:w-5/12 flex flex-col justify-start">
                        <div className="border-b-2 border-brand-red pb-4 mb-6">
                            <h2 className="text-3xl font-black text-secondary uppercase tracking-tighter">
                                Especificación Técnica
                            </h2>
                        </div>

                        <div className="text-gray-600 mb-8 italic text-lg leading-relaxed">
                            {project.description.split('.')[0]}.
                        </div>

                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-secondary font-black uppercase text-xs tracking-widest">Cliente:</span>
                                <span className="text-gray-700 font-medium">{project.client}</span>
                            </li>
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-secondary font-black uppercase text-xs tracking-widest">Ubicación:</span>
                                <span className="text-gray-700 font-medium">{project.location}</span>
                            </li>
                            {project.surfaceArea && (
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-secondary font-black uppercase text-xs tracking-widest">Área:</span>
                                    <span className="text-gray-700 font-medium">{project.surfaceArea}</span>
                                </li>
                            )}
                            <li className="flex justify-between border-b border-gray-100 pb-2">
                                <span className="text-secondary font-black uppercase text-xs tracking-widest">Año:</span>
                                <span className="text-gray-700 font-medium">{project.year}</span>
                            </li>
                            {project.value && (
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-secondary font-black uppercase text-xs tracking-widest">Valor:</span>
                                    <span className="text-gray-700 font-medium">{project.value}</span>
                                </li>
                            )}
                            {project.architect && (
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-secondary font-black uppercase text-xs tracking-widest">Arquitecto:</span>
                                    <span className="text-gray-700 font-medium">{project.architect}</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {/* Lower Section: Content */}
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-black text-secondary mb-8 uppercase tracking-tighter">
                            {project.title}
                        </h2>
                        <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                            {project.description}
                        </div>
                    </div>

                    {/* Project Challenge Section */}
                    {project.challenge && (
                        <div className="mb-16">
                            <h3 className="text-2xl font-black text-secondary mb-6 uppercase tracking-widest">
                                Desafío del Proyecto
                            </h3>
                            <div className="text-lg text-gray-600 leading-relaxed mb-8">
                                {project.challenge}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {(project.results || []).map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div className="mt-2 w-2 h-2 bg-brand-red rotate-45 shrink-0" />
                                        <span className="text-gray-700 font-bold text-sm uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* What We Did Section */}
                    {project.solution && (
                        <div className="mb-16">
                            <h3 className="text-2xl font-black text-secondary mb-6 uppercase tracking-widest">
                                Lo que hicimos
                            </h3>
                            <div className="text-lg text-gray-600 leading-relaxed">
                                {project.solution}
                            </div>
                        </div>
                    )}

                    {/* RESULT Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-black text-secondary mb-6 uppercase tracking-widest">
                            RESULTADO
                        </h3>
                        <div className="text-lg text-gray-600 leading-relaxed">
                            {project.resultText || "Operaciones garantizadas con los más altos estándares de calidad técnica, asegurando la satisfacción del cliente y la continuidad del servicio."}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subscribe Style CTA */}
            <section className="bg-brand-red py-16 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                                ¿Necesita una Evaluación Técnica?
                            </h2>
                            <p className="text-white/80 font-medium uppercase text-sm tracking-widest">
                                Nuestro equipo de ingenieros está listo para su próximo proyecto.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/contacto" className="bg-secondary text-white px-8 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-black transition-all border border-white/20">
                                CONTACTAR AHORA
                            </Link>
                            <a href="tel:+51947258015" className="bg-white text-secondary px-8 py-4 font-black uppercase text-[10px] tracking-[0.2em] border border-white/10 hover:bg-gray-50 transition-all">
                                +51 947-258-015
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
