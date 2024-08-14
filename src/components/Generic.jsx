export const Title = ({ text, id }) => {
    return (
        <h2 className="subtitle" id={id}>
            {text}
        </h2>
    );
};

export const Stacks = ({ color, img }) => {
    const colorShadow = {
        boxShadow: `0px 0px 10px 0px ${color}`,
    };

    return (
        <div className="card-skills" style={colorShadow}>
            <div className="card-skills-img">
                <img src={`skills/${img}.png`} alt={img} title={img} />
            </div>
        </div>
    );
};

export const StacksList = ({ }) => {
    const skills = [
        {
            color: "#58a",
            img: "java",
        },
        {
            color: "#f00",
            img: "oracle",
        },
        {
            color: "#58a",
            img: "Postgres",
        },
        {
            color: "#aa0",
            img: "javascript",
        },
        {
            color: "#f52",
            img: "html",
        },
        {
            color: "#33c",
            img: "css",
        },
        {
            color: "#1a3",
            img: "spring-boot",
        },
        {
            color: "#06a",
            img: "jquery",
        },
        {
            color: "#77b",
            img: "php",
        },
        {
            color: "#F43",
            img: "Laravel",
        },
        {
            color: "#E80",
            img: "mysql",
        },
        {
            color: "#D03",
            img: "angular",
        },
        {
            color: "#7A6",
            img: "node",
        },
        {
            color: "#6DF",
            img: "react",
        },
        {
            color: "#E24",
            img: "nest",
        },
        {
            color: "#D43",
            img: "git",
        },
        {
            color: "#71f",
            img: "bootstrap",
        },
        {
            color: "#fff",
            img: "socket.io",
        },
    ];

    return (
        <div className="container-skills">
            {skills.map((skill) => (
                <Stacks key={skill.img} color={skill.color} img={skill.img} />
            ))}
        </div>
    );
};

export const Cards = ({ img, title, description, technologies, git, url }) => {
    const icon = {
        height: "24px",
        width: "24px",
        marginTop: "3px",
    };
    const sub_titulo = {
        fontSize: "1.2em",
        margin: "3px 0",
    };

    const Paragraph = {
        marginTop: "10px",
    };
    return (
        <div className="card-project">
            <img src={img} alt={img} />
            <h4 style={sub_titulo}>{title}</h4>
            <p style={Paragraph}>{description}</p>
            <div className="card-technologies-project">
                {technologies.map((tech) => (
                    <div key={tech} className="project-stack">
                        <img
                            src={`icon/${tech}.svg`}
                            alt={tech}
                            title={tech}
                            style={icon}
                        />
                    </div>
                ))}
            </div>
            <div className="card-hover">
                <a href={git} className="project-stack" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                </a>
                {url && (
                    <a href={url} className="project-stack" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    );
};

export const Projects = () => {
    const infoCard = [
        {
            img: "proyectos/innovatechcolweb.png",
            title: "Innova Tech Web",
            description: "Plataforma web para la venta de productos tecnológicos con implementación de carrito de compras",
            technologies: ["html", "css", "laravel", "mysql", "bootstrap", "javascript", "jquery"],
            git: "https://github.com/Dragnell27/InnovaTech-web",
            url: ""
        },
        {
            img: "proyectos/innovatechcol.png",
            title: "Innova Tech Desktop",
            description: "Desarrollé módulos para una aplicación de escritorio que incluyen servicios de autenticación, gestión de productos y administración de parámetros como categorías, colores, marcas y tamaños, facilitando una organización y control detallado del inventario.",
            technologies: ["mysql", "css", "java",],
            git: "https://github.com/Dragnell27/InnovaTech-Desktop",
            url: ""
        },
        {
            img: "proyectos/MiChat.png",
            title: "Mi Chat",
            description: "Aplicación de chat en tiempo real que utiliza Socket.IO para mensajería instantánea. Incluye inicio de sesión seguro con prevención de sesiones duplicadas.",
            technologies: ["mysql", "php", "javascript", "nodejs", "socket.io"],
            git: "https://github.com/Dragnell27/MiChat",
            url: "https://michat-production-a5c7.up.railway.app/",
        },
    ];

    return (
        <div className="container_card">
            {
                infoCard.map((card, i) => (
                    <Cards key={i} img={card.img} title={card.title} description={card.description} technologies={card.technologies} git={card.git} url={card.url} />
                ))
            }
        </div>
    );
}



export const Experience = () => {
    const experience = [
        {
            company: "IP Total Software",
            role: "Desarrollador Frontend y Soporte TI",
            date: "Octubre 2023 - Actualidad",
            description: ["Realizo soporte informático tanto para clientes como para miembros de la compañía. Para los clientes, ofrezco soluciones ágiles y rápidas, que incluyen la realización de consultas en Oracle para la actualización masiva de datos, asegurando así la continuidad de las operaciones diarias en la plataforma web de Emalaea. Además, gestiono los repositorios de desarrollo (DEV), pruebas (QA) y producción (PROD), y realizo ajustes menores en el frontend para mejorar la capacidad de respuesta de la página."],
        },
        {
            company: "Innova Tech de Occidente",
            role: "(Freelance) Desarrollador Fullstack y DBA",
            date: "Abril 2022 - Agosto 2023",
            description: ["Como líder de desarrollo en el proyecto de escritorio, supervisé la implementación de funciones clave como la gestión de productos, la realización de pedidos con envío de notificaciones por correo electrónico a proveedores previamente registrados, la respuesta a PQRS (Preguntas, Quejas, Reclamos y Sugerencias), así como la administración de categorías, colores y marcas. Además, me encargué de integrar estos elementos con los productos seleccionados, asegurando un flujo de trabajo eficiente y cohesivo.", "En la parte web del proyecto, fui responsable de construir la lógica detrás del manejo de usuarios, la creación y gestión de direcciones de envío, y la funcionalidad de añadir productos a la lista de deseos. Asimismo, desempeñé un papel crucial en la creación y acoplamiento de la base de datos para ambos proyectos, garantizando una estructura de datos robusta y una integración fluida entre las aplicaciones de escritorio y web."]
        },
    ]

    const container = {
        marginBottom: "40px",
        borderRadius: "5px",
    }

    const role = {
        position: "relative"
    }

    const date = {
        position: "absolute",
        bottom: "0",
        right: "0",
        padding: "5px 15px",
        backgroundColor: "#f82",
        color: "#000",
        fontSize: "11px",
        borderRadius: "15px",
    }
    const sub_title = {
        margin: "6px 0",
        marginBottom: "10px",
        padding: "0"
    }
    return (
        <>
            {
                experience.map((item, i) => (
                    <div key={i} className="experience" style={container}>
                        <div style={role}>
                            <h3 style={sub_title}>{item.company}</h3>
                            <span style={date}>{item.date}</span>
                        </div>
                        <h4 style={sub_title}>{item.role}</h4>
                        <Paragraph description={item.description} />
                    </div>
                ))
            }
        </>
    );
}

export const Paragraph = ({ description }) => {
    const paragraph = {
        fontSize: "14px"
    }
    return (
        <>
            {description.map((desc, index) => (
                <p style={paragraph} key={index}>{desc}</p>
            ))}
        </>
    );
}
