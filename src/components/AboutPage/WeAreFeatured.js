import React from "react"
import styled from "styled-components"
import { weAreFeaturedData } from "../../data/WeAreFeaturedData"

const WeAreFeatured = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedWrapper>
          <Title>We are featured internationally</Title>
          <ImgContainer
            data-sal="fade"
            data-sal-duration="700"
            data-sal-easing="ease"
          >
            {weAreFeaturedData.map((item, index) => (
              <CustomImg key={index} src={item.img} alt={item.feature} />
            ))}
          </ImgContainer>
        </FeaturedWrapper>
      </FeaturedContent>
    </FeaturedContainer>
  )
}

export default WeAreFeatured

/// *********************************************************
/// Styled Components
///
const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 2rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const FeaturedContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const FeaturedWrapper = styled.div`
  padding: 1rem 3rem;

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`

const Title = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
  margin: 0;
`

const ImgContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, 3fr);
  width: 100%;
  grid-gap: 60px;
  padding: 4rem 3rem;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    text-align: center;
    grid-gap: 0;
    padding: 2rem 1rem;
    padding-bottom: 1rem;
  }
`

const CustomImg = styled.img`
  margin: auto;
  width: 100%;
  max-height: 120px;

  @media screen and (max-width: 768px) {
    max-height: 60px;
  }
`
