/** @format */

import { ReactNode } from "react";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  errorMsg?: string;
  required?: boolean;
  firstContent?: ReactNode;
}

export default function TextFields({
  name,
  required,
  label,
  placeholder,
  className,
  firstContent,
  type = "text",
  errorMsg,
}: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="mb-2">{label}</label>}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          {firstContent}
        </div>
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={`border border-foreground bg-background h-10 ${
            firstContent ? "pl-[50px]" : "pl-4"
          } pr-4 w-full outline-none focus:ring-2 focus:ring-primary-txt focus:border-purple ${className}`}
        />
      </div>
      {errorMsg && <div className="mt-2 text-red-500">{errorMsg}</div>}
    </div>
  );
}
