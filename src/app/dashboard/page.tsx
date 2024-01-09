"use client";

import "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    const existToken = localStorage.getItem("userToken");
    if (existToken) {
      return;
    }
    router.push("/login");
  }, []);

  return (
    <h1
      className="dashboard-container"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Welcome to dashboard. Playload studios challenge
    </h1>
  );
}
