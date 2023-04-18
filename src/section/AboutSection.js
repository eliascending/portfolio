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
                    Je suis actuellement à la recherche d'une alternance pour compléter mon Bachelor en Web Development à l'EEMI.
                    Le rythme est d'une semaine à l'école et trois semaines en entreprise.
                    Habitant à Noisy-le-roi (Yvelines), il est préférable pour moi de trouver une alternance vers Paris Ouest.
                    <br/>
                    <br/>
                    Je suis toujours ouvert à de nouvelles opportunités pour me forger de l'expérience dans les domaines du Web Development
                    et de l'UI UX Design. Je suis super curieux alors j'aimerais explorer les deux domaines qui me plaisent pour être
                    polyvalent. Je m'intéresse aussi à la culture niponne, aux jeux-vidéos ainsi qu'au basket-ball.
                    <br/>
                    <br/>
                    Alors si vous êtes à la recherche de quelqu'un de curieux et créatif, contactez-moi !
                </p>
            </div>
        </div>
        </section>
    );
}
export default AboutSection;