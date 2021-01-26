import React from "react"
import styled from "styled-components"
import { painPointsData } from "../../data/PaintPointsData"
import POTW from "../../images/potw.png"
import WBDS from "../../images/wbds.jpg"
import BA from "../../images/brands-awesome.png"
import { Formik, Form, Field, ErrorMessage } from "formik"

const ContactUs = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
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
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                address: "",
                company: "",
                phone: "",
                email: "",
                services: "",
                message: "",
              }}
              onSubmit={(values, actions) => {
                fetch("/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                  body: encode({ "form-name": "Contact", ...values }),
                })
                  .then(() => {
                    alert(
                      "Successfully submitted. We'll get back to you shortly."
                    )
                    actions.resetForm()
                  })
                  .catch(() => {
                    alert("Error")
                  })
                  .finally(() => actions.setSubmitting(false))
              }}
              validate={values => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                const errors = {}
                if (!values.firstName) {
                  errors.firstName = "First Name required"
                }
                if (!values.lastName) {
                  errors.lastName = "Last Name required"
                }
                if (!values.email || !emailRegex.test(values.email)) {
                  errors.email = "Valid Email required"
                }
                if (!values.phone) {
                  errors.phone = "Phone Number required"
                }
                if (!values.company) {
                  errors.company = "Company Name required"
                }
                if (!values.message) {
                  errors.message = "Message required"
                }
                return errors
              }}
            >
              <Form name="Contact" data-netlify={true} netlify-honeypot="bot-field">
                <Field type="hidden" name="bot-field" />

                <MyLabel>Name *</MyLabel>
                <NameContainer>
                  <FirstNameContainer>
                    <InputForm name="firstName" placeholder="First Name" />
                    <ErrorMessage
                      name="firstName"
                      render={msg => (
                        <ProperErrorMessage>{msg}</ProperErrorMessage>
                      )}
                    />
                  </FirstNameContainer>
                  <LastNameContainer>
                    <InputForm name="lastName" placeholder="Last Name" />
                    <ErrorMessage
                      name="lastName"
                      render={msg => (
                        <ProperErrorMessage>{msg}</ProperErrorMessage>
                      )}
                    />
                  </LastNameContainer>
                </NameContainer>

                <MyLabel htmlFor="email">Email *</MyLabel>
                <InputForm
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <ErrorMessage
                  name="email"
                  render={msg => <ProperErrorMessage>{msg}</ProperErrorMessage>}
                />

                <MyLabel htmlFor="phone">Phone *</MyLabel>
                <InputForm type="tel" name="phone" placeholder="Phone Number" />
                <ErrorMessage
                  name="phone"
                  render={msg => <ProperErrorMessage>{msg}</ProperErrorMessage>}
                />

                <MyLabel htmlFor="company">Company/Business *</MyLabel>
                <InputForm name="company" placeholder="Name of Business" />
                <ErrorMessage
                  name="company"
                  render={msg => <ProperErrorMessage>{msg}</ProperErrorMessage>}
                />

                <MyLabel htmlFor="address">Address</MyLabel>
                <InputForm name="address" placeholder="Business Address" />

                <MyLabel>What needs to be solved today?</MyLabel>
                <PainPointsContainer>
                  {painPointsData.map((props, index) => (
                    <PainPointsItem key={index}>
                      <PainPointCheckBox
                        type="checkbox"
                        name="services"
                        value={props.service}
                      />
                      <PainPointLabel>{props.service}</PainPointLabel>
                    </PainPointsItem>
                  ))}
                </PainPointsContainer>
                <MyLabel>Message *</MyLabel>
                <div>
                  <TextAreaForm
                    component="textarea"
                    name="message"
                    placeholder="Tell us about your ideas, timeline and budget range."
                  />
                  <ErrorMessage
                    name="message"
                    render={msg => (
                      <ProperErrorMessage>{msg}</ProperErrorMessage>
                    )}
                  />
                </div>

                <FormButton type="submit">Submit</FormButton>
              </Form>
            </Formik>
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
    grid-gap: 10px;
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
  padding: 0 2rem;
`

const FeatureContainer = styled.div`
  height: 100%;
`

const FeatureTitle = styled.p`
  margin: 6rem 0 1rem 0;
  color: #424242;
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

const ContactTitle = styled.h1`
  margin-top: 1.5rem;
  font-weight: 600;
  color: #424242;
  font-size: 3.5rem;
  letter-spacing: 1px;

  @media screen and (max-width: 868px) {
    font-size: 2.5rem;
  }
`

const MyLabel = styled.label`
  color: #616161;
  text-align: start;
  display: block;
  padding: 1.5rem 0 0.5rem;
  font-weight: 600;
`

const PainPointCheckBox = styled(Field)`
  margin-right: 0.5rem;
`

const PainPointLabel = styled.label`
  padding: 6px 0 0 0;
  font-size: 14px;
`

const InputForm = styled(Field)`
  display: block;
  width: 100%;
  border: 1px solid #e3e3e3;
  border-radius: 3px;
  padding: 0.5rem;
  font-family: Roboto;
  font-size: 16px;
`

const TextAreaForm = styled(Field)`
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
  background: #ff3333;
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

const ProperErrorMessage = styled.div`
  font-size: 12px;
  color: #ff3333;
  margin-top: 8px;
  margin-left: 8px;
`
