import ServicesHero from '@/components/services/ServicesHero';
import AboutHero from '@/components/nosotros/AboutHero';
import MissionVision from '@/components/nosotros/MissionVision';
import Certifications from '@/components/nosotros/Certifications';
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
            <ServicesHero
                title="Nosotros"
                bgImage="https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg"
            />

            <AboutHero />
            <Certifications />
            <MissionVision />

            <div className="bg-gray-50 py-10">
                <Clients title="Empresas que confían en nosotros" />
            </div>
        </>
    );
}
