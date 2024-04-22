import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/useOutsideClick";

import ErrorMessage from "@/components/helpers/error-message";
import editUser from "@/actions/user/editUser";
import { useUser } from "@/context/userContext";
import EditUserIcon from "./editUserIcon";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

interface EditUserModalProps {
  onToggle: () => void;
}

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <button
          className="bg-black text-gray-50 text-[18px] font-poppins font-medium p-2 rounded-[8px] w-[18.75rem]"
          disabled={pending}
        >
          Salvando...
        </button>
      ) : (
        <button className="bg-black text-gray-50 text-[18px] font-poppins font-medium p-2 rounded-[8px] w-[18.75rem]">
          Salvar
        </button>
      )}
    </>
  );
}

export default function EditUserModal({ onToggle }: EditUserModalProps) {
  const { user, setUser } = useUser();

  const modalRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [iconImg, setIcon] = useState(user?.icon);
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    username: user?.username || "",
    email: user?.email || "",
    icon: iconImg,
  });
  const [errorForm, setError] = useState("");

  async function handleImgChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setFile(target.files[0]);

      setIcon(URL.createObjectURL(target.files[0]));
    }
  }

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

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("username", formData.username);
    fd.append("email", formData.email);
    fd.append("icon", file as any);

    const { data, error, ok } = await editUser({
      formData: fd,
      user,
    });

    if (error) {
      setError(error);
    }

    if (data) {
      setUser(data);
    }

    if (ok) {
      onToggle();
      toast.success("Conta foi editada com sucesso!");
    } else {
      toast.error("Erro ao salvar as alterações!");
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  useOutsideClick(modalRef, onToggle);

  return (
    <aside className="fixed h-screen w-full  top-0 left-0  bg-[#111B21]/50 z-10 backdrop-blur-md">
      <form
        className="bg-gray-250 absolute  w-full md:w-[28.125rem] right-0 h-full  flex flex-col"
        ref={modalRef}
        onSubmit={handleFormSubmit}
      >
        <header className="flex mx-5 mt-5 items-center justify-center relative">
          <button
            onClick={onToggle}
            className="w-5 h-5 absolute left-0 p:left-3 md:left-0 top-3"
          >
            <Image
              src="/assets/arrow-back.svg"
              width={24}
              height={24}
              alt="Voltar"
            />
          </button>
          <h1 className="font-poppins text-[32px] font-semibold">Seu perfil</h1>
        </header>
        <div className="border border-gray-400 mt-5 mx-5"></div>

        <div className="mt-6 flex flex-col items-center justify-start mx-5 flex-1">
          <div
            className="mb-10 flex flex-col items-center justify-center"
            onClick={handleFileInputClick}
          >
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
            <EditUserIcon img={iconImg} />
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <span className="font-poppins text-[18px] "> Nome </span>
            <div className="flex items-center gap-5">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Nome"
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                className="border border-black p-2 rounded placeholder:text-black text-black font-dmSans"
              />
              <label htmlFor="name">
                <Image
                  src="/assets/edit-icon.svg"
                  width={30}
                  height={30}
                  className="w-5 h-5"
                  alt="Clique para editar  seu nome"
                />
              </label>
            </div>
            <div className="border border-gray-400 mt-5  w-full"></div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <span className="font-poppins text-[18px] "> Nome de usuario </span>
            <div className="flex items-center gap-5">
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                placeholder="Nome de usuario"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="border border-black p-2 rounded placeholder:text-black text-black font-dmSans"
              />
              <label htmlFor="username">
                <Image
                  src="/assets/edit-icon.svg"
                  width={30}
                  height={30}
                  className="w-5 h-5"
                  alt="Clique para editar  seu nome"
                />
              </label>
            </div>
            <div className="border border-gray-400 mt-5  w-full"></div>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <span className="font-poppins text-[18px] "> Email </span>
            <div className="flex items-center gap-5 ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                className="border border-black p-2 rounded placeholder:text-black text-black font-dmSans"
              />
              <label htmlFor="email">
                <Image
                  src="/assets/edit-icon.svg"
                  width={30}
                  height={30}
                  className="w-5 h-5"
                  alt="Clique para editar  seu email"
                />
              </label>
            </div>
            <div className="border border-gray-400 mt-5  w-full"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-20">
          <ErrorMessage error={errorForm} />
          <FormButton />
        </div>
      </form>
    </aside>
  );
}
