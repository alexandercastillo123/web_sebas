"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
    { label: "Años de Experiencia", value: 12 },
    { label: "Proyectos Realizados", value: 135 },
    { label: "Seguidores en LinkedIn", value: 2500, suffix: "+" },
    { label: "Servicios activos", value: 8 },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = Math.ceil(end / (duration / 16));

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function ServicesStats() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://ingeproc.pe/wp-content/uploads/2020/10/3.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/90"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="text-5xl lg:text-6xl font-black text-brand-red mb-3 tracking-tighter">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-300 font-medium uppercase tracking-[2px] text-sm leading-relaxed">
                                {stat.label.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
