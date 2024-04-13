import img1 from "@/assets/pages/services/img1.png";
import img2 from "@/assets/pages/services/img2.png";
import img3 from "@/assets/pages/services/img3.png";
import img4 from "@/assets/pages/services/img4.png";
import softwareArchitectureLogo from "@/assets/pages/services/[serviceId]/software-architecture.png";
import appDevelopmentLogo from "@/assets/pages/services/[serviceId]/app-development.png";
import aiAndDataScienceLogo from "@/assets/pages/services/[serviceId]/ai-and-data-science.png";
import designAndDigitalPresenceLogo from "@/assets/pages/services/[serviceId]/design-and-digital-presence.png";

export const services = [
  {
    id: "arquitectura-de-software",
    title: "Arquitectura de Software",
    description: null,
    imgSrc: img1,
    logo: softwareArchitectureLogo,
    content: [
      {
        title: "Arquitectura de software",
        description:
          "Contamos con experiencia en arquitectura de microservicios, arquitectura orientada a servicios, y patrones como Modelo-Vista-Controlador.",
      },
      {
        title: "Arquitectura de la nube",
        description:
          "Podemos diseñar, desplegar, y gestionar proyectos en Amazon Web Services y Google Cloud Platform.",
      },
      {
        title: "Modelado de Datos",
        description:
          "Manejamos modelado de datos para bases de datos relacionales, almacenamiento de documentos, y mapeo de alto rendimiento.",
      },
    ],
  },
  {
    id: "desarrollo-de-aplicaciones",
    title: "Desarrollo de Aplicaciones",
    description:
      "Podemos desarrollar y desplegar APIs para uso interno en sistemas con arquitectura de microservicios, y para uso externo para brindar servicios web a terceros. Manejamos la autenticación, la interfaz de la capa de datos, la lógica de las reglas comerciales, la documentación, la implementación y la disponibilidad y el monitoreo del rendimiento.",
    imgSrc: img2,
    logo: appDevelopmentLogo,
    content: [
      {
        title: "Desarrollo de Aplicaciones Web",
        description:
          "Nuestra capacidad de diseñar soluciones enfocadas en aplicaciones web nos convierte en un gran aliado para ayudar a crecer su negocio o servicio. Desarrollamos aplicaciones web en la nube totalmente soportadas por servicios como Google Cloud y AWS.",
      },
      {
        title: "Ingeniería de Software",
        description:
          "Estamos muy comprometidos con la construcción de nuestros productos y basados en nuestra experiencia e ingenio aplicamos técnicas novedosas y eficientes para el desarrollo e implementación de soluciones.",
      },
      {
        title: "Integración de APIs",
        description:
          "Tenemos amplia experiencia implementando integraciones con APIs externos, públicos y privados, via REST y SOAP. Hemos realizado integraciones de APIs para suministración de datos y para gestión de procesamiento.",
      },
    ],
  },
  {
    id: "inteligencia-artificial-y-ciencia-de-datos",
    title: "Inteligencia Artificial y Ciencia de Datos",
    description: null,
    imgSrc: img3,
    logo: aiAndDataScienceLogo,
    content: [
      {
        title: "Ciencia de Datos",
        description:
          "Realizamos análisis estadísticos avanzados, explorando bancos de datos de manera científica para soportar decisiones fundamentadas por evidencia.",
      },
      {
        title: "Ingeniería de Datos",
        description:
          "Podemos diseñar e implementar soluciones para ingerir, transformar, procesar, y analizar datos con alto rendimiento y escalamiento.",
      },
      {
        title: "Aplicación de Aprendizaje Automático",
        description:
          "Tenemos capacidades en procesamiento de lenguaje natural, predicción, clasificación, y análisis de datos estructurados e inestructurados.",
      },
      {
        title: "Inteligencia Artificial Generativa",
        description:
          "Estamos a la vanguardia en la comprensión, desarrollo y aplicación de herramientas de uso interactivo o programático, que aportarán importantes avances en inteligencia y conocimiento a sus soluciones.",
      },
    ],
  },
  {
    id: "diseño-y-presencia-digital",
    title: "Diseño y Presencia Digital",
    description: null,
    imgSrc: img4,
    logo: designAndDigitalPresenceLogo,
    content: [
      {
        title: "Estrategia y presencia en redes sociales",
        description:
          "Implementamos la creación de contenido atractivo con fotografía y videos para mejorar tu presencia digital y aumentar el engagement, con una gestión efectiva de redes sociales y optimización SEO. Además, analizamos los resultados para mejorar las campañas en redes sociales.",
      },
      {
        title: "Diseño UI/UX",
        description:
          "Diseñamos interfaces de usuario centradas en el usuario, con un enfoque en la usabilidad y la accesibilidad.",
      },
      {
        title: "Diseño Gráfico",
        description:
          "Creamos una imagen de marca consistente y memorable, alineada con los valores de la marca. Nuestro proceso creativo va desde la creación del logotipo, hasta la implementación de la identidad visual en materiales de marketing y lo necesario en packaging y todo lo que necesita la presencia visual de la marca.",
      },
    ],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  title: string;
  description: string | null;
  imgSrc: ImageMetadata;
  logo: ImageMetadata;
  content: Array<{
    title: string;
    description: string;
  }>;
}>;
