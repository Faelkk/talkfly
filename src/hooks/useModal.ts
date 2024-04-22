import { useState } from "react";
import { useToggle } from "./useToggle";

export function useModal() {
  const { handleToggle, isOpen } = useToggle();

  return { handleModal: handleToggle, isOpenModal: isOpen };
}
