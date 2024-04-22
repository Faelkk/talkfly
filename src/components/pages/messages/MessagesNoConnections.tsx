import MessagesNoContent from "./MessagesNoContent";
import HeaderMessages from "@/components/HeaderMessages/HeaderMessages";
import NoConnections from "./NoConnection";

export default function MessagesNoConnections() {
  return (
    <>
      <div className=" w-full  md:w-[300px] flex flex-col h-full border-r border-gray-400">
        <HeaderMessages />

        <NoConnections />
      </div>
      <MessagesNoContent />
    </>
  );
}
