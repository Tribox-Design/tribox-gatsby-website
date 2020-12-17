import React from "react"
import styled from "styled-components"

const HighlightWorks = () => (
  <HighlightsContainer>
    <HighlightsHeader></HighlightsHeader>
    <HighlightsWrapper></HighlightsWrapper>
    
  </HighlightsContainer>
)

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
  color: #FC000D; 
`

const HighlightsWrapper = styled.div`
`
