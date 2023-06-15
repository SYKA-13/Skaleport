import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillFolder } from 'react-icons/ai';
import { DiCode, DiCssdeck } from 'react-icons/di';
import { FaUser } from 'react-icons/fa';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>  <Div1>
  <Link href="/">
    <a style={{ display: 'flex', color: 'white' }}>
      {/* <FaUser size="2rem" style={{marginRight:5}}/> */}
      <span style={{
        fontFamily: 'Roboto, serif',
        fontSize: '20px',
        background: 'radial-gradient(circle, #00C6FF, #0072FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>Portfolio</span>
    </a>
  </Link>
</Div1>
<Div2>
  <li>
    <Link href="#projects">
      <NavLink style={{
        background: 'radial-gradient(circle, #00C6FF, #0072FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>Projects</NavLink>
    </Link>
  </li>
  <li>
    <Link href="#tech">
      <NavLink style={{
       background: 'radial-gradient(circle, #00C6FF, #0072FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>Skills</NavLink>
    </Link>
  </li>        
  <li>
    <Link href="#about">
      <NavLink style={{
        background: 'radial-gradient(circle, #00C6FF, #0072FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>About</NavLink>
    </Link>
  </li>        
</Div2>
      <Div3>
      <SocialIcons href="https://github.com/SYKA-13">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/syed-abdul-kalam-2094aa1b6/">
        <AiFillLinkedin size="3rem" style={{ fill: '#0A66C2' }} />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/syedkalam13/">
        <AiFillInstagram size="3rem"    style={{
      fill: '#C13584',
    }}
/>
      </SocialIcons>
    
      </Div3>
    </Container>
);

export default Header;
