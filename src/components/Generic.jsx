export const Title = ({ text, id }) => {
    return (
        <h2 className='subtitle' id={id}>{text}</h2>
    )
}

export const Stacks = ({ color, img }) => {
    const colorShadow = {
        boxShadow: `0px 0px 10px 0px ${color}`
    }

    return (
        <div className='card-skills' style={colorShadow}>
            <div className='card-skills-img'>
                <img src={`skills/${img}.png`} alt={img} title={img} />
            </div>
        </div>
    );
}

export const StacksList = ({ }) => {
    const skills = [
        {
            color: '#58a',
            img: 'java'
        },
        {
            color: '#a33',
            img: 'oracle'
        },
        {
            color: '#58a',
            img: 'Postgres'
        },
        {
            color: '#aa0',
            img: 'javascript'
        },
        {
            color: '#f52',
            img: 'html'
        },
        {
            color: '#33c',
            img: 'css'
        },
        {
            color: '#1a3',
            img: 'spring-boot'
        },
        {
            color: '#06a',
            img: 'jquery'
        },
        {
            color: '#77b',
            img: 'php'
        },
        {
            color: '#E80',
            img: 'mysql'
        },
        {
            color: '#D03',
            img: 'angular'
        },
        {
            color: '#7A6',
            img: 'node'
        },
        {
            color: '#6DF',
            img: 'react'
        },
        {
            color: '#E24',
            img: 'nest'
        },
        {
            color: '#D43',
            img: 'git'
        }

    ]

    return (
        <div className='container-skills'>
            {skills.map(skill => (
                <Stacks key={skill.img} color={skill.color} img={skill.img} />
            ))}
        </div>
    );
}

export const Cards = ({ img, description, technologies,git,url}) => {

    return (
        <div className="card-project">
            <img src={img} alt={img} />
            <p>{description}</p>
            <div className="card-technologies-project">
                {
                    technologies.map(tech => (
                        <div key={tech} className="project-stack">{tech}</div>
                    ))
                }
            </div>
            <div className="card-hover">
                <a href={git} className="project-stack">git</a>
                <a href={url} className="project-stack">Sitio web</a>
            </div>
        </div>
    );
}