import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
        <div className={style["left-footer"]}>
            <p>Copyright © 2023 ELIAS PENNELLIER</p>
        </div>
        <div className={style["right-footer"]}>

            <a className={style["a-linkedin"]} href='https://www.linkedin.com/in/elias-pennellier-560800236/' target='_blank' rel='noreferrer'>
                <img  alt='linkedin' className={style["linkedin-img"]} src={process.env.PUBLIC_URL + 'linkedin.png'}/> 
            </a>
            
        </div>
    </footer>
    )
}
export default Footer;