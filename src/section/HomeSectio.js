import style from './HomeSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const HomeSection = () => {

    const handleDownload = () => {
        const fileName = 'EliasPennellier-CV2023.pdf';
        const fileUrl = process.env.PUBLIC_URL + '/' + fileName;
        window.open(fileUrl, '_blank');
    }
    
    return (
        <section id="home" className={style["home-section"]}>
            <div className={style["darker"]}>
                <div className={style["home-text"]}>
                    <h1>ELIAS PENNELLIER</h1>
                    <h2>Étudiant en 3ème année de Bachelor Web Development à l'EEMI</h2>
                    <button onClick={handleDownload} className={style["btn-cv"]}>
                        <FontAwesomeIcon icon={faDownload} size="xl"/>
                        Télécharger mon CV
                    </button>
                </div>
            </div>
        </section>
    );
}
export default HomeSection;

