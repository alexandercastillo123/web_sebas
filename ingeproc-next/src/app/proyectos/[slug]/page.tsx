import { projectsContent } from "@/constants/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";
import ServicesHero from "@/components/services/ServicesHero";
import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const project = projectsContent[params.slug];
    if (!project) return { title: "Proyecto no encontrado" };

    return {
        title: `${project.title} | Ingeproc`,
        description: project.description,
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projectsContent[params.slug];

    if (!project) {
        notFound();
    }

    return (
        <main className="pt-20">
            <ServicesHero
                title={project.title}
                breadcrumbTitle={project.title}
            />
            <ProjectDetails project={project} />
        </main>
    );
}
