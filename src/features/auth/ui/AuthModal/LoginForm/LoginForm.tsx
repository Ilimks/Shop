"use client";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/redux/hooks";
import { login } from "@/store/slices/authSlice";
import { Button } from "@/shared/ui/Buttons/ui/Button";
import { Input } from "@/shared/ui/Inputs/Input/Input";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/shared/ui/Checkbox";

interface LoginFormProps {
  isLoading: boolean;
}

export const LoginForm = ({ isLoading }: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    const remember = localStorage.getItem("rememberMe") === "true";

    if (remember && savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setTouched({ email: true, password: true });
      return;
    }

    if (rememberMe) {
      localStorage.setItem("rememberEmail", email);
      localStorage.setItem("rememberMe", "true");
    } else {
      localStorage.removeItem("rememberEmail");
      localStorage.setItem("rememberMe", "false");
    }

    dispatch(login({ email, password }));
    router.push("/account");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <Input
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          error={touched.email && !email ? "*Заполните поле" : ""}
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
          error={touched.password && !password ? "*Заполните поле" : ""}
        />
      </div>

      <Checkbox
        label="Запомнить меня"
        checked={rememberMe}
        onChange={setRememberMe}
        size="modal"
        variant="modalChecked"
      />

      <Button
        type="submit"
        variant="modal"
        size="modalSize"
        disabled={isLoading}
        text={isLoading ? "Вход..." : "Войти"}
      />
    </form>
  );
};
