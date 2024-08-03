"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { MdLogout } from "react-icons/md";
import supabaseClient from "@/utils/supabase/client";
import deleteSession from "@/lib/deleteSession";
import Loader from "../Loader";

function LogOutButton() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      const sessionDeleted = await deleteSession();

      if (sessionDeleted.status === 200) {
        const { error: supabaseError } = await supabaseClient.auth.signOut();

        if (supabaseError) return console.log(error.message);

        toast.success("Sesión cerrada correctamente");

        setTimeout(() => {
          router.replace("/auth/signin");
        }, 4000);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className="w-96 h-12 rounded-md flex flex-row justify-between items-center py-6 px-4 bg-transparent border-[3px] text-lg border-red-500 text-red-500"
      onClick={() => handleSignOut()}
      title="Cerrar Sesión"
    >
      {isLoading && (
        <div className="self-center">
          <Loader />
        </div>
      )}
      {!isLoading && "Cerrar Sesión"}
      {!isLoading && <MdLogout className="w-5 h-5" />}
    </button>
  );
}

export default LogOutButton;
