"use client";
import styles from './AccountInfo.module.scss'

interface AccountInfoProps {
  user: {
    name: string;
    surname: string;
    email: string;
    number: string;
    address: string
  };
}



export const AccountInfo = ({ user }: AccountInfoProps) => {
  return (
    <div className={styles.info}>
      <h2 className={styles.info__title}>Личные данные</h2>
      <div className={styles.info__line}></div>
      <div className={styles.info__box}>
        <div className={styles.info__box__item}>
          <p>Имя:</p>
          <p>{user.name}</p>
        </div>
        <div className={styles.info__box__item}>
          <p>Фамилия:</p>
          <div className=""></div>
          <p>{user.surname}</p>
        </div>
        <div className={styles.info__box__item}>
          <p>Email:</p>
          <div className="">
              <p>{user.email}</p>
          </div>
        </div>
        <div className={styles.info__box__item}>
          <p>Телефон:</p>
          <p>{user.number}</p>
        </div>
        <div className={styles.info__box__item}>
          <p>Адресс:</p>
          <p>{user.address}</p>
        </div>
      </div>
    </div>
  );
};