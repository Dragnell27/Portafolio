import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-scroll';

export const Nav = ({ }) => {
    return (
        <nav className='h-nav'>
            <ul className='h-nav-ul'>
                <li className='h-nav-ul-li'>
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className='h-nav-ul-li'
                        arial-label='Home'
                    >
                        Inicio
                    </Link>
                </li>
                <li className='h-nav-ul-li'>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        arial-label='About'
                    >
                        Sobre mi
                    </Link>
                </li>
                <li className='h-nav-ul-li'>
                    <Link
                        to="briefcase"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        arial-label='Projects'
                    >
                        Proyectos
                    </Link>
                </li>
                <li className='h-nav-ul-li'>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        arial-label='Experience'
                    >
                        Experiencia
                    </Link>
                </li>
                <li className='h-nav-ul-li'>
                    <Link
                        to="technologies"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        arial-label='Technologies'
                    >
                        Tecnologías
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export const Headers = ({ }) => {

    const [isToggled, setIsToggled] = useState(false);

    const toggleClass = () => {
        setIsToggled(!isToggled);
    };

    return (
        <>
            <div className='logo'><a href='#'>JD</a></div>
            <header className='header'>
                <Nav />
            </header>
            <div className='sidebar'>
                <button className='toggle-btn' onClick={toggleClass}>☰</button>
                <header className={isToggled ? 'header open' : 'header'} >
                    <button className='toggle-btn' onClick={toggleClass}>☰</button>
                    <Nav />
                </header>
            </div>
        </>
    )
}