"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import saveSession from "@/lib/saveSession";
import GithubButton from "./GithubButton";
import TwitchButton from "./TwitchButton";

function OAuthButtons({ signUp }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saveHashParams = async () => {
      const hash = window.location.hash;

      if (hash === "") return;

      setIsLoading(true);

      const hashParams = hash.substring(1);

      const paramsArray = hashParams.split("&");

      const params = {};
      paramsArray.forEach((param) => {
        const [key, value] = param.split("=");
        params[key] = decodeURIComponent(value);
      });

      const session = {
        access_token: params.access_token,
        refresh_token: params.refresh_token,
      };

      const res = await saveSession({ session });

      if (res.ok) {
        setIsLoading(false);
        router.refresh();
        router.replace("/");
      } else {
        setIsLoading(false);
        toast.error("Ocurrio un error al autenticar su cuenta, intente luego");
      }
    };

    saveHashParams();
  }, [router]);

  return (
    <aside className="w-full flex flex-col items-center gap-4 text-black">
      <GithubButton isLoading={isLoading} signUp={signUp} />
      <TwitchButton isLoading={isLoading} signUp={signUp} />
    </aside>
  );
}

export default OAuthButtons;
