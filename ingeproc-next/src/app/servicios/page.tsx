import ServicesHero from "@/components/services/ServicesHero";
import ServicesGridExpanded from "@/components/services/ServicesGridExpanded";
import ServicesStats from "@/components/services/ServicesStats";
import ServicesOverview from "@/components/services/ServicesOverview";
import SponsorsCarousel from "@/components/services/SponsorsCarousel";

export const metadata = {
    title: 'Servicios de Ingeniería | Ingeproc - Especialistas en Electricidad',
    description: 'Conoce nuestra amplia gama de servicios eléctricos: mantenimiento preventivo, correctivo, fabricación de tableros y mediciones eléctricas.',
};

export default function ServiciosPage() {
    return (
        <>
            <ServicesHero />
            <ServicesGridExpanded />
            <ServicesStats />
            <ServicesOverview />
            <SponsorsCarousel />
        </>
    );
}
