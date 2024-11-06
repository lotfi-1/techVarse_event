/** @format */

import PurpleLight from "../ui/PurpleLight";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="footer w-full py-10 md:py-20 lg:py-28">
      <PurpleLight />
      <div className="mt-14 flex justify-between items-center flex-wrap flex-col gap-y-12 md:flex-row px-14 mb-12 md:mb-20">
        <Image src={logo} alt="Logo" width={100} height={100} />
        {/* <h1>Logo</h1> */}
        <div className="flex gap-x-8 gap-y-6 justify-center items-center capitalize flex-col md:flex-row">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Press</a>
          <a href="#">Privacy</a>
        </div>
        <div className="text-primary-txt text-lg flex gap-x-3">
          <a href="https://www.facebook.com/profile.php?id=61553627314456">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/techverse-club/mycompany/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/techverse-club/mycompany/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="mx-14 border-t border-foreground pt-6 md:pt-8 flex justify-center items-center flex-col-reverse gap-y-8 md:flex-row gap-x-6">
        <div>
          <p>© 2024 Techverse. All rights reserved.</p>
        </div>
        <div className="underlined flex justify-center items-center flex-col md:flex-row gap-x-6 gap-y-4">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
}
