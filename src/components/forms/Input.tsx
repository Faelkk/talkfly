import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  error?: string;
  type: string;
};

export default async function Input({ error, type, ...props }: InputProps) {
  return (
    <div className="mb-4">
      <input
        className="border  border-gray-300  w-[18rem]  pp:w-[22rem] p:w-[28.75rem] rounded-sm text-black placeholder:text-black py-[10px] px-[10px] font-dmSans"
        type={type}
        id={props.name}
        {...props}
      />
      {error && <p className="">{error}</p>}
    </div>
  );
}
