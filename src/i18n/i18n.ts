import type { Translation } from "@/types/translationTypes";

const translations: { en: Translation; es: Translation } = {
  en: {
    navbar: {
      link1: "Home",
      link2: "Projects",
      link3: "Contact",
      routePath: "/Resume-EfrainUrielSolisSalinas.pdf",
    },
    heroSection: {
      title: "I'm Uriel Solís",
      subtitle: "FullStack Developer",
      content: "This is my web Portfolio!",
      button1: "See my projects",
      button2: "Download CV",
    },
    aboutSection: {
      title: "About me",
      content: {
        sectionP1:
          "Hi! I'm Uriel Solis and I currently live in Merida, Yucatan. After years of working in an industry that didn't allow me to explore my creativity and passion for technology, I decided to pursue my dream of becoming a fullstack developer. Since then, I have worked on a variety of projects, from small websites to complex mobile applications.",
        sectionP2:
          "My skills include HTML, CSS, JavaScript and frameworks such as React and Vue.js, as well as having a knowledge in UX/UI. I'm always looking to create engaging, user-friendly and effective digital solutions for users..",
        sectionP3:
          "I enjoy working in teams and collaborating with designers, backend developers and other professionals to create innovative digital solutions. My goal is to continue to grow as a fullstack developer and work on projects that allow me to apply my skills.",
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
      title: "Experiencia",
      jobs: {
        job1: {
          title: "Freelance Frontend Developer",
          date: "May. 2023 - Present",
          company: "Personal project",
          description: {
            p1: "I used Vue.js and JavaScript to create an application, optimizing performance with specific Vue.js libraries. I worked in a team, collaborating closely with a UI/UX designer, and we used Astro to develop the landing page. We implemented Git Flow and SCRUM for efficient project management. In addition, I integrated the frontend with the backend through an API, and used tools such as SASS and Tailwind CSS to improve the styles and design of the project.",
          },
        },
        job2: {
          title: "FullStack Developer",
          date: "Feb. 2022 - Jul. 2023",
          company: "Original Protostar Marketing",
          description: {
            p1: "Determined technologies such as Vue.js, React, Next.js to create websites according to client requirements. I collaborated with the web design team and provided support in the creation of APIs with Node.js and Express in the backend. In addition, I performed database analysis using MongoDB. I coded, designed, and laid out websites according to company specifications, providing ongoing support and maintenance. Focused on providing an excellent user experience, I acquired skills in UI/UX.",
          },
        },
        job3: {
          title: "Frontend Developer",
          date: "Ago. 2022 - Feb. 2023",
          company: "WAYAKNA SA de CV",
          description: {
            p1: "I acquired skills in the creation of web pages with Vue.js and in the design of responsive user interfaces (UI/UX). Experience in creating and maintaining API's with Python. Use of SASS and Bootstrap to design websites and web applications. Ability to conduct client meetings, work in multidisciplinary teams and deliver quality solutions. Committed to excellence and exceptional results.",
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
    projectsPage: {
      title: "Projects",
      description: "Every project is a unique piece of development 🧩",
      projects: {
        project1: {
          title: "Cashflow 💰",
          description:
            "Expense tracking web application, allows users to register and categorize their expenses, view interactive graphs of their expenses and thus be able to track their expenses and income and be more aware of their finances.",
        },
        project2: {
          title: "Catstagram 🐱",
          description:
            "Project developed with a framework that displays images of cats obtained from an API. The application is responsive and updates automatically every time the page is loaded.",
        },
        project3: {
          title: "Flappy Bird 🐦",
          description:
            "Game where the goal is to guide a bird through a series of pipes without crashing into them, clicking on the screen to make the bird fly and release to make it fall. The ultimate goal is to advance as far as possible in the game.",
        },
        project4: {
          title: "Weather App 🌤",
          description:
            "Application that allows to know the current weather of a specific place in the world. To obtain the weather data, the OpenWeatherMap API is used.",
        },
        project5: {
          title: "Super Runner 🎮",
          description:
            "Game that consists of a character must overcome obstacles and reach the end of the level. The player controls him with the keyboard and if he hits an obstacle, he loses and must start over.",
        },
        project6: {
          title: "Calculadora básica ➕",
          description:
            "The calculator is capable of performing basic mathematical operations, such as addition, subtraction, multiplication and division. It has a reset button that allows you to clear the current result and start over.",
        },
      },
      code: "Code",
      demo: "Live demo",
    },
  },
  es: {
    navbar: {
      link1: "Inicio",
      link2: "Proyectos",
      link3: "Contacto",
      routePath: "/CV-EfrainUrielSolisSalinas.pdf",
    },
    heroSection: {
      title: "Soy Uriel Solís",
      subtitle: "Desarrollador FullStack",
      content: "¡Este es mi portafolio web!",
      button1: "Ver proyectos",
      button2: "Descargar CV",
    },
    aboutSection: {
      title: "Acerca de mi",
      content: {
        sectionP1:
          "¡Hola! Soy Uriel Solis y actualmente vivo en Mérida, Yucatán. Tras años de trabajar en una industria que no me permitía explorar mi creatividad y pasión por la tecnología, decidí perseguir mi sueño de convertirme en desarrollador fullstack. Desde entonces, he trabajado en diversos proyectos, desde pequeños sitios web hasta complejas aplicaciones móviles.",
        sectionP2:
          "Mis habilidades incluyen HTML, CSS, JavaScript y frameworks como React y Vue.js, además de tener un conocimiento en UX/UI. Siempre busco crear soluciones digitales atractivas, fáciles de usar y efectivas para los usuarios.",
        sectionP3:
          "Me encanta trabajar en equipo y colaborar con diseñadores, desarrolladores backend y otros profesionales para crear soluciones digitales innovadoras. Mi objetivo es seguir creciendo como desarrollador fullstack y trabajar en proyectos que me permitan aplicar mis habilidades.",
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
          title: "Freelance Frontend Developer",
          date: "May. 2023 - Presente",
          company: "Proyecto personal",
          description: {
            p1: "Utilicé Vue.js y JavaScript para crear una aplicación, optimizando el rendimiento con bibliotecas específicas de Vue.js. Trabajé en equipo, colaborando estrechamente con un diseñador UI/UX, y utilizamos Astro para desarrollar la landing page. Implementamos Git Flow y SCRUM para una gestión eficiente del proyecto. Además, integré el frontend con el backend mediante una API, y utilicé herramientas como SASS y Tailwind CSS para mejorar los estilos y el diseño del proyecto.",
          },
        },
        job2: {
          title: "FullStack Developer",
          date: "Feb. 2022 - Jul. 2023",
          company: "Original Protostar Marketing",
          description: {
            p1: "Determiné tecnologías como Vue.js, React, Next.js para crear sitios web según requerimientos del cliente. Colaboré con el equipo de diseño web y brindé apoyo en la creación de APIs con Node.js y Express en el backend. Además, realicé análisis de bases de datos utilizando MongoDB. Codifiqué, diseñé y maqueté sitios web según especificaciones de la empresa, brindando asistencia y mantenimiento continuo. Enfocado en proporcionar una excelente experiencia de usuario, adquirí habilidades en UI/UX.",
          },
        },
        job3: {
          title: "Frontend Developer",
          date: "Ago. 2022 - Feb. 2023",
          company: "WAYAKNA SA de CV",
          description: {
            p1: "Adquirí habilidad en la creación de páginas web con Vue.js y en el diseño de interfaces de usuario (UI/UX) responsivas. Experiencia en la creación y mantenimiento de API's con Python. Uso de SASS y Bootstrap para diseñar sitios y aplicaciones web. Capacidad para realizar reuniones con clientes, trabajar en equipos multidisciplinarios y ofrecer soluciones de calidad. Comprometido con la excelencia y resultados excepcionales.",
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
    projectsPage: {
      title: "Proyectos",
      description: "Cada proyecto es una pieza única de desarrollo 🧩",
      projects: {
        project1: {
          title: "Cashflow 💰",
          description:
            "Aplicación web de seguimiento de gastos, permite a los usuarios registrar y categorizar sus gastos, ver gráficos interactivos de sus gastos y así poder tener un seguimiento respecto a sus egresos e ingresos y ser más consientes respecto a su economía.",
        },
        project2: {
          title: "Catstagram 🐱",
          description:
            "Proyecto desarrollado con un framework que muestra imágenes de gatos obtenidas de una API. La aplicación es responsiva y se actualiza automáticamente cada vez que se carga la página.",
        },
        project3: {
          title: "Flappy Bird 🐦",
          description:
            "Juego donde el objetivo es guiar a un pájaro a través de una serie de tuberías sin chocar contra ellas, haciendo clic en la pantalla para que el pájaro vuele y soltar para que caiga. El objetivo final es avanzar lo más posible en el juego.",
        },
        project4: {
          title: "Weather App 🌤",
          description:
            "Aplicación que permite conocer el clima actual de un lugar específico en el mundo. Para obtener los datos del clima, se utiliza la API de OpenWeatherMap.",
        },
        project5: {
          title: "Super Runner 🎮",
          description:
            "Juego que consiste en un personaje debe superar obstáculos y llegar al final del nivel. El jugador lo controla con el teclado y si choca con un obstáculo, pierde y debe empezar de nuevo.",
        },
        project6: {
          title: "Calculadora básica ➕",
          description:
            "La calculadora es capaz de realizar operaciones básicas de matemáticas, como la suma, resta, multiplicación y división. Dispone de un botón de reinicio que permite borrar el resultado actual y empezar de nuevo.",
        },
      },
      code: "Código",
      demo: "Ver demo",
    },
  },
};

export default translations;
