/** @format */
import NavBar from "@/components/ui/NavBar";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

export default function Header() {
  return (
    <header className="mx-6 md:mx-16 px-5 h-20 flex justify-between items-center gap-x-4">
      <div className="flex items-center">
        {/* <h3 className="text-3xl text-primary-txt">Logo</h3> */}
        <Image src={logo} alt="Logo" width={100} height={100} /> {/* Adjust width and height as needed */}
      </div>
      <NavBar />
    </header>
  );
}
