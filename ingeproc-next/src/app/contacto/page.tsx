import ServicesHero from "@/components/services/ServicesHero";
import ContactForm from "@/components/contacto/ContactForm";
import ContactInfo from "@/components/contacto/ContactInfo";

export const metadata = {
    title: 'Contáctanos | Ingeproc',
    description: 'Ponte en contacto con Ingeproc para consultas sobre servicios eléctricos, mantenimiento y proyectos de ingeniería.',
};

export default function ContactoPage() {
    return (
        <main className="min-h-screen">
            <ServicesHero
                title="Contáctanos"
                breadcrumbTitle="Contacto"
            />

            <ContactForm />
            <ContactInfo />
        </main>
    );
}
