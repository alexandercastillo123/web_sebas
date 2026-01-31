"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section 
      className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/4317157/pexels-photo-4317157.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-primary/70" />
      
      <motion.div 
        className="relative z-10 text-center px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Especialistas en Soluciones Eléctricas <br/> y Automatización Industrial
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          Calidad, seguridad y eficiencia en cada proyecto.
        </p>
        <Link href="/contacto" className="inline-block bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 transform hover:scale-105">
            Solicita una Cotización
        </Link>
      </motion.div>
    </section>
  );
}
