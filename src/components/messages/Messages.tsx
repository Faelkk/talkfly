import HeaderMessages from "../headerMessages/HeaderMessages";
import MessagesContent from "./MessagesContent";
import MessagesNoContent from "./MessagesNoContent";

export default async function Messages() {
  const hasContent = false;
  return (
    <>
      <div className="w-full md:w-[300px] flex flex-col h-full border-r border-gray-400">
        <HeaderMessages />

        <div className="flex-1 flex-col">
          <div className="flex items-center bg-gray-80 border-l border-[#073A4A] h-[4.5rem] relative border-y border-y-gray-400">
            <div className="flex gap-5">
              <div className="h-9 w-9 rounded-full bg-black ml-5"></div>
              <div>
                <h2 className="font-poppins font-semibold">Nome</h2>
                <p className="font-poppins font-normal text-[12px]">
                  sender: exemplo mensagem
                </p>
              </div>
            </div>
            <span className="ml-5 font-poppins text-gray-500 text-[14px] font-medium absolute right-2 top-2">
              08:27
            </span>
          </div>
          <div className="flex items-center h-[4.5rem] relative border-y border-y-gray-400">
            <div className="flex gap-5">
              <div className="h-9 w-9 rounded-full bg-black ml-5"></div>
              <div>
                <h2 className="font-poppins font-semibold">Nome</h2>
                <p className="font-poppins font-normal text-[12px]">
                  sender: exemplo mensagem
                </p>
              </div>
            </div>
            <span className="ml-5 font-poppins text-gray-500 text-[14px] font-medium absolute right-2 top-2">
              08:27
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {hasContent ? <MessagesContent /> : <MessagesNoContent />}
      </div>
    </>
  );
}
