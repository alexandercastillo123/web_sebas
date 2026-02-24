"use client";

import Image from 'next/image';

const clients = [
  { name: 'ALPINA', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/Alpina.png' },
  { name: 'SAN FERNANDO', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/san-fernando.png' },
  { name: 'AECORP', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/AECORP.png' },
  { name: 'ANDINA MEDICA', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/Andina-medica.jpg' },
  { name: 'BINSWANGER', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/Binswan.png' },
  { name: 'SINOHYDRO', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/sinohydro.png' },
  { name: 'CUSHMAN & WAKEFIELD', logoUrl: 'https://ingeproc.pe/wp-content/uploads/2022/08/cushman.png' },
];

export default function Clients() {
  return (
    <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - CSS animation, no jumps */}
        <div className="flex animate-scroll-logos">
          {/* Render 3 copies for seamless loop */}
          {[0, 1, 2].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-20 px-10">
              {clients.map((client) => (
                <div
                  key={`${client.name}-${copy}`}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 shrink-0"
                >
                  <div className="relative w-40 h-16">
                    <Image
                      src={client.logoUrl}
                      alt={`${client.name} Logo`}
                      fill
                      sizes="160px"
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
