import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow } from 'react-icons/fa';

import { 
  DropDownContainer, 
  DropDownIcon, 
  DropDownItem, 
  DropDownItemDesc, 
  DropDownItemTitle, 
  DropDownTextContainer 
} from './NavDropDownStyles'; // Adjust the import path based on your file structure

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="tel:+6475053803" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone size="2rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Contact</DropDownItemTitle>
        <DropDownItemDesc>Let's collaborate and spark some innovative ideas!</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="mailto:zohaibbabar02@gmail.com" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiOutlineMail size="2rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>Reach out anytime, and I'll be sure to get back to you swiftly!</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="https://maps.google.com/?q=110+Sewells+Ln,+Brampton,+Ontario,+Canada" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <FaLocationArrow size="2rem" />
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Address</DropDownItemTitle>
        <DropDownItemDesc>110 Sewells Ln, Brampton, Ontario, Canada</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown;
