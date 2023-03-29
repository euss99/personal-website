import type { Translation } from "@/types/translationTypes";

const translations: { en: Translation; es: Translation } = {
  en: {
    navbar: {
      link1: "Init",
      link2: "Projects",
      link3: "Contact",
    },
    heroSection: {
      title: "I'm Uriel Solís",
      subtitle: "Frontend Developer",
      content: "This is my web Portfolio!",
      button1: "See my projects",
      button2: "Download CV",
    },
    aboutSection: {
      title: "About me",
      content: {
        sectionP1:
          "Hi! I'm Uriel Solis and I currently live in Merida, Yucatan. After years of working in an industry that didn't allow me to explore my creativity and passion for technology, I decided to pursue my dream of becoming a frontend developer. Since then, I have worked on a variety of projects, from small websites to complex mobile applications.",
        sectionP2:
          "My skills include HTML, CSS, JavaScript and frameworks such as React and Vue.js, as well as having a knowledge in UX/UI. I'm always looking to create engaging, user-friendly and effective digital solutions for users..",
        sectionP3:
          "I enjoy working in teams and collaborating with designers, backend developers and other professionals to create innovative digital solutions. My goal is to continue to grow as a frontend developer and work on projects that allow me to apply my skills.",
      },
    },
    skillsSection: {
      title: "Skills",
      titleCard1: "Frontend Development",
      contentCard1:
        "I am a professional trained in adaptive UI/UX design and have experience in developing and managing the user interface of web and mobile applications using a framework such as Vue.js. In addition, I am qualified to perform frontend maintenance to ensure its proper functioning.",
      titleCard2: "Backend Development",
      contentCard2:
        "I am able to design and implement high quality API's and ensure their maintenance over time. In addition, I have a deep knowledge of agile methodologies and their application in development projects, which allows me to work effectively in a team to achieve project goals.",
    },
    educationSection: {
      title: "Education",
      school1: {
        title: "Web Development",
        date: "2019 - 2022",
        school: "Escuela de Desarrollo Web, Platzi",
      },
      school2: {
        title: "Industrial Chemical Engineering",
        date: "2017 - 2022",
        school: "Facultad de Ingeniería Química, UADY",
      },
    },
    experienceSection: {
      title: "Experience",
      jobs: {
        job1: {
          title: "Frontend Developer",
          date: "2023 - Present",
          company: "WAYAKNA SA de CV",
          description: {
            p1: "I developed specialized skills in the creation of web pages using frameworks such as Vue.js. I worked on projects where I was able to develop my expertise in UI/UX design and responsive web page creation.",
            p2: "In addition, I generated experience in the creation and maintenance of API's with Python. My experience in implementing SASS and Bootstrap in projects has allowed me to design websites and web applications with a consistent style and a solid structure.",
            p3: "I improved my ability to conduct meetings with clients to understand their needs and goals in detail and to be able to work closely with multidisciplinary teams and provide quality solutions.",
          },
        },
        job2: {
          title: "Quality Control Supervisor",
          date: "2021 - 2022",
          company: "Productos de harina SA de CV, Dondé",
          description: {
            p1: "In my work experience as a quality supervisor, I was responsible for ensuring that production processes met established quality standards. This included supervising and monitoring processes, performing tests and evaluations, and ensuring compliance with required specifications. In addition, I also gave induction courses to new workers in the company, presenting the company's quality policies and procedures and the tools and techniques used to ensure quality in production.",
          },
        },
        job3: {
          title: "Quality Assistant and Production Area Supervisor",
          date: "2020 - 2021",
          company: "PCP del sureste SA de CV",
          description: {
            p1: "As responsible for production inspection and worker procedures, I supervised and monitored production processes to ensure compliance with quality and safety standards. I implemented and supervised production inspection and equipment cleaning procedures, and worked collaboratively with production personnel, training new workers and overseeing processes to ensure consistency and compliance with procedures. In addition, I maintained detailed records of cleaning procedures to ensure compliance with quality and safety standards. My experience has given me a solid understanding of production processes and effective leadership and organizational skills.",
          },
        },
      },
    },
    footerSection: {
      link1: "Init",
      link2: "Projects",
      link3: "Contact",
      link4: "Email",
      link5: "Linkedin",
      link6: "Social networks",
    },
    contactPage: {
      title: "Let's talk!",
      subtitle:
        "If you are interested in my work or have any questions, do not hesitate to contact me.",
      form: {
        label_name: "Your name",
        name: "Name",
        label_email: "Your email",
        email: "Email",
        label_message: "Message",
        message: "Message",
        button: "Send",
      },
    },
  },
  es: {
    navbar: {
      link1: "Inicio",
      link2: "Proyectos",
      link3: "Contacto",
    },
    heroSection: {
      title: "Soy Uriel Solís",
      subtitle: "Desarrollador Frontend",
      content: "¡Este es mi portafolio web!",
      button1: "Ver proyectos",
      button2: "Descargar CV",
    },
    aboutSection: {
      title: "Acerca de mi",
      content: {
        sectionP1:
          "¡Hola! Soy Uriel Solis y actualmente vivo en Mérida, Yucatán. Tras años de trabajar en una industria que no me permitía explorar mi creatividad y pasión por la tecnología, decidí perseguir mi sueño de convertirme en desarrollador frontend. Desde entonces, he trabajado en diversos proyectos, desde pequeños sitios web hasta complejas aplicaciones móviles.",
        sectionP2:
          "Mis habilidades incluyen HTML, CSS, JavaScript y frameworks como React y Vue.js, además de tener un conocimiento en UX/UI. Siempre busco crear soluciones digitales atractivas, fáciles de usar y efectivas para los usuarios.",
        sectionP3:
          "Me encanta trabajar en equipo y colaborar con diseñadores, desarrolladores backend y otros profesionales para crear soluciones digitales innovadoras. Mi objetivo es seguir creciendo como desarrollador frontend y trabajar en proyectos que me permitan aplicar mis habilidades.",
      },
    },
    skillsSection: {
      title: "Mis habilidades",
      titleCard1: "Desarrollo frontend",
      contentCard1:
        "Soy un profesional capacitado en el diseño UI/UX adaptable y tengo experiencia en el desarrollo y la gestión de la interfaz de usuario de aplicaciones web y móviles utilizando un framework como Vue.js. Además, estoy calificado para realizar mantenimiento frontend para asegurar su funcionamiento adecuado.",
      titleCard2: "Desarrollo backend",
      contentCard2:
        "Soy capaz de diseñar e implementar API's de alta calidad y asegurar su mantenimiento a lo largo del tiempo. Además, tengo un profundo conocimiento de metodologías ágiles y su aplicación en proyectos de desarrollo, lo que me permite trabajar de manera efectiva en un equipo para lograr los objetivos del proyecto.",
    },
    educationSection: {
      title: "Educación",
      school1: {
        title: "Desarrollo web",
        date: "2019 - 2022",
        school: "Escuela de Desarrollo Web, Platzi",
      },
      school2: {
        title: "Ingeniería química industrial",
        date: "2017 - 2022",
        school: "Facultad de Ingeniería Química, UADY",
      },
    },
    experienceSection: {
      title: "Experiencia",
      jobs: {
        job1: {
          title: "Desarrollador frontend",
          date: "2023 - Presente",
          company: "WAYAKNA SA de CV",
          description: {
            p1: "Desarrollé habilidades especializadas en la creación de páginas web utilizando frameworks como Vue.js. Trabajé en proyectos en los que pude desarrollar mi experiencia en el diseño UI/UX y la creación de páginas web responsivas.",
            p2: "Además, generé experiencia en la creación y mantenimiento de API's con Python. Mi experiencia en la implementación de SASS y Bootstrap en proyectos me ha permitido diseñar sitios web y aplicaciones web con un estilo consistente y una estructura sólida.",
            p3: "Mejoré mi capacidad para realizar reuniones con clientes para comprender sus necesidades y metas en detalle y poder trabajar de cerca con equipos multidisciplinarios y brindar soluciones de calidad.",
          },
        },
        job2: {
          title: "Supervisor de control de calidad",
          date: "2021 - 2022",
          company: "Productos de harina SA de CV, Dondé",
          description: {
            p1: "En mi experiencia laboral como supervisor de calidad, fui responsable de asegurar que los procesos de producción cumplieran con los estándares de calidad establecidos. Esto incluyó supervisar y monitorear procesos, realizar pruebas y evaluaciones, y asegurar el cumplimiento de las especificaciones requeridas. Además, también di cursos de inducción a los nuevos trabajadores de la empresa, presentando las políticas y procedimientos de calidad de la empresa y las herramientas y técnicas utilizadas para garantizar la calidad en la producción.",
          },
        },
        job3: {
          title: "Auxiliar de calidad y supervisor de área de producción",
          date: "2020 - 2021",
          company: "PCP del sureste SA de CV",
          description: {
            p1: "Como responsable de la inspección de producción y los procedimientos de los trabajadores, supervisé y monitoreé los procesos de producción para garantizar el cumplimiento de los estándares de calidad y seguridad. Implementé y supervisé los procedimientos de inspección de producción y limpieza de equipos, y trabajé de manera colaborativa con el personal de producción, capacitando a los nuevos trabajadores y supervisando los procesos para garantizar la consistencia y el cumplimiento de los procedimientos. Además, mantuve registros detallados de los procedimientos de limpieza para garantizar el cumplimiento de los estándares de calidad y seguridad. Mi experiencia me ha dado una sólida comprensión de los procesos de producción, habilidades de liderazgo y organización efectivas.",
          },
        },
      },
    },
    footerSection: {
      link1: "Inicio",
      link2: "Proyectos",
      link3: "Contacto",
      link4: "Correo",
      link5: "LinkedIn",
      link6: "Redes sociales",
    },
    contactPage: {
      title: "¡Hablemos!",
      subtitle:
        "Si está interesado en mi trabajo o tiene alguna pregunta, no dude en contactarme.",
      form: {
        label_name: "Tu nombre",
        name: "Nombre",
        label_email: "Tu correo electrónico",
        email: "Correo electrónico",
        label_message: "Mensaje",
        message: "Contenido",
        button: "Enviar",
      },
    },
  },
};

export default translations;
