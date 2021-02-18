import React from "react"
import styled from "styled-components"
import { theDreamTeamData } from "../../data/TheDreamTeamData.js"

const TheDreamTeam = () => {
  return (
    <ServiceContainer>
      <ServiceContent>
        <ServiceWrapper>
          <TitleContainer>
            <Title>The Dream Team</Title>
          </TitleContainer>
          <TeamContainer>
            {theDreamTeamData.map((props, index) => (
              <div key={index}>
                <Name>{props.name}</Name>
                <PositionTitle>{props.position}</PositionTitle>
              </div>
            ))}
          </TeamContainer>
        </ServiceWrapper>
      </ServiceContent>
    </ServiceContainer>
  )
}

export default TheDreamTeam

const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const ServiceContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
`

const ServiceWrapper = styled.div`
  display: flex;
  padding: 1rem 3rem;

  @media screen and (max-width: 564px) {
    padding: 0 2rem;
  }
`

const TitleContainer = styled.div`
  width: 40%;
  display: inline-block;
  padding-right: 1rem;
`

const Title = styled.p`
  display: flex;
  font-size: clamp(1.5rem, 5vw, 2.2rem);
  letter-spacing: 1px;
  font-weight: bold;
  color: #212121;
`

const TeamContainer = styled.div`
  display: inline-grid;
  width: 60%;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    grid-template-columns: 1fr;
  }
`

const Name = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 600;
  color: #424242;
`

const PositionTitle = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: 300;
  color: #424242;
`
