import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import URL from "../BaseUrl/BaseUrl";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles/swiper.css';

// import required modules
import { Navigation } from 'swiper/modules';
export default function SwiperComponent({ imagesArr }) {

    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {imagesArr.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={`${URL}images/${img}`} alt='' />
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
