import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src="https://i.postimg.cc/R0tjRPhX/anime.png"
            alt="Profile Photo"
          />

          <div className="">
            <p className="text-green-500">Logged in as:</p>
            <p className="font-bold text-lg">Caleb Tc</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://i.postimg.cc/dtmcMNjX/nature-logo-trans.png"
            height={10}
            width={50}
            alt="logo"
          />

          <p className="text-green-600">Welcome To The Conversation</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
