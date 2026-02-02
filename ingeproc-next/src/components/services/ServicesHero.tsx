import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface ServicesHeroProps {
    title?: string;
    breadcrumbTitle?: string;
}

export default function ServicesHero({ title = "Servicios", breadcrumbTitle }: ServicesHeroProps) {
    return (
        <section className="relative h-[250px] lg:h-[350px] flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/11/13.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-[#0D2D5E]/60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{title}</h1>

                    <nav className="flex items-center space-x-2 text-white/90 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">
                            Inicio
                        </Link>
                        <ChevronRight size={18} className="text-primary" />
                        {breadcrumbTitle ? (
                            <>
                                <Link href="/servicios" className="hover:text-primary transition-colors">
                                    Servicios
                                </Link>
                                <ChevronRight size={18} className="text-primary" />
                                <span className="text-primary font-bold">{breadcrumbTitle}</span>
                            </>
                        ) : (
                            <span className="text-primary font-bold">{title}</span>
                        )}
                    </nav>
                </div>
            </div>

            {/* Decorative Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[30px] fill-white">
                    <path d="M1200 120L0 120L0 0L1200 120Z"></path>
                </svg>
            </div>
        </section>
    );
}
