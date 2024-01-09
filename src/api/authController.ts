class AuthController {
  async login(email: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const error = await response.json();
    alert(error.error);
    return null;
  }

  async forgotPassword(email: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      return;
    }
    const error = await response.json();
    alert(error.error);
  }

  async resetPassword(
    newPassword: string,
    confirmNewPassword: string,
    token: string
  ) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newPassword, confirmNewPassword }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const error = await response.json();
    alert(error.error);
    return null;
  }
}

export const authController = new AuthController();
