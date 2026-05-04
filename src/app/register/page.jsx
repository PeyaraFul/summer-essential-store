"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const [toast, setToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const googleHandleReg = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/login",
    });
  };

  const router = useRouter();

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;

    setLoading(true);

    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    console.log("Response:", res);
    console.log("Error:", error);

    if (error) {
      setLoading(false);
      alert(error.message);
      return;
    }

    if (res) {
      // alert("Registration successful!");
      // router.push("/login");
      setToast(true);

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  };

  return (
    <>
      {toast && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <span>register successful !</span>
          </div>
        </div>
      )}

      <div className=" mx-auto fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <legend className="fieldset-legend">Register Now</legend>

          <label className="label m-3">Your Name</label>
          <input
            {...register("name", { required: "Name is required !" })}
            type="text"
            className="input"
            placeholder="Your Name"
          />
          <p className="text-error">{errors.name?.message}</p>

          <label className="label mt-3">Email</label>
          <input
            {...register("email", { required: "Email is required !" })}
            type="email"
            className="input"
            placeholder="Email"
          />
          <p className="text-error">{errors.email?.message}</p>

          <label className="label mt-3">Photo Link</label>
          <input
            {...register("photo")}
            type="text"
            className="input"
            placeholder="Photo Link (Optional)"
          />
      

          <label className="label mt-3">Password</label>
          <input
            {...register("password", { required: "Password is required !" })}
            type="password"
            className="input"
            placeholder="Password"
          />
          <p className="text-error">{errors.password?.message}</p>

          <button
            type="submit"
            disabled={loading}
            className="btn w-full btn-neutral mt-4"
          >
            {loading ? "Registering..." : "Register Now"}
          </button>

          <div className="divider">OR</div>
        </form>

        <button onClick={googleHandleReg} className="btn btn-sm w-full mt-2">
          <FcGoogle size={20} /> Register with google
        </button>
      </div>

      <p className="text-center my-4 mb-10">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </>
  );
};

export default RegisterPage;
