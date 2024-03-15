import { useState } from "react";

export function useToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, handleToggle };
}
