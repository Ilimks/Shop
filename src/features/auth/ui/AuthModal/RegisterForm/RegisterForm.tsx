"use client";
import { useState } from "react";
import { useAppDispatch } from "@/shared/lib/redux/hooks";
import { register } from "@/store/slices/authSlice";
import { Button } from "@/shared/ui/Buttons/ui/Button";
import { Input } from "@/shared/ui/Input";
import styles from "./RegisterForm.module.scss";
import { useRouter } from "next/navigation";

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
  const [number, setNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className={styles.formGroup}>
        <Input
          type="text"
          placeholder="Name"
          label="Full Name"
          name="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="text"
          placeholder="Surename"
          label="Full Name"
          name="fullName"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="email"
          placeholder="email"
          label="Email Address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="password"
          placeholder="password"
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="address"
          placeholder="address"
          label="address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <div className={styles.formGroup}>
        <Input
          type="tel"
          placeholder="phone"
          label="Phone Number"
          name="phone"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          fullWidth
          error
        />
      </div>

      <Button
        type="submit"
        variant="show"
        disabled={isLoading}
        text={isLoading ? "Creating Account..." : "Sign Up"}
      />
    </form>
  );
};
