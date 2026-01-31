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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Nuestros Servicios</h2>
          <p className="mt-4 text-lg text-gray-600">
            Ofrecemos un portafolio completo de soluciones para la industria eléctrica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href={service.href} key={service.title} className="group block">
              <div className="p-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-white mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
