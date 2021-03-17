import React from "react"
import styled from "styled-components"
import { missionVisionData } from "../../data/MissionVisionData"

const MissionVision = () => {
  return (
    <MissionVisionContainer>
      <MissionVisionContent>
        {missionVisionData.map((props, index) => (
          <MissionVisionItem key={index}>
            <TitleContainer>
              <Title>{props.title}</Title>
            </TitleContainer>
            <DescriptionContainer>
              <Description>{props.message}</Description>
            </DescriptionContainer>
          </MissionVisionItem>
        ))}
      </MissionVisionContent>
    </MissionVisionContainer>
  )
}

export default MissionVision

/// *********************************************************
/// Styled Components
///
const MissionVisionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const MissionVisionContent = styled.div`
  z-index: 3;
  max-width: 1140px;
`

const MissionVisionItem = styled.div`
  padding: 2rem 3rem;
  display: flex;
  margin: 0 auto;
  grid-template-columns: 40% 60%;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(0 1fr);
    grid-gap: 1rem;
  }

  @media screen and (max-width: 564px) {
    padding: 2rem 2rem;
  }
`

const Title = styled.h3`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
  margin-bottom: 0;
  margin-top: 0;
`

const TitleContainer = styled.div`
  width: 40%;
  display: inline-block;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const DescriptionContainer = styled.div`
  width: 60%;
`

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
  margin: 0;
  color: #424242;
`
