import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { socialMediaData } from '../data/SocialMediaData'

const Footer = () => {
  return (
    <FooterContainer>

      <FooterContent>
        <FooterLeft>
          <ContactNumber>
            <FooterP>+63 917 448 3092</FooterP>
            <FooterP>+63 905 220 8662</FooterP>
          </ContactNumber>
          <Email>
            <FooterLink href='mailto:hello.triboxdesign@gmail.com'>hello.triboxdesign@gmail.com</FooterLink>
            <br />
            <FooterLink href='mailto:triboxdesignph@gmail.com'>triboxdesignph@gmail.com</FooterLink>
          </Email>
          <Location>
          <FooterP>1401 Park Centrale Building, IT Park,
            <br />Lahug, Apas, Cebu City</FooterP>
          </Location>
        </FooterLeft>
        <FooterRight>
          <SocialMedia>
          {socialMediaData.map((props, index) => (
            <FooterImgContainer key={index}>
              <FooterLink href={props.url}>
                <img src={props.img} />
              </FooterLink>
            </FooterImgContainer>
          ))}
          </SocialMedia>
          <TradeMark>
          <FooterP>&copy; 2020 Tribox Design&reg;<br />Tribox Design is a registered Trademark in WIPO</FooterP>
          </TradeMark>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  background: #FC000D;
  display: flex;
  align-items: center;
  padding: 3rem 0;

  @media screen and (max-width: 768px) {
    padding: 2rem 0;
  }
`

const FooterContent = styled.div`
  display: inline-grid;
  margin: auto;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 150px;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }

`

const FooterLeft = styled.div`

`

const FooterRight = styled.div`

`

const ContactNumber = styled.div`
  color: #fff;
  position: relative;

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const Email = styled.div`
  color: #fff;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const Location = styled.div`
  color: #fff;
  margin-top: 1rem;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const FooterImgContainer = styled.div`
  height: 60px;
  width: 60px;
  align-items: center;
  margin: 10px;
  vertical-align: middle; 
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

  @media screen and (max-width: 768px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`

const FooterP = styled.p`
  @media screen and (max-width: 768px) {
    line-height: 1.5;
    vertical-align: middle;
  }
`