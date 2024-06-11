"use client";

import Link from "next/link";
import { useState } from "react";
import saveSession from "@/lib/saveSession";
import supabaseClient from "@/utils/supabase/client";
import Loader from "../Loader";
import { EmailInput, PasswordInput, Input } from "../Input";
import { checkSignUpInputs } from "@/utils/checkEmptyInput";
import { useRouter } from "next/navigation";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const emptyInputs = checkSignUpInputs({
        username,
        email,
        password,
      });

      if (emptyInputs) return;

      const { data: authData, error: authError } =
        await supabaseClient.auth.signUp({
          email: email,
          password: password,
        });

      if (authData.session) {
        const session = authData?.session;

        await saveSession({ session });

        const { error: userError } = await supabaseClient.from("users").insert([
          {
            username: username,
            email: email,
          },
        ]);

        if (!userError) {
          setTimeout(() => {
            router.replace("/");
          }, 1000);
        } else {
          console.log(userError.details);
        }
      } else {
        console.log(authError.message);
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
      onSubmit={(e) => handleSignUp(e)}
    >
      <div>
        <Input
          name={"username"}
          type={"text"}
          placeholder={"Nombre de Usuario"}
          onChange={(t) => setUsername(t.target.value)}
          className="w-full h-14 rounded-t-md border-zinc-700 dark:border-zinc-300 border-t-[3px] border-l-[3px] border-r-[3px] border-b-[2px] p-2 placeholder:text-xl outline-none"
        />
        <EmailInput
          className="w-full h-14 border-zinc-700 dark:border-zinc-300 border-t-[2px] border-l-[3px] border-r-[3px] border-b-[2px] p-2 placeholder:text-xl outline-none"
          onChange={(t) => setEmail(t.target.value)}
        />
        <PasswordInput
          className="w-full h-14 rounded-bl-md border-zinc-700 dark:border-zinc-300 p-2 placeholder:text-xl outline-none"
          onChange={(t) => setPassword(t.target.value)}
        />
      </div>
      <p className="text-md text-zinc-500">
        Si ya tienes una cuenta,{" "}
        <Link
          href={"/"}
          className="font-semibold text-sky-800 cursor-pointer dark:text-sky-500"
        >
          Iniciar Sesión
        </Link>
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <input
          type="submit"
          value="Crear Cuenta"
          className="w-full h-14 rounded-md grid place-items-center text-2xl text-white bg-[#183e50] cursor-pointer shadow-md"
        />
      )}
    </form>
  );
}

export default SignUpForm;
