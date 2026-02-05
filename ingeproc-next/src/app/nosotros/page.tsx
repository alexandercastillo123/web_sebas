import AboutHero from '@/components/nosotros/AboutHero';
import MissionVision from '@/components/nosotros/MissionVision';
import Clients from '@/components/home/Clients';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Nosotros | Ingeproc',
    description: 'Conoce más sobre Ingeproc, nuestra misión, visión y política de calidad en servicios de ingeniería eléctrica.',
};

export default function NosotrosPage() {
    return (
        <>
            {/* Breadcrumbs Section */}
            <section
                className="pt-32 pb-20 bg-cover bg-center relative"
                style={{ backgroundImage: "url('https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg')" }}
            >
                <div className="absolute inset-0 bg-secondary/80" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tight">Nosotros</h1>
                    <nav className="flex items-center space-x-2 text-white/80 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                        <ChevronRight size={16} />
                        <span className="text-primary">Nosotros</span>
                    </nav>
                </div>
            </section>

            <AboutHero />
            <MissionVision />

            <div className="bg-gray-50 py-10">
                <Clients title="Empresas que confían en nosotros" />
            </div>
        </>
    );
}
