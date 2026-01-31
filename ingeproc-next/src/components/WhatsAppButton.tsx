import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function WhatsAppButton() {
  const phoneNumber = '+51933969289';
  const message = 'Hola Ingeproc, me gustaría solicitar una cotización para un servicio de...';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </Link>
  );
}
