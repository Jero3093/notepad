"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import saveSession from "@/lib/saveSession";
import supabaseClient from "@/utils/supabase/client";
import { checkLogInInputs } from "@/utils/checkEmptyInput";
import Loader from "../Loader";
import { EmailInput, PasswordInput } from "../Input";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const emptyInputs = checkLogInInputs({ email, password });

      if (emptyInputs) return;

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (data.session) {
        const session = data?.session;
        await saveSession({ session });

        setTimeout(() => {
          router.replace("/");
        }, 1000);
      } else {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={(e) => handleLogIn(e)}
    >
      <div>
        <EmailInput
          className="w-full h-14 rounded-t-md border-amber-300 border-t-[3px] border-l-[3px] border-r-[3px] border-b-[2px] p-2 placeholder:text-xl outline-none"
          onChange={(t) => setEmail(t.target.value)}
        />
        <PasswordInput
          className="w-full h-14 rounded-bl-md border-amber-300 border-t-[2px] border-l-[3px] border-b-[3px] p-2 placeholder:text-xl outline-none"
          onChange={(t) => setPassword(t.target.value)}
        />
      </div>
      <p className="text-md text-zinc-500">
        Si no tienes una cuenta,{" "}
        <Link
          href={"/auth/signup"}
          className="font-bold text-[#183e50] cursor-pointer dark:text-[#579ab5]"
        >
          Crear Cuenta
        </Link>
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <input
          type="submit"
          value="Iniciar Sesión"
          className="w-full h-14 rounded-md grid place-items-center text-2xl text-white bg-[#183e50] cursor-pointer shadow-md"
        />
      )}
    </form>
  );
}

export default LogInForm;
