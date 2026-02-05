import { ProjectContent } from "@/constants/projects";
import Image from "next/image";
import { CheckCircle, Clock, MapPin, User, Tag } from "lucide-react";

interface ProjectDetailsProps {
    project: ProjectContent;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-12">
                        <div className="flex flex-col lg:flex-row gap-12 mb-16">
                            {/* Image Box */}
                            <div className="lg:w-7/12">
                                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info Sidebar Box */}
                            <div className="lg:w-5/12">
                                <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm h-full flex flex-col justify-center">
                                    <h2 className="text-3xl font-black text-secondary mb-8 uppercase tracking-tight relative pb-4">
                                        Información del Proyecto
                                        <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary"></span>
                                    </h2>

                                    <ul className="space-y-6">
                                        <li className="flex items-start space-x-4">
                                            <div className="bg-primary/20 p-2 rounded-lg text-secondary">
                                                <User size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Cliente</p>
                                                <p className="text-lg font-bold text-secondary">{project.client}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-4">
                                            <div className="bg-primary/20 p-2 rounded-lg text-secondary">
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Ubicación</p>
                                                <p className="text-lg font-bold text-secondary">{project.location}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-4">
                                            <div className="bg-primary/20 p-2 rounded-lg text-secondary">
                                                <Clock size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Año</p>
                                                <p className="text-lg font-bold text-secondary">{project.year}</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-4">
                                            <div className="bg-primary/20 p-2 rounded-lg text-secondary">
                                                <Tag size={20} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Categoría</p>
                                                <p className="text-lg font-bold text-secondary">{project.category}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Description */}
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-black text-secondary mb-8 uppercase tracking-tight">{project.title}</h2>
                            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
                                <p className="text-xl leading-relaxed font-medium text-gray-700">
                                    {project.description}
                                </p>

                                {project.challenge && (
                                    <div className="bg-secondary/5 p-8 rounded-2xl border-l-4 border-primary">
                                        <h3 className="text-2xl font-black text-secondary mb-4 uppercase">El Desafío</h3>
                                        <p>{project.challenge}</p>
                                    </div>
                                )}

                                {project.solution && (
                                    <div>
                                        <h3 className="text-2xl font-black text-secondary mb-4 uppercase italic">¿Qué hicimos?</h3>
                                        <p>{project.solution}</p>
                                    </div>
                                )}

                                {project.results && (
                                    <div>
                                        <h3 className="text-2xl font-black text-secondary mb-6 uppercase tracking-widest">Resultado Final</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {project.results.map((result, idx) => (
                                                <li key={idx} className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                                                    <span className="font-bold text-secondary">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
