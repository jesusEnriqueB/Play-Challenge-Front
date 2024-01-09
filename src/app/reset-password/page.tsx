"use client";

import "./page.module.css";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResetPassword() {
  const router = useRouter();
  const onReset = () => {
    router.push("/login");
  };
  return (
    <div className="reset-password-container">
      <ResetPasswordForm onReset={onReset} />
    </div>
  );
}
