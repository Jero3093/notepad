"use client";

import { toast } from "sonner";
import { FaGithub } from "react-icons/fa";
import supabaseClient from "@/utils/supabase/client";
import Loader from "../Loader";

function GithubButton({ isLoading, signUp }) {
  const handleSignInWithGithub = async () => {
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "github",
      });

      if (error) {
        toast.error(
          "Ocurrio un error al iniciar sesión con Github, intente luego"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="bg-sky-300 w-full h-14 rounded-md shadow-sm grid place-items-center">
          <Loader authButtons={true} />
        </div>
      ) : (
        <button
          className="bg-sky-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl"
          onClick={() => handleSignInWithGithub()}
        >
          <FaGithub />
          {signUp ? "Crear Cuenta con Github" : "Iniciar Sesión con Github"}
        </button>
      )}
    </>
  );
}

export default GithubButton;
