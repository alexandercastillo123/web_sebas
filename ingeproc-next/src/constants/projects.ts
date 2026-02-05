export interface ProjectContent {
    slug: string;
    title: string;
    description: string;
    image: string;
    client: string;
    location: string;
    year: string;
    surfaceArea?: string;
    value?: string;
    architect?: string;
    category: string;
    challenge?: string;
    solution?: string;
    results?: string[];
    gallery?: string[];
}

export const projectsContent: Record<string, ProjectContent> = {
    "programacion-tta": {
        slug: "programacion-tta",
        title: "Programación de TTA",
        description: "Puesta en marcha del tablero de transferencia automática en edificio Alpina.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/modulo_transferencia_automatica_2244918171.jpg",
        client: "Edificio Alpina",
        location: "Lima, Perú",
        year: "2022",
        category: "Automatización",
        challenge: "Asegurar la continuidad del flujo eléctrico mediante la conmutación automática entre la red pública y el grupo electrógeno en menos de 10 segundos.",
        solution: "Se implementó un controlador de transferencia de última generación con programación lógica personalizada para priorizar cargas críticas.",
        results: [
            "Conmutación exitosa en 8 segundos.",
            "Certificación de operatividad al 100%.",
            "Capacitación al personal de mantenimiento del edificio."
        ]
    },
    "mantenimiento-predictivo-industrial": {
        slug: "mantenimiento-predictivo-industrial",
        title: "Mantenimiento Predictivo Industrial",
        description: "Análisis técnico preventivo en planta de procesamiento de alimentos.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg",
        client: "Planta Alimentaria S.A.",
        location: "Callao, Perú",
        year: "2023",
        category: "Mantenimiento",
        challenge: "Identificar fallas incipientes en motores críticos sin detener la línea de producción 24/7.",
        solution: "Uso de termografía infrarroja de alta resolución y análisis de vibraciones mecánicas.",
        results: [
            "Detección de 3 puntos calientes críticos en tableros principales.",
            "Ahorro estimado de $15,000 en reparaciones de emergencia.",
            "Extensión de vida útil de motores en un 15%."
        ]
    },
    "mediciones-de-pozo-tierra": {
        slug: "mediciones-de-pozo-tierra",
        title: "Certificación de Pozo a Tierra",
        description: "Protocolos de pruebas y certificación para INDECI en centro comercial.",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093-300x300.jpg",
        client: "Mall Center",
        location: "Surco, Lima",
        year: "2023",
        category: "Certificaciones",
        challenge: "Obtener valores de resistencia inferiores a 5 Ohms en un terreno de alta resistividad.",
        solution: "Tratamiento químico del suelo y mantenimiento profundo del electrodo de cobre.",
        results: [
            "Resistencia final alcanzada: 4.2 Ohms.",
            "Emisión exitosa de certificado firmado por ingeniero colegiado.",
            "Aprobación de inspección técnica INDECI."
        ]
    }
};
