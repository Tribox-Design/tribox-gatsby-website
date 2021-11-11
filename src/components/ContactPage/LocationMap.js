import React from 'react'
import styled from 'styled-components'
import Map from '../Map'

const LocationMap = () => {
  return (
    <ContactContainer>
      <Map />
    </ContactContainer>
  )
}

export default LocationMap

/// *********************************************************
/// Styled Components
///
const ContactContainer = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 2rem;
`