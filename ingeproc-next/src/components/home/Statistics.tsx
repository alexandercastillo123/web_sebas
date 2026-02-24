"use client";

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Briefcase, Zap, HeartHandshake, Wrench } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 12,
    label: 'Años de Experiencia',
    suffix: '+',
  },
  {
    icon: Zap,
    value: 135,
    label: 'Proyectos Ejecutados',
    suffix: '+',
  },
  {
    icon: HeartHandshake,
    value: 40,
    label: 'Clientes Satisfechos',
    suffix: '+',
  },
  {
    icon: Wrench,
    value: 5,
    label: 'Especialidades',
    suffix: '',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Intl.NumberFormat('en-US').format(
            Math.round(latest)
          )}${suffix}`;
        }
      }),
    [springValue, suffix]
  );

  return <span ref={ref} />;
}

export default function Statistics() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:border-brand-red transition-all duration-500">
                <stat.icon className="h-8 w-8 text-secondary group-hover:text-brand-red transition-colors" />
              </div>
              <div className="text-6xl font-black text-brand-red tracking-tighter">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[10px] font-black text-secondary mt-4 uppercase tracking-[0.3em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
