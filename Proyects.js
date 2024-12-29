import { LANGUAGES } from "./src/utils/language.js";

export const PROYECTOS = [
  {
    nombre: "Juego de la memoria",
    descripcion: {
      [LANGUAGES.ESP]:
        "Es un juego de la memoria que presenta 3 niveles de dificultad y permite almacenar en el navegador los usuarios y puntuaciones de los mismos. Presenta un diseño amigable y divertido para todas las edades. ",
      [LANGUAGES.ENG]:
        "It is a memory game that presents 3 levels of difficulty and allows you to store users and scores in the browser. It has a friendly and fun design for all ages.",
    },
    deploy: "https://juego-memoria-neon.vercel.app/",
    github: "https://github.com/ZoeBarrios/JuegoMemoria",
    img: "/proyectos/memoria.png",
    tecnologias: ["Javascript", "HTML", "CSS"],
    color: "#fad3cf",
    icono: "fa-solid fa-brain",
  },

  {
    nombre: "Stoom",
    descripcion: {
      [LANGUAGES.ENG]:
        "Stoom is a platform that allows you to access a catalog of games and access information about them, such as some stores where they are available, their price, etc. In addition, it allows you to create an account and save your favorite games.",
      [LANGUAGES.ESP]:
        "Stoom es una plataforma que permite acceder a un catalogo de juegos y poder acceder a información de los mismos, tal como algunas tiendas en las que se encuentran disponibles, su precio, etc. Ademas, permite crear una cuenta y guardar tus juegos favoritos.",
    },

    deploy: "https://stoom-labo.vercel.app/",
    github: "https://github.com/ZoeBarrios/Stoom",
    img: "/proyectos/stoom.png",
    tecnologias: ["Javascript", "HTML", "CSS", "GitHub", "Upstash"],
    color: "#1e549f",
    icono: "fa-solid fa-gamepad",
  },
  {
    nombre: "Reloj de Ajedrez",
    descripcion: {
      [LANGUAGES.ESP]:
        "Es un reloj de ajedrez hecho en React. Este permite llevar el tiempo de cada jugador. Contamos con varias modalidades para poder calcular el tiempo de cada jugador, ademas podes guardar el reloj y volver a cargarlo cuando quieras.",
      [LANGUAGES.ENG]:
        "It is a chess clock made in React. This allows you to keep track of each player's time. We have several modalities to be able to calculate the time of each player, you can also save the clock and reload it whenever you want.",
    },
    deploy: "https://chess-clock-lac.vercel.app/",
    github: "https://github.com/ZoeBarrios/chess-clock",
    img: "/proyectos/ajedrez.png",
    tecnologias: ["React", "HTML", "CSS"],
    color: "#606470",
    icono: "fa-solid fa-chess",
  },
  {
    nombre: "MyGif",
    descripcion: {
      [LANGUAGES.ESP]:
        "Es una aplicación hecha en React que permite buscar y guardar gifs. Ademas, permite crear una cuenta y guardar tus gifs favoritos. Para la persistencia de datos se utilizo Upstash.",
      [LANGUAGES.ENG]:
        "It is an application made in React that allows you to search and save gifs. In addition, it allows you to create an account and save your favorite gifs. Upstash was used for data persistence.",
    },
    deploy: "https://my-gif.vercel.app/",
    github: "https://github.com/ZoeBarrios/MyGif",
    img: "/proyectos/mygif.png",
    tecnologias: ["React", "TypeScript", "Tailwind", "Upstash"],
    color: "#f8da5b",
    icono: "fa-solid fa-video",
  },
  {
    nombre: "Contraseñas aleatorias",
    descripcion: {
      [LANGUAGES.ESP]:
        "Es una aplicación hecha en React que permite generar contraseñas aleatorias. Ademas, permite copiar la contraseña generada al portapapeles. Permite también elegir el largo de la contraseña y que caracteres incluir, teniendo la posibilidad de simultaneamente medir la seguridad de tus propias contraseñas.",
      [LANGUAGES.ENG]:
        "It is an application made in React that allows you to generate random passwords. In addition, it allows you to copy the generated password to the clipboard. It also allows you to choose the length of the password and which characters to include, having the possibility of in turn measuring the security of your own passwords.",
    },
    deploy: "https://password-generator-mauve-tau.vercel.app/",
    github: "https://github.com/ZoeBarrios/password-generator",
    img: "/proyectos/password.png",
    tecnologias: ["React", "HTML", "CSS"],
    color: "#afc5ff",
    icono: "fa-solid fa-key",
  },
  {
    nombre: "MarketHub",
    descripcion: {
      [LANGUAGES.ESP]:
        "Es una aplicación hecha en React y ASP.NET WEB API que te permite crear, comprar y vender productos. Con MarketHub, puedes explorar una amplia variedad de productos,ademas de poder vender tus propios productos sin necesidad de tener una tienda física.",
      [LANGUAGES.ENG]:
        "It is an application made in React and ASP.NET WEB API that allows you to create, buy and sell products. With MarketHub, you can explore a wide variety of products, as well as sell your own products without the need for a physical store.",
    },
    img: "/proyectos/markethub.png",
    github: "https://github.com/ZoeBarrios/MarketHub",
    tecnologias: ["React", "HTML", "CSS", "ASP.NET", "JWT", "SQL SERVER"],
    color: "#fecea8",
    icono: "fa-solid fa-shopping-cart",
  },
  {
    nombre: "Adoptando Sonrisas",
    descripcion: {
      [LANGUAGES.ESP]:
        "Adoptando Sonrisas se centró en la creación de una plataforma que facilitara el proceso de adopción para diversas organizaciones locales. Esta plataforma permite el registro de organizaciones, ofreciendo una solución integral que organiza la información tanto para potenciales adoptantes como para las propias organizaciones, que pueden gestionar sus actividades diarias desde un único lugar.",
      [LANGUAGES.ENG]:
        "Adoptando Sonrisas focused on creating a platform that would facilitate the adoption process for various local organizations. This platform allows the registration of organizations, offering a comprehensive solution that organizes information for both potential adopters and the organizations themselves, which can manage their daily activities from a single place.",
    },
    img: "/proyectos/adoptando.png",
    github: "https://github.com/ZoeBarrios/AdoptandoSonrisas",
    deploy: "https://adoptando-sonrisas.vercel.app/",
    tecnologias: ["React", "Tailwind", "JWT", "MySQL", "Node", "Figma"],
    color: "orange",
    icono: "fa-solid fa-paw",
  },
  {
    nombre: "LeandroDapello",
    descripcion: {
      [LANGUAGES.ESP]:
        "LeandroDapello es la empresa en la que actualmente trabajo. Es una empresa de desarrollo de software que se dedica a la creación de aplicaciones principalmente de gestión. En esta empresa, he tenido la oportunidad de trabajar en varios proyectos, tanto en el front-end como en el back-end.",
      [LANGUAGES.ENG]:
        "LeandroDapello is the company where I currently work. It is a software development company that is dedicated to creating mainly management applications. In this company, I have had the opportunity to work on several projects, both on the front-end and on the back-end.",
    },
    img: "/proyectos/pc.png",
    deploy: "https://leandrodapello.com/",
    tecnologias: ['Bootstrap', "MySQL", "Node", 'Javascript', 'HTML', 'CSS', `SQL SERVER`],
    color: "#93deff",
    icono: "fa-solid fa-laptop-code",
  },
]

