import React from "react"
import styled from "styled-components"
import { socialMediaData } from "../data/SocialMediaData"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <ContactNumber>
            <FooterLink href="tel:+639174483092">+63 917 448 3092</FooterLink>
            <br />
            <FooterLink href="mailto:hello.triboxdesign@gmail.com">
              hello.triboxdesign@gmail.com
            </FooterLink>
          </ContactNumber>
          <Location>
            <FooterLink
              href="https://g.page/triboxdesign?share"
              target="_blank"
              rel="noopener noreferrer"
            >
              1401 Park Centrale Building, IT Park,
              <br />
              Lahug, Apas, Cebu City
            </FooterLink>
          </Location>
        </FooterLeft>
        <FooterRight>
          <SocialMedia>
            {socialMediaData.map((props, index) => (
              <FooterImgContainer key={index}>
                <FooterLink
                  href={props.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialMediaImg src={props.img} alt={props.url} />
                </FooterLink>
              </FooterImgContainer>
            ))}
          </SocialMedia>
          <TradeMark>
            <FooterP>
              &copy; 2021 Tribox Design. All Rights Reserved.
              <br />
              Tribox Design is a registered Trademark in WIPO
            </FooterP>
          </TradeMark>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background: #ff3333;
  display: flex;
  align-items: center;
  padding: 3rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const FooterContent = styled.div`
  z-index: 3;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: inline-grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 250px;

  @media screen and (max-width: 1140px) {
    padding: 0 2rem;
    grid-gap: 100px;
  }

  @media screen and (max-width: 875px) {
    grid-gap: 50px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

const FooterLeft = styled.div`
  width: 100%;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

const FooterRight = styled.div``

const ContactNumber = styled.div`
  color: #fff;
  position: relative;
`

const Location = styled.div`
  color: #fff;
  margin-top: 1rem;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const SocialMedia = styled.div`
  margin: auto;
`

const FooterImgContainer = styled.div`
  height: 54px;
  width: 54px;
  align-items: center;
  margin: 10px 20px 10px 0px;
  display: inline-block;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 48px;
    width: 48px;
  }
`

const TradeMark = styled.div`
  margin-top: 1rem;
  color: #fff;
`

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
  line-height: 1.4;

  &:hover {
    text-decoration: underline;
  }
`

const FooterP = styled.p`
  margin-bottom: 0;
  font-size: 16px;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    line-height: 1.5;
    vertical-align: middle;
  }
`

const SocialMediaImg = styled.img`
  transition: 0.2s;

  :focus,
  :hover {
    transform: scale(1.1);
  }
`
