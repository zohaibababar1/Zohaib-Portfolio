import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have extensive experience working with a diverse array of technologies in both web and software development. My expertise spans from sophisticated back-end solutions to advanced front-end interfaces, demonstrating a comprehensive skill set in crafting seamless, high-performance applications.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, HTML/CSS, React Native, ExpressJS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases (Firebase, MongoDB, MySQL, SQLite, Room), C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Software Application Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Kotlin, Swift, Node.js, React Native, JavaScript, HTML, CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
