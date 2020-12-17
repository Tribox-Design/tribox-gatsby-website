import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const HighlightWorks = () => {
  // const data = useStaticQuery(graphql`
    
  // `)

  return (
    <HighlightsContainer>
      <HighlightsHeader></HighlightsHeader>
      <HighlightsWrapper></HighlightsWrapper>
    </HighlightsContainer>
  )
}

export default HighlightWorks

const HighlightsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
`

const HighlightsHeader = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #fc000d;
`

const HighlightsWrapper = styled.div``
