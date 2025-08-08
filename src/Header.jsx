import { useState } from 'react';
import './Header.css'
import logo from './assets/images/s-logo-40px.png';

export default function Header() {

    const [navOpen, setNavOpen] = useState(false)
    
    function navTrigger() {
        setNavOpen( prev => !prev);
    }

    return (
        <header>
            <div className='logo'>
                <a href="/"><img src={logo} alt="Website Logo" /></a>
            </div>
            <div className={`nav-trigger fa ${navOpen ? 'fa-xmark' : 'fa-bars'}`} onClick={navTrigger}></div>
            <nav className={navOpen ? 'show' : ''}>
                <a href="#service">Service</a>
                <a href="#service">Projekte</a>
                <a href="#service">Über Mich</a>
                <a href="#service">Kontakt</a>
            </nav>
        </header>
    )
}