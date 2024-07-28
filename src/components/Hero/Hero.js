import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Zohaib Ali's Portfolio
        </SectionTitle>
        <SectionText>
        Skilled in Swift, Kotlin, Node.js, React Native, Javascript,CSS,HTML and Python. Developed iOS and Android apps with Firebase integration. Created server-side applications using Node.js and MongoDB. Proficient in UI/UX design and front-end development.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;