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
          <WorkBannerP>Thinking to transform your brand identity?</WorkBannerP>
          <WorkBannerP>Let's talk about it.</WorkBannerP>
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

const WorkBannerContainer = styled.div`
  background: #fc000d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #fff;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
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

const WorkBannerH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-weight: bold;
`

const WorkBannerP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 0.4rem;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-weight: 500;
  }
`

const WorkBannerButton = styled.div`
  padding-top: 1.5rem;
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    padding-top: 0.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
