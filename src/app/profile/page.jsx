"use client";
import Image from "next/image";
import React from "react";
import Avatar from "../../../public/avatar.png";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log("Session data:", session);

  // Image validation check for user profile picture
  const safeImage =
    user?.image && user.image.startsWith("http") ? user.image : Avatar;

  return (
    <>
      {user ? (
        <div className="mx-auto w-[60%] p-4 my-4 border border-amber-700 bg-base-100 shadow-sm">
          <div>
            <Image
              className="mx-auto border border-amber-900 rounded-full"
              src={safeImage}
              alt="Movie"
              width={200}
              height={280}
            />
            <p className=" text-xl text-center font-semibold my-4">
              {user.name}
            </p>
            <p className="text-center my-4">{user.email}</p>
          </div>
          <Link href="/profile/update" className="btn btn-primary mx-auto">
            <button className="btn btn-primary mx-auto">Update Profile</button>
          </Link>
        </div>
      ) : (
        <div className="mx-auto w-[60%] p-6 my-10 border border-amber-700 bg-base-100 shadow-sm text-center">
          <p className="text-xl font-semibold">You are not logged in.</p>
          <Link href="/login" className="btn btn-primary mt-4">
            Sign In
          </Link>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
