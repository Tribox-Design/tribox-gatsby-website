import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button'

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
            <Button round="true" to="/about" big="true">Let's Talk</Button>
          </WorkBannerButton>
        </WorkBannerItems>
      </WorkBannerContent>
    </WorkBannerContainer>
  )
}

export default WorkWithUs;

const WorkBannerContainer = styled.div`
  background: #FC000D;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 0 1rem;
  position: relative;
  padding-top: 20px;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
    height: 50vh;
  }
`

const WorkBannerBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
    height: 45vh;
  }
`

const WorkBannerContent = styled.div`
  z-index: 3;
  height: calc(70vh - 80px);
  padding: 2rem calc((70vh - 1300px) / 2);

  @media screen and (max-width: 768px) {
    height: calc(40vh - 80px);
  }
`

const WorkBannerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  max-height: 100%;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-height: 80%;
  }
`

const WorkBannerH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  letter-spacing: 3px;
  margin-bottom: 1rem;
  font-weight: bold;
`

const WorkBannerP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 0.4rem;
  font-weight: 600;
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