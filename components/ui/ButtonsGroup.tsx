/** @format */

import React, { useState } from "react";

interface ButtonGroupProps {
  name: string;
  options: OptionsProps[];
  defaultSelected?: string;
  errorMsg?: string;
}

export default function ButtonGroup({
  name,
  options,
  defaultSelected,
  errorMsg,
}: ButtonGroupProps) {
  const [selectedOption, setSelectedOption] = useState(defaultSelected ?? "");

  // Toggle selected option in the state
  const handleToggle = (option: OptionsProps) => {
    setSelectedOption(option.value);
  };

  return (
    <div className="flex gap-2 relative">
      {options.map((option: OptionsProps) => (
        <button
          type="button"
          key={option.value}
          onClick={() => handleToggle(option)}
          className={
            selectedOption === option.value ? "btn-group" : "btn-secondary"
          }
        >
          {option.label}
        </button>
      ))}
      <input type="hidden" value={selectedOption} name={name} />
      {errorMsg && (
        <p className="absolute top-full right-0 text-red-500">{errorMsg}</p>
      )}
    </div>
  );
}
