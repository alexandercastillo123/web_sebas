import { projectsContent } from "@/constants/projects";
import ProjectDetails from "@/components/projects/ProjectDetails";
import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projectsContent[slug];
    if (!project) return { title: "Proyecto no encontrado" };

    return {
        title: `${project.title} | Ingeproc`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = projectsContent[slug];

    if (!project) {
        notFound();
    }

    return (
        <main className="pt-20">
            <ProjectDetails project={project} />
        </main>
    );
}
