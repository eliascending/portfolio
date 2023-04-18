import style from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFlask, faPerson, faSignsPost, faLayerGroup, faStar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState (false);

    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        toggleMenu();
    }

    return (
        <header className={`${isMenuOpen ? style["header-anim"] : ""}`}>
            <nav>
                <FontAwesomeIcon
                    className={style["open-menu"]}
                    icon={faBars}
                    size="2xl"
                    onClick={toggleMenu}
                />
                {isMenuOpen && (
                    <ul>
                        <li onClick={() => scrollToSection('home')} ><FontAwesomeIcon icon={faHouse} size="xl" /> Accueil</li>
                        <li onClick={() => scrollToSection('about')}><FontAwesomeIcon icon={faPerson} size="xl" /> À propos</li>
                        <li onClick={() => scrollToSection('experience')}><FontAwesomeIcon icon={faFlask} size="xl" /> Expériences</li>
                        <li onClick={() => scrollToSection('parcours')}><FontAwesomeIcon icon={faSignsPost} size="xl" /> Parcours</li>
                        <li onClick={() => scrollToSection('projets')}><FontAwesomeIcon icon={faLayerGroup} size="xl" /> Projets</li>
                        <li onClick={() => scrollToSection('competence')}><FontAwesomeIcon icon={faStar} size="xl" /> Compétences</li>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Header;