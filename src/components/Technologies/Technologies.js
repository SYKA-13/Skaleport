import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import {RiCloudFill} from 'react-icons/ri'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>I have been using javascript frameworks such as React.js and node.js to create various projects .I preferably strive to reduce code redundancy in my applications by using reusable components.
As cloud adoption increases, so did my essence in various cloud computing services. I've worked with a range a technologies in the web development world,
      from Back-end To Design.Please verify my credentials on my LinkedIn profile.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <RiCloudFill size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Cloud Solutions</ListTitle>
          <ListParagraph>
            Pretty good <br />
            in designing highly available solutions
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
