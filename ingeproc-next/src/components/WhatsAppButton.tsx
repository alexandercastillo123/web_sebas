import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  const phoneNumber = '51947258015';
  const message = 'Hola Ingeproc, me gustaría solicitar una cotización para un servicio de...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110 flex items-center justify-center group animate-bounce-subtle"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 448 512" className="w-10 h-10 fill-current transition-all duration-500">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.8 69.4 27.2 106.2 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23-115.1-65.1-157.1zM223.9 446.3c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.7 184.4-184.4 184.4zm101.7-138.8c-5.6-2.8-33.1-16.3-38.3-18.2-5.2-1.9-9-2.8-12.7 2.8-3.8 5.6-14.6 18.2-17.9 22-3.3 3.8-6.6 4.3-12.2 1.5-5.6-2.8-23.7-8.7-45.1-27.8-16.6-14.8-27.8-33.1-31.1-38.8-3.3-5.6-.4-8.7 2.4-11.5 2.5-2.5 5.6-6.6 8.3-9.9 2.8-3.3 3.8-5.6 5.6-9.4 1.9-3.8.9-7.1-.5-9.9-1.4-2.8-12.7-30.6-17.4-42-4.6-11.1-9.3-9.6-12.7-9.8-3.3-.2-7.1-.2-10.8-.2s-9.9 1.4-15.1 7.1c-5.2 5.6-19.8 19.4-19.8 47.2s20.3 54.8 23.1 58.5c2.8 3.8 39.9 60.9 96.6 85.4 13.5 5.8 24 9.3 32.2 11.9 13.5 4.3 25.9 3.7 35.6 2.3 10.9-1.6 33.1-13.5 37.8-26.6 4.6-13.1 4.6-24.4 3.2-26.7-1.4-2.3-5.2-3.7-10.8-6.4z" />
      </svg>
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        ¿Necesitas ayuda?
      </span>
    </Link>
  );
}
