import MessagesList from "./MessageList";
import MessageNav from "./MessageNav";

import HeaderMessageList from "./HeaderMessageList";
import MessageContentContainer from "./MessageContentContainer";
import { AudioContextProvider } from "@/context/audioContext";

export default function MessagesContent() {
  return (
    <AudioContextProvider>
      <MessageContentContainer>
        <HeaderMessageList />

        <div
          className="flex  max-h-full overflow-y-auto flex-1   bg-gray-100  md:p-2"
          id="scroll"
        >
          <div className="mx-2 py-4 md:mx-5 h-full  w-full ">
            <MessagesList />
          </div>
        </div>

        <MessageNav />
      </MessageContentContainer>
    </AudioContextProvider>
  );
}
