import { useState } from "react";

export function useDropdown() {
  const [isDropdownOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isDropdownOpen);
  };

  return { isDropdownOpen, handleToggleDropdown };
}
