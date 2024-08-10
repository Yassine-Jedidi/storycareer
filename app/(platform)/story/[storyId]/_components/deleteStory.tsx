"use client";
import { Button } from "@/components/ui/button";
import { Story } from "@prisma/client";
import { Loader, Trash } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
interface Props {
  initialData: Story;
}

const DeleteStory = ({ initialData }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`/api/story/${initialData.id}`);
      if (response.status === 201) {
        toast("Toast is deleted", {
          className: "bg-rose-500 text-white",
        });
        router.push("/story");
        router.refresh();
      }
    } catch (error) {
      toast("Something went wrong", {
        className: "bg-rose-500 text-white",
      });
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Button
      disabled={isDeleting}
      variant={"destructive"}
      onClick={handleDelete}
    >
      {isDeleting ? (
        <Loader className="md:mr-2 h-5 w-5 animate-spin" />
      ) : (
        <Trash className="h-5 w-5 md:mr-2" />
      )}
      <span className="md:block hidden">Delete</span>
    </Button>
  );
};

export default DeleteStory;
