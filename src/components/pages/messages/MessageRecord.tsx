import { useState, useEffect } from "react";
import CancelIcon from "@/components/icons/cancel";
import IconsPause from "@/components/icons/pause";
import SendIcon from "@/components/icons/send";
import { useAudio } from "@/context/audioContext";

import { cn } from "@/functions/cn";
import sendAudio from "@/actions/messages/sendAudio";
import { useConnectionId } from "@/functions/getConnectionId";
import { useConnec } from "@/context/connecContext";
import { Message } from "@/context/messageContext";

export default function MessageRecord({}: {}) {
  const {
    voice,
    isVoice,
    audioChunks,
    recording,
    startRecording,
    stopRecording,
    setIsRecording,
    cancelRecording,
  } = useAudio();

  const { connectionActive } = useConnec();
  const connectionId = useConnectionId({
    connection: connectionActive as Message,
  });
  const [recordingTime, setRecordingTime] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    let timer: any;
    if (recording) {
      timer = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 0.1);
        setLineWidth((prevWidth) => (prevWidth + 1) % 1800);
      }, 100);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [recording]);

  async function handleSubmitVoice() {
    await stopRecording();

    if (voice && isVoice === false) {
      const fd = new FormData();
      audioChunks.forEach((chunk: any, index: number) => {
        fd.append(`audioChunk${index}`, chunk);
      });

      fd.append("contentType", "Audio");
      fd.append("contactId", connectionId);

      const data = await sendAudio(fd);

      if (data) {
        setIsRecording(false);
      }
    }
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <div className={cn("flex  justify-center gap-5 px-2 lg:justify-end")}>
      <button onClick={cancelRecording}>
        <CancelIcon />
      </button>

      {voice ? (
        <audio controls controlsList="nodownload" className="h-10">
          {audioChunks.map((chunk: any, index: number) => (
            <source
              key={index}
              src={URL.createObjectURL(chunk)}
              type="audio/wav"
            />
          ))}
        </audio>
      ) : null}

      <div className="flex  gap-5 relative">
        {recording && !voice ? (
          <button onClick={stopRecording}>
            <IconsPause />
          </button>
        ) : (
          ""
        )}
        {recording && !voice ? (
          <div className="flex items-center relative bg-[#F1F3F4] w-[14rem] h-10 rounded-[12px] p-2 gap-5 overflow-hidden">
            <div
              className="bg-[#00A884] h-3 rounded-[12px] animate-grow"
              style={{
                width: `${lineWidth}px`,
              }}
            />
            <span className="top-[-25px] text-xs w-10 font-dmSans">
              {formatTime(recordingTime)}s
            </span>
          </div>
        ) : (
          ""
        )}
        <button
          className="bg-[#00A884] p-2 rounded-full flex items-center justify-center "
          onClick={handleSubmitVoice}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
