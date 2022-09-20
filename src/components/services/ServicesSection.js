import React from 'react';
import styled from 'styled-components';
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Sell Rare Jordans"
            desc="We have huge connections to collectors and resellers, which are ready to sell rare jordans to you"
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="After Sale Service"
            desc="We provide the best in industry after sale service to ensure your jordans stays new."
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Accessories"
            desc="We have hundereds of add on accesories to make your jordan personalised to your taste."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
