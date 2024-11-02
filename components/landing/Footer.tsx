/** @format */

import PurpleLight from "../ui/PurpleLight";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-full pt-10 md:pt-20 lg:pt-28">
      <PurpleLight />
      <div className="mt-14 flex justify-between items-center flex-wrap flex-col gap-y-12 md:flex-row px-14 mb-12 md:mb-20">
        <h1>Logo</h1>
        <div className="flex gap-x-8 gap-y-6 justify-center items-center capitalize flex-col md:flex-row">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Press</a>
          <a href="#">Privacy</a>
        </div>
        <div className="text-primary-txt text-lg flex gap-x-3">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaYoutube />
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
