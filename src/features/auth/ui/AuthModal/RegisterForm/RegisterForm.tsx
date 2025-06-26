"use client";
import { useState } from "react";
import { useAppDispatch } from "@/shared/lib/redux/hooks";
import { register } from "@/store/slices/authSlice";
import { Button } from "@/shared/ui/Buttons/ui/Button";
import { Input } from "@/shared/ui/Inputs/Input/Input";
import styles from "./RegisterForm.module.scss";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/shared/ui/Checkbox";

interface RegisterFormProps {
  isLoading: boolean;
}

export const RegisterForm = ({ isLoading }: RegisterFormProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);
  const [touchedCheckbox, setTouchedCheckbox] = useState(false);
  const [number, setNumber] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false, name: false, surname: false, address: false, number: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouchedCheckbox(true);
    const fieldsEmpty = !email || !password || !name || !surname || !address || !number;

    if (fieldsEmpty || !agreeToPrivacy) {
      setTouched({ email: true, password: true, name: true, surname: true, address: true, number: true });
      return;
    }
    if (!email || !password) {
      setTouched({ email: true, password: true, name: true, surname: true, address: true, number: true });
      return;
    }
    dispatch(
      register({
        email,
        password,
        name,
        surname,
        address,
        number,
      })
    );
    router.push("/account");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form__box}>
          <div className={styles.formGroup}>
            <Input
              type="text"
              label="ФИО"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              inputSize='registerSize'
              error={touched.name && !name ? "*Заполните поле" : ""}
            />
          </div>
    
          <div className={styles.formGroup}>
            <Input
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              inputSize='registerSize'
              error={touched.email && !email ? "*Заполните поле" : ""}
            />
          </div>
    
          <div className={styles.formGroup}>
            <Input
              type="tel"
              label="Номер"
              name="phone"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              fullWidth
              inputSize='registerSize'
              error={touched.number && !number ? "*Заполните поле" : ""}
            />
          </div>
    
          <div className={styles.formGroup}>
            <Input
              type="address"
              label="Адрес"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              inputSize='registerSize'
              error={touched.address && !address ? "*Заполните поле" : ""}
            />
          </div>
    
          <div className={styles.formGroup}>
            <Input
              type="password"
              label="Пароль"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              inputSize='registerSize'
              error={touched.password && !password ? "*Заполните поле" : ""}
            />
          </div>
    
          <div className={styles.formGroup}>
            <Input
              type="password"
              label="Повторите пароль"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              inputSize='registerSize'
              error={touched.password && !password ? "*Заполните поле" : ""}
            />
          </div>
      </div>

      <Checkbox
        label="Я даю согласие на обработку персональных данных"
        checked={agreeToPrivacy}
        onChange={(val) => setAgreeToPrivacy(val)}
        size="modal"
        variant="modalChecked"
      />

      <Button
        type="submit"
        variant="modal"
        size="modalSize"
        disabled={isLoading}
        text={isLoading ? "Creating Account..." : "Создать аккаунт"}
      />
    </form>
  );
};
