import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const Clutch = () => {
  return (
    <Container>
      <Content>
        <Helmet>
          <script src="https://widget.clutch.co/static/js/widget.js" />
        </Helmet>
        <div
          className="clutch-widget"
          data-url="https://widget.clutch.co"
          data-widget-type="4"
          data-expandifr="true"
          data-height="auto"
          data-snippets="true"
          data-clutchcompany-id="1437608"
        ></div>
      </Content>
    </Container>
  )
}

export default Clutch

/// *********************************************************
/// Styled Components
///
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 2rem;
`

const Content = styled.div`
  z-index: 3;
  max-width: 1010px;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`
