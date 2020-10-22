import React from 'react';
import styled from 'styled-components';

const FooterElm = styled.footer`
  position: absolute;
  bottom: 2rem;
  color: white;
`;

const LinkElm = styled.a`
  color: #ff3482;
  font-weight: bold;
`;

/**
 * Site footer
 */
const Footer = () => {
  return (
    <FooterElm className='site-footer'>
      <p>Made with <span>&hearts;</span> by <LinkElm href='https://github.com/TomKiWorld' target='_blank' rel='noopener noreferrer'>TomKiWorld</LinkElm></p>
    </FooterElm>
  );
}

export default Footer;
