import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import ParagraphText from './paragraphTexts/ParagraphText';

const FooterStyles = styled.footer`
  
  background-color: var(--darkBlue_4);
  padding: 10rem 0;
  .footer__wrapper {
    text-align: center;
    display: flex;
  flex-direction: row;
  justify-content: space-around;
  }
  .footer__logo {
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .footer__desc {
    color: var(--white);
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .footer__copyright {
    font-size: 1.2rem;
    color: var(--lightBlue_1);
  }
  
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__wrapper">
          <div>
          <Link to="home" smooth>
            <img src={Logo} alt='LOGO' className='footer__logo'/>
          </Link>
          </div>
          <div>
          <ParagraphText className="footer__desc">
            RJordans is the hub of rare jordans and our purpose is to channge your sneaker journey
          </ParagraphText>
          <ParagraphText className="footer__copyright">
            © Artistic Creative {new Date().getFullYear()}. All rights reserved
          </ParagraphText>
          </div>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
