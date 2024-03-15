import { useState } from "react";

export function useDropdown() {
  const [isDropdownOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isDropdownOpen, handleToggleDropdown };
}
