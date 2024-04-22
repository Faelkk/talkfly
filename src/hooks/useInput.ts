import { useToggle } from "./useToggle";

export function useInput() {
  const { handleToggle, isOpen } = useToggle();

  return { handleInput: handleToggle, isOpenInput: isOpen };
}
