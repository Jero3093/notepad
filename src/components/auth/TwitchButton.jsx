"use client";

import { toast } from "sonner";
import { FaTwitch } from "react-icons/fa";
import supabaseClient from "@/utils/supabase/client";
import Loader from "../Loader";

function TwitchButton({ isLoading }) {
  const handleSignInWithTwitch = async () => {
    try {
      const { error } = await supabaseClient.auth.signInWithOAuth({
        provider: "twitch",
        options: {
          redirectTo: process.env.NEXT_PUBLIC_SUPABASE_TWITCH_REDIRECT_URL,
        },
      });

      if (error) {
        toast.error(
          "Ocurrio un error al iniciar sesión con Twitch, intente luego"
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
          onClick={() => handleSignInWithTwitch()}
        >
          <FaTwitch />
          Iniciar Sesión con Twitch
        </button>
      )}
    </>
  );
}

export default TwitchButton;
