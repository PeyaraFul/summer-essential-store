"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleHandleReg = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirect,
    });
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    setLoading(true);

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: true,
    });

    if (error) {
      setLoading(false);
      alert(error.message || "Login failed!");
      return;
    }

    if (res) {
      setToast(true);

      setTimeout(() => {
        router.push(redirect);
      }, 1500);
    }
  };

  return (
    <>
      {/* Toast message */}
      {toast && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success">
            <span>Login successful!</span>
          </div>
        </div>
      )}

      <div className="mx-auto mt-10 fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 shadow-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <legend className="fieldset-legend text-xl font-bold">Login</legend>

          <label className="label mt-3">Email</label>
          <input
            {...register("email", {
              required: "Email is required!",
            })}
            type="email"
            className="input w-full"
            placeholder="Email"
          />
          <p className="text-error text-sm">{errors.email?.message}</p>

          <label className="label mt-3">Password</label>
          <input
            {...register("password", {
              required: "Password is required!",
            })}
            type="password"
            className="input w-full"
            placeholder="Password"
          />
          <p className="text-error text-sm">{errors.password?.message}</p>

          <button disabled={loading} className="btn btn-neutral w-full mt-4">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={googleHandleReg} className="btn btn-sm w-full">
          <FcGoogle size={20} />
          Login with Google
        </button>
      </div>

      <p className="text-center my-4 mb-10">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </>
  );
};

export default LoginPage;
