import { MessagesData } from "@/actions/messages/getMessages";

import MessageText from "./MessageText";
import MessageImage from "./MessageImage";
import MessageAudio from "./MessageAudio";

export default function MessageContent({ message }: { message: MessagesData }) {
  return (
    <>
      {message.content_type === "Text" && <MessageText message={message} />}
      {message.content_type === "Image" && <MessageImage message={message} />}

      {message.content_type === "Audio" && <MessageAudio message={message} />}
    </>
  );
}
