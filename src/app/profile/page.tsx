"use client";
import { log } from "console";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { useState } from "react";
import { link } from "fs";

export default function profilePage() {
  const Router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      Router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg flex flex-col">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Profile
        </h1>
        <hr />
        <p className="text-4xl font-bold text-center text-gray-900">
          welcome{" "}
          {data === "nothing" ? (
            "user"
          ) : (
            <Link href={`/profile/${data}`}> {data} </Link>
          )}
        </p>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-1/2 self-center"
        >
          logout
        </button>
        <button
          onClick={getUserDetails}
          className="bg-linear-to-r from-gray-500 to-gray-800 text-black font-bold py-2 px-4 rounded-full w-1/2 self-center"
        >
          getUserDetails
        </button>
      </div>
    </div>
  );
}
