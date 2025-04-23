"use client";
import { Login } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const formData = new FormData(e.currentTarget);
      console.log(formData);
      
      // const response = await Login(formData);

      // if (response?.error) {
      //   setError(response.error.message);
      // } else {
      //   router.push("/bookings");
      // }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <div>
        {error && <span className="text-red-500 font-semibold">{error}</span>}
      </div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
