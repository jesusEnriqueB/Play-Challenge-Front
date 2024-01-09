class UserController {
  async createUser(fullName: string, email: string, password: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, fullName }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const error = await response.json();
    alert(error.error);
    return null;
  }

  async getUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    const error = await response.json();
    alert(error.error);
  }
}

export const userController = new UserController();
