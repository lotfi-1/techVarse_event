/** @format */

import React, { useState } from "react";

interface ButtonGroupProps {
  options: OptionsProps[];
  defaultSelected?: string;
}

export default function ButtonGroup({
  options,
  defaultSelected,
}: ButtonGroupProps) {
  const [selectedOption, setSelectedOption] = useState(defaultSelected ?? "");

  // Toggle selected option in the state
  const handleToggle = (option: OptionsProps) => {
    setSelectedOption(option.value);
  };

  return (
    <div className="flex gap-2">
      {options.map((option: OptionsProps) => (
        <button
          key={option.value}
          onClick={() => handleToggle(option)}
          className={
            selectedOption === option.value ? "btn-group" : "btn-secondary"
          }
        >
          {option.label}
        </button>
      ))}
      <input type="hidden" value={selectedOption} name="state" />
    </div>
  );
}
