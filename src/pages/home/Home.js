import Header from '../../components/header/Header';
import HomeSection from '../../section/HomeSectio';
import AboutSection from '../../section/AboutSection';
import ExperienceSection from '../../section/ExperienceSection';
import ParcoursSection from '../../section/ParcoursSection';
import ProjetSection from '../../section/ProjetSection';
import CompetenceSection from '../../section/CompetenceSection';
import Footer from '../../components/header/Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <HomeSection/>
            <AboutSection/>
            <ExperienceSection/>
            <ParcoursSection/>
            <ProjetSection/>
            <CompetenceSection/>
            <Footer/>
        </>
    );
}

export default Home;