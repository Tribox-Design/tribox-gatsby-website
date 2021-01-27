import React from "react"
import styled from "styled-components"

const ProblemSolution = ({ frontmatter }) => {
  return (
    <WorkWrapper>
      <ProblemSolutionContainer>
        <TitleContainer>
          <ProblemSolutionTitle>Problem</ProblemSolutionTitle>
        </TitleContainer>
        <DescriptionContainer>
          <Description>{frontmatter.problemDescription}</Description>
        </DescriptionContainer>
      </ProblemSolutionContainer>
      <ProblemSolutionContainer>
        <TitleContainer>
          <ProblemSolutionTitle>Solution</ProblemSolutionTitle>
        </TitleContainer>
        <DescriptionContainer>
          <Description>{frontmatter.solutionDescription}</Description>
        </DescriptionContainer>
      </ProblemSolutionContainer>
    </WorkWrapper>
  )
}

export default ProblemSolution

const WorkWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 2fr);

  ${'' /* justify-items: center; */}
  padding-top: 3rem;

  @media screen and (max-width: 1000px) {
    grid-gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TitleContainer = styled.div`

`

const ProblemSolutionContainer = styled.div`
  ${'' /* display: inline-block; */}

  width: 100%;

  @media screen and (max-width: 768px) {
    ${'' /* width: 100%; */}
    display: relative;
  }
`

const ProblemSolutionTitle = styled.p`
  font-size: clamp(1.2rem, 5vw, 2rem);
  letter-spacing: 1px;
  font-weight: bold;
`

const DescriptionContainer = styled.div`
  padding-top: 0.5rem;
  padding-right: 3rem;
`

const Description = styled.p`
  ${"" /* font-size: clamp(1rem, 3vw, 1.4rem); */}
  font-weight: 300;
`
