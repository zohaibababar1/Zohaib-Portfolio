import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, Icon } from './AcomplishmentsStyles';
import { FaCode, FaBug, FaTasks, FaUserPlus } from 'react-icons/fa'; // Example icons

const data = [
  { 
    number: 20, 
    text: 'Contributed to 20+ web projects, improving functionality and design.',
    icon: <FaCode />
  },
  { 
    number: 150, 
    text: 'Implemented 150+ bug fixes and small features, enhancing usability.',
    icon: <FaBug />
  },
  { 
    number: 50, 
    text: 'Completed 50+ tasks on time, meeting project deadlines consistently.',
    icon: <FaTasks />
  },
  { 
    number: 10, 
    text: 'Assisted in onboarding 10 new team members with training.',
    icon: <FaUserPlus />
  }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <Icon>{card.icon}</Icon> {/* Render icon */}
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
