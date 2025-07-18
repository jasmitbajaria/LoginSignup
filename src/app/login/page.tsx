"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function loginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onlogin = async () => {};

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">login</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="Email"
              id="Email"
              placeholder="Enter your Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
            />
          </div>
          <button
            type="submit"
            onClick={onlogin}
            className="w-full py-2 px-4  bg-linear-to-r from-gray-500 to-gray-800 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 cursor-pointer"
          >
            login
          </button>
        </form>
        <Link
          href="/signup"
          className="text-gray-600 text-sm text-center block underline"
        >
          Visit signup page
        </Link>
      </div>
    </div>
  );
}
