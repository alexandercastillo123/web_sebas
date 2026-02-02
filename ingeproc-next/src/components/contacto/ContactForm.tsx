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
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                        Escríbenos
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6 italic">
                        ¿Tienes alguna consulta?
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                        Gracias por interesarte en nuestros servicios, si tienes alguna pregunta, no dudes en escribirnos que gustosamente te atenderemos.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="max-w-4xl mx-auto bg-gray-50 p-8 lg:p-12 rounded-xl shadow-inner border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    required
                                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    value={formData.firstname}
                                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Tu correo"
                                    required
                                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Tu celular"
                                    required
                                    className="w-full bg-white border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Tu mensaje"
                                required
                                rows={6}
                                className="w-full bg-white border border-gray-200 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="inline-block bg-primary text-secondary font-bold px-12 py-4 rounded-lg shadow-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                            >
                                ENVIAR MENSAJE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
