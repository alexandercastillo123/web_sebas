import { Phone, Mail, Clock, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Structural Pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Info Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-16">
                            <span className="text-brand-red font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">CENTRO DE ATENCION</span>
                            <h2 className="text-4xl lg:text-6xl font-black text-secondary uppercase tracking-tighter leading-none mb-8">
                                Contacto <br /><span className="text-brand-red">Técnico</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-brand-red mb-10" />
                            <p className="text-gray-500 text-sm leading-relaxed max-w-md font-medium">
                                Nuestros ingenieros están listos para evaluar sus requerimientos y proveer soluciones electromecánicas de alta calidad.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-red shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Central Operativa</p>
                                        <p className="text-secondary font-black tracking-tight">+51 947-258-015</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-red shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">E-mail Corporativo</p>
                                        <p className="text-secondary font-black tracking-tight">ventas@ingeproc.pe</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-red shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Horario de Taller</p>
                                        <p className="text-secondary font-black tracking-tight">L-S / 09:00 - 18:00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-50 border border-gray-100 flex items-center justify-center text-brand-red shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Planta Central</p>
                                        <p className="text-secondary font-black tracking-tight text-xs leading-normal">
                                            Av. Mariscal Oscar R. Benavides 206 <br /> Interior 2035
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="h-full min-h-[400px] w-full bg-white p-4 rounded-xl shadow-2xl border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.896503803131!2d-77.04703672402773!3d-12.046141488191242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8cdbd54906b%3A0xb8ed99f1c233e460!2sINGEPROC!5e0!3m2!1ses-419!2spe!4v1708650000000!5m2!1ses-419!2spe"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg transition-all duration-700"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
