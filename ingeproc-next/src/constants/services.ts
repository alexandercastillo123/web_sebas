export interface ServiceSubItem {
    label: string;
    items?: string[];
}

export interface ServiceContent {
    slug: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    features: string[];
    detailedContent?: ServiceSubItem[];
}

export const servicesContent: Record<string, ServiceContent> = {
    "mantenimiento-predictivo": {
        slug: "mantenimiento-predictivo",
        name: "Mantenimiento Predictivo",
        shortDescription: "Detección anticipada de anomalías mediante tecnología avanzada.",
        fullDescription: "El mantenimiento predictivo utiliza herramientas de diagnóstico no invasivas para detectar fallas incipientes antes de que ocurran, permitiendo una planificación eficiente y evitando paradas no programadas.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg",
        features: ["Análisis de Calidad de Energía", "Termografía Infrarroja", "Análisis de Vibraciones"],
        detailedContent: [
            {
                label: "Calidad de energía detección de anomalías en Red",
                items: ["Dips", "Sags", "Swells", "Interrupciones"]
            },
            {
                label: "Análisis de vibraciones",
                items: ["Desbalance mecánico", "Rodamientos defectuosos", "Correas defectuosas", "Desalineación", "Soltura mecánica"]
            },
            {
                label: "Termografía infrarroja para equipos rotativos, eléctricos y calderas",
                items: ["Puntos eléctricos calientes", "Desbalance de fases", "Sulfatado de contactos", "Filtraciones"]
            }
        ]
    },
    "mantenimiento-preventivo": {
        slug: "mantenimiento-preventivo",
        name: "Mantenimiento Preventivo",
        shortDescription: "Revisiones periódicas para asegurar la continuidad operativa.",
        fullDescription: "Nuestro plan de mantenimiento preventivo integral asegura que sus equipos e infraestructuras eléctricas funcionen bajo condiciones óptimas, reduciendo el desgaste y minimizando riesgos de interrupción.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog2.jpg",
        features: ["Subestaciones de potencia", "Tableros de baja tensión", "Bombas contra incendio"],
        detailedContent: [
            { label: "Subestaciones de potencia" },
            { label: "Celdas de transformación" },
            { label: "Sistema de puesta a tierra" },
            { label: "Tableros de baja tensión" },
            { label: "Banco de condensadores" },
            { label: "Electrobombas verticales, horizontales, sumergibles" },
            { label: "Grupos electrógenos" },
            { label: "Bombas contra incendio listadas" },
            { label: "Bombas contra incendio convencionales" },
            { label: "Climatización" },
            { label: "Central de alarma contra incendio" }
        ]
    },
    "mantenimiento-correctivo": {
        slug: "mantenimiento-correctivo",
        name: "Mantenimiento Correctivo",
        shortDescription: "Acción inmediata para el restablecimiento de sistemas fallidos.",
        fullDescription: "Brindamos soluciones rápidas y efectivas para la reparación de fallas críticas en sistemas eléctricos y electromecánicos, asegurando el retorno a la operatividad en el menor tiempo posible.",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093.jpg",
        features: ["Reparación de Transformadores", "Pozos a Tierra", "Transferencia Automática"],
        detailedContent: [
            { label: "Subestaciones de potencia" },
            {
                label: "Celdas de transformación",
                items: ["Transformadores secos", "Transformadores con aceite"]
            },
            { label: "Pozos a tierra" },
            { label: "Tableros de baja tensión" },
            { label: "Tableros de transferencia automática" },
            { label: "Banco de condensadores" },
            { label: "Electrobombas verticales, horizontales, sumergibles" },
            { label: "Grupos electrógenos" },
            { label: "Bombas contra incendio normadas" },
            { label: "Ventilación forzada" },
            { label: "Central de alarma contra incendio" }
        ]
    },
    "planos-electricos": {
        slug: "planos-electricos",
        name: "Elaboración de Planos Eléctricos",
        shortDescription: "Documentación técnica precisa para proyectos industriales y comerciales.",
        fullDescription: "Desarrollamos ingeniería de detalle y levantamiento de planos eléctricos conforme a la normativa vigente, facilitando procesos de certificación INDECI y ejecución de obras.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/02/blog9.jpg",
        features: ["Plantas Industriales", "Levantamiento INDECI", "Edificios Comerciales"],
        detailedContent: [
            { label: "Edificios comerciales" },
            { label: "Viviendas residenciales" },
            { label: "Plantas industriales" },
            { label: "Levantamiento de planos para INDECI" }
        ]
    },
    "mediciones-electricas": {
        slug: "mediciones-electricas",
        name: "Mediciones Eléctricas",
        shortDescription: "Certificación y diagnóstico de parámetros eléctricos críticos.",
        fullDescription: "Realizamos protocolos de medición certificados para evaluar la seguridad y eficiencia de sus instalaciones, garantizando el cumplimiento de estándares nacionales e internacionales.",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093.jpg",
        features: ["Resistividad de Pozo", "Rigidez Dieléctrica", "Aislamiento"],
        detailedContent: [
            { label: "Medición calidad de energía" },
            { label: "Medición de aislamiento" },
            { label: "Medición resistividad de pozo" },
            { label: "Medición de resistividad del suelo" },
            { label: "Pruebas de relación de transformación" },
            { label: "Prueba de rigidez dieléctrica" },
            { label: "Medición de vibraciones" },
            { label: "Medición de alineamiento" }
        ]
    },
    "metal-mecanica": {
        slug: "metal-mecanica",
        name: "Trabajos en Metal Mecánica",
        shortDescription: "Fabricación de estructuras y tableros con altos estándares de calidad.",
        fullDescription: "Contamos con maestranza especializada para la fabricación de gabinetes, estructuras metálicas y sistemas de ventilación en diversos materiales como acero negro e inoxidable.",
        image: "https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/11/12.jpg",
        features: ["Tableros Eléctricos", "Ventilación Forzada", "Estructuras Metálicas"],
        detailedContent: [
            { label: "Fabricación de tableros eléctricos" },
            {
                label: "Equipos de ventilación forzada",
                items: ["Extractores e inyectores de aire", "Ductos de ventilación"]
            },
            {
                label: "Estructuras metálicas",
                items: ["Acero negro", "Acero inoxidable"]
            },
            { label: "Gabinetes contra incendio" }
        ]
    },
    "automatizacion": {
        slug: "automatizacion",
        name: "Programación y Automatización",
        shortDescription: "Optimización de procesos mediante control inteligente.",
        fullDescription: "Implementamos sistemas de control avanzados utilizando PLC, variadores y módulos inteligentes para mejorar la eficiencia operativa y la seguridad de sus sistemas.",
        image: "https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/11/15.jpg",
        features: ["Programación PLC", "Variadores de Frecuencia", "Transferencia Automática"],
        detailedContent: [
            { label: "Variadores de frecuencia" },
            { label: "Relé programable" },
            { label: "PLC" },
            { label: "Pirómetros" },
            { label: "Analizadores multifunción" },
            { label: "Módulos de transferencia" },
            { label: "Arrancadores suaves" },
            { label: "Panel contra incendio" }
        ]
    },
    "suministro-electrico": {
        slug: "suministro-electrico",
        name: "Suministro de Tableros y Equipos Eléctricos",
        shortDescription: "Equipamiento eléctrico de marcas líderes para sus proyectos.",
        fullDescription: "Proveemos componentes eléctricos, electrónicos y ferretería técnica garantizando suministros de alta calidad y soporte especializado para su instalación.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog9.jpg",
        features: ["Tableros de Distribución", "Ferretería Eléctrica", "Componentes de Control"],
        detailedContent: [
            { label: "Tableros eléctricos de distribución" },
            { label: "Tableros eléctricos de control" },
            { label: "Interruptores, contactores, variadores, medidores, etc." },
            { label: "Ferretería eléctrica en general" }
        ]
    },
    "obras-civiles": {
        slug: "obras-civiles",
        name: "Obras Civiles",
        shortDescription: "Construcción y acondicionamiento de infraestructura técnica.",
        fullDescription: "Ejecutamos proyectos de construcción civil orientados al soporte de infraestructura eléctrica, tales como cimentaciones, cisternas y acabados técnicos.",
        image: "https://expert-themes.com/newwp/emarat/wp-content/uploads/2020/11/12.jpg",
        features: ["Sistemas Drywall", "Losa de Cimentación", "Muros de Contención"],
        detailedContent: [
            { label: "Concreto armado" },
            { label: "Cisternas de agua" },
            { label: "Muros de contención" },
            { label: "Losas de cimentación" },
            { label: "Drywall" }
        ]
    }
};
