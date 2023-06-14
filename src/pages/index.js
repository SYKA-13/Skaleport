import { Head } from 'next/document';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import  MyHead  from '../components/MyHead/Head';



const Home = () => {
 
    const handleInstagramClick = () => {
      window.open("https://www.instagram.com/syedkalam13/", "_blank");
    };
  return (
    
    <Layout>
     <MyHead/>
      <Section grid>
        <Hero handleInstagramClick={handleInstagramClick}/>
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
