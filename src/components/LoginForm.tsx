"use client";
import React, { useState } from "react";
import "./../styles/login-form.css";
import { UserLogged } from "@/app/login/page";
import { authController } from "@/api/authController";

interface LoginFormProps {
  onLogin: (user: UserLogged) => void;
  goToRegister: () => void;
  goToRecoveryPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  goToRegister,
  goToRecoveryPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await authController.login(email, password);
      if (response) {
        onLogin(response);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Login</button>
        <button onClick={goToRegister}>Register</button>
        <button onClick={goToRecoveryPassword}>Recovery Password</button>
      </form>
    </div>
  );
};

export default LoginForm;
