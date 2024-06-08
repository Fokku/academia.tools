"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import academiaToolsLogo from "../../public/academiaToolsLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center border-b mb-5 px-4 sm:px-12 h-14">
      <div className="flex items-center">
        <button className="sm:hidden mr-2" onClick={toggleMenu}>
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/">
          <div className="flex items-center space-x-1 cursor-pointer">
            <Image
              height={32}
              width={32}
              src={academiaToolsLogo}
              alt="Academia Logo"
            />
            <span className="font-semibold antialiased text-md hidden sm:block">
              Academia.tools
            </span>
          </div>
        </Link>
      </div>
      <div
        className={`sm:flex ${
          isOpen ? "flex" : "hidden"
        } flex-col sm:flex-row absolute sm:relative top-14 left-0 sm:top-0 w-full sm:w-auto bg-white sm:bg-transparent z-20`}
      >
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 p-4 sm:p-0 text-sm">
          <li>
            <Link href="/">
              <Button variant="ghost">Telegram Groups</Button>
            </Link>
          </li>
          <li>
            <Link href="https://forms.gle/cMeTUuGXzRKBkqqz9" target="_blank">
              <Button variant="ghost">Request a Group</Button>
            </Link>
          </li>
          <li>
            <Link href="https://www.atlasprivate.club/" target="_blank">
              <Button variant="ghost">Visit Atlas</Button>
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-6 p-4 sm:p-0">
          <li>
            <Link
              href="https://www.instagram.com/atlasprivate.club"
              target="_blank"
            >
              <Instagram />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/company/atlasprivateclub/"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
