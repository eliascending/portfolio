import CompetenceItem from '../components/CompetenceItem';
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
                        <CompetenceItem 
                            competenceAlt="Logo HTML"
                            competenceImage={process.env.PUBLIC_URL + 'html.png'}
                            competenceNom="HTML/CSS"
                        />
                        <CompetenceItem 
                            competenceAlt="Logo Javascript"
                            competenceImage={process.env.PUBLIC_URL + 'js.png'}
                            competenceNom="Javascript"
                        />
                        <CompetenceItem 
                            competenceAlt="Logo React"
                            competenceImage={process.env.PUBLIC_URL + 'react.png'}
                            competenceNom="React"
                        />
                        <CompetenceItem 
                            competenceAlt="Logo PHP"
                            competenceImage={process.env.PUBLIC_URL + 'php.png'}
                            competenceNom="PHP"
                        />
                    </div>
                    <div className={style["right-list"]}>
                        <CompetenceItem 
                            competenceAlt="Logo Photoshop"
                            competenceImage={process.env.PUBLIC_URL + 'photoshop.png'}
                            competenceNom="Photoshop"
                        />
                        <CompetenceItem 
                            competenceAlt="Logo Illustrator"
                            competenceImage={process.env.PUBLIC_URL + 'illustrator.png'}
                            competenceNom="Illustrator"
                        />
                        <CompetenceItem 
                            competenceAlt="Logo InDesign"
                            competenceImage={process.env.PUBLIC_URL + 'indesign.png'}
                            competenceNom="InDesign"
                        />
                        <CompetenceItem 
                            competenceAlt="Logo Figma"
                            competenceImage={process.env.PUBLIC_URL + 'figma.png'}
                            competenceNom="Figma"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default CompetenceSection;