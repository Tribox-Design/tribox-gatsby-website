import React from "react"
import styled from "styled-components"
import { servicesData } from "../../data/ServicesData"

const Services = () => {
  return (
    <ProductsContainer>
      <ProductsWrapper>
        {servicesData.map((props, index) => (
          <ServiceItem key={index}>
            <ServiceImgContainer>
              <CustomImg src={props.img} alt={props.title} />
            </ServiceImgContainer>
            <ServiceText>
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
  }
`

const ServiceItem = styled.div`
  display: inline-grid;
  grid-template-columns: 27% 73%;
`

const ServiceImgContainer = styled.div`
  padding-right: 3rem;
  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
    padding-right: 2rem;
  }
`

const CustomImg = styled.img`
  height: 70px;
  width: 70px;

  @media screen and (max-width: 768px) {
    height: 64px;
    width: 64px;
  }
`

const ServiceText = styled.div`
  maxwidth: 400px;
`

const ServiceTitle = styled.h3``

const ServiceDescription = styled.p`
  margin-top: 3px;
`
