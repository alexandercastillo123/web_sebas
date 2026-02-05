"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
};

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white pt-20"
      style={{
        backgroundImage: `url('https://ingeproc.pe/wp-content/uploads/2020/11/13.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40" />

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="inline-block px-4 py-1 bg-primary text-secondary font-black uppercase tracking-widest text-sm mb-6 rounded">
          CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-none uppercase">
          Soluciones de <br />
          <span className="text-primary">Ingeniería Eléctrica</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-100 mb-10 font-medium">
          Sistemas eléctricos de manera predictiva, preventiva y correctiva con los más altos estándares de calidad.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#proyectos" className="w-full sm:w-auto bg-primary hover:bg-white text-secondary font-black py-4 px-10 rounded-md text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
            NUESTROS TRABAJOS
          </Link>
          <Link href="/nosotros" className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-black py-4 px-10 rounded-md text-lg transition-all duration-300">
            CONÓCENOS
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
