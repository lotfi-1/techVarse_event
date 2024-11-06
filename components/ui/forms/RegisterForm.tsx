/** @format */
"use client";

import ButtonGroup from "../ButtonsGroup";
import DropdownSelect from "../Select";
import TextFields from "../TextField";
import { MdEmail } from "react-icons/md";
import { checkData, register } from "@/lib/sendForm";
import { useEffect, useState } from "react";
import useCustomFormeState from "@/hooks/use-forme-state";
import Modal from "../Modal";
import Loading from "../Loading";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdOutlineError } from "react-icons/md";

const initialState: FormeState = {
  response: false,
  serverError: false,
  success: false,
  data: null,
  errors: {
    firstName: [],
    lastName: [],
    email: [],
    age: [],
    studyLevel: [],
    fieldOfStudy: [],
    state: [],
    phoneNumber: [],
    hearAboutUs: [],
    serverError: [],
  },
};

export default function RegisterForm() {
  const [open, setOpen] = useState(false);

  const [loading, setIsLoading] = useState(true);

  const handleSubmit = () => setOpen(true);

  const { state, formAction } = useCustomFormeState({
    action: register,
    initialState,
    onCheck: checkData,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (state.response) {
      setIsLoading(false);
    }
  }, [state.response]);

  useEffect(() => {
    if (state.serverError) {
      setIsLoading(false);
    }
  }, [state.serverError]);

  const handleBackDropClick = () => {
    if (state.response) {
      setOpen(!state.response);
    }
    if (state.serverError) {
      setOpen(!state.serverError);
    }
  };

  return (
    <form
      onSubmit={formAction}
      className="w-full max-w-[560px] mt-10 flex flex-col gap-y-4"
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
      <div>
        <label className="mb-2">Chances of attendance </label>
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
      </div>
      <div>
        <label className="mb-2">How did you hear about us?</label>

        <DropdownSelect
          options={[
            { label: "FaceBook", value: "facebook" },
            { label: "Instagram", value: "instagram" },
            { label: "Github", value: "github" },
            { label: "Other", value: "other" },
          ]}
          name="hearAboutUs"
          errorMsg={state?.errors?.hearAboutUs?.[0] ?? ""}
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          Register
        </button>
      </div>
      <Modal open={open} onBackdropClick={handleBackDropClick}>
        <div className="w-[200px] h-[250px] flex justify-center items-center">
          {loading && <Loading />}
          {state.response && (
            <div className="flex flex-col gap-y-4 items-center">
              <IoCheckmarkCircle className="text-purple text-[60px]" />
              <p className="text-center text-background">
                You Have Registered Successfully
              </p>
            </div>
          )}
          {state.serverError && (
            <div className="flex flex-col gap-y-4 items-center">
              <MdOutlineError className="text-red-500 text-[60px]" />
              <p className="text-center text-background text-red-500">
                {state?.errors?.serverError?.[0] ??
                  "Server Error Please Try Again Later"}
              </p>
            </div>
          )}
        </div>
      </Modal>
    </form>
  );
}
