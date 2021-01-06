import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { socialMediaData } from '../data/SocialMediaData'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBg />
      <FooterContent>
        <FooterLeft>
          <ContactNumber>
            <a>+63 917 448 3092</a>
            <br />
            <a>+63 905 220 8662</a>
          </ContactNumber>
          <Email>
            <a href="mailto:hello.triboxdesign@gmail.com">hello.triboxdesign@gmail.com</a>
            <br />
            <a href="mailto:triboxdesignph@gmail.com">triboxdesignph@gmail.com</a>
          </Email>
          <Location>
          <a>1401 Park Centrale Building, IT Park,
            <br />Lahug, Apas, Cebu City</a>
          </Location>
        </FooterLeft>
        <FooterRight>
          <SocialMedia>
          {socialMediaData.map((props, index) => (
            
            <FooterImgContainer>
            <a href={props.url}>
              <img src={props.img} roundedCircle />
              </a>
            </FooterImgContainer>
              
            
          ))}
          </SocialMedia>
          <TradeMark>
          <p>&copy; 2020 Tribox Design&reg;<br />Tribox Design is a registered Trademark in WIPO</p>
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
`

const FooterBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70vh;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: center;
    height: 50vh;
  }
`

const FooterContent = styled.div`
  display: inline-grid;
  margin: auto;
  grid-template-columns: repeat(2, 4fr);
  grid-gap: 150px;
  padding: 0 1rem;

`

const FooterLeft = styled.div`

`

const FooterRight = styled.div`

`

const ContactNumber = styled.div`
  color: #fff;

`

const Email = styled.div`
  color: #fff;
  margin-top: 1rem;
`

const Location = styled.div`
  color: #fff;
  margin-top: 1rem;
`

const SocialMedia = styled.div`
  justify-content: center;
  align-items: center;
`

const FooterImgContainer = styled.div`
  height: 60px;
  width: 60px;
  align-items: center;
  margin: 10px;
  vertical-align: middle; 
  display: inline-block;
  justify-content: space-between;

`

const TradeMark = styled.div`
  margin-top: 1rem;
  color: #fff;

`

