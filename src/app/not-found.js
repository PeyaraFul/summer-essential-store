"use client";
import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
        <h1 className="text-8xl font-extrabold text-red-500">404</h1>

        <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>

        <p className="text-gray-500 mt-2 max-w-md">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex gap-4 mt-6">
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default notfound;
