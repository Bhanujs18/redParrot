import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from "styled-components";
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Wrapper = styled.section`
display: flex;
height: max-content;
align-items: center;
position: relative;
.mySwiper{
}
`


const Banner = () => {
  return (
    <Wrapper>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='bannerImg' style={{width:"100%"}} src='https://fitout.hu/wp-content/uploads/2020/08/Grosbasket-1-scaled-1.jpg' /></SwiperSlide>
        <SwiperSlide><img className='bannerImg' style={{width:"100%"}} src="https://learn.zoner.com/wp-content/uploads/2020/09/wide-angle-lenses-for-portrait-photography-sure-just-stand-back-and-choose-the-right-angle.jpg"/></SwiperSlide>
        <SwiperSlide><img className='bannerImg' style={{width:"100%"}} src="https://www.shutterstock.com/image-photo/man-sitting-on-stairs-lifestyle-600nw-740474782.jpg"/></SwiperSlide>
        <SwiperSlide><img className='bannerImg' style={{width:"100%"}} src='https://social.thearvindstore.com/images/home_banner.jpg?version=2.2.15&subv=1.8' /></SwiperSlide>
      </Swiper>
      <div className='bannerText'><h1>Welcom</h1></div>
    </Wrapper>
  )
}

export default Banner