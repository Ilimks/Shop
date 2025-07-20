'use client';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './CategorySwiper.module.scss';

const categories = [
  { src: '/assets/images/CategorySwiper1.jpg', title: 'Женская пижама' },
  { src: '/assets/images/CategorySwiper2.jpg', title: 'Мужская пижама' },
  { src: '/assets/images/CategorySwiper3.jpg', title: 'Унисекс пижама' },
  { src: '/assets/images/CategorySwiper1.jpg', title: 'Женский костюм' },
  { src: '/assets/images/CategorySwiper2.jpg', title: 'Мужской костюм' },
  { src: '/assets/images/CategorySwiper3.jpg', title: 'Унисекс костюм' },
  { src: '/assets/images/CategorySwiper1.jpg', title: 'Женский халат' },
  { src: '/assets/images/CategorySwiper2.jpg', title: 'Мужской халат' },
  { src: '/assets/images/CategorySwiper3.jpg', title: 'Унисекс халат' },
];

export const CategorySwiper: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <div className={styles.category__wrapper}>
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        spaceBetween={47}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet: (_, className) => `<span class="${className}"></span>`,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 90
          },
          380: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          440: {
            slidesPerView: 2,
            spaceBetween: 16
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 102
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 134
          },
          1040: {
            slidesPerView: 3,
            spaceBetween: 86
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 47
          },
        }}
        onInit={() => setSwiperReady(true)}
        className={styles.my__swiper}
      >
        {categories.map(({ src, title }, i) => (
          <SwiperSlide key={i} className={styles.category__slide}>
            <div className={styles.category__item}>
              <Image className={styles.category__image} src={src} alt={title} width={382} height={213} />
              <h3 className={styles.category__title}>{title}</h3>
            </div>
          </SwiperSlide>
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
