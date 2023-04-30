import ParcoursItem from '../components/ParcoursItem';
import style from './ParcoursSection.module.css';

const ParcoursSection = () => {
    return (
        <section id="parcours" className={style["parcours-section"]}>
        <div className={style["parcours-content"]}>
            <div className={style["left-content-parcours"]}>
                <h2 className={style["title-parcours"]}>Parcours</h2>
            </div>
            <div className={style["right-content-parcours"]}>
                <ParcoursItem 
                    parcoursNumber="1"
                    parcoursTitle="Baccalauréat général - Lycée Pierre Corneille"
                    parcoursDate="2018 - 2021"
                    parcoursText="Histoire Géographie Géopolitique Sciences Politique, Sciences Economiques et Sociales, Langues Littératures Civilisations Étrangères en Anglais"
                />
                <ParcoursItem 
                    parcoursNumber="2"
                    parcoursTitle="Bachelor Web Development & Creative Design - Futurae"
                    parcoursDate="2021 - 2023"
                    parcoursText="UI UX Design, Brand Content, Illustration et Graphisme, HTML/CSS, Javascript, PhP, Wordpress, Projets"
                />
                <ParcoursItem 
                    parcoursNumber="3"
                    parcoursTitle="Bachelor Application Development & Cybersecurity - EEMI"
                    parcoursDate="2023 - 2024"
                    parcoursText="GOLang, Python, Ruby, Symphony, MySQL, Data, Machine Learning & IA, DataViz, Analyse et Gestion des risques, CI/CD (Docker)"
                />
            </div>
        </div>
    </section>
    );
}
export default ParcoursSection;