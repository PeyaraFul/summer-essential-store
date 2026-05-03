"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const onSubmit = async (data) => {
  const { name, email, password } = data;

  const { data: res, error } = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    callbackURL: "/",
  });

  console.log("Response:", res);
  console.log("Error:", error);

  if (error) {
    alert(error.message);
    return;

  }

  if (res) {
    alert("Registration successful!");
    router.push("/");
  }
};

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Your Name</label>
        <input
          {...register("name", { required: "Name is required !" })}
         
          type="text"
          className="input"
          placeholder="Your Name"
        />
        <p className="text-error">{errors.name?.message}</p>

        <label className="label">Email</label>
        <input
          {...register("email", { required: "Email is required !" })}
          
          type="email"
          className="input"
          placeholder="Email"
        />
        <p className="text-error">{errors.email?.message}</p>

        <label className="label">Password</label>
        <input
          {...register("password", { required: "Password is required !" })}
          
          type="password"
          className="input"
          placeholder="Password"
        />
        <p className="text-error">{errors.password?.message}</p>

        <button type="submit" className="btn btn-neutral mt-4">Register Now</button>
      </form>
      <p className="text-center my-4">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
