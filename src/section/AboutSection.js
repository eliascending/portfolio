import style from './AboutSection.module.css';

const AboutSection = () => {
    return (
        <section id="about" className={style["about-section"]}>
        <div className={style["about-content"]}>
            <div className={style["left-content-about"]}>
                <h2 className={style["title-about"]}>À propos</h2>
            </div>
            <div className={style["right-content-about"]}>
                <p className={style["about-text"]}>
                    Actuellement étudiant en Bachelor en Développement Web à l'Ecole Européenne des Métiers de l'Internet (EEMI), 
                    je suis à la recherche d'une alternance en région parisienne. 
                    Cette alternance comprend une semaine de cours à l'école et trois semaines en entreprise.
                    <br/>
                    <br/>
                    Je suis toujours ouvert à de nouvelles opportunités pour aquérir de l'expérience dans les domaines du Web Development
                    et de l'UI UX Design. J'ai une grande curiosité d'esprit et souhaite explorer ces deux domaines pour être polyvalent. 
                    Je m'intéresse aussi à la culture niponne, aux jeux-vidéo et au basket-ball.
                    <br/>
                    <br/>
                    Si vous êtes à la recherche de quelqu'un de curieux et créatif, contactez-moi !
                </p>
            </div>
        </div>
        </section>
    );
}
export default AboutSection;