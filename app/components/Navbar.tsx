import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import academiaToolsLogo from "../../public/academiaToolsLogo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center border-b mb-5 px-12 h-14">
      <div>
        <Link href="/" target="_blank">
            <div className="flex items-center space-x-1"><Image
            height={32}
            width={32}
            src={academiaToolsLogo}
            alt="Academia Logo"
          />
          <span className="font-semibold antialiased text-md">Academia.tools</span></div>
          
        </Link>
      </div>
      <div>
        <ul className="flex space-x-4 text-sm">
          <Link href="/">
            <Button variant={"ghost"}>Telegram Groups</Button>
          </Link>
          <Link href="https://forms.gle/cMeTUuGXzRKBkqqz9" target="_blank">
            <Button variant={"ghost"}>Request a Group</Button>
          </Link>
          <Link href="https://www.atlasprivate.club/" target="_blank">
            <Button variant={"ghost"}>Visit Atlas</Button>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-6">
          <Link
            href="https://www.instagram.com/atlasprivate.club"
            target="_blank"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.linkedin.com/company/atlasprivateclub/"
            target="_blank"
          >
            <Linkedin />
          </Link>
          {/* Add button instead of atlas logo to rederict to atlas site */}
          {/* <Link href="https://www.atlasprivate.club/" target='_blank'><Image height={32} width={32} src={atlasLogo} alt="Atlas Logo" /></Link> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
