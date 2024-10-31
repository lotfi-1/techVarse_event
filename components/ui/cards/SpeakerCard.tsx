/** @format */

import Link from "next/link";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { IoBasketballOutline } from "react-icons/io5";

export default function SpeakerCard({ speaker }: { speaker: SpeakerProps }) {
  return (
    <div className="w-[304px] h-[513px] flex flex-col gap-y-6">
      <img
        className="w-full h-[296px]"
        src={speaker.image}
        alt="speaker profile"
      />
      <div>
        <h3 className="text-xl font-bold text-center">{speaker.name}</h3>
        <h4 className="text-lg text-center">{speaker.role}</h4>
        <p className="text-base mt-4 text-center">{speaker.bio}</p>
      </div>
      <div className="flex gap-x-3.5 justify-center text-lg">
        <Link href={speaker.socials.linkedin}>
          <BsTwitterX />
        </Link>
        <Link href={speaker.socials.twitter}>
          <BsLinkedin />
        </Link>
        <Link href={speaker.socials.twitter}>
          <IoBasketballOutline />
        </Link>
      </div>
    </div>
  );
}
