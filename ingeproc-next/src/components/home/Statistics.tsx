"use client";

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { Briefcase, Zap, HeartHandshake, Wrench } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: 8,
    label: 'Años de Experiencia',
    suffix: '+',
  },
  {
    icon: Zap,
    value: 120,
    label: 'Proyectos Ejecutados',
    suffix: '+',
  },
  {
    icon: HeartHandshake,
    value: 50,
    label: 'Clientes Satisfechos',
    suffix: '+',
  },
  {
    icon: Wrench,
    value: 6,
    label: 'Tipos de Servicios',
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
            latest.toFixed(0)
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <stat.icon className="h-12 w-12 text-secondary mb-3" />
              <div className="text-5xl font-bold text-primary">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
