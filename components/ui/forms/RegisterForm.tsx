/** @format */
"use client";

import ButtonGroup from "../ButtonsGroup";
import DropdownSelect from "../Select";
import TextFields from "../TextField";
import { MdEmail } from "react-icons/md";
import { register } from "@/lib/sendForm";
import { useFormState } from "react-dom";
import { useEffect } from "react";

const initialState: FormeState = {
  success: false,
  data: null,
  errors: {
    firstName: [""],
    lastName: [""],
    email: [""],
    age: [""],
    studyLevel: [""],
    fieldOfStudy: [""],
    state: [""],
    phoneNumber: [""],
    hearAboutUs: [""],
    serverError: [""],
  },
};

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, initialState);
  useEffect(() => {
    if (state.success) {
      alert("you have registered successfully");
    }
  }, [state.success]);
  return (
    <form
      action={formAction}
      className="w-full md:w-[560px] mt-10 flex flex-col gap-y-4"
    >
      <TextFields
        name="firstName"
        label="First Name"
        placeholder="John"
        required
        errorMsg={state?.errors?.firstName?.[0] ?? ""}
      />
      <TextFields
        name="lastName"
        label="Last Name"
        placeholder="Doe"
        required
        errorMsg={state?.errors?.lastName?.[0] ?? ""}
      />
      <TextFields
        name="email"
        label="Email Address"
        type="email"
        firstContent={<MdEmail className="text-lg" />}
        placeholder="Enter your email address"
        required
        errorMsg={state?.errors?.email?.[0] ?? ""}
      />
      <TextFields
        name="age"
        label="Age"
        placeholder="enter your age"
        required
        errorMsg={state?.errors?.age?.[0] ?? ""}
      />
      <TextFields
        name="studyLevel"
        label="Studying level"
        placeholder="ex. Master"
        required
        errorMsg={state?.errors?.studyLevel?.[0] ?? ""}
      />
      <TextFields
        name="fieldOfStudy"
        label="Field od Study"
        placeholder="ex. Intelligence article"
        required
        errorMsg={state?.errors?.fieldOfStudy?.[0] ?? ""}
      />
      <TextFields
        name="phoneNumber"
        label="Phone Number"
        placeholder="Enter your phone number"
        required
        errorMsg={state?.errors?.phoneNumber?.[0] ?? ""}
      />
      <ButtonGroup
        options={[
          { label: "Not Going", value: "not-going" },
          { label: "Maybe", value: "maybe" },
          { label: "Going", value: "going" },
        ]}
        defaultSelected="maybe"
        name="state"
        errorMsg={state?.errors?.state?.[0] ?? ""}
      />
      <DropdownSelect
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Other", value: "other" },
        ]}
        name="hearAboutUs"
        errorMsg={state?.errors?.hearAboutUs?.[0] ?? ""}
      />
      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          Register
        </button>
      </div>
    </form>
  );
}
