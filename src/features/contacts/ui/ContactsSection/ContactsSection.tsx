import styles from './ContactsSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const contactItems = [
  {
    id: 1,
    title: 'Адрес:',
    description: 'Ортосайский рынок, 2 ряд, 5 контейнер',
    icon: '/assets/icons/LocationIcon.svg',
    padding: '12px 38px 12px 71px',
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
    description: '+996 700 307 25',
    icon: '/assets/icons/PhoneIcon.svg',
    padding: '22px 19px 22px 51px',
    iconTop: '-12px',
    link: 'tel:+996706030725'
  },
  {
    id: 4,
    title: 'Email:',
    description: 'ilimk9731@gmail.com',
    icon: '/assets/icons/EmailIcon.svg',
    padding: '22px 19px 22px 51px',
    iconTop: '-12px',
    link: 'mailto:ilimk9731@gmail.com'
  }
];

const socialIcons = [
  { 
    src: '/assets/icons/TelegaIcon.svg', 
    alt: 'Telegram',
    link: 'https://t.me/ilimk4'
  },
  { 
    src: '/assets/icons/WhatsAppIcon.svg', 
    alt: 'WhatsApp',
    link: 'https://wa.me/996706030725'
  }
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
              style={{ padding: el.padding }}
            >
              <div className={styles.contacts__item__box}>
                <p className={styles.contacts__title}>{el.title}</p>
                {el.link ? (
                  <Link
                    href={el.link}
                    className={styles.contacts__des}
                    style={{ 
                      '--icon-url': `url(${el.icon})`,
                      '--icon-top': el.iconTop 
                    } as React.CSSProperties}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {el.description}
                  </Link>
                ) : (
                  <p 
                    className={styles.contacts__des} 
                    style={{ 
                      '--icon-url': `url(${el.icon})`,
                      '--icon-top': el.iconTop 
                    } as React.CSSProperties}
                  >
                    {el.description}
                  </p>
                )}
              </div>
            </div>
          ))}
          
          <div className={`${styles.contacts__item} ${styles.contacts__social}`}>
            <p className={styles.contacts__title}>Свяжитесь с нами:</p>
            <div className={styles.contacts__imgs}>
              {socialIcons.map((el, idx) => (
                <Link
                  href={el.link}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image 
                    className={styles.img} 
                    src={el.src} 
                    alt={el.alt} 
                    width={44} 
                    height={44}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};