import style from './ParcoursSection.module.css';

const ParcoursSection = () => {
    return (
        <section id="parcours" className={style["parcours-section"]}>
        <div className={style["parcours-content"]}>
            <div className={style["left-content-parcours"]}>
                <h2 className={style["title-parcours"]}>Parcours</h2>
            </div>
            <div className={style["right-content-parcours"]}>
                <div className={style["parcours-item"]}>
                    <div className={style["item-parcours-order"]}>
                        <p>1</p>
                    </div>
                    <div className={style["item-parcours-title"]}>
                        <h3>Baccalauréat général - Lycée Pierre Corneille</h3>
                    </div>
                    <div className={style["item-parcours-date"]}>
                        <p>2018 - 2021</p>
                    </div>
                    <div className={style["item-parcours-text"]}>
                        <p>Histoire Géographie Géopolitique Scienes Politique, Scienes Economiques et Sociales, Langues Littératures Civilisations Étrangères en Anglais</p>
                    </div>
                </div>
                <div className={style["parcours-item"]}>
                    <div className={style["item-parcours-order"]}>
                        <p>2</p>
                    </div>
                    <div className={style["item-parcours-title"]}>
                        <h3>Bachelor Web Development & Creative Design - Futurae</h3>
                    </div>
                    <div className={style["item-parcours-date"]}>
                        <p>2021 - 2023</p>
                    </div>
                    <div className={style["item-parcours-text"]}>
                        <p>UI UX Design, Brand Content, Illustration et Graphisme, HTML/CSS, Javascript, PhP, Wordpress, Projets</p>
                    </div>
                </div>
                <div className={style["parcours-item"]}>
                    <div className={style["item-parcours-order"]}>
                        <p>3</p>
                    </div>
                    <div className={style["item-parcours-title"]}>
                        <h3>Bachelor Application Development & Cybersecurity - EEMI</h3>
                    </div>
                    <div className={style["item-parcours-date"]}>
                        <p>2023 - 2024</p>
                    </div>
                    <div className={style["item-parcours-text"]}>
                        <p>GOLang, Python, Ruby, Symphony, MySQL, Data, Machine Learning & IA, DataViz, Analyse et Gestion des risques
                            , CI/CD (Docker)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default ParcoursSection;