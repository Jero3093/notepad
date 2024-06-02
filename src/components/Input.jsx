"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Input({ className, type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
    />
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

export { Input, EmailInput, PasswordInput };
