import { MessagesData } from "@/actions/messages/getMessages";

import { useEffect, useState, useRef } from "react";
import DropdownDeleteMessage from "@/components/Dropdown/DropdownDeleteMessage/DropdownDeleteMessage";
import { cn } from "@/functions/cn";
import { formatarHora } from "@/functions/format-date";
import { IsMyMessage } from "@/functions/isMyMessage";
import { useDropdown } from "@/hooks/useDropdown";
import Image from "next/image";

import { useMessageId } from "@/functions/getMessageId";
import getUserById from "@/actions/user/getUserById";
import { User } from "@/context/userContext";
import UserMessage from "./UserMessage";
import IconsExpand from "@/components/icons/expand";

export default function MessageAudio({ message }: { message: MessagesData }) {
  const { isDropdownOpen, handleToggleDropdown } = useDropdown();
  const messageId = useMessageId({ message });
  const [user, setUser] = useState<User | null>(null);
  const [isDeleteMessage, setIsDeleteMessage] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const isMyMessage = IsMyMessage({ message });

  function handleLeave() {
    setIsDeleteMessage(false);
  }

  const handleGetUser = async () => {
    const { data, error, ok } = await getUserById(messageId);

    if (data && ok) {
      setUser(data);
    }
  };

  useEffect(() => {
    if (message.type === "Audio") {
      handleGetUser();
    }
  }, [message.type]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const updateProgress = () => {
      const audio = audioRef.current;
      if (audio) {
        const progress = (audio.currentTime / audio.duration) * 100;
        setAudioProgress(progress);
      }
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      audio.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateProgress);
        audio.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, []);

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setAudioProgress(0);
  };

  return (
    <article
      onMouseEnter={() => setIsDeleteMessage(true)}
      onMouseLeave={handleLeave}
      className={cn(
        "flex w-full mb-2 ",
        isMyMessage ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="flex items-center justify-center bg-gray-200  rounded relative h-[3.5rem] px-4 mb-4 max-w-40 sm:max-w-72  md:max-w-80">
        {isDeleteMessage && isMyMessage && (
          <button
            className="absolute right-0 top-0 cursor-pointer"
            onClick={handleToggleDropdown}
          >
            <IconsExpand
              type={message.type}
              classname={cn(
                "h-5 w-5",
                message.type === "Image" ? "bg-black bg-opacity-20" : ""
              )}
            />
          </button>
        )}

        <audio ref={audioRef} src={message.content} />
        <button onClick={toggleAudio}>
          <Image
            src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"}
            width={32}
            height={32}
            className="w-5 h-5"
            alt={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
          />
        </button>

        <div
          className={cn(
            "w-[12.5rem] flex items-center relative h-full",
            isMyMessage ? "ml-4" : "mx-4 "
          )}
        >
          <div className="absolute bg-gray-400 h-1 w-full">
            <div
              className="bg-blue-500 h-1 rounded-full"
              style={{ width: `${audioProgress}%` }}
            ></div>
          </div>

          <span className="absolute bottom-0 right-0 font-poppins text-[11px] font-normal text-gray-900 flex items-end h-auto ">
            {formatarHora(message.sent_at)}
          </span>
        </div>

        {!isMyMessage ? <UserMessage user={user} /> : ""}

        {isDropdownOpen && (
          <DropdownDeleteMessage
            messageId={message.id}
            onLeave={handleToggleDropdown}
          />
        )}
      </div>
    </article>
  );
}
