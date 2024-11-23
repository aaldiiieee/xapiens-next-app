/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import callReqResAPI from "@/app/api/callReqResAPI";

import InputForm from "@/components/ui/InputForm";
import LabelForm from "@/components/ui/LabelForm";
import ButtonSubmit from "@/components/ui/ButtonSubmit";
import AuthTemplate from "@/components/template/AuthTemplate";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await callReqResAPI.post("https://reqres.in/api/login", {
        email,
        password,
      });

      const data = await response.data;

      if (response.status === 200 && data.token) {
        document.cookie = `token=${data.token}; path=/; secure`;
        router.push("/");
      }
    } catch (err: any) {
      if (err.response?.status === 400) {
        setError("Invalid email or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <AuthTemplate title="Login" description="Please enter your credentials">
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <LabelForm text="Email" htmlFor="email" />
          <InputForm
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <LabelForm text="Password" htmlFor="password" />
          <InputForm
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <ButtonSubmit text="Login" type="submit" />
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </AuthTemplate>
  );
};

export default LoginPage;
