import React from 'react';
import { Head } from 'next/document';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,CircularImage,Image } from './HeroStyles';

const Hero = (props) => (
  <> 
    <Section row nopadding>
   
      <LeftSection>
      
        <SectionTitle main center >
        <CircularImage>
      <Image src="./images/kalam1.jpg" alt="Your Image" />
    </CircularImage> <span
    style={{
      background: 'radial-gradient(circle, #ffffff, #f4f4f4)',
      backgroundSize: '200% 200%',
      animation: 'shining-gradient 3s linear infinite',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
    }}
  >
    Syed Abdul Kalam
  </span> 
         
        </SectionTitle>
        <SectionText>
      Hey there! It's Kalam here.I am highly proficient in utilizing various programming languages and frameworks to construct fully responsive websites.I have extensive familiarity with designing cloud-based solutions.Well this is not it,I completed internships and acitvely pursued continuous learning by enrolling in courses which have equipped me with a diverse skill set.






        </SectionText>
       
        <Button onClick={props.handleInstagramClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;