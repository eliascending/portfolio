import style from './CompetenceSection.module.css';

const CompetenceSection = () => {
    return (
        <section id="competence" className={style["competence-section"]}>
        <div className={style["darker2"]}>
            <div className={style["competence-content"]}>
                <div className={style["competence-title"]}>
                    <h3>Compétences</h3>
                </div>
                <div className={style["competence-list"]}>
                    <div className={style["left-list"]}>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'html.png'}/>
                            <p className={style["competence-item-title"]}>HTML/CSS</p>
                        </div>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'js.png'}/>
                            <p className={style["competence-item-title"]}>Javascript</p>
                        </div>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'react.png'}/>
                            <p className={style["competence-item-title"]}>React</p>
                        </div>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'php.png'}/>
                            <p className={style["competence-item-title"]}>PHP</p>
                        </div>
                    </div>
                    <div className={style["right-list"]}>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'photoshop.png'}/>
                            <p className={style["competence-item-title"]}>Photoshop</p>
                        </div>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'illustrator.png'}/>
                            <p className={style["competence-item-title"]}>Illustrator</p>
                        </div>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'indesign.png'}/>
                            <p className={style["competence-item-title"]}>InDesign</p>
                        </div>
                        <div className={style["competence-item"]}>
                            <img className={style["competence-img"]} src={process.env.PUBLIC_URL + 'figma.png'}/>
                            <p className={style["competence-item-title"]}>Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default CompetenceSection;