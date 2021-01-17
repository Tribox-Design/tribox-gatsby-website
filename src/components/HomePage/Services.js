import React from "react"
import styled from "styled-components"
import { servicesData } from "../../data/ServicesData"

const Services = () => {
  return (
    <ProductsContainer>
      <ProductsWrapper>
        {servicesData.map((props, index) => (
          <ServiceItem key={index}>
            <ServiceImgContainer><img src={props.img} alt={props.title}/></ServiceImgContainer>
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
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  display: flex;
  align-items: center;

 @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const ProductsWrapper = styled.div`
  max-width: 94%;
  display: inline-grid;
  margin: auto;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 60px;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    grid-template-columns: 1fr;
  }
`

const ServiceItem = styled.div`
  float: left;
  justify-content: center;
  align-items: center;
`

const ServiceImgContainer = styled.div`
  margin-right: 16px;
  height: 70px;
  width: 70px;
  float: left;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 70px;
    width: 70px;
    margin-right: 2rem;
  }
`

const ServiceText = styled.div`
  maxWidth: 400px;
`

const ServiceTitle = styled.h3`

`

const ServiceDescription = styled.p`
  margin-top: 3px;
`