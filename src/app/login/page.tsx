"use client";
import LoginForm from "@/components/LoginForm";
import "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export type UserLogged = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  token: string;
  updatedAt: string;
};

export default function Login() {
  const router = useRouter();
  const handleLogin = (user: UserLogged) => {
    localStorage.setItem("userToken", user.token);
    router.push("/dashboard");
  };

  const goToRegister = () => {
    router.push("/register");
  }

  const goToRecoveryPassword = () => {
    router.push("/forgot-password");
  }

  useEffect(() => {
    const existToken = localStorage.getItem("userToken");
    if (!existToken) {
      return;
    }
    router.push("/dashboard");
  }, []);

  return (
    <div className="login-form-container">
      <LoginForm onLogin={handleLogin} goToRegister={goToRegister} goToRecoveryPassword={goToRecoveryPassword} />
    </div>
  );
}
