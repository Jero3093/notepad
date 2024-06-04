"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Input({ className, type, name, placeholder, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  );
}

function SearchInput({ className, placeholder, mobile }) {
  return (
    <div
      className={`flex-row items-center ${mobile ? "flex" : "hidden md:flex"}`}
    >
      <div className="h-10 w-10 grid place-items-center border-t-2 border-l-2 border-b-2 border-amber-300 rounded-tl-full rounded-bl-full">
        <IoSearch className="text-amber-300 h-6 w-6" />
      </div>
      <input
        type="search"
        name="search"
        id="search"
        className={className}
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
    <div className="flex flex-row items-center">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Contraseña"
        className={className}
        onChange={onChange}
      />
      <div className="h-14 w-10 p-2 border-t-[2px] border-r-[3px] border-b-[3px] border-t-yellow-400 border-r-yellow-400 border-b-yellow-400  bg-transparent rounded-br-md flex">
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
    </div>
  );
}

export { Input, EmailInput, PasswordInput, SearchInput };
