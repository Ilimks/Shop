import Image from 'next/image';
import styles from './SlideAboutUs.module.scss';

export const SlideAboutUs = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__left}>
        <Image className={styles.slide__left__img} src='/assets/images/SwiperIMG.png' alt='SwiperIMG' width={496} height={282} />
      </div>
      <div className={styles.slide__right}>
        <h3 className={styles.slide__title}>О нас:</h3>
        <p className={styles.slide__description}>
          Мы предлагаем разнообразие фасонов, расцветок и материалов: от лёгкого хлопка до нежного велюра.
          Каждая модель создана с заботой о вашем комфорте и стиле — потому что даже дома вы заслуживаете
          выглядеть красиво и чувствовать себя отлично. Выбирайте одежду для сна и отдыха, которая подойдёт
          именно вам — для тёплых вечеров, уютных выходных и сладких снов.
        </p>
      </div>
    </div>
  );
};
