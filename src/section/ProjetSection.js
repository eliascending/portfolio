import ProjetItem from '../components/ProjetItem';
import style from './ProjetSection.module.css';

const ProjetSection = () => {
    return (
        <section id="projets" className={style["projets-section"]}>
        <div className={style["projets-content"]}>
            <div className={style["left-content-projets"]}>
                <h2 className={style["title-projets"]}>Projets</h2>
            </div>
            <div className={style["right-content-projets"]}>
                <div className={style["projets-item1"]}>
                    <ProjetItem 
                        projetTitle="Christmas Town"
                        projetDate="2021"
                        projetText="Ce projet est une expérience basée sur l'univers de Playmobil. Nous devions faire un site qui permet de diffuser l'esprit de la marque et son histoire à travers une expérience ludique et interactive. Celle-ci devait tourner autour du principe de collection afin que les enfants ou collectionneurs se plaisent."
                    />
                    <div className={style["right-item-projet"]}>
                        <img alt='Mockup Application Christmas Town' className={style["projet-img"]} src={process.env.PUBLIC_URL + 'playmobil.png'}/>
                    </div>
                </div>
                <div className={style["projets-item1"]}>
                    <ProjetItem 
                        projetTitle="Royal SNKRS"
                        projetDate="2023"
                        projetText="Le principe était de faire un site de sneakers avec des particularités atypiques. Sur ce projet j'ai choisi un système de tag de rareté qui parle à tout le monde afin que le site soit agréable à visiter pour quelqu'un qui n'a aucune connaissance ou passion pour les sneakers."
                    />
                    <div className={style["right-item-projet"]}>
                        <img alt='Mockup site Royal SNKRS' className={style["projet-img"]} src={process.env.PUBLIC_URL + 'snkrs.png'}/>
                    </div>
                </div>
                <div className={style["projets-item"]}>
                    <ProjetItem 
                        projetTitle="Velmi"
                        projetDate="2023"
                        projetText="Velmi est une application mobile sur laquelle nous pouvons faire nos courses tout en faisant attention à l'empreinte carbone de celle-ci et au prix. Velmi met au coeur de son application, le pouvoir d'achat et la réduction de CO2. Avec un système de paiement en ligne, il suffit de commander et de venir chercher la commande dans le magasins."
                    />
                    <div className={style["right-item-projet"]}>
                        <img alt='Mockup Application Velmi' className={style["projet1-img"]} src={process.env.PUBLIC_URL + 'velmi.png'}/>
                    </div>
                </div>
                <div className={style["projets-item"]}>
                    <ProjetItem 
                        projetTitle="FIEALD"
                        projetDate="2022"
                        projetText="Le FIEALD est une scène ouverte aux artistes de toutes disciplines. Nous avons réalisé en groupe une maquette pour remettre leur site web au goût du jour afin de viser un public plus connecté. Certaines de nos idées ont été retenues et le site du FIEALD a été mis à jour après notre intervention."
                    />
                    <div className={style["right-item-projet"]}>
                        <img alt='Mockup site FIEALD' className={style["projet-img"]} src={process.env.PUBLIC_URL + 'fieald.png'}/>
                    </div>
                </div>
                <div className={style["projets-item"]}>
                    <ProjetItem 
                        projetTitle="FATE"
                        projetDate="2022"
                        projetText="FATE est une marque de parfum basée sur les quatres éléments. Le principe de la marque est une expérience olfactive unique. Ce projet de fin d'année a été fait en collaboration avec les filières communication & marketing pour créer une marque complète. J'ai donc fait un site e-commerce avec Wordpress en créant un propre thème en PhP."
                    />
                    <div className={style["right-item-projet"]}>
                        <img alt='Mockup site FATE' className={style["projet-img"]} src={process.env.PUBLIC_URL + 'fate.png'}/>
                    </div>
                </div>
                <div className={style["projets-item"]}>
                    <ProjetItem 
                        projetTitle="Mon pain chez moi"
                        projetDate="2021"
                        projetText="Ce projet de groupe est une application permettant de livrer du pain accessible aux boulangeries et aux livreurs. Mon pain chez moi est une solution pour les personnes n'ayant pas le temps ou les capacités physique de se déplacer acheter du pain. Il est une liaison entre les boulangers et les livreurs permettant ainsi une meilleure qualité de service."
                    />
                    <div className={style["right-item-projet"]}>
                        <img alt='Mockup Application Pain' className={style["projet-img"]} src={process.env.PUBLIC_URL + 'pain.png'}/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
export default ProjetSection;