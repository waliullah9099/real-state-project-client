"use client";

import Link from "next/link";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/actions/store.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await loginUser(values);
      const token = res?.data?.accessToken;
      if (token) {
        toast.success(res?.message);
        storeUserInfo(token);
        router.push("/");
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4">Login Here</h2>

        <Form onSubmit={handleLogin}>
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            rules={{ required: "Email is required" }}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            rules={{ required: "Password is required" }}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
          <div className="text-center mt-4 text-sm text-gray-600">
            <span>Don't have any account?</span>
            <Link
              href="/register"
              className="text-blue-600 hover:underline ml-1"
            >
              Registration
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
