/** @format */

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

interface SelectProps {
  name: string;
  options: OptionsProps[];
  defaultSelected?: string;
  placeholder?: string;
  errorMsg?: string;
}
const DropdownSelect = ({
  name,
  options,
  defaultSelected,
  placeholder,
  errorMsg,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelected ?? "");

  // Toggle dropdown menu visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle selection and deselection of options
  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="flex justify-start items-center w-full px-4 py-2 border border-foreground  bg-background"
      >
        {selectedOption || placeholder || "Select an option"}
        <FaAngleDown
          className={`ml-auto transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="z-50 w-full absolute left-0 mt-2  bg-background border border-foreground">
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-1 cursor-pointer transition-all hover:text-purple"
                onClick={() => handleOptionChange(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      <input type="hidden" value={selectedOption} name={name} />
      {errorMsg && (
        <p className="absolute top-full right-0 text-red-500">{errorMsg}</p>
      )}
    </div>
  );
};

export default DropdownSelect;
