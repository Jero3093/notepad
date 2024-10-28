"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../Input";
import { checkUserSettingsInputs } from "@/utils/checkEmptyInput";
import { toast } from "sonner";
import supabaseClient from "@/utils/supabase/client";
import Loader from "../Loader";

function UserSettingsForm({ user }) {
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState(user?.username);

  const router = useRouter();

  const showToast = (e) => {
    e.preventDefault();

    toast.message("Seguro de guardar los cambios?", {
      action: {
        label: "Guardar",
        onClick: () => handleSubmit(),
      },
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const checkFields = checkUserSettingsInputs({
        username,
      });

      if (checkFields)
        return toast.warning("No puedes dejar ningun campo vacío.");

      if (user?.username === username)
        return toast.error(
          "Para guardar los cambios debes modificar los valores de los campos."
        );

      const { error: dbError } = await supabaseClient
        .from("users")
        .update({
          username: username,
        })
        .eq("id", user?.id);

      if (dbError) return toast.error("Ocurrio un error, vuelva a intentar.");

      toast.success("Cambios guardados correctamente.");

      setTimeout(() => {
        router.replace("/settings");
      }, 1500);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => showToast(e)}>
      <label className="flex flex-col gap-6 pb-5 border-b border-zinc-400 dark:border-zinc-800">
        <h3 className="text-2xl">Nombre de Usuario</h3>
        <Input
          name={"username"}
          value={username}
          placeholder={"Usuario"}
          type={"text"}
          className={
            "w-full max-w-2xl h-4 border-2 border-sky-400 py-6 px-3 rounded-md"
          }
          onChange={(t) => setUsername(t.target.value)}
        />
      </label>
      {isLoading ? (
        <div className="self-start ml-20">
          <Loader />
        </div>
      ) : (
        <input
          type="submit"
          value="Guardar Cambios"
          className="w-60 h-12 bg-sky-300 text-black text-lg font-semibold rounded-md cursor-pointer hover:scale-105 transition-all"
          title="Guardar todos los cambios"
        />
      )}
    </form>
  );
}

export default UserSettingsForm;
