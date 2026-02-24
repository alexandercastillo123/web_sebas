"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    image: "https://ingeproc.pe/wp-content/uploads/2023/03/Ban_somos_especialistas_2243970267-scaled.jpg",
    tag: "SOMOS ESPECIALISTAS EN",
    title: "SOLUCIONES",
    subtitle: "ELÉCTRICAS",
    desc: "Con el equipo especializado y capacitado en buenas prácticas para el desarrollo de proyectos eléctricos.",
  },
  {
    image: "https://ingeproc.pe/wp-content/uploads/2023/03/Ban_deposita_712377220.jpg",
    tag: "CONFIANZA Y SEGURIDAD",
    title: "DEPOSITA TU PROYECTO EN",
    subtitle: "MANOS DE EXPERTOS",
    desc: "Nuestros años de experiencia y proyectos exitosos nos respaldan. Confía en los especialistas.",
  },
  {
    image: "/assets/img/automatizacion.png",
    tag: "TECNOLOGÍA INDUSTRIAL",
    title: "ESPECIALISTAS EN",
    subtitle: "AUTOMATIZACIÓN INDUSTRIAL",
    desc: "Expertos en el sector eléctrico, especializados en diseño, fabricación y montaje de tableros eléctricos.",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-start text-white pt-[90px] md:pt-[110px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div
            className="relative w-full h-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].subtitle}
              fill
              className="object-cover opacity-65"
              sizes="100vw"
              unoptimized
              priority
            />
          </div>
          {/* Refined gradient overlay - less intense */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Specialized Tag */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-brand-red uppercase flex items-center gap-2">
                  <span className="text-[14px]">●</span> {slides[current].tag}
                </span>
              </div>

              {/* Main Title Block */}
              <h1 className="mb-8 flex flex-col items-start gap-2">
                <span className="text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] text-white uppercase leading-[0.9] drop-shadow-2xl">
                  {slides[current].title}
                </span>
                <span className="text-4xl md:text-6xl lg:text-8xl font-black tracking-[-0.04em] text-white uppercase leading-[0.9] drop-shadow-2xl opacity-90">
                  {slides[current].subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-base md:text-lg text-gray-300 mb-12 font-normal leading-relaxed">
                {slides[current].desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link
                  href="/servicios"
                  className="w-full sm:w-auto bg-brand-red text-white font-black py-4.5 px-12 text-[11px] tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black uppercase shadow-[0_10px_30px_rgba(227,30,36,0.3)] hover:-translate-y-1 active:scale-95"
                >
                  NUESTROS PROYECTOS
                </Link>
                <Link
                  href="/contacto"
                  className="w-full sm:w-auto bg-transparent border-2 border-white/20 hover:border-white text-white font-black py-4.5 px-12 text-[11px] tracking-[0.2em] transition-all duration-300 uppercase backdrop-blur-sm hover:bg-white/5 active:scale-95"
                >
                  CONTÁCTANOS
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}
