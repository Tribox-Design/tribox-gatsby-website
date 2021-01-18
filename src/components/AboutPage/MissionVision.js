import React from "react"
import styled from "styled-components"
import { missionVisionData } from "../../data/MissionVisionData"

const MissionVision = () => {
  return (
    <MissionVisionContainer>
      <MissionVisionContent>
        {missionVisionData.map((props, index) => (
          <MissionVisionItem key={index}>
            <Title>{props.title}</Title>
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

const MissionVisionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;
`

const MissionVisionContent = styled.div`
  z-index: 3;
  max-width: 1140px;
`

const MissionVisionItem = styled.div`
  padding: 2rem 3rem;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(2, 4fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(0 1fr);
  }
`

const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
`

const DescriptionContainer = styled.div``

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
`
