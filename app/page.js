'use client'
import Image from "next/image";
import Link from "next/link";
import { use, useEffect } from "react";
export default function Home() {
  function checkisloggedin() {
    const isLoggedIn = localStorage.getItem("login");
    if (isLoggedIn === "true") {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/login";
    }
  }

  useEffect(() => {
    // checkisloggedin();
  }, [])
  return (
    <>



      <Link href="/login">Login</Link>

      <button onClick={checkisloggedin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>



    </>

  );
}
``