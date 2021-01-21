import { encode } from "Punycode"
import React, { useState } from "react"
import styled from "styled-components"
import { painPointsData } from "../../data/PaintPointsData"
import POTW from "../../images/potw.png"
import WBDS from "../../images/wbds.jpg"
import BA from "../../images/brands-awesome.png"

const ContactUs = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "Form-name": "contact", ...formState }),
    })
      .then(() =>
        alert("Successfully submitted. We'll get back to you shortly.")
      )
      .catch(error => alert(error))
  }

  return (
    <ContactContainer>
      <ContactWidth>
        <ContactWrapper>
          <FeatureCard>
            <ContactTitle>Let us know how we can help</ContactTitle>
            <FeatureContainer>
              <FeatureTitle>AS FEATURED IN</FeatureTitle>
              <FeaturedImage
                src={POTW}
                alt="Packaging Of The World"
                style={{ width: "260px" }}
              />
              <br />
              <FeaturedImage
                src={BA}
                alt="Brands Awesome"
                style={{ height: "120px", width: "120px" }}
              />
              <br />
              <FeaturedImage src={WBDS} alt="World Brand Design Society" />
            </FeatureContainer>
          </FeatureCard>
          <ContactCard>
            <SubmissionForm
              onSubmit={handleSubmit}
              name="Contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <InputForm type="hidden" name="form-name" value="Contact" />
              <MyLabel>Name *</MyLabel>
              <NameContainer>
                <FirstNameContainer>
                  <InputForm
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                </FirstNameContainer>
                <LastNameContainer>
                  <InputForm
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                  />
                </LastNameContainer>
              </NameContainer>

              <MyLabel>Email *</MyLabel>
              <InputForm
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />

              <MyLabel>Phone *</MyLabel>
              <InputForm type="tel" name="phone" placeholder="Phone Number" />

              <MyLabel>Company/Business *</MyLabel>
              <InputForm
                type="text"
                name="company"
                placeholder="Name of Business"
                onChange={handleChange}
              />

              <MyLabel>Address</MyLabel>
              <InputForm
                type="text"
                name="address"
                placeholder="Business Address"
                onChange={handleChange}
              />

              <MyLabel>What needs to be solved today?</MyLabel>
              <PainPointsContainer>
                {painPointsData.map((props, index) => (
                  <PainPointsItem key={index}>
                    <input
                      type="checkbox"
                      name={props.service}
                      value={props.service}
                      onChange={handleChange}
                    />
                    <PainPointLabel for={props.service}>
                      {props.service}
                    </PainPointLabel>
                  </PainPointsItem>
                ))}
              </PainPointsContainer>
              <MyLabel>Message *</MyLabel>
              <TextAreaForm name="message"                    onChange={handleChange}
 />
              <FormButton type="submit">Submit</FormButton>
            </SubmissionForm>
          </ContactCard>
        </ContactWrapper>
      </ContactWidth>
    </ContactContainer>
  )
}

export default ContactUs

const ContactContainer = styled.div`
  display: flex;
  background: #fff;
  padding: 3rem 5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 868px) {
    padding: 3rem 0rem;
  }
`

const ContactWidth = styled.div`
  max-width: 1140px;
  width: 100%;
`

const ContactWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 60px;

  @media screen and (max-width: 918px) {
    grid-gap: 20px;
  }

  @media screen and (max-width: 1040px) {
    grid-gap: 60px;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`

const FeatureCard = styled.div`
  width: 100%;
  position: relative;
  transition: 0.2s ease;

  @media screen and (max-width: 868px) {
    padding: 0 2rem;
  }
`

const ContactCard = styled.div`
  width: 100%;
  position: relative;
  transition: 0.2s ease;
`

const FeatureContainer = styled.div`
  ${"" /* text-align: center; */}
  height: 100%;
`

const FeatureTitle = styled.p`
  margin: 6rem 0 1rem 0;
  color: #616161;
  font-size: 28px;
  letter-spacing: 2px;

  @media screen and (max-width: 868px) {
    margin: 3rem 0 0 0;
    font-size: 24px;
  }
`

const FeaturedImage = styled.img`
  margin-top: 3rem;
  width: 400px;

  @media screen and (max-width: 868px) {
    width: 300px;
    margin-top: 2rem;
  }
`

const ContactP = styled.p`
  letter-spacing: 0.5px;
`

const ContactTitle = styled.h1`
  margin-top: 1.5rem;
  font-weight: 600;
  color: #424242;
  font-size: 3.5rem;
  letter-spacing: 1px;

  @media screen and (max-width: 868px) {
    font-size: 3rem;
  }
`

const SubmissionForm = styled.form`
  max-width: 100%;
  border-radius: 5px;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    border: none;
  }
`

const MyLabel = styled.label`
  color: #616161;
  text-align: start;
  display: block;
  padding: 1.5rem 0 0.5rem;
  font-weight: 600;
`

const PainPointLabel = styled.label`
  padding: 6px 0 0 0.5rem;
  font-size: 14px;
`

const InputForm = styled.input`
  display: block;
  width: 100%;
  ${"" /* min-height: 2rem; */}
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  padding: 0.5rem;
  font-family: Roboto;
  font-size: 16px;
`

const TextAreaForm = styled.textarea`
  display: block;
  width: 100%;
  min-height: 130px;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  font-family: Roboto;
  padding: 0.5rem;
  font-size: 16px;
`

const NameContainer = styled.div`
  display: flex;
`

const FirstNameContainer = styled.div`
  width: 50%;
  padding-right: 0.5rem;
`

const LastNameContainer = styled.div`
  width: 50%;
  padding-left: 0.5rem;
`

const PainPointsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 1rem;

  border: 1px solid #e3e3e3;
  padding: 1rem 0 1rem 3rem;
  border-radius: 5px;

  @media screen and (max-width: 1140px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0 1rem 2rem;
  }

  @media screen and (max-width: 450px) {
    padding: 1rem;
  }
`

const PainPointsItem = styled.div`
  text-align: start;
  line-height: 1.5;
  display: flex;
  align-items: center;
`

const FormButton = styled.button`
  border: 0;
  background: #fc000d;
  padding: 1rem 3rem 0.7rem 3rem;
  color: white;
  width: auto;
  text-transform: uppercase;
  cursor: pointer;
  margin: 1rem auto;
  font-size: 18px;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #424242;
  }
`
