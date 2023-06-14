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
    </CircularImage> Syed Abdul Kalam 
         
        </SectionTitle>
        <SectionText>
      Hey there! It's Kalam here.I am highly proficient in utilizing various programming languages and frameworks to construct fully responsive websites.I have extensive familiarity with designing cloud-based solutions.






        </SectionText>
       
        <Button onClick={props.handleInstagramClick}>Contact Me</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;