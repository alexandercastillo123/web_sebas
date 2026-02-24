import { notFound } from "next/navigation";
import { servicesContent } from "@/constants/services";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceDetails from "@/components/services/ServiceDetails";

export async function generateStaticParams() {
    return Object.keys(servicesContent).map((slug) => ({ slug }));
}

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = servicesContent[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <ServicesHero
                title={service.name}
                breadcrumbTitle={service.name}
            />

            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Content Side */}
                        <div className="w-full lg:w-2/3 order-1 lg:order-1">
                            <ServiceDetails service={service} />
                        </div>

                        {/* Sidebar Side */}
                        <aside className="w-full lg:w-1/3 order-2 lg:order-2">
                            <ServiceSidebar />
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
