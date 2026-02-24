import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ServicesHeroProps {
    title?: string;
    breadcrumbTitle?: string;
    bgImage?: string;
}

export default function ServicesHero({
    title = "Servicios",
    breadcrumbTitle,
    bgImage = "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920"
}: ServicesHeroProps) {
    return (
        <section className="relative pt-20 h-[300px] lg:h-[400px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
                style={{
                    backgroundImage: `url('${bgImage}')`,
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
