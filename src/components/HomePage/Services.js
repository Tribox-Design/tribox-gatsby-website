import React from "react"
import styled from "styled-components"
import { servicesData } from "../../data/ServicesData"

const Services = () => {
  return (
    <ProductsContainer>
      <ProductsWrapper>
        {servicesData.map((props, index) => (
          <ServiceItem key={index}>
            <ServiceImgContainer
              data-sal="zoom-in"
              data-sal-duration="700"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <CustomImg src={props.img} alt={props.title} />
            </ServiceImgContainer>
            <ServiceText
              data-sal="slide-up"
              data-sal-duration="700"
              data-sal-delay="600"
              data-sal-easing="ease"
            >
              <ServiceTitle>{props.title}</ServiceTitle>
              <ServiceDescription>{props.desc}</ServiceDescription>
            </ServiceText>
          </ServiceItem>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Services

/// *********************************************************
/// Styled Components
///
const ProductsContainer = styled.div`
  padding: 4rem calc((100vw - 1300px) / 2);
  background: #fff;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const ProductsWrapper = styled.div`
  max-width: 1140px;
  display: inline-grid;
  margin: auto;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 56px 88px;
  padding: 0 2rem;

  @media screen and (max-width: 1140px) {
    grid-gap: 40px 64px;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 32px;
    padding: 1rem 2rem;
  }
`

const ServiceItem = styled.div`
  display: inline-grid;
  grid-template-columns: 20% 80%;

  @media screen and (max-width: 900px) {
    grid-template-columns: 27% 73%;
  }
`

const ServiceImgContainer = styled.div`
  padding-right: 3rem;
  margin: auto;
  display: block;

  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
    padding-right: 2rem;
  }
`

const CustomImg = styled.img`
  height: 70px;
  width: 70px;
  aspect-ratio: 1;

  @media screen and (max-width: 768px) {
    height: 62px;
    width: 62px;
  }
`

const ServiceText = styled.div`
  maxwidth: 400px;
  margin-top: 8px;
`

const ServiceTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  color: #212121;
`

const ServiceDescription = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: 0.5px;
  margin-top: 4px;
  font-weight: 300;
  color: #212121;
`
