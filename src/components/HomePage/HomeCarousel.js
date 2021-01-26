// import React from "react"
// import styled from "styled-components"
// import { Swiper, SwiperSlide } from "swiper/react"
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   Virtual,
//   EffectFade,
// } from "swiper"
// import "swiper/swiper-bundle.css"
// import "../styles/styles.css"
// import carouselCfm from "../../images/carousel-cfm.png"
// import carouselJaxx from "../../images/carousel-jaxx.png"
// import carouselLeisurepro from "../../images/carousel-leisurepro.png"
// import carouselManglaba from "../../images/carousel-manglaba.png"
// import carouselTres from "../../images/carousel-tres.png"

// SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade])

// const HomeCarousel = () => {
//   return (
//     <Swiper
//       control
//       effect="fade"
//       // navigation
//       pagination
//       loop
//       speed={1500}
//       autoplay={{ delay: 3500, disableOnInteraction: false }}
//       slidesPerView={1}
//     >
//       <SwiperSlide key={`slide-0`}>
//         <ImgT src={carouselCfm} alt="Cebu Farmer's Market" />
//       </SwiperSlide>
//       <SwiperSlide key={`slide-1`}>
//         <ImgT src={carouselJaxx} alt="Jaxx" />
//       </SwiperSlide>
//       <SwiperSlide key={`slide-2`}>
//         <ImgT src={carouselLeisurepro} alt="Leisure Pro" />
//       </SwiperSlide>
//       <SwiperSlide key={`slide-3`}>
//         <ImgT src={carouselManglaba} alt="Manglaba" />
//       </SwiperSlide>
//       <SwiperSlide key={`slide-4`}>
//         <ImgT src={carouselTres} alt="Tres" />
//       </SwiperSlide>
//     </Swiper>
//   )
// }

// const ImgT = styled.img`
//   width: 100%;
//   liststyle: none;
// `

// export default HomeCarousel

/// ---------------------------------------------------------------------

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
                fluid(maxWidth: 1080, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

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

const CarouSwiper = styled(Swiper)`
  max-width: 1920px;
`

const ImgT = styled.img`
  width: 100%;
  liststyle: none;
`

export default HomeCarousel
