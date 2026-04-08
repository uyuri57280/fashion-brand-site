"use client";
import { CiBellOn } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import HamburgerMenu from "./HamburgerMenu";
import { LogoutButton } from "./logout-button";
import { Ballet } from "next/font/google";

const ballet = Ballet({
  subsets: ["latin"],
  weight: "400",
});


export default function Header() {

  const [isLogin, setIsLogin] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const handleMenuClick = (label: string) => {
    if (label === "account") {
      setAccountModalOpen(!accountModalOpen);
      console.log("accountModalOpen:", accountModalOpen);
    }
  }


  return (
    <header>
      <nav className="fixed top-0 left-0 z-40 w-full flex flex-col justify-between">
        <div className="shadow-xl h-16 flex justify-center items-center p-4 bg-white relative">
          <div className="absolute left-4">
            <HamburgerMenu />
          </div>
          
          <Link href="/main/home" className="flex gap-5">
            <p className={`${ballet.className} font-sans text-2xl`} >
              Twilight
            </p>
            <p className={`${ballet.className} font-sans text-2xl`} >
              Muse
            </p>
          </Link>

          
        </div>

      </nav>
    </header>
  );
}
