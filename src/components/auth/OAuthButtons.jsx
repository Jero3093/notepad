"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { FaTwitch } from "react-icons/fa";
import useHashParams from "@/hooks/useHashParams";
import GithubButton from "./GithubButton";
import saveSession from "@/lib/saveSession";

function OAuthButtons() {
  const hashParams = useHashParams();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saveHashParams = async () => {
      if (hashParams !== null) {
        setIsLoading(true);

        const session = {
          access_token: hashParams.access_token,
          refresh_token: hashParams.refresh_token,
        };

        const res = await saveSession({ session });

        if (res.ok) {
          setIsLoading(false);
          router.replace("/");
        } else {
          setIsLoading(false);
          toast.error(
            "Ocurrio un error al autenticar su cuenta, intente luego"
          );
        }
      }
    };

    saveHashParams();
  }, []);

  return (
    <aside className="w-full flex flex-col items-center gap-4 text-black">
      <GithubButton isLoading={isLoading} />
      <button className="bg-sky-300 w-full h-14 rounded-md shadow-sm flex flex-row gap-4 items-center justify-center text-xl">
        <FaTwitch />
        Iniciar Sesión con Twitch
      </button>
    </aside>
  );
}

export default OAuthButtons;
