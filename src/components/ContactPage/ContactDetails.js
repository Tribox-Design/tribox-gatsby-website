import React from "react"
import styled from "styled-components"

const ContactDetails = () => {
  return (
    <ContactContainer>
      <ContactWidth>
        <ContactWrapper>
          <ContactCard>
            <ContactTitle>Call</ContactTitle>
            <ContactLink href="tel:+639174483092">+63 917 448 3092</ContactLink>
            <br />
            <ContactLink href="tel:+639052208662">+63 905 220 8662</ContactLink>
          </ContactCard>
          <ContactCard>
            <ContactTitle>Email</ContactTitle>
            <ContactLink href="mailto:hello.triboxdesign@gmail.com">
              hello.triboxdesign@gmail.com
            </ContactLink>
            <br />
            <ContactLink href="mailto:triboxdesignph@gmail.com">
              triboxdesignph@gmail.com
            </ContactLink>
          </ContactCard>
          <ContactCard>
            <ContactTitle>Address</ContactTitle>
            <ContactLink href="https://g.page/triboxdesign?share">
              1401 Park Centrale Building, IT Park,
              <br />
              Lahug, Apas, Cebu City
            </ContactLink>
          </ContactCard>
        </ContactWrapper>
      </ContactWidth>
    </ContactContainer>
  )
}

export default ContactDetails

const ContactContainer = styled.div`
  display: flex;
  background: #fff;
  padding: 3rem 5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 868px) {
    padding: 3rem 0rem;
    text-align: center;
  }
`

const ContactWidth = styled.div`
  max-width: 1140px;
`

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 140px;

  @media screen and (max-width: 918px) {
    grid-gap: 20px;
  }

  @media screen and (max-width: 1040px) {
    grid-gap: 80px;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`

const ContactTitle = styled.h1`
  font-weight: 600;
  color: #212121;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
`

const ContactCard = styled.div`
  line-height: 1.5;
  width: 100%;
  position: relative;
  transition: 0.2s ease;
`

const ContactLink = styled.a`
  text-decoration: none;
  color: #000000;
  letter-spacing: 0.5px;
  line-height: 1.5;

  &:hover {
    color: #fc000d;
  }
`
