import Image from 'next/image';
import styles from './SlideIntro.module.scss';

export const SlideIntro = () => (
  <div className={styles.slide}>
    <div className={styles.slide__left}>
      <Image src='/assets/icons/FooterLogo.svg' alt='LogoSwiper' width={238} height={156} />
      <div className={styles.slide__line}></div>
      <p className={styles.slide__text}>Belle Nuit — потому что ночь должна быть прекрасной</p>
      <div className={styles.slide__social}>
        {['TelegaSwiper', 'InstSwiper', 'WhatsAppSwiper'].map((name) => (
          <Image
            key={name}
            className={styles.social__natwork}
            src={`/assets/icons/${name}.svg`}
            alt={name}
            width={28}
            height={28}
          />
        ))}
      </div>
    </div>
    <div className={styles.slide__right}>
      <h3 className={styles.slide__title}>Интернет-магазин «Belle Nuit»</h3>
      <p className={styles.slide__description}>
        Мягкие и приятные к телу ткани подарят вам ощущение уюта после насыщенного дня. Пижамы идеально подойдут
        для спокойного сна, костюмы — для расслабленного утра или уютного вечера дома, а халаты станут незаменимыми
        после душа или просто в моменты, когда хочется окутать себя теплом.
      </p>
    </div>
  </div>
);
