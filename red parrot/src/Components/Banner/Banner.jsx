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
.mySwiper{
}
`


const Banner = () => {
  return (
    <Wrapper>
        <div>
        </div>
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
        <SwiperSlide><img style={{width:"100%"}} src='https://res.cloudinary.com/dyqynjew8/image/upload/v1705893361/Untitled_design_45_1_rqstot.png' /></SwiperSlide>
        <SwiperSlide><img style={{width:"100%"}} src="https://res.cloudinary.com/dyqynjew8/image/upload/v1705893589/Untitled_design_46_1_zx1ufe.png"/></SwiperSlide>
        <SwiperSlide><img style={{width:"100%"}} src="https://res.cloudinary.com/dyqynjew8/image/upload/v1705894651/2024_3_wkguof.png"/></SwiperSlide>
        <SwiperSlide><img style={{width:"100%"}} src='https://res.cloudinary.com/dyqynjew8/image/upload/v1705894555/2024_2_1_ye2kjw.png' /></SwiperSlide>
       
      </Swiper>
    </Wrapper>
  )
}

export default Banner