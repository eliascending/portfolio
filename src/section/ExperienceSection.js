import style from './ExperienceSection.module.css';

const ExperienceSection = () => {
    return (
        <section id="experience" className={style["experience-section"]}>
        <div className={style["darker2"]}>
            <div className={style["experience-title"]}>
                <h2>Expériences</h2>
            </div>
            <div className={style["experience-content"]}>
                <div className={style["experience-item"]}>
                    <h3 className={style["title-exp"]}>Stage découverte - Ferme de Gally</h3>
                    <p className={style["date-exp"]}>2018</p>
                    <p className={style["text-exp"]}>Mise en rayon, montage de mobilier, gestion des stocks, relation client.</p>
                </div>
                <div className={style["experience-item"]}>
                    <h3 className={style["title-exp"]}>Graphisme - Brotherhood ASBBNB</h3>
                    <p className={style["date-exp"]}>2020 - 2022</p>
                    <p className={style["text-exp"]}>Supervision et conception des supports graphique pour les réseaux de l'équipe.</p>
                </div>
                <div className={style["experience-item"]}>
                    <h3 className={style["title-exp"]}>Web Designer - FIEALD</h3>
                    <p className={style["date-exp"]}>2022</p>
                    <p className={style["text-exp"]}>Audit et réalisation d'une maquette web pour le site internet.</p>
                </div>
                <div className={style["experience-item"]}>
                    <h3 className={style["title-exp"]}>En cours...</h3>
                    <p className={style["date-exp"]}>2023 ?</p>
                    <p className={style["text-exp"]}>...</p>
                </div>
            </div>
        </div>
    </section>
    );
}
export default ExperienceSection;