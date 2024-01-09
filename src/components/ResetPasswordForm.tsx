"use client";
import React, { useState } from "react";
import "./../styles/login-form.css";
import { authController } from "@/api/authController";

interface ResetPasswordFormProps {
  onReset: () => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onReset: onReset,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const resetToken = params.token;

      if (!resetToken) {
        alert("Token not found in the URL");
        return;
      }
      const response = await authController.resetPassword(
        newPassword,
        confirmNewPassword,
        resetToken
      );

      if (response) {
        onReset();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Reset Password</h1>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
