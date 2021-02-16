import React from "react"
import styled from "styled-components"
import { weAreFeaturedData } from "../../data/WeAreFeaturedData"

const WeAreFeatured = () => {
  return (
    <FeaturedContainer>
      <FeaturedContent>
        <FeaturedWrapper>
          <Title>We are featured internationally</Title>
          <ImgContainer>
            {weAreFeaturedData.map((item, index) => (
              <CustomImg src={item.img} alt={item.feature} />
            ))}
          </ImgContainer>
        </FeaturedWrapper>
      </FeaturedContent>
    </FeaturedContainer>
  )
}

export default WeAreFeatured

const FeaturedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`

const FeaturedContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const FeaturedWrapper = styled.div`
  padding: 1rem 3rem;
`

const Title = styled.p`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
`

const ImgContainer = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 2fr);
  width: 100%;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const CustomImg = styled.img`
  margin: auto;
  height: 100%;
  width: 100%;

`
