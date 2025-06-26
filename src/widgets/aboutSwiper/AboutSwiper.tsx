'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './AboutSwiper.module.scss';
import { SlideAboutUs } from '@/features/swiper/ui/SlideAboutUs';
import { SlideIntro } from '@/features/swiper/ui/SlideIntro';

const slides = [
  {
    key: 'about1',
    content: <SlideIntro/>
  },
  {
    key: 'about2',
    content: <SlideAboutUs />
  },
];

export const AboutSwiper: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <div className={styles.slider__wrapper}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        spaceBetween={10}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet: (_, className) => `<span class="${className}"></span>`,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setSwiperReady(true)}
        className={styles.my__swiper}
      >
        {slides.map(({ key, content }) => (
          <SwiperSlide key={key}>{content}</SwiperSlide>
        ))}

        <button ref={prevRef} className={`${styles.navButton} ${styles.prev} swiper-button-prev`}>
          <Image src="/assets/icons/LeftNav.svg" alt="prev" width={24} height={24} />
        </button>
        <button ref={nextRef} className={`${styles.navButton} ${styles.next} swiper-button-next`}>
          <Image src="/assets/icons/RightNav.svg" alt="next" width={24} height={24} />
        </button>
      </Swiper>

      <div 
        ref={paginationRef} 
        className={styles.swiper__pagination} 
        style={{ display: swiperReady ? 'flex' : 'none' }}
      />
    </div>
  );
};