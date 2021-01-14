import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutStaff = () => {
  const data = useStaticQuery(graphql`
    query GetStaffQuery {
      allStaffDataJson {
        edges {
          node {
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            position
            alt
          }
        }
      }
    }
  `)

  function getStaffItems(data) {
    const staffArray = []
    data.allStaffDataJson.edges.forEach((item, index) => {
      staffArray.push(
        <ProfileContent key={index}>
          <ProfileImg
            alt={item.node.alt}
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProfileName>{item.node.name}</ProfileName>
          <p>{item.node.position}</p>
        </ProfileContent>
      )
    })
    return staffArray
  }

  return (
    <ProfileContainer>
      <ProfileWidth>
        <ProfileWrapper>{getStaffItems(data)}</ProfileWrapper>
      </ProfileWidth>
    </ProfileContainer>
  )
}

export default AboutStaff

const ProfileContainer = styled.div`
  display: flex;
  background: #fff;
  padding: 3rem 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 868px) {
    padding: 3rem 0rem;
  }
`

const ProfileWidth = styled.div`
  max-width: 1140px;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 140px;
  justify-items: center;

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
    grid-gap: 40px;
  }
`

const ProfileContent = styled.div`
  line-height: 1.5;
  height: 100%;
  position: relative;
  transition: 0.2s ease;
`

const ProfileImg = styled(Img)`
  width: 200px;
  position: absolute;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const ProfileName = styled.div`
  padding-top: 16px;
  font-weight: 600;
  color: #212121;
  font-size: 1.5rem;
`
