import styles from './Footer.module.scss';
import mobile from './FooterMobile.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FooterAccount } from './ui/FooterAccount';

export const Footer: React.FC = () => {

  const contactItems = [
    { text: 'Ортосайский рынок, 2 ряд, 5 контейнер', icon: 'FooterLocation', href: '#' },
    { text: 'ilimk9731@gmail.com', icon: 'FooterEmail', href: 'mailto:ilimk9731@gmail.com' },
    { text: '+996 706 030 725', icon: 'FooterPhone', href: 'tel:+996706030725'}
  ];

  const navItems = [
    { text: 'Главная', href: '/' },
    { text: 'Каталог', href: '/' },
    { text: 'Пижама', href: '/pajamas' },
    { text: 'Костюм', href: '/suits' },
    { text: 'Халат', href: '/robes' }
  ];

  const socialIcons = [
    { href: 'https://t.me/ilimk4', src: '/assets/icons/Telega.svg', alt: 'Telegram' },
    { href: 'https://instagram.com/ilimk4', src: '/assets/icons/Insta.svg', alt: 'Instagram' },
    { href: 'https://wa.me/996706030725', src: '/assets/icons/WhatsApp.svg', alt: 'WhatsApp' }
  ];

  return (
    <footer className={`${styles.footer} ${mobile.footer}`}>
      <div className="container">
        <div className={`${styles.footer__box} ${mobile.footer__box}`}>
          <div className={`${styles.footer__left} ${mobile.footer__left}`}>
            <Image
              src="/assets/icons/FooterLogo.svg"
              alt="Иконка FooterLogo"
              width={177}
              height={116}
              priority
            />
            <div className={`${styles.line} ${mobile.line}`}></div>
            <p className={`${styles.text} ${mobile.text}`}>Belle Nuit — пижамы для снов, которые хочется повторить</p>
            <div
              className={`${styles.footer__left__social} ${mobile.footer__left__social}`}
            >
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className={styles.icons}
                    src={icon.src}
                    alt={icon.alt}
                    width={28}
                    height={28}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className={`${styles.footer__center1} ${mobile.footer__center1}`}>
            <h3 className={`${styles.title} ${mobile.title}`}>Контакты</h3>
            <nav className={`${styles.footer__nav} ${mobile.footer__nav}`}>
              <ul className={`${styles.nav__ul} ${mobile.nav__ul}`}>
                {contactItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles[`nav__ul__li${index + 1}`]} ${mobile[`nav__ul__li${index + 1}`]}`}
                  >
                    <a href={item.href}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <FooterAccount />

          <div className={`${styles.footer__right} ${mobile.footer__right}`}>
            <h3 className={`${styles.title} ${mobile.title}`}>Навигация</h3>
            <nav className={`${styles.footer__nav} ${mobile.footer__nav}`}>
              <ul className={`${styles.nav__ul} ${mobile.nav__ul}`}>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${styles.nav__ul__li} ${mobile.nav__ul__li}`}
                  >
                    <Link href={item.href}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <p className={`${styles.footer__rights} ${mobile.footer__rights}`}>© 2025 Все права защищены</p>
      </div>
    </footer>
  );
};
