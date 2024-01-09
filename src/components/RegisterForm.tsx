"use client";
import React, { useState } from "react";
import "./../styles/login-form.css";
import { UserCreated } from "@/app/register/page";
import { userController } from "@/api/userController";

interface RegisterFormProps {
  onRegister: (user: UserCreated) => void;
  goToLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onRegister,
  goToLogin,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await userController.createUser(
        fullName,
        email,
        password
      );

      if (response) {
        onRegister(response);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
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
        <button type="submit">Register</button>
        <button onClick={goToLogin}>Login</button>
      </form>
    </div>
  );
};

export default RegisterForm;
