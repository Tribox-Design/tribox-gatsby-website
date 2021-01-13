import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay, Virtual, EffectFade } from 'swiper';
import "swiper/swiper-bundle.css";
import '../styles/styles.css';
import carouselCfm from "../../images/carousel-cfm.png"
import carouselJaxx from "../../images/carousel-jaxx.png"
import carouselLeisurepro from "../../images/carousel-leisurepro.png"
import carouselManglaba from "../../images/carousel-manglaba.png"
import carouselTres from "../../images/carousel-tres.png"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectFade]);

const HomeCarousel = () => {
  return (
    <Swiper
      control
      effect='fade'
      // navigation
      pagination
      loop
      speed={1000}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={1}
    >
      <SwiperSlide key={`slide-0`} ><ImgT src={carouselCfm} alt="Cebu Farmer's Market" /></SwiperSlide>
      <SwiperSlide key={`slide-1`} ><ImgT src={carouselJaxx} alt="Jaxx" /></SwiperSlide>
      <SwiperSlide key={`slide-2`} ><ImgT src={carouselLeisurepro} alt="Leisure Pro" /></SwiperSlide>
      <SwiperSlide key={`slide-3`} ><ImgT src={carouselManglaba} alt="Manglaba" /></SwiperSlide>
      <SwiperSlide key={`slide-4`} ><ImgT src={carouselTres} alt="Tres" /></SwiperSlide>
    </Swiper>
  )
}

const ImgT = styled.img`
  width: 100%;
  listStyle: none;
`

export default HomeCarousel
