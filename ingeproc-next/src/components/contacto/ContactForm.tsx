"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstname: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Gracias por escribirnos. Pronto nos pondremos en contacto contigo.");
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title Box */}
                <div className="text-center mb-16">
                    <span className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                        SOLICITAR EVALUACIÓN
                    </span>
                    <h2 className="text-4xl lg:text-6xl font-black text-secondary mb-6 uppercase tracking-tighter leading-none">
                        ¿Tienes alguna <br /><span className="text-brand-red">consulta técnica?</span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-500 font-medium text-sm leading-relaxed">
                        Nuestro equipo de especialistas le brindará una respuesta integral a sus requerimientos de ingeniería eléctrica y electromecánica.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 border border-gray-100 shadow-2xl relative">
                    <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-brand-red"></div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="NOMBRE Y APELLIDO"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 px-6 py-4 font-black text-[10px] tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="CORREO CORPORATIVO"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 px-6 py-4 font-black text-[10px] tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="TELÉFONO / CELULAR"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 px-6 py-4 font-black text-[10px] tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="DETALLE DE SU REQUERIMIENTO TÉCNICO"
                                required
                                rows={6}
                                className="w-full bg-gray-50 border border-gray-200 px-6 py-4 font-black text-[10px] tracking-widest focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="text-center pt-6">
                            <button
                                type="submit"
                                className="inline-block bg-brand-red text-white font-black px-16 py-5 tracking-[0.3em] text-[10px] shadow-[0_15px_40px_rgba(227,30,36,0.3)] hover:bg-secondary transition-all transform hover:-translate-y-1 uppercase"
                            >
                                ENVIAR CONSULTA
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
