import Link from 'next/link';
import { servicesContent } from '@/constants/services';
import { LucideIcon, ShieldCheck, Wrench, Activity, PencilLine, ClipboardCheck, Hammer, Cpu, Package, Building2 } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
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
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Blueprint Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary text-brand-red font-black uppercase tracking-tighter text-[10px] mb-6 border border-brand-red/20">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
              SOLUCIONES TÉCNICAS ESPECIALIZADAS
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-secondary uppercase tracking-tighter leading-none">
              Excelencia en <br />
              <span className="text-brand-red">Servicios Eléctricos</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed border-l-2 border-brand-red/30 pl-6">
            Proporcionamos soluciones integrales de ingeniería con un enfoque en la seguridad operativa y la eficiencia energética industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={`/servicios/${service.slug}`} key={service.slug} className="group">
              <div className="relative h-full bg-white border border-gray-200 p-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden">
                {/* Background number (subtle) */}
                <div className="absolute -bottom-4 -right-2 text-9xl font-black text-gray-100 select-none transition-all duration-500 group-hover:text-brand-red/10 group-hover:-translate-y-4">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <div className="mb-8 relative">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-50 text-secondary border border-gray-100 group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-500">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  {/* Decorative line */}
                  <div className="absolute top-8 left-16 right-0 h-[1px] bg-gray-100 group-hover:bg-brand-red/20 transition-all duration-500" />
                </div>

                <h3 className="text-xl font-black text-secondary mb-4 uppercase tracking-tight group-hover:text-brand-red transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-8 pr-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.shortDescription}
                </p>

                <ul className="space-y-3 mb-10 flex-grow relative z-10">
                  {service.subServices.map((sub, idx) => (
                    <li key={idx} className="flex items-start text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600">
                      <span className="text-brand-red mr-2">/</span>
                      {sub}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto pt-6 flex items-center justify-between border-t border-gray-50 group-hover:border-brand-red/10 transition-colors duration-500">
                  <span className="text-[10px] font-black tracking-[0.2em] text-secondary/40 group-hover:text-secondary transition-all">DETALLES TÉCNICOS</span>
                  <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all duration-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
