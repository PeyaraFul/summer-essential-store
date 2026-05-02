"use client";

import Link from "next/link";
import React from "react";
import { useForm } from 'react-hook-form';


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // const { email, password } = data;
     console.log(data);
    
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          {...register("email", { required: "Email is required !" })}
          name="email"
          type="email"
          className="input"
          placeholder="Email"
        />
        <p className="text-error">{errors.email?.message}</p>

        <label className="label">Password</label>
        <input
          {...register("password", { required: "Password is required !" })}
          name="password"
          type="password"
          className="input"
          placeholder="Password"
        />
        <p className="text-error">{errors.password?.message}</p>

        <button className="btn btn-neutral mt-4">Login</button>
      </form>
      <p className="text-center my-4">
        Don&apos;t Have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
