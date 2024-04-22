import { useToggle } from "./useToggle";

export function useMessageRecorder() {
  const { handleToggle, isOpen } = useToggle();

  return { handleInput: handleToggle, isOpenInput: isOpen };
}
