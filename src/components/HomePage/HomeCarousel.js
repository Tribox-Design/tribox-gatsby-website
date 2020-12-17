import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay, Virtual } from 'swiper';
import "swiper/swiper-bundle.css";
import './styles.css';
import carouselCfm from "../../images/carousel-cfm.png"
import carouselJaxx from "../../images/carousel-jaxx.png"
import carouselLeisurepro from "../../images/carousel-leisurepro.png"
import carouselManglaba from "../../images/carousel-manglaba.png"
import carouselTres from "../../images/carousel-tres.png"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual, EffectCoverflow]);

const HomeCarousel = () => {
  return (
    <Swiper
      control
      effect='coverflow'
      // navigation
      pagination
      wrapperTag="ul"
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerView={1}
    >
      <SwiperSlide key={`slide-0`} wrapperTag="li"><ImgT src={carouselCfm} alt="Cebu Farmer's Market"/></SwiperSlide>
      <SwiperSlide key={`slide-1`} wrapperTag="li"><ImgT src={carouselJaxx} alt="Jaxx"/></SwiperSlide>
      <SwiperSlide key={`slide-2`} wrapperTag="li"><ImgT src={carouselLeisurepro} alt="Leisure Pro"/></SwiperSlide>
      <SwiperSlide key={`slide-3`} wrapperTag="li"><ImgT src={carouselManglaba} alt="Manglaba"/></SwiperSlide>
      <SwiperSlide key={`slide-4`} wrapperTag="li"><ImgT src={carouselTres} alt="Tres" /></SwiperSlide>
    </Swiper>
  )
}

const ImgT = styled.img`
  width: 100%;
  listStyle: none;
`

export default HomeCarousel
