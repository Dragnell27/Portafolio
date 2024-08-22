import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-scroll';

export const Nav = ({ }) => {
    return (
        <nav className='h-nav'>
            <ul className='h-nav-ul'>
                <li className=''>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className='h-nav-ul-li'
                        arial-label='About'
                        href='#'
                    >
                        Sobre mi
                    </Link>
                </li>
                <li className=''>
                    <Link
                        to="experience"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className='h-nav-ul-li'
                        arial-label='Experience'
                        href='#'
                    >
                        Experiencia
                    </Link>
                </li>
                <li className=''>
                    <Link
                        to="briefcase"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className='h-nav-ul-li'
                        arial-label='Projects'
                        href='#'
                    >
                        Proyectos
                    </Link>
                </li>

                <li className=''>
                    <Link
                        to="technologies"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className='h-nav-ul-li'
                        arial-label='Technologies'
                        href='#'
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

    const cursor = {
        cursor: 'pointer',
        color: '#000'
    }
    return (
        <>
            <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-80}
                arial-label='Home'
                style={cursor}
                className='logo'
                href='#'
            >
                JD
            </Link>
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