"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
  saveId: string;
}

const RemoveSave = ({ saveId }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const router = useRouter();

  const handleRemoveSave = async () => {
    setIsRemoving(true);
    try {
      const response = await axios.delete(`/api/save/${saveId}`);
      if (response.status === 201) {
        router.refresh();
        toast("Save is removed ");
      }
    } catch (error) {
      toast("Something went wrong", {
        className: "bg-rose-500 text-white",
      });
    } finally {
      setIsRemoving(false);
    }
  };
  return (
    <Button
      disabled={isRemoving}
      variant={"destructive"}
      onClick={handleRemoveSave}
    >
      {isRemoving ? <Loader className="animate-spin" /> : <Trash />}
    </Button>
  );
};

export default RemoveSave;
