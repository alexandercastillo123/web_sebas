import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { name: 'Mantenimiento Preventivo', href: '/servicios/mantenimiento-preventivo' },
  { name: 'Mantenimiento Correctivo', href: '/servicios/mantenimiento-correctivo' },
  { name: 'Fabricación de Tableros', href: '/servicios/fabricacion-de-tableros' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Image
              src="https://ingeproc.pe/assets/img/logo/logo.png"
              alt="Ingeproc Logo"
              width={180}
              height={50}
              className="object-contain"
            />
            <p className="text-gray-400 text-sm">
              Especialistas en Soluciones Eléctricas y Automatización Industrial. Brindamos servicios de ingeniería, mantenimiento y construcción con los más altos estándares de calidad y seguridad.
            </p>
            <p className="text-gray-500 text-xs">
              RUC: CPJ INGENIERIA PROYECTOS Y CONSTRUCCION S.A.C.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-secondary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contáctanos</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>
                <strong>Dirección:</strong><br />
                Jr. Pomabamba 399 - Breña - Lima
              </p>
              <p>
                <strong>Teléfono:</strong><br />
                <a href="tel:+51933969289" className="hover:text-secondary transition-colors">+51 933-969-289</a>
              </p>
              <p>
                <strong>Horario:</strong><br />
                Lunes a Viernes: 09:00 am - 06:00 pm
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ingeproc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
