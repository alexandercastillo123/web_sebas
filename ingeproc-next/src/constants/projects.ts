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
    resultText?: string;
    gallery?: string[];
}

export const projectsContent: Record<string, ProjectContent> = {
    "programacion-tta": {
        slug: "programacion-tta",
        title: "Programación de TTA",
        description: "Puesta en marcha del tablero de transferencia automática en edificio Alpina para garantizar energía continua.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/modulo_transferencia_automatica_2244918171.jpg",
        client: "Empresa Constructora / Sector Edificación",
        location: "Surco, Lima",
        year: "2023",
        surfaceArea: "1,200 m2",
        value: "$12,500",
        architect: "Ing. Sebastián García",
        category: "Automatización",
        challenge: "Dificultades técnicas en la integración de tableros y sincronización con el grupo electrógeno existente.",
        solution: "Se implementó una solución de control avanzada para la sincronización de grupos electrógenos y la red eléctrica, asegurando una transferencia sin interrupciones y protegida contra transitorios.",
        results: [
            "Sincronización perfecta entre red y generador.",
            "Automatización total del ciclo de transferencia.",
            "Reducción de tiempos de respuesta en cortes de energía.",
            "Monitoreo remoto del estado del tablero.",
            "Capacitación del personal técnico local.",
            "Garantía operativa de 12 meses."
        ],
        resultText: "El sistema opera actualmente con una eficiencia del 100%, eliminando los riesgos de caída de servicio en situaciones críticas de suministro eléctrico."
    },
    "automatizacion-presion-constante": {
        slug: "automatizacion-presion-constante",
        title: "Automatización del sistema de presión constante",
        description: "Se realizó la automatización del sistema de presión constante en el cuarto de bombas en edificio San Isidro para optimizar el suministro de agua.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/programacion_logo_2178922797.jpg",
        client: "Consorcio Edificaciones / Residencial",
        location: "San Isidro, Lima",
        year: "2023",
        surfaceArea: "2,500 m2",
        value: "$15,800",
        architect: "Ing. Roberto Salazar",
        category: "Automatización",
        challenge: "Optimización del rendimiento hidráulico y control electrónico en un sistema con alta variabilidad de demanda por horas puntas.",
        solution: "Instalación de variadores de frecuencia de última generación coordinados por un PLC central, permitiendo un ajuste preciso de la presión según el consumo real del edificio.",
        results: [
            "Ahorro energético del 35% en el sistema de bombeo.",
            "Presión constante en todos los niveles del edificio.",
            "Reducción del desgaste mecánico de las bombas.",
            "Eliminación de golpes de ariete en la tubería.",
            "Interfaz de usuario intuitiva para supervisión.",
            "Sistema de protecciones eléctricas redundante."
        ],
        resultText: "Gracias a la automatización, el edificio cuenta con un suministro constante y eficiente, reduciendo significativamente los costos de mantenimiento y energía operativa."
    },
    "mantenimiento-predictivo-industrial": {
        slug: "mantenimiento-predictivo-industrial",
        title: "Mantenimiento Predictivo Industrial",
        description: "Análisis técnico preventivo en planta de procesamiento de alimentos para identificar fallas incipientes y evitar paradas no programadas.",
        image: "https://ingeproc.pe/wp-content/uploads/2019/01/blog3.jpg",
        client: "Planta Alimentaria S.A. / Sector Industrial",
        location: "Callao, Lima (Zona Industrial)",
        year: "2023",
        surfaceArea: "12,500 m2",
        value: "$85,000",
        architect: "Ing. Roberto Salazar (Especialista en Mantenimiento)",
        category: "Mantenimiento",
        challenge: "Realizar el diagnóstico completo de motores críticos en línea de producción continua sin posibilidad de paradas, detectando fallas térmicas antes de que ocurran.",
        solution: "Implementamos termografía infrarroja de alta precisión y análisis de vibraciones triaxiales. Se creó un mapa térmico de todos los tableros generales y se identificaron 3 puntos críticos de alta resistencia.",
        results: [
            "Evitadas 2 paradas de planta críticas.",
            "Informe técnico certificado para seguros.",
            "Reducción de riesgos de incendio en un 40%.",
            "Sugerencias de repuestos críticos aceptadas."
        ],
        resultText: "Operaciones garantizadas con los más altos estándares de calidad técnica, asegurando la satisfacción del cliente y la continuidad del servicio industrial."
    },
    "mediciones-de-pozo-tierra": {
        slug: "mediciones-de-pozo-tierra",
        title: "Certificación de Pozo a Tierra",
        description: "Protocolos de pruebas y certificación para INDECI en centro comercial de alto tránsito, garantizando la seguridad de miles de usuarios.",
        image: "https://ingeproc.pe/wp-content/uploads/2022/08/mediciones_electricas_1009078093-300x300.jpg",
        client: "Mall Center / Gran Centro Comercial",
        location: "Santiago de Surco, Lima",
        year: "2023",
        surfaceArea: "45,000 m2",
        value: "$12,400 (Servicio de Certificación)",
        architect: "Ing. Carlos Mendoza (Ingeniero Eléctrico Colegiado)",
        category: "Certificaciones",
        challenge: "Lograr niveles de resistencia eléctrica inferiores a 5 Ohms en un terreno extremadamente árido y rocoso fuera de los estándares normales.",
        solution: "Se realizó una excavación profunda con reposición de tierra de chacra y tratamiento químico intensivo mediante sales conductivas de larga duración. Se instalaron electrodos de cobre puro de alta conductividad.",
        results: [
            "Resistencia final alcanzada: 4.2 Ohms.",
            "Protocolo de pruebas INDECI sellado y firmado.",
            "Sistema de protección contra rayos operativo.",
            "Cumplimiento total con el Código Nacional de Electricidad."
        ],
        resultText: "Certificación obtenida con éxito, garantizando un entorno seguro tanto para los clientes como para las instalaciones eléctricas del centro comercial."
    }
};
