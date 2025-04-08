import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  text-align: center;
  padding: 40px 20px;
  color: ${(props) => props.color || '#000'};
  min-height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  ion-img {
    max-width: 100%;
    height: 600px;
  }
  @media (min-width: 768px) {
    padding: 60px 40px;
  }
`;

type SectionProps = {
  height?: string;
  color: string;
  image: string;
  children: React.ReactNode;
};

const Section = ({ height, color, image, children }: SectionProps) => (
  <SectionContainer
    color={color}
    style={{ backgroundImage: `url(${image})`, height: height }}
  >
    {children}
  </SectionContainer>
);

export default Section;
