"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Input({ className, type, name, placeholder, onChange, value }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}

function SearchInput({ placeholder }) {
  return (
    <div
      className={`flex flex-row items-center border-2 border-zinc-700 dark:border-zinc-200 pl-2 rounded-md`}
    >
      <IoSearch className="text-zinc-700 dark:text-zinc-200 h-6 w-6" />
      <input
        type="search"
        name="search"
        id="search"
        className="w-full p-2 h-10 outline-none rounded-r-md"
        placeholder={placeholder}
      />
    </div>
  );
}

function EmailInput({ className, onChange }) {
  return (
    <input
      type="email"
      name="email"
      placeholder="Correo Electrónico"
      className={className}
      onChange={onChange}
    />
  );
}

function PasswordInput({ className, onChange }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-row items-center border-t-[2px] border-l-[3px] border-r-[3px] border-b-[3px] rounded-b-md overflow-hidden border-zinc-700 dark:border-zinc-300 pr-2">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Contraseña"
        className={className}
        onChange={onChange}
      />
      {showPassword ? (
        <FaEyeSlash
          className="self-center cursor-pointer dark:text-white"
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <FaEye
          className="self-center cursor-pointer dark:text-white"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
}

export { Input, EmailInput, PasswordInput, SearchInput };
