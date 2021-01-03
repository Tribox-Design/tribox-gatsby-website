import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { servicesData } from "../../data/ServicesData"

const Services = () => {
  return (
    <ProductsContainer>
      <ProductsWrapper>
        {servicesData.map((props, index) => (
          <div key={index}>
          <ServiceImgContainer><img src={props.img} alt={props.title}/></ServiceImgContainer>
          <ServiceText>
            <ServiceTitle>{props.title}</ServiceTitle>
            <ServiceDescription>{props.desc}</ServiceDescription>
          </ServiceText>
          </div>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Services

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
`
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 0 1fr;
  }
`

const ServiceImgContainer = styled.div`

`

const ServiceText = styled.div`

`

const ServiceTitle = styled.h3`

`

const ServiceDescription = styled.p`

`