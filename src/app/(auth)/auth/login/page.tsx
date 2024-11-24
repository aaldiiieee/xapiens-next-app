/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import AuthTemplate from "@/components/template/AuthTemplate";
import InputForm from "@/components/ui/InputForm";
import LabelForm from "@/components/ui/LabelForm";
import ButtonSubmit from "@/components/ui/ButtonSubmit";

const LoginPage: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setError(null);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result?.ok) {
      setError("Invalid email or password. Please try again.");
    } else {
      window.location.href = "/";
    }
  };

  return (
    <AuthTemplate title="Login" description="Please enter your credentials">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleLogin(
            formData.get("email") as string,
            formData.get("password") as string
          );
        }}
      >
        <div className="mb-4">
          <LabelForm text="Email" htmlFor="email" />
          <InputForm type="email" id="email" name="email" required />
        </div>
        <div className="mb-6">
          <LabelForm text="Password" htmlFor="password" />
          <InputForm type="password" id="password" name="password" required />
        </div>

        <ButtonSubmit text="Login" type="submit" className="btn__submit text-white mb-3" />

        <ButtonSubmit
          text="Sign in with Google"
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="border border-[rgba(0,0,0,0.25)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] hover:shadow-none"
        />

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </AuthTemplate>
  );
};

export default LoginPage;
