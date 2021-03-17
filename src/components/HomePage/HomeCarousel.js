import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
  EffectFade,
} from "swiper"
import "swiper/swiper-bundle.css"
import "../styles/styles.css"
import { useStaticQuery, graphql } from "gatsby"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade])

const HomeCarousel = () => {
  const data = useStaticQuery(graphql`
    query GetCarouselQuery {
      allCarouselDataJson {
        edges {
          node {
            alt
            img {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <CarouSwiper
      control
      effect="fade"
      // navigation
      pagination
      loop
      speed={1500}
      autoHeight
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      slidesPerView={1}
    >
      {getCarouselItems(data)}
    </CarouSwiper>
  )
}

/// *********************************************************
/// Functions
///
function getCarouselItems(data) {
  const carouselArray = []
  data.allCarouselDataJson.edges.forEach((item, index) => {
    carouselArray.push(
      <SwiperSlide key={`slide-` + index}>
        <ImgT
          alt={item.node.alt}
          src={item.node.img.childImageSharp.fluid.src}
          fluid={item.node.img.childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
        />
      </SwiperSlide>
    )
  })
  return carouselArray
}

/// *********************************************************
/// Styled Components
///
const CarouSwiper = styled(Swiper)`
  max-width: 1920px;
`

const ImgT = styled.img`
  width: 100%;
  liststyle: none;
`

export default HomeCarousel
