import Link from 'next/link';
import { servicesContent } from '@/constants/services';
import {
  ShieldCheck,
  Wrench,
  Activity,
  PencilLine,
  ClipboardCheck,
  Hammer,
  Cpu,
  Package,
  Building2
} from 'lucide-react';

const iconMap: Record<string, any> = {
  "mantenimiento-predictivo": Activity,
  "mantenimiento-preventivo": ShieldCheck,
  "mantenimiento-correctivo": Wrench,
  "planos-electricos": PencilLine,
  "mediciones-electricas": ClipboardCheck,
  "metal-mecanica": Hammer,
  "automatizacion": Cpu,
  "suministro-electrico": Package,
  "obras-civiles": Building2,
};

const services = Object.values(servicesContent).map(s => ({
  ...s,
  icon: iconMap[s.slug] || Activity,
  // Mapping first 3 features to subServices for the Home preview
  subServices: s.features.slice(0, 3),
}));

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
            <Link href={`/servicios/${service.slug}`} key={service.slug} className="group">
              <div className="relative p-8 bg-gray-50 rounded-xl transition-all duration-500 hover:bg-secondary group-hover:-translate-y-2 flex flex-col h-full border-b-4 border-transparent hover:border-primary shadow-sm hover:shadow-2xl">
                <div className="mb-6 p-4 bg-white rounded-lg inline-block shadow-sm group-hover:bg-primary group-hover:text-secondary text-primary transition-colors duration-500">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-white transition-colors duration-500">
                  {service.name}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {service.subServices.map((sub, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {sub}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center text-primary font-bold group-hover:text-white transition-colors duration-500">
                  <span className="text-xs tracking-widest">VER MÁS</span>
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
