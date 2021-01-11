import React from 'react';
import styled from 'styled-components';
import { missionVisionData } from '../../data/MissionVisionData'

const MissionVision = () => {
  return (
    <MissionVisionContainer>
      <MissionVisionContent>
        {missionVisionData.map((props, index) => (
          <MissionVisionItem key={index}>
            <Title>{props.title}</Title>
            <Description>{props.message}</Description>
          </MissionVisionItem>
        ))}
      </MissionVisionContent>
    </MissionVisionContainer>
  )
}

export default MissionVision;

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
  float: left;
  padding: 1rem 2rem;
`

const Title = styled.h1`
  float: left;
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  letter-spacing: 3px;
  margin-bottom: 1rem;
  font-weight: bold;
`

const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 300;
`