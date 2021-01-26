import React from "react"
import styled from "styled-components"

const Line = () => {
  return (
    <LineContainer>
      <LineParent>
        <hr />
      </LineParent>
    </LineContainer>
  )
}

export default Line

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const LineParent = styled.div`
  max-width: 1140px;
  width: 87%;

`
