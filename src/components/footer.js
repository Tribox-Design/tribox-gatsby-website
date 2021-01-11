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
            <p>+63 917 448 3092</p>
            <p>+63 905 220 8662</p>
          </ContactNumber>
          <Email>
            <FooterLink to='mailto:hello.triboxdesign@gmail.com'>hello.triboxdesign@gmail.com</FooterLink>
            <br />
            <FooterLink to='mailto:triboxdesignph@gmail.com'>triboxdesignph@gmail.com</FooterLink>
          </Email>
          <Location>
          <p>1401 Park Centrale Building, IT Park,
            <br />Lahug, Apas, Cebu City</p>
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

const FooterLink = styled.a`
  text-decoration: none;
  color: white;
`