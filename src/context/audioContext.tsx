"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

type IAudioContext = {
  voice: boolean;
  isVoice: boolean;
  audioChunks: any;
  recording: boolean;
  setIsRecording: Dispatch<SetStateAction<boolean>>;
  startRecording: () => void;
  stopRecording: () => void;
  cancelRecording: () => void;
};

export const AudioContext = createContext<IAudioContext | null>(null);

export const useAudio = () => {
  const context = useContext(AudioContext);

  if (context === null) {
    throw new Error("User context must be used inside a provider");
  }
  return context;
};

export function AudioContextProvider({ children }: { children: ReactNode }) {
  const [voice, hasVoice] = useState(false);
  const [isVoice, setIsVoice] = useState(false);
  const [recording, setIsRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.addEventListener("dataavailable", (event) => {
          setAudioChunks([...audioChunks, event.data]);
        });

        mediaRecorder.start();
        setIsVoice(true);
      })
      .catch((error) => {});
  };

  const stopRecording = async () => {
    mediaRecorderRef?.current?.stop();
    setIsVoice(false);
    hasVoice(true);
  };

  const cancelRecording = () => {
    hasVoice(false);
    setIsVoice(false);
    setIsRecording(false);
    setAudioChunks([]);
  };

  return (
    <AudioContext.Provider
      value={{
        voice,
        audioChunks,
        isVoice,
        recording,
        setIsRecording,
        startRecording,
        stopRecording,
        cancelRecording,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}
