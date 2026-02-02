export interface ServiceContent {
    slug: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    features: string[];
}

export const servicesContent: Record<string, ServiceContent> = {
    "mantenimiento-preventivo": {
        slug: "mantenimiento-preventivo",
        name: "Mantenimiento Preventivo",
        shortDescription: "Evite fallas inesperadas y prolongue la vida útil de sus equipos.",
        fullDescription: "El mantenimiento preventivo consiste en intervenciones programadas para reducir la probabilidad de falla o la degradación del funcionamiento de un equipo. En Ingeproc, realizamos inspecciones minuciosas, limpieza, lubricación y ajustes necesarios para asegurar que su infraestructura eléctrica opere siempre al máximo rendimiento.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg",
        features: [
            "Inspecciones termográficas",
            "Limpieza de tableros y componentes",
            "Pruebas de aislamiento y continuidad",
            "Ajuste de conexiones eléctricas",
            "Informes técnicos detallados"
        ]
    },
    "mantenimiento-correctivo": {
        slug: "mantenimiento-correctivo",
        name: "Mantenimiento Correctivo",
        shortDescription: "Soluciones rápidas y efectivas ante fallas eléctricas críticas.",
        fullDescription: "Nuestro servicio de mantenimiento correctivo está diseñado para actuar de manera inmediata ante cualquier avería o mal funcionamiento en sus sistemas eléctricos. Contamos con personal altamente calificado y herramientas de última generación para diagnosticar y reparar fallas, minimizando los tiempos de inactividad de su operación.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog2.jpg",
        features: [
            "Atención de emergencias 24/7",
            "Diagnóstico preciso de fallas",
            "Reparación y reemplazo de componentes",
            "Pruebas de puesta en marcha post-reparación",
            "Asesoría para evitar recurrencia"
        ]
    },
    "fabricacion-de-tableros": {
        slug: "fabricacion-de-tableros",
        name: "Fabricación e Integración de Tableros",
        shortDescription: "Diseño y montaje de tableros eléctricos bajo normas internacionales.",
        fullDescription: "Diseñamos y fabricamos tableros eléctricos de distribución, control, transferencia automática y bancos de condensadores. Utilizamos componentes de las mejores marcas del mercado (ABB, Schneider, Eaton) para garantizar la seguridad, durabilidad y eficiencia de cada tablero que entregamos.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/02/blog9.jpg",
        features: [
            "Tableros de distribución general",
            "Centros de Control de Motores (CCM)",
            "Tableros de Transferencia Automática",
            "Bancos de Condensadores",
            "Planos y certificación bajo norma"
        ]
    },
    "suministro-de-equipos": {
        slug: "suministro-de-equipos",
        name: "Suministro Equipos Eléctricos y Mecánicos",
        shortDescription: "Equipamiento de alta calidad para sus proyectos de ingeniería.",
        fullDescription: "Ofrecemos una amplia gama de equipos eléctricos y mecánicos de marcas líderes. Desde transformadores y grupos electrógenos hasta UPS y sistemas de iluminación industrial. Nuestro equipo de ingeniería le asesora en la selección del equipo más adecuado para sus necesidades técnicas y presupuestarias.",
        image: "https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/11/12.jpg",
        features: [
            "Transformadores de potencia",
            "Grupos electrógenos",
            "Sistemas UPS y estabilizadores",
            "Luminarias industriales LED",
            "Repuestos y accesorios originales"
        ]
    },
    "infraestructura": {
        slug: "infraestructura",
        name: "Infraestructura",
        shortDescription: "Desarrollo de proyectos de infraestructura eléctrica y electromecánica.",
        fullDescription: "Contamos con la experiencia y capacidad logística para ejecutar proyectos de infraestructura eléctrica a gran escala. Desde el montaje de subestaciones hasta el tendido de redes de baja y media tensión, aseguramos una ejecución impecable cumpliendo con todos los plazos y estándares de seguridad vigentes.",
        image: "https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/11/15.jpg",
        features: [
            "Montaje de subestaciones",
            "Tendido de bandejas y canalizaciones",
            "Instalaciones eléctricas industriales",
            "Sistemas de puesta a tierra",
            "Mantenimiento de infraestructura"
        ]
    },
    "mediciones-electricas": {
        slug: "mediciones-electricas",
        name: "Mediciones Eléctricas",
        shortDescription: "Análisis y diagnóstico del estado de sus instalaciones eléctricas.",
        fullDescription: "Realizamos mediciones eléctricas precisas para evaluar la calidad de energía, el estado de los sistemas de puesta a tierra y la integridad del aislamiento. Estas mediciones son fundamentales para el cumplimiento de normativas de seguridad (Indeci, OSINERGMIN) y para la optimización del consumo energético.",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093.jpg",
        features: [
            "Medición de resistencia de pozo a tierra",
            "Análisis de calidad de energía",
            "Megado de cables y motores",
            "Certificados con protocolos firmados",
            "Estudios de carga y factor de potencia"
        ]
    }
};
