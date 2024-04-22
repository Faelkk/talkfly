import HeaderMessages from "@/components/HeaderMessages/HeaderMessages";

import ConnectionsList from "./ConnectionList";
import { MessageContextProvider } from "@/context/messageContext";
import MessagesSide from "./MessagesSide";
import LeftSideContainer from "./LeftSideContainer";

export default function Messages() {
  return (
    <>
      <MessageContextProvider>
        <LeftSideContainer>
          <HeaderMessages />

          <div className="flex-1 flex-col">
            <ConnectionsList />
          </div>
        </LeftSideContainer>

        <div className="flex-1 w-full">
          <MessagesSide />
        </div>
      </MessageContextProvider>
    </>
  );
}
