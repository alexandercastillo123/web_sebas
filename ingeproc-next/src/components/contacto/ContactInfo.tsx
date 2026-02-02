import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Info Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-12">
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
                                Contáctanos
                            </span>
                            <h2 className="text-4xl font-bold text-secondary mb-6">
                                Permanezcamos en contacto
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Adicionalmente, te brindamos otras formas en las que puedes contactarte con nosotros, así como nuestro horario de atención.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4 group">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Llámanos al</p>
                                    <p className="text-secondary font-bold text-xl">+51 947-258-015</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Envíanos un correo</p>
                                    <p className="text-secondary font-bold text-xl">ventas@ingeproc.pe</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Horario de atención</p>
                                    <p className="text-secondary font-bold text-xl">Lun - Sáb: 09:00 am - 06:00 pm</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4 group">
                                <div className="bg-white p-3 rounded-lg shadow-sm text-primary group-hover:bg-primary group-hover:text-secondary transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Ubicación</p>
                                    <p className="text-secondary font-bold text-lg">Av. Mariscal Oscar R. Benavides 206 – Interior 2035</p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-12">
                            <p className="text-secondary font-bold mb-4 uppercase tracking-wider">Síguenos en:</p>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-secondary text-white p-3 rounded-full hover:bg-primary hover:text-secondary transition-all transform hover:-translate-y-1">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="bg-secondary text-white p-3 rounded-full hover:bg-primary hover:text-secondary transition-all transform hover:-translate-y-1">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="bg-secondary text-white p-3 rounded-full hover:bg-primary hover:text-secondary transition-all transform hover:-translate-y-1">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="h-full min-h-[400px] w-full bg-white p-4 rounded-xl shadow-2xl border border-gray-100 rotate-2 lg:rotate-3">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.812114388912!2d-77.0460069!3d-12.056444800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8db3bf842fb%3A0x40e6c80b05d79d2a!2sAv.%20Bolivia%20778a%2C%20Bre%C3%B1a%2015082!5e0!3m2!1ses!2spe!4v1660703569664!5m2!1ses!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
