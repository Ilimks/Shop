import styles from './ContactsSection.module.scss';
import Image from 'next/image';

const contactItems = [
  {
    id: 1,
    title: 'Адрес:',
    description: 'Ортосайский рынок, 2 ряд, 5 контейнер',
    icon: '/assets/icons/LocationIcon.svg',
    padding: '12px 14.5px 12px 46.5px',
    width: '277px',
    iconTop: '-2px'
  },
  {
    id: 2,
    title: 'Ежедневно:',
    description: 'с 09:00 до 18:00',
    icon: '/assets/icons/TimeIcon.svg',
    padding: '22px 19px 22px 51px',
    iconTop: '-12px'
  },
  {
    id: 3,
    title: 'Контактный телефон:',
    description: '+996 554 745 123',
    icon: '/assets/icons/PhoneIcon.svg',
    padding: '22px 19px 22px 51px',
    iconTop: '-12px'
  },
  {
    id: 4,
    title: 'Email:',
    description: 'bellenuit@gmail.com',
    icon: '/assets/icons/EmailIcon.svg',
    padding: '22px 19px 22px 51px',
    iconTop: '-12px'
  }
];

const socialIcons = [
  { src: '/assets/icons/TelegaIcon.svg', alt: 'TelegaIcon' },
  { src: '/assets/icons/WhatsAppIcon.svg', alt: 'WhatsAppIcon' }
];

export const ContactsSection: React.FC = () => {
  return (
    <section className={styles.contacts}>
      <div className="container">
        <div className={styles.contacts__box}>
          {contactItems.map((el) => (
            <div 
              key={el.id} 
              className={styles.contacts__item}
              style={{ padding: el.padding, width: el.width }}
            >
              <p className={styles.contacts__title}>{el.title}</p>
              <p 
                className={styles.contacts__des} 
                style={{ 
                  '--icon-url': `url(${el.icon})`,
                  '--icon-top': el.iconTop 
                } as React.CSSProperties}
              >
                {el.description}
              </p>
            </div>
          ))}
          
          <div className={`${styles.contacts__item} ${styles.contacts__social}`}>
            <p className={styles.contacts__title}>Свяжитесь с нами:</p>
            <div className={styles.contacts__imgs}>
              {socialIcons.map((el, idx) => (
                <Image 
                  key={idx}
                  className={styles.img} 
                  src={el.src} 
                  alt={el.alt} 
                  width={44} 
                  height={44}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};