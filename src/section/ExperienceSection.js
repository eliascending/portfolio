import ExperienceItem from '../components/ExperienceItem';
import style from './ExperienceSection.module.css';

const ExperienceSection = () => {
    return (
        <section id="experience" className={style["experience-section"]}>
        <div className={style["darker2"]}>
            <div className={style["experience-title"]}>
                <h2>Expériences</h2>
            </div>
            <div className={style["experience-content"]}>
                <ExperienceItem
                    experienceTitle="Stage découverte - Ferme de Gally"
                    experienceDate="2018"
                    experienceText="Mise en rayon, montage de mobilier, gestion des stocks, relation client."
                />
                <ExperienceItem
                    experienceTitle="Graphisme - Brotherhood ASBBNB"
                    experienceDate="2020 - 2022"
                    experienceText="Supervision et conception des supports graphique pour les réseaux de l'équipe."
                />
                <ExperienceItem
                    experienceTitle="Web Designer - FIEALD"
                    experienceDate="2022"
                    experienceText="Audit et réalisation d'une maquette web pour le site internet."
                />
                <ExperienceItem
                    experienceTitle="En cours..."
                    experienceDate="2023 ?"
                    experienceText="..."
                />
            </div>
        </div>
    </section>
    );
}
export default ExperienceSection;