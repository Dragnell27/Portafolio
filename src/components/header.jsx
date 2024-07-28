import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-scroll';

export const Nav = ({ }) => {
    return (
        <nav className='h-nav'>
            <ul className='h-nav-ul'>
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className='h-nav-ul-li'
                >
                    <li className='h-nav-ul-li'><a className='h-options' href=''>Inicio</a></li>
                </Link>

                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className='h-nav-ul-li'
                >
                    <li className='h-nav-ul-li'><a className='h-options' href=''>Sobre mi</a></li>
                </Link>
                <Link
                    to="technologies"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className='h-nav-ul-li'
                >
                    <li className='h-nav-ul-li'><a className='h-options' href=''>Tecnologías</a></li>
                </Link>
                <Link
                    to="briefcase"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className='h-nav-ul-li'
                >
                    <li className='h-nav-ul-li'><a className='h-options' href=''>Portafolio</a></li>
                </Link>
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