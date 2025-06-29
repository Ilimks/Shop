'use client'
import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper/types';
import { PhotoSliderProps } from '@/shared/types/types';

import styles from './PhotoSlider.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';



export const PhotoSlider: React.FC<PhotoSliderProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  return (
    <>
      <div className={styles.sliderWrap}>
        <Swiper
          style={{transform: 'translateY(20%)'}}
          onSwiper={setThumbsSwiper}
          direction={'vertical'}
          spaceBetween={53}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className={styles.thumbsSlider}
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <Image width={120} height={120} src={img} alt={img}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          style={{ maxWidth: '80%' }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs]}
          className={styles.mainSlider}
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <Image width={440} height={700} src={img} alt={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

