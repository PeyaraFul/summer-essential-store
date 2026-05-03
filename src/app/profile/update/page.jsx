"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


import React from "react";
import { useForm } from "react-hook-form";

const UpdatePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const { name, image } = data;

    const { data: updatedUser, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Profile updated successfully!");
    router.push("/profile");

    reset();
  };

  return (
    <>
      <h2 className="text-center text-xl font-bold mt-10">
        Update Your Profile
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto w-[60%] p-4 mt-3 mb-10 border border-amber-700 bg-base-100 shadow-sm"
      >
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Enter your new name.
          </legend>

          <input
            type="text"
            className="input"
            placeholder="Type your new name"
            {...register("name", {
              required: "Name is required!",
            })}
          />

          <p className="text-error">{errors.name?.message}</p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Enter your photo link.
          </legend>

          <input
            type="text"
            className="input"
            placeholder="Enter image URL"
            {...register("image", {
              required: "Image URL is required!",
            })}
          />

          <p className="text-error">{errors.image?.message || "Make sure to enter a valid image URL."}</p>
        </fieldset>

        <button type="submit" className="btn btn-primary mt-4">
          Update
        </button>
      </form>
    </>
  );
};

export default UpdatePage;