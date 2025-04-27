import styles from "./AboutPajamasSection.module.scss";

export const AboutPajamasSection: React.FC = () => {
  return (
    <section className={styles.aboutPajamas}>
      <div className="container">
        <div className={styles.aboutPajamas__box}>

          <h2 className={styles.aboutPajamas__box__name1}>
            Пижамы – комфорт и стиль для вашего сна
          </h2>
          
          <p className={styles.aboutPajamas__box__text1}>
            Пижамы — это не просто домашняя одежда, а настоящий символ уюта,
            заботы о себе и своём комфорте. В нашем магазине вы найдёте большой
            выбор пижам, созданных с любовью к деталям и вниманием к качеству.
            Мы уверены: чтобы хорошо высыпаться и чувствовать себя уютно дома,
            важно подобрать идеальную пижаму — такую, которая подойдёт именно
            вам
          </p>
          <h3 className={styles.aboutPajamas__box__name2}>
            Почему стоит выбрать наши пижамы?
          </h3>
          <ul className={styles.aboutPajamas__box__ul}>

            <li className={styles.aboutPajamas__box__li}>
              <h4 className={styles.aboutPajamas__box__li__name}>Мягкие и дышащие ткани</h4>
              <p className={styles.aboutPajamas__box__li__text}>
                Мы используем только качественные материалы: хлопок, вискозу,
                фланель, атлас и другие приятные к телу ткани. Они пропускают
                воздух, позволяют коже дышать и дарят ощущение лёгкости и тепла.
              </p>
            </li>

            <li className={styles.aboutPajamas__box__li}>
              <h4 className={styles.aboutPajamas__box__li__name}>Современный дизайн</h4>
              <p className={styles.aboutPajamas__box__li__text}>
                Забудьте про скучные пижамы! У нас вы найдёте стильные модели:
                от классических комплектов до милых вариантов с принтами,
                кружева, пижамы-оверсайз и уютные костюмы для сна. Вы будете
                чувствовать себя красиво не только днём, но и ночью.
              </p>
            </li>

            <li className={styles.aboutPajamas__box__li}>
              <h4 className={styles.aboutPajamas__box__li__name}>Идеальная посадка</h4>
              <p className={styles.aboutPajamas__box__li__text}>
                Мы предлагаем пижамы разных фасонов и размеров — от XS до
                plus-size. Каждая модель продумана так, чтобы не сковывать
                движения и дарить максимальный комфорт в течение всей ночи.
              </p>
            </li>

            <li className={styles.aboutPajamas__box__li}>
              <h4 className={styles.aboutPajamas__box__li__name}>Для любого времени года</h4>
              <p className={styles.aboutPajamas__box__li__text}>
                В нашем ассортименте есть тёплые пижамы из флиса и велюра — для
                холодных зимних вечеров, а также лёгкие и воздушные комплекты —
                для жаркого лета. Хотите универсальный вариант на весь год? У
                нас есть и такие!
              </p>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};
