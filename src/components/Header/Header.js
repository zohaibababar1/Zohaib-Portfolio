import Link from 'next/link';
import React from 'react';

import { Container, Div1, Div2, Div3, NavLink } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <img src="/images/logo.png" alt="Logo" style={{ width: '5rem', height: 'auto' }} /> {/* Increased width */}
          <span style={{ marginLeft: '1rem', fontSize: '1.8rem' }}>Zohaib Ali Portfolio</span> {/* Adjusted font size for balance */}
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>        
    </Div2>
    <Div3>
      {/* Social Icons removed as per your requirement */}
    </Div3>
  </Container>
);

export default Header;
