import React from "react"
import styled from "styled-components"
import { Button } from "../Button"

const WorkWithUs = () => {
  return (
    <WorkBannerContainer>
      <WorkBannerBg />
      <WorkBannerContent>
        <WorkBannerItems>
          <WorkBannerH1>Work With Us</WorkBannerH1>
          <WorkBannerP>Thinking to transform and grow your brand?</WorkBannerP>
          <WorkBannerButton>
            <Button round="true" to="/contact" big="true">
              Let's Talk
            </Button>
          </WorkBannerButton>
        </WorkBannerItems>
      </WorkBannerContent>
    </WorkBannerContainer>
  )
}

export default WorkWithUs

/// *********************************************************
/// Styled Components
///
const WorkBannerContainer = styled.div`
  background: #ff3333;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  padding: 2rem 0;
`

const WorkBannerBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

const WorkBannerContent = styled.div`
  z-index: 3;
  padding: 2rem calc((70vh - 1300px) / 2);
`

const WorkBannerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 100%;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const WorkBannerH1 = styled.h3`
  font-size: clamp(1.5rem, 6vw, 3.8rem);
  letter-spacing: 1px;
  margin: 0;
  font-weight: bold;
`

const WorkBannerP = styled.div`
  margin-top: -2px;
  font-size: clamp(1rem, 3vw, 2rem);
  font-weight: 600;

  @media screen and (max-width: 768px) {
    margin-top: 4px;
    font-weight: 500;
  }
`

const WorkBannerButton = styled.div`
  padding-top: 1.5rem;
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
