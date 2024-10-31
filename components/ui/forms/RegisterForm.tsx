/** @format */
"use client";

import ButtonGroup from "../ButtonsGroup";
import DropdownSelect from "../Select";
import TextFields from "../TextField";
import { MdEmail } from "react-icons/md";

export default function RegisterForm() {
  return (
    <form className="w-full md:w-[560px] mt-10 flex flex-col gap-y-4">
      <TextFields label="First Name" placeholder="John" required />
      <TextFields label="Last Name" placeholder="Doe" required />
      <TextFields
        label="Email Address"
        type="email"
        firstContent={<MdEmail className="text-lg" />}
        placeholder="Enter your email address"
        required
      />
      <TextFields label="Age" placeholder="enter your age" required />
      <TextFields label="Studying level" placeholder="ex. Master" required />
      <TextFields
        label="Field od Study"
        placeholder="ex. Intelligence article"
        required
      />
      <TextFields
        label="Phone Number"
        placeholder="Enter your phone number"
        required
      />
      <ButtonGroup
        options={[
          { label: "Not Going", value: "not-going" },
          { label: "Maybe", value: "maybe" },
          { label: "Going", value: "going" },
        ]}
        defaultSelected="maybe"
      />
      <DropdownSelect
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
      />
      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          Register
        </button>
      </div>
    </form>
  );
}
