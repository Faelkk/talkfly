import EmojiPicker from "emoji-picker-react";

import DropdownContent from "@/components/Dropdown/DropdownContent/DropdownContent";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { useFormStatus } from "react-dom";

import sendMessage from "@/actions/messages/sendMessage";
import { useConnectionId } from "@/functions/getConnectionId";
import MessageRecord from "./MessageRecord";
import { useAudio } from "@/context/audioContext";
import { useConnec } from "@/context/connecContext";
import { Message } from "@/context/messageContext";

function FormButton({
  handleSubmit,
}: {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button className="font-poppins font-medium   " disabled={pending}>
          Enviando...
        </button>
      ) : (
        <button
          className="font-poppins font-medium "
          type="submit"
          onClick={handleSubmit as any}
        >
          Enviar
        </button>
      )}
    </>
  );
}

export default function MessageNav() {
  const [isEmojiOpen, setIsEmojiOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { connectionActive } = useConnec();
  const connectionId = useConnectionId({
    connection: connectionActive as Message,
  });
  const { recording, setIsRecording, startRecording } = useAudio();
  const emojiStyle: any = "native";

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleEmojiClick(emoji: any) {
    const emojiInput = emoji.emoji;

    setInputValue((prevInputValue) => prevInputValue + emojiInput);
  }

  function handleRecord() {
    setIsRecording(true);
    startRecording();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const formData = new FormData();
      formData.append("content", inputValue);
      formData.append("contentType", "Text");
      formData.append("contactId", connectionId);

      const { data, error, ok } = await sendMessage(formData);

      setInputValue("");
    }
  }

  return (
    <>
      <div className=" border-t-2 border-gray-400  "></div>

      {isEmojiOpen ? (
        <div className="">
          <EmojiPicker
            emojiStyle={emojiStyle}
            onEmojiClick={handleEmojiClick}
            width="100%"
            height={400}
            lazyLoadEmojis={true}
            previewConfig={{
              showPreview: false,
            }}
          />
        </div>
      ) : (
        ""
      )}
      <nav className=" py-3 shadow-md bg-gray-50 ">
        <header className="md:mx-5">
          {!recording ? (
            <div className="flex gap-5 md:gap-3 w-full p-2">
              <button className="cursor-default">
                {isEmojiOpen ? (
                  <Image
                    onClick={() => setIsEmojiOpen(false)}
                    src="/assets/close.svg"
                    width={64}
                    height={64}
                    className="w-6 h-6 md:mr-10 cursor-pointer"
                    alt="Icone emoji"
                  />
                ) : (
                  <Image
                    onClick={() => setIsEmojiOpen(true)}
                    src="/assets/mood.svg"
                    width={64}
                    height={64}
                    className="w-6 h-6 md:mr-10 cursor-pointer"
                    alt="Icone emoji"
                  />
                )}
              </button>

              <form className="w-full flex-1" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="border-black border placeholder:text-black rounded-[8px] w-full  pp:flex-1 p-2 font-dmSans  text-[18px]"
                  placeholder="Digite sua mensagem"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </form>
              <div className="md:ml-10 flex items-center gap-5">
                {inputValue ? (
                  <FormButton
                    handleSubmit={(event: FormEvent<HTMLFormElement>) =>
                      handleSubmit(event)
                    }
                  />
                ) : (
                  <>
                    <button className="relative">
                      <DropdownContent />
                    </button>
                    <button className="md:w-6 md:h-6" onClick={handleRecord}>
                      <Image
                        src="/assets/mic.svg"
                        width={64}
                        height={64}
                        className=" w-6 h-6 object-contain"
                        alt="Icone Microfone"
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          ) : (
            <MessageRecord />
          )}
        </header>
      </nav>
    </>
  );
}
