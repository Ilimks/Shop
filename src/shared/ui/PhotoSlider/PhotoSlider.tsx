'use client'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';

import styles from './PhotoSlider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function PhotoSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <div className={styles.sliderWrap}>
        <Swiper
          style={{ maxHeight: 670 }}
          onSwiper={setThumbsSwiper}
          direction={'vertical'}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className={styles.slider1}
        >
          <SwiperSlide>
            slide 1
          </SwiperSlide>
          <SwiperSlide>
            slide 2
          </SwiperSlide>
          <SwiperSlide>
            slide 3
          </SwiperSlide>
          <SwiperSlide>
            slide 4
          </SwiperSlide>
        </Swiper>
        <Swiper
          style={{ maxWidth: '80%' }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className={styles.slider2}
        >
          <SwiperSlide>
            slide 1
          </SwiperSlide>
          <SwiperSlide>
            slide 2
          </SwiperSlide>
          <SwiperSlide>
            slide 3
          </SwiperSlide>
          <SwiperSlide>
            slide 4
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

