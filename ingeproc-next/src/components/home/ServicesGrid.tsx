import Link from 'next/link';
import { HardHat, Wrench, ShieldCheck, Factory, Cable, ClipboardCheck } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Mantenimiento Preventivo',
    description: 'Aseguramos la operatividad y longevidad de sus sistemas eléctricos.',
    href: '/servicios/mantenimiento-preventivo',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Correctivo',
    description: 'Soluciones rápidas y eficientes para fallas y emergencias eléctricas.',
    href: '/servicios/mantenimiento-correctivo',
  },
  {
    icon: Factory,
    title: 'Fabricación de Tableros',
    description: 'Diseño y ensamblaje de tableros de control y distribución a medida.',
    href: '/servicios/fabricacion-de-tableros',
  },
  {
    icon: HardHat,
    title: 'Infraestructura',
    description: 'Ejecución de proyectos de infraestructura eléctrica para la industria.',
    href: '/servicios/infraestructura',
  },
  {
    icon: Cable,
    title: 'Suministro de Equipos',
    description: 'Provisión de equipos eléctricos y mecánicos de alta calidad.',
    href: '/servicios/suministro-de-equipos',
  },
  {
    icon: ClipboardCheck,
    title: 'Mediciones Eléctricas',
    description: 'Protocolos y mediciones técnicas para garantizar la seguridad y eficiencia.',
    href: '/servicios/mediciones-electricas',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 text-secondary font-bold uppercase tracking-widest text-xs mb-4 rounded border-l-4 border-primary">
            Lo que ofrecemos
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary uppercase tracking-tight">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Soluciones integrales de ingeniería eléctrica con tecnología innovadora y personal altamente capacitado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="group">
              <div className="relative p-10 bg-gray-50 rounded-xl transition-all duration-500 hover:bg-secondary group-hover:-translate-y-2 flex flex-col h-full border-b-4 border-transparent hover:border-primary shadow-sm hover:shadow-2xl">
                <div className="mb-8 p-4 bg-white rounded-lg inline-block shadow-sm group-hover:bg-primary group-hover:text-secondary text-primary transition-colors duration-500">
                  <service.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center text-primary font-bold group-hover:text-white transition-colors duration-500">
                  <span>MÁS INFORMACIÓN</span>
                  <div className="ml-2 w-8 h-px bg-primary group-hover:bg-white transition-all duration-500 group-hover:w-12" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
