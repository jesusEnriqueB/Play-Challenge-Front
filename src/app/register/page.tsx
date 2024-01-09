"use client";
import LoginForm from "@/components/LoginForm";
import "./page.module.css";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/RegisterForm";

export type UserCreated = {
  createdAt: string;
  email: string;
  fullName: string;
  id: number;
  updatedAt: string;
};

export default function Register() {
  const router = useRouter();
  const handleRegister = (user: UserCreated) => {
    router.push("/login");
  };

  const goToLogin = () => {
    router.push("/login");
  }

  return (
    <div className="register-form-container">
      <RegisterForm onRegister={handleRegister} goToLogin={goToLogin} />
    </div>
  );
}
