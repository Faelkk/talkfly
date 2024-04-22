import ModalPreview from "@/components/modal/previewModal/ModalPreview";
import { useDropdown } from "@/hooks/useDropdown";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useToggle } from "@/hooks/useToggle";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function DropdownContent() {
  const { handleToggle, isOpen } = useToggle();
  const { handleToggleDropdown, isDropdownOpen } = useDropdown();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [iconImg, setIcon] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const dropdownRef = useRef(null);

  useOutsideClick(dropdownRef, handleToggleDropdown);

  function handleFileInputClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  }

  async function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setFile(target.files[0]);

      setIcon(URL.createObjectURL(target.files[0]));

      handleToggle();
    }
  }

  return (
    <>
      <div className="">
        <Image
          src="/assets/add-circle.svg"
          width={64}
          height={64}
          className="w-6 h-6 cursor-pointer"
          alt="Icone enviar imagem ou video"
          onClick={handleToggleDropdown}
        />

        {isDropdownOpen ? (
          <div
            className="absolute right-0 top-5 bg-gray-50 shadow p-2 rounded w-48  flex mt-2 z-10"
            ref={dropdownRef}
          >
            <div className="flex  justify-center w-full items-center gap-2 hover:bg-gray-80 rounded">
              <input
                name="icon"
                id="icon"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onKeyDown={handleInputKeyDown}
                onChange={handleImgChange}
              />
              <Image
                src="/assets/photo.svg"
                width={64}
                className="h-5 w-5"
                height={64}
                alt=" clique para escolher uma Foto ou video para enviar"
              />
              <button
                className=" p-2 font-dmSans"
                onClick={handleFileInputClick}
              >
                Fotos e videos
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {isOpen ? (
        <ModalPreview
          onToggle={handleToggle}
          previewImg={iconImg}
          file={file}
        />
      ) : (
        ""
      )}
    </>
  );
}
